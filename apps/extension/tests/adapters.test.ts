import { describe, it, expect } from 'vitest';
import { youtubeAdapter } from '@/src/adapters/youtube';
import { redditAdapter } from '@/src/adapters/reddit';
import { xAdapter } from '@/src/adapters/x';
import { buildDuckDuckGoSearchUrl, isGoogleSearchPage } from '@/src/adapters/google';
import { detectSearchEngine, extractDomainFromUrl, filterSearchResults } from '@/src/filter/search-filter';
import { applyLocalRules } from '@/utils/classifier';

describe('Site Adapters', () => {
  describe('YouTube Adapter', () => {
    it('should match YouTube URLs', () => {
      const urls = [
        'https://www.youtube.com/watch?v=123',
        'https://youtube.com/channel/abc',
        'http://youtu.be/xyz',
      ];
      urls.forEach(url => {
        expect(youtubeAdapter.matches.some(regex => regex.test(url))).toBe(true);
      });
    });

    it('should not match other URLs', () => {
      const urls = [
        'https://www.google.com',
        'https://reddit.com',
        'https://x.com',
      ];
      urls.forEach(url => {
        expect(youtubeAdapter.matches.some(regex => regex.test(url))).toBe(false);
      });
    });
  });

  describe('Reddit Adapter', () => {
    it('should match Reddit URLs', () => {
      const urls = [
        'https://www.reddit.com/r/reactjs',
        'https://reddit.com/user/dracon',
        'http://old.reddit.com/r/programming',
      ];
      urls.forEach(url => {
        expect(redditAdapter.matches.some(regex => regex.test(url))).toBe(true);
      });
    });
  });

  describe('YouTube Adapter DOM', () => {
    it('should extract data from a mock video card', () => {
      // Create mock DOM structure
      document.body.innerHTML = `
        <div id="video-1" class="ytd-rich-item-renderer">
          <div id="video-title">Amazing Science Experiment</div>
          <div id="text" class="ytd-channel-name">Science Channel</div>
          <div id="metadata-line">
            <yt-formatted-string>1M views</yt-formatted-string>
            <yt-formatted-string>2 days ago</yt-formatted-string>
          </div>
        </div>
      `;

      const element = document.getElementById('video-1')!;
      const data = youtubeAdapter.extractData(element);

      expect(data.title).toBe('Amazing Science Experiment');
      expect(data.sourceName).toBe('Science Channel');
      expect(data.metadata).toContain('1M views');
      expect(data.metadata).toContain('2 days ago');
      expect(data.site).toBe('youtube');
    });

    it('should apply hide decision', () => {
      document.body.innerHTML = '<div id="video-1"></div>';
      const element = document.getElementById('video-1')!;
      
      youtubeAdapter.applyDecision(element, {
        decision: 'hide',
        confidence: 1,
        reason: 'test'
      });

      expect(element.style.display).toBe('none');
      expect(element.getAttribute('data-calmweb-processed')).toBe('hidden');
    });

    it('should apply blur decision', () => {
      document.body.innerHTML = '<div id="video-1"></div>';
      const element = document.getElementById('video-1')!;
      
      youtubeAdapter.applyDecision(element, {
        decision: 'blur',
        confidence: 1,
        reason: 'test'
      });

      expect(element.classList.contains('calmweb-blurred')).toBe(true);
      expect(element.getAttribute('data-calmweb-processed')).toBe('blur');
    });

    it('should apply neutralize decision', () => {
      document.body.innerHTML = `
        <div id="video-1">
          <div id="video-title">CLICK ME NOW!!!</div>
        </div>
      `;
      const element = document.getElementById('video-1')!;
      
      youtubeAdapter.applyDecision(element, {
        decision: 'neutralize',
        confidence: 1,
        reason: 'test',
        neutralizedTitle: 'Neutral Scientific Content'
      });

      const titleEl = element.querySelector('#video-title') as HTMLElement;
      expect(titleEl.innerText).toBe('Neutral Scientific Content');
      expect(element.classList.contains('calmweb-neutralized')).toBe(true);
    });
  });

  describe('Full Filtering Pipeline', () => {
    it('should filter clickbait YouTube video with default presets', () => {
      // Use proper custom element names (YouTube uses custom elements like <ytd-rich-item-renderer>)
      document.body.innerHTML = `
        <ytd-rich-item-renderer id="video-1">
          <div id="video-title">You Won't Believe What Happens Next!!!</div>
          <div id="text" class="ytd-channel-name">Some Clickbait Channel</div>
          <div id="metadata-line">
            <yt-formatted-string>1M views</yt-formatted-string>
          </div>
        </ytd-rich-item-renderer>
        <ytd-rich-item-renderer id="video-2">
          <div id="video-title">How to Build a Birdhouse</div>
          <div id="text" class="ytd-channel-name">DIY Channel</div>
          <div id="metadata-line">
            <yt-formatted-string>500K views</yt-formatted-string>
          </div>
        </ytd-rich-item-renderer>
      `;

      // Default settings with clickbait preset enabled (like our defaults)
      const defaultRules = {
        blocklistChannels: [],
        blocklistKeywords: [],
        allowlistChannels: [],
        allowlistKeywords: [],
        presets: { politics: false, ragebait: true, spoilers: false, clickbait: true },
      };

      // Discover and process
      const units = youtubeAdapter.discoverUnits(document);
      expect(units.length).toBe(2);

      // Classify first video (clickbait)
      const data1 = youtubeAdapter.extractData(units[0]);
      const result1 = applyLocalRules(data1, defaultRules);

      // Should be collapsed/hidden due to clickbait preset
      expect(result1).not.toBeNull();
      expect(['collapse', 'hide', 'blur']).toContain(result1!.decision);

      // Classify second video (not clickbait)
      const data2 = youtubeAdapter.extractData(units[1]);
      const result2 = applyLocalRules(data2, defaultRules);

      // Should be shown (no match)
      expect(result2).toBeNull();
    });

    it('should filter ragebait YouTube video with default presets', () => {
      document.body.innerHTML = `
        <ytd-rich-item-renderer id="video-1">
          <div id="video-title">People Are Outraged Over This - The Backlash Is Insane</div>
          <div id="text" class="ytd-channel-name">Rage Channel</div>
        </ytd-rich-item-renderer>
      `;

      const defaultRules = {
        blocklistChannels: [],
        blocklistKeywords: [],
        allowlistChannels: [],
        allowlistKeywords: [],
        presets: { politics: false, ragebait: true, spoilers: false, clickbait: true },
      };

      const units = youtubeAdapter.discoverUnits(document);
      expect(units.length).toBe(1);

      const data = youtubeAdapter.extractData(units[0]);
      const result = applyLocalRules(data, defaultRules);

      // Should be collapsed due to ragebait
      expect(result).not.toBeNull();
      expect(result!.decision).toBe('collapse');
      expect(result!.reason).toBe('preset_ragebait');
    });
  });

  describe('Reddit Adapter DOM', () => {
    it('should extract data from a mock reddit post', () => {
      document.body.innerHTML = `
        <div id="post-1" class="thing">
          <div class="title">
            <a href="/r/politics/comments/123">Outrageous Political Take</a>
          </div>
          <p class="tagline">
            <span class="subreddit">
              <a href="/r/politics">r/politics</a>
            </span>
          </p>
        </div>
      `;

      const element = document.getElementById('post-1')!;
      const data = redditAdapter.extractData(element);

      expect(data.title).toBe('Outrageous Political Take');
      expect(data.sourceName).toBe('r/politics');
      expect(data.site).toBe('reddit');
    });
  });

  describe('X Adapter DOM', () => {
    it('should extract data from a mock tweet', () => {
      document.body.innerHTML = `
        <article id="tweet-1">
          <div data-testid="tweetText">This is a very angry tweet about nothing.</div>
          <div data-testid="User-Name">
            <span>Elon Musk</span>
          </div>
        </article>
      `;

      const element = document.getElementById('tweet-1')!;
      const data = xAdapter.extractData(element);

      expect(data.title).toBe('This is a very angry tweet about nothing.');
      expect(data.sourceName).toBe('Elon Musk');
      expect(data.site).toBe('x');
    });
  });

  describe('Google Search Redirect', () => {
    it('should detect Google search pages', () => {
      expect(isGoogleSearchPage('https://www.google.com/search?q=duckduckgo+bbs+news')).toBe(true);
      expect(isGoogleSearchPage('https://www.google.com/webhp?hl=en')).toBe(true);
      expect(isGoogleSearchPage('https://www.google.com/')).toBe(true);
      expect(isGoogleSearchPage('https://en.wikipedia.org/wiki/Main_Page')).toBe(false);
    });

    it('should build a DuckDuckGo URL from a Google search query', () => {
      const redirected = buildDuckDuckGoSearchUrl('https://www.google.com/search?q=duckduckgo+bbs+news&oq=duckduckgo+bbs+news');

      expect(redirected).toBe('https://duckduckgo.com/?q=duckduckgo+bbs+news');
    });

    it('should build the DuckDuckGo home URL when no query is present', () => {
      const redirected = buildDuckDuckGoSearchUrl('https://www.google.com/');

      expect(redirected).toBe('https://duckduckgo.com/');
    });
  });

  describe('DuckDuckGo Search Filtering', () => {
    it('should detect DuckDuckGo search pages', () => {
      expect(detectSearchEngine('https://duckduckgo.com/?q=example')).toBe('duckduckgo');
    });

    it('should unwrap DuckDuckGo redirect links before extracting domains', () => {
      const domain = extractDomainFromUrl('https://duckduckgo.com/l/?uddg=https%3A%2F%2Fexample.com%2Farticle');

      expect(domain).toBe('example.com');
    });

    it('should handle DuckDuckGo HTML version result structure', () => {
      document.body.innerHTML = `
        <div id="links" class="results">
          <div class="result results_links results_links_deep web-result">
            <div class="links_main links_deep result__body">
              <h2 class="result__title">
                <a rel="nofollow" class="result__a" href="//duckduckgo.com/l/?uddg=https%3A%2F%2Fwww.reddit.com%2Fr%2Ftest">Blocked Reddit result</a>
              </h2>
            </div>
          </div>
          <div class="result results_links results_links_deep web-result">
            <div class="links_main links_deep result__body">
              <h2 class="result__title">
                <a rel="nofollow" class="result__a" href="//duckduckgo.com/l/?uddg=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTest">Allowed Wikipedia result</a>
              </h2>
            </div>
          </div>
        </div>
      `;

      const result = filterSearchResults({
        enabled: true,
        hideBlocked: true,
        showCategoryBadge: false,
        blockedCategories: [],
        customBlocklist: ['reddit.com'],
        customAllowlist: [],
        useExternalBlocklists: false,
      }, 'duckduckgo');

      expect(result.total).toBe(2);
      expect(result.filtered).toBe(1);
      expect(document.querySelector('[data-calmweb-filtered]')).not.toBeNull();

      const results = document.querySelectorAll('.result') as NodeListOf<HTMLElement>;
      expect(results[0].style.display).toBe('none');
      expect(results[1].style.display).not.toBe('none');
    });

    it('should handle DuckDuckGo React version result structure', () => {
      document.body.innerHTML = `
        <ol class="react-results--main">
          <li>
            <article data-testid="result">
              <a data-testid="result-title-a" href="https://duckduckgo.com/l/?uddg=https%3A%2F%2Fwww.reddit.com%2Fr%2Ftest">
                Blocked Reddit result
              </a>
            </article>
          </li>
          <li>
            <article data-testid="result">
              <a data-testid="result-title-a" href="https://duckduckgo.com/l/?uddg=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTest">
                Allowed Wikipedia result
              </a>
            </article>
          </li>
        </ol>
      `;

      const result = filterSearchResults({
        enabled: true,
        hideBlocked: true,
        showCategoryBadge: false,
        blockedCategories: [],
        customBlocklist: ['reddit.com'],
        customAllowlist: [],
        useExternalBlocklists: false,
      }, 'duckduckgo');

      expect(result.total).toBe(2);
      expect(result.filtered).toBe(1);

      const results = document.querySelectorAll('article[data-testid="result"]') as NodeListOf<HTMLElement>;
      expect(results[0].style.display).toBe('none');
      expect(results[1].style.display).not.toBe('none');
    });
  });
});
