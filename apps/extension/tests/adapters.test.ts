import { describe, it, expect } from 'vitest';
import { youtubeAdapter } from '@/src/adapters/youtube';
import { redditAdapter } from '@/src/adapters/reddit';
import { xAdapter } from '@/src/adapters/x';

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
            <span class="yt-formatted-string">1M views</span>
            <span class="yt-formatted-string">2 days ago</span>
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
});
