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

  describe('X Adapter', () => {
    it('should match X/Twitter URLs', () => {
      const urls = [
        'https://x.com/home',
        'https://twitter.com/elonmusk',
        'https://www.x.com/search',
      ];
      urls.forEach(url => {
        expect(xAdapter.matches.some(regex => regex.test(url))).toBe(true);
      });
    });
  });
});
