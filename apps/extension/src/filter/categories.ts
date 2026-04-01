/**
 * Site Categories and Blocklists
 *
 * Pre-built lists for common filtering needs.
 * Users can enable/disable categories or add custom rules.
 */

export type SiteCategory = 
  | 'social_media'
  | 'content_farms'
  | 'gambling'
  | 'adult'
  | 'piracy'
  | 'malware'
  | 'spam'
  | 'fake_news'
  | 'productivity'
  | 'shopping'
  | 'gaming'
  | 'streaming'
  | 'news'
  | 'custom';

export interface CategoryInfo {
  id: SiteCategory;
  name: string;
  description: string;
  icon: string;
  domains: string[];
}

export const SITE_CATEGORIES: CategoryInfo[] = [
  {
    id: 'content_farms',
    name: 'Content Farms',
    description: 'Algorithmic feeds, ads mixed with content, engagement traps, streaming ads',
    icon: '🚫',
    domains: [
      // Search engines (biased, show what benefits them)
      'google.com', 'www.google.com', 'news.google.com', 'maps.google.com',
      'bing.com', 'www.bing.com',
      'yahoo.com', 'search.yahoo.com',
      'baidu.com', 'sogou.com', 'yandex.com',
      // Video platforms with algorithmic recommendations
      'youtube.com', 'youtu.be',
      // Streaming with BAKED-IN ads (can't skip, extra manipulative)
      'twitch.tv', 'open.spotify.com', 'spotify.com',
      'soundcloud.com',
      // Social news/feeds with ads
      'reddit.com', 'old.reddit.com', 'new.reddit.com',
      // News sites with engagement metrics
      'bbc.com', 'bbc.co.uk', 'news.bbc.co.uk',
      'cnn.com', 'edition.cnn.com',
      'foxnews.com',
      'dailymail.co.uk', 'mailonline.co.uk',
      'thesun.co.uk', 'metro.co.uk',
      'express.co.uk',
      'washingtonpost.com', 'nytimes.com', 'wsj.com',
      'theguardian.com',
      // Social platforms
      'facebook.com', 'instagram.com', 'twitter.com', 'x.com',
      'tiktok.com', 'snapchat.com',
      'threads.net', 'bsky.app',
      // App stores (curated, platform-controlled)
      'play.google.com', 'apps.apple.com', 'apps.apple.com',
      // Clickbait sites
      'buzzfeed.com', 'upworthy.com', 'viralnova.com', 'diply.com',
      'clickhole.com',
      // Engagement bait
      'quora.com', 'medium.com', 'substack.com',
    ],
  },
  {
    id: 'social_media',
    name: 'Social Media',
    description: 'Facebook, Twitter, Instagram, TikTok, etc.',
    icon: '👥',
    domains: [
      'facebook.com', 'instagram.com', 'twitter.com', 'x.com',
      'tiktok.com', 'snapchat.com', 'pinterest.com', 'reddit.com',
      'linkedin.com', 'tumblr.com', 'mastodon.social', 'threads.net',
      'bsky.app', 'discord.com', 'discord.gg',
    ],
  },
  {
    id: 'gambling',
    name: 'Gambling',
    description: 'Online casinos, betting, lottery sites',
    icon: '🎰',
    domains: [
      'pokerstars.com', '888.com', 'bet365.com', 'betway.com',
      'unibet.com', 'casino.com', 'slotomania.com', 'zynga.com',
      'draftkings.com', 'fanduel.com', 'betmgm.com', 'caesars.com',
    ],
  },
  {
    id: 'adult',
    name: 'Adult Content',
    description: 'Pornography and adult material',
    icon: '🔞',
    domains: [
      'pornhub.com', 'xvideos.com', 'xnxx.com', 'xhamster.com',
      'redtube.com', 'youporn.com', 'onlyfans.com', 'chaturbate.com',
    ],
  },
  {
    id: 'piracy',
    name: 'Piracy',
    description: 'Torrent, streaming, download sites',
    icon: '🏴‍☠️',
    domains: [
      'thepiratebay.org', '1337x.to', 'rarbg.to', 'yts.mx',
      'fmovies.to', '123movies.com', 'putlocker.to', 'soap2day.to',
      'kisscartoon.li', 'gogoanime.io', '9anime.to',
    ],
  },
  {
    id: 'malware',
    name: 'Malware',
    description: 'Known malicious and phishing sites',
    icon: '🦠',
    domains: [
      // These are examples - real malware lists are maintained by security vendors
      // We'd integrate with URLs like: https://malware-filter.gitlab.io/malware-filter/
    ],
  },
  {
    id: 'spam',
    name: 'Spam & Clickbait',
    description: 'Low-quality, spammy content farms',
    icon: '📧',
    domains: [
      'buzzfeed.com', 'dailymail.co.uk', 'thesun.co.uk', 'metro.co.uk',
      'express.co.uk', 'washingtonexaminer.com', 'breitbart.com',
      'naturalnews.com', 'infowars.com', 'beforeitsnews.com',
    ],
  },
  {
    id: 'fake_news',
    name: 'Fake News',
    description: 'Known disinformation sources',
    icon: '📰',
    domains: [
      'naturalnews.com', 'infowars.com', 'beforeitsnews.com',
      'worldtruth.tv', 'yournewswire.com', 'prntly.com',
    ],
  },
  {
    id: 'productivity',
    name: 'Productivity Blockers',
    description: 'Distractions during work hours',
    icon: '⏰',
    domains: [
      'youtube.com', 'netflix.com', 'twitch.tv', 'hulu.com',
      'disneyplus.com', 'hbo.com', 'primevideo.com', 'crunchyroll.com',
    ],
  },
  {
    id: 'shopping',
    name: 'Shopping',
    description: 'E-commerce sites',
    icon: '🛒',
    domains: [
      'amazon.com', 'ebay.com', 'aliexpress.com', 'wish.com',
      'etsy.com', 'walmart.com', 'target.com', 'bestbuy.com',
      'etsy.com', 'mercari.com', 'poshmark.com',
    ],
  },
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'Gaming sites and platforms',
    icon: '🎮',
    domains: [
      'steam.com', 'epicgames.com', 'gog.com', 'origin.com',
      'battlenet.com', 'roblox.com', 'minecraft.net', 'riotgames.com',
    ],
  },
  {
    id: 'streaming',
    name: 'Streaming',
    description: 'Video and music streaming',
    icon: '📺',
    domains: [
      'netflix.com', 'youtube.com', 'twitch.tv', 'spotify.com',
      'soundcloud.com', 'vimeo.com', 'dailymotion.com',
    ],
  },
  {
    id: 'news',
    name: 'News Sites',
    description: 'General news outlets',
    icon: '📰',
    domains: [
      'cnn.com', 'foxnews.com', 'msnbc.com', 'bbc.com', 'nytimes.com',
      'washingtonpost.com', 'theguardian.com', 'wsj.com', 'reuters.com',
      'apnews.com', 'npr.org', 'bloomberg.com', 'forbes.com',
    ],
  },
];

// Quick lookup map
export const DOMAIN_TO_CATEGORY: Map<string, SiteCategory> = new Map(
  SITE_CATEGORIES.flatMap(cat => 
    cat.domains.map(domain => [domain, cat.id] as [string, SiteCategory])
  )
);

// Get category for a domain (supports subdomains)
export function getCategoryForDomain(domain: string): SiteCategory | null {
  // Exact match
  if (DOMAIN_TO_CATEGORY.has(domain)) {
    return DOMAIN_TO_CATEGORY.get(domain) || null;
  }
  
  // Subdomain match (e.g., www.facebook.com -> facebook.com)
  const parts = domain.split('.');
  for (let i = 1; i < parts.length; i++) {
    const parentDomain = parts.slice(i).join('.');
    if (DOMAIN_TO_CATEGORY.has(parentDomain)) {
      return DOMAIN_TO_CATEGORY.get(parentDomain) || null;
    }
  }
  
  return null;
}

// Check if domain matches any category in a list
export function isDomainInCategories(domain: string, categories: SiteCategory[]): boolean {
  const category = getCategoryForDomain(domain);
  return category !== null && categories.includes(category);
}
