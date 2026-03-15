/**
 * Article Extractor Test Suite
 * Tests extraction against various real-world HTML page structures
 */

import { GlobalRegistrator } from 'happy-dom';
import { extractArticle, type ExtractedArticle } from '../src/renderer/extractor/article';

await GlobalRegistrator.register();

interface TestCase {
  name: string;
  category: string;
  url: string;
  html: string;
  expected: {
    title?: string | RegExp;
    author?: string | RegExp;
    hasContent: boolean;
    minContentLength: number;
    minImages: number;
    maxImages: number;
  };
}

function createDoc(html: string): Document {
  const parser = new DOMParser();
  return parser.parseFromString(html, 'text/html');
}

function evaluateExtraction(result: ExtractedArticle, expected: TestCase['expected']): { passed: boolean; issues: string[] } {
  const issues: string[] = [];
  
  if (expected.title) {
    if (typeof expected.title === 'string') {
      if (!result.title.includes(expected.title)) {
        issues.push(`Title mismatch: expected to contain "${expected.title}", got "${result.title}"`);
      }
    } else {
      if (!expected.title.test(result.title)) {
        issues.push(`Title mismatch: expected pattern ${expected.title}, got "${result.title}"`);
      }
    }
  }
  
  if (expected.author) {
    if (!result.author) {
      issues.push(`Missing author: expected ${expected.author}`);
    } else if (typeof expected.author === 'string') {
      if (!result.author.includes(expected.author)) {
        issues.push(`Author mismatch: expected to contain "${expected.author}", got "${result.author}"`);
      }
    } else {
      if (!expected.author.test(result.author)) {
        issues.push(`Author mismatch: expected pattern ${expected.author}, got "${result.author}"`);
      }
    }
  }
  
  if (!result.content || result.content.length < expected.minContentLength) {
    issues.push(`Content too short: ${result.content.length} chars (min: ${expected.minContentLength})`);
  }
  
  if (expected.hasContent && !result.contentHtml.innerHTML.trim()) {
    issues.push('Expected content but got empty HTML');
  }
  
  if (result.images.length < expected.minImages) {
    issues.push(`Not enough images: ${result.images.length} (min: ${expected.minImages})`);
  }
  
  if (result.images.length > expected.maxImages) {
    issues.push(`Too many images: ${result.images.length} (max: ${expected.maxImages})`);
  }
  
  return { passed: issues.length === 0, issues };
}

export const testCases: TestCase[] = [
  // NEWS SITES
  {
    name: 'New York Times Style Article',
    category: 'news',
    url: 'https://nytimes.com/article/test',
    html: `<!DOCTYPE html>
<html>
<head>
  <meta property="og:title" content="Breaking News: Major Policy Change Announced">
  <meta name="author" content="Jane Reporter">
  <meta property="article:published_time" content="2024-01-15T10:30:00Z">
</head>
<body>
  <header><nav>Navigation</nav></header>
  <main>
    <article>
      <h1>Breaking News: Major Policy Change Announced</h1>
      <p class="byline">By Jane Reporter</p>
      <time datetime="2024-01-15">January 15, 2024</time>
      <div class="post-content">
        <p>In a significant development that could reshape the landscape of domestic policy, officials announced sweeping changes to existing regulations on Monday.</p>
        <p>The new framework, which has been under development for several months, aims to address longstanding concerns raised by stakeholders across the political spectrum.</p>
        <p>Industry experts have weighed in with mixed reactions, with some praising the move while others express reservations about implementation timelines.</p>
        <figure>
          <img src="https://example.com/policy-meeting.jpg" alt="Officials meet to discuss policy changes">
          <figcaption>Officials gathered to announce the new policy framework.</figcaption>
        </figure>
        <p>The announcement comes after months of deliberation and stakeholder consultations, according to sources familiar with the process.</p>
      </div>
    </article>
  </main>
  <aside class="sidebar">Related Articles</aside>
  <footer>Copyright 2024</footer>
</body>
</html>`,
    expected: {
      title: 'Breaking News: Major Policy Change Announced',
      author: 'Jane Reporter',
      hasContent: true,
      minContentLength: 300,
      minImages: 1,
      maxImages: 5,
    },
  },
  {
    name: 'BBC News Style Article',
    category: 'news',
    url: 'https://bbc.com/news/article',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Scientists make breakthrough discovery - BBC News</title>
  <meta property="og:title" content="Scientists make breakthrough discovery">
</head>
<body>
  <header>BBC News</header>
  <main role="main">
    <article>
      <h1>Scientists make breakthrough discovery</h1>
      <div data-component="byline">By Dr. Sarah Chen</div>
      <time datetime="2024-02-20">20 February 2024</time>
      <div class="article-body">
        <p>Researchers at a leading university have announced what they describe as a significant breakthrough in their field of study.</p>
        <p>The discovery, published in a peer-reviewed journal, could have far-reaching implications for future research and applications.</p>
        <div class="image-and-copyright">
          <img src="https://example.com/lab.jpg" alt="Laboratory equipment">
        </div>
        <p>The team spent several years developing the methodology that led to these findings.</p>
        <h2>Implications for the future</h2>
        <p>Experts suggest this could open new avenues for investigation in related disciplines.</p>
      </div>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: 'Scientists make breakthrough discovery',
      hasContent: true,
      minContentLength: 200,
      minImages: 0,
      maxImages: 3,
    },
  },
  {
    name: 'CNN Style Article',
    category: 'news',
    url: 'https://cnn.com/article/test',
    html: `<!DOCTYPE html>
<html>
<head>
  <meta property="og:title" content="Global Summit Addresses Climate Concerns">
  <meta name="author" content="International Desk">
</head>
<body>
  <header>CNN</header>
  <main>
    <article class="article-content">
      <h1 class="headline">Global Summit Addresses Climate Concerns</h1>
      <div class="metadata">
        <span class="byline">By International Desk</span>
        <span class="timestamp">Updated 2:30 PM ET</span>
      </div>
      <section class="article__content">
        <p>World leaders gathered this week for an unprecedented summit focused on environmental challenges facing the planet.</p>
        <p>The discussions centered on collaborative approaches to addressing shared concerns, with representatives from over 100 nations in attendance.</p>
        <div class="image-container">
          <img src="https://example.com/summit.jpg" alt="World leaders at summit">
        </div>
        <p>Key outcomes included commitments to ongoing dialogue and information sharing among participating countries.</p>
      </section>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: 'Global Summit Addresses Climate Concerns',
      hasContent: true,
      minContentLength: 200,
      minImages: 0,
      maxImages: 3,
    },
  },
  
  // BLOG POSTS
  {
    name: 'Medium Style Blog Post',
    category: 'blog',
    url: 'https://medium.com/@author/post-slug',
    html: `<!DOCTYPE html>
<html>
<head>
  <meta property="og:title" content="Understanding Modern Web Development Practices">
  <meta name="author" content="Alex Developer">
</head>
<body>
  <header><nav>Medium</nav></header>
  <main>
    <article>
      <h1>Understanding Modern Web Development Practices</h1>
      <div class="author-info">
        <a rel="author">Alex Developer</a>
        <span class="reading-time">8 min read</span>
      </div>
      <time datetime="2024-03-01">Mar 1, 2024</time>
      <section class="post-content">
        <p>Web development has evolved significantly over the past decade, with new tools and methodologies emerging regularly.</p>
        <p>In this comprehensive guide, we'll explore the current landscape and discuss best practices for building modern applications.</p>
        <figure>
          <img src="https://example.com/code.jpg" alt="Code on screen">
          <figcaption>Modern development environments offer powerful tools.</figcaption>
        </figure>
        <h2>Getting Started</h2>
        <p>Before diving into specific technologies, it's important to understand the fundamental principles that guide effective development.</p>
        <pre><code>const greeting = "Hello, World!";
console.log(greeting);</code></pre>
        <p>Understanding these basics will provide a solid foundation for more advanced concepts.</p>
        <h2>Best Practices</h2>
        <p>Following established patterns and conventions helps ensure code quality and maintainability over time.</p>
      </section>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: 'Understanding Modern Web Development Practices',
      author: 'Alex Developer',
      hasContent: true,
      minContentLength: 400,
      minImages: 0,
      maxImages: 3,
    },
  },
  {
    name: 'Substack Style Newsletter',
    category: 'blog',
    url: 'https://newsletter.substack.com/p/test',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Weekly Roundup: Technology Trends - The Newsletter</title>
  <meta property="og:title" content="Weekly Roundup: Technology Trends">
</head>
<body>
  <main>
    <article class="post">
      <h1 class="post-title">Weekly Roundup: Technology Trends</h1>
      <div class="meta">
        <span class="author">Tech Writer</span>
        <span class="date">March 10, 2024</span>
      </div>
      <div class="body">
        <p>Welcome to this week's roundup of notable developments in the technology sector.</p>
        <p>This week saw several interesting announcements from major players in the industry.</p>
        <h3>AI and Machine Learning</h3>
        <p>The field continues to advance rapidly, with new applications emerging across various sectors.</p>
        <h3>Hardware Developments</h3>
        <p>Several companies announced new products aimed at both consumer and enterprise markets.</p>
        <p>As always, thank you for reading. See you next week!</p>
      </div>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: 'Weekly Roundup: Technology Trends',
      hasContent: true,
      minContentLength: 200,
      minImages: 0,
      maxImages: 2,
    },
  },
  {
    name: 'Personal Blog (WordPress)',
    category: 'blog',
    url: 'https://personalblog.com/my-thoughts',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>My Thoughts on Productivity - Personal Blog</title>
</head>
<body>
  <header>
    <h1 class="site-title">Personal Blog</h1>
    <nav>Home | About | Contact</nav>
  </header>
  <main id="content">
    <article class="post">
      <h1 class="entry-title">My Thoughts on Productivity</h1>
      <div class="entry-meta">
        <span class="author vcard">John Blogger</span>
        <span class="posted-on">March 5, 2024</span>
      </div>
      <div class="entry-content">
        <p>Over the years, I've developed a few strategies that help me stay focused and productive throughout the workday.</p>
        <p>It's not about working harder, but rather about working smarter and finding the approaches that work best for your particular situation.</p>
        <img src="https://example.com/desk.jpg" alt="My workspace">
        <p>My desk setup plays a big role in my productivity. Having a clean, organized space helps me think clearly.</p>
        <h2>Key Principles</h2>
        <p>Here are some principles I try to follow:</p>
        <ul>
          <li>Start with the most important task</li>
          <li>Take regular breaks</li>
          <li>Minimize distractions</li>
        </ul>
      </div>
    </article>
  </main>
  <aside class="sidebar">Recent Posts</aside>
  <footer>Copyright 2024</footer>
</body>
</html>`,
    expected: {
      title: 'My Thoughts on Productivity',
      author: 'John Blogger',
      hasContent: true,
      minContentLength: 300,
      minImages: 0,
      maxImages: 3,
    },
  },

  // DOCUMENTATION
  {
    name: 'MDN Style Documentation',
    category: 'documentation',
    url: 'https://developer.mozilla.org/docs/web/api',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Array.prototype.map() - JavaScript | MDN</title>
  <meta property="og:title" content="Array.prototype.map()">
</head>
<body>
  <header>MDN Web Docs</header>
  <nav class="sidebar">API Reference</nav>
  <main>
    <article>
      <h1>Array.prototype.map()</h1>
      <p class="seoSummary">The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.</p>
      <div class="content">
        <h2 id="syntax">Syntax</h2>
        <pre><code>map(callbackFn)
map(callbackFn, thisArg)</code></pre>
        <h2 id="parameters">Parameters</h2>
        <dl>
          <dt>callbackFn</dt>
          <dd>A function to execute for each element in the array.</dd>
        </dl>
        <h2 id="return_value">Return value</h2>
        <p>A new array with each element being the result of the callback function.</p>
        <h2 id="description">Description</h2>
        <p>The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.</p>
        <h2 id="examples">Examples</h2>
        <pre><code>const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));</code></pre>
      </div>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: 'Array.prototype.map()',
      hasContent: true,
      minContentLength: 300,
      minImages: 0,
      maxImages: 2,
    },
  },
  {
    name: 'GitHub README',
    category: 'documentation',
    url: 'https://github.com/user/repo',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>user/repo: A modern framework</title>
</head>
<body>
  <header>GitHub</header>
  <main>
    <article class="markdown-body">
      <h1>Modern Framework</h1>
      <p>A lightweight, modern framework for building applications.</p>
      <h2>Installation</h2>
      <pre><code>npm install modern-framework</code></pre>
      <h2>Quick Start</h2>
      <pre><code>import { createApp } from 'modern-framework';

createApp({
  template: '&lt;div&gt;Hello World&lt;/div&gt;'
}).mount('#app');</code></pre>
      <h2>Features</h2>
      <ul>
        <li>Lightweight core</li>
        <li>TypeScript support</li>
        <li>Plugin architecture</li>
      </ul>
      <h2>Documentation</h2>
      <p>Full documentation is available at our website.</p>
      <h2>Contributing</h2>
      <p>We welcome contributions! Please see our contributing guide.</p>
      <h2>License</h2>
      <p>MIT</p>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: /Modern Framework/i,
      hasContent: true,
      minContentLength: 200,
      minImages: 0,
      maxImages: 2,
    },
  },
  {
    name: 'Technical Tutorial',
    category: 'documentation',
    url: 'https://tutorialsite.com/how-to-build-api',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>How to Build a REST API - Complete Guide</title>
  <meta name="author" content="Dev Instructor">
</head>
<body>
  <header>Tutorial Site</header>
  <main>
    <article class="tutorial">
      <h1 class="entry-title">How to Build a REST API</h1>
      <div class="meta">
        <span class="author">By Dev Instructor</span>
        <span class="date">February 28, 2024</span>
        <span class="read-time">15 min read</span>
      </div>
      <div class="tutorial-content">
        <p>In this comprehensive tutorial, we'll walk through the process of building a RESTful API from scratch.</p>
        <h2>Prerequisites</h2>
        <p>Before we begin, make sure you have the following installed:</p>
        <ul>
          <li>Node.js (v18 or higher)</li>
          <li>A code editor</li>
          <li>Postman or similar API testing tool</li>
        </ul>
        <h2>Setting Up the Project</h2>
        <pre><code>mkdir my-api
cd my-api
npm init -y</code></pre>
        <p>This creates a new directory and initializes a Node.js project.</p>
        <h2>Creating the Server</h2>
        <pre><code>const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello API' });
});

app.listen(3000);</code></pre>
        <p>We now have a basic server running on port 3000.</p>
        <h2>Adding Routes</h2>
        <p>Let's add some CRUD routes for managing resources.</p>
      </div>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: 'How to Build a REST API',
      author: 'Dev Instructor',
      hasContent: true,
      minContentLength: 500,
      minImages: 0,
      maxImages: 2,
    },
  },

  // FORUMS / COMMUNITY
  {
    name: 'Stack Overflow Question',
    category: 'forum',
    url: 'https://stackoverflow.com/questions/12345',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>javascript - How to filter an array of objects? - Stack Overflow</title>
  <meta property="og:title" content="How to filter an array of objects?">
</head>
<body>
  <header>Stack Overflow</header>
  <main>
    <div class="question">
      <h1 itemprop="name">How to filter an array of objects?</h1>
      <div class="question-content">
        <p>I have an array of objects and I want to filter based on a property value.</p>
        <pre><code>const items = [
  { id: 1, name: 'Apple', category: 'fruit' },
  { id: 2, name: 'Carrot', category: 'vegetable' },
  { id: 3, name: 'Banana', category: 'fruit' }
];</code></pre>
        <p>How can I get only the items where category is 'fruit'?</p>
      </div>
      <div class="tags">javascript arrays filter</div>
    </div>
    <div class="answers">
      <div class="answer">
        <div class="answer-content">
          <p>You can use the <code>filter()</code> method:</p>
          <pre><code>const fruits = items.filter(item => item.category === 'fruit');</code></pre>
          <p>This returns a new array containing only the items that match the condition.</p>
        </div>
      </div>
    </div>
  </main>
</body>
</html>`,
    expected: {
      title: /filter an array/i,
      hasContent: true,
      minContentLength: 200,
      minImages: 0,
      maxImages: 2,
    },
  },
  {
    name: 'Reddit Post',
    category: 'forum',
    url: 'https://reddit.com/r/programming/comments/abc',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>What's your favorite VS Code extension? : programming</title>
</head>
<body>
  <header>Reddit</header>
  <main>
    <article class="post">
      <h1 class="post-title">What's your favorite VS Code extension?</h1>
      <div class="post-content">
        <p>I'm looking to improve my workflow and would love to hear about extensions that others find useful.</p>
        <p>I currently use Prettier and ESLint, but I'm sure there are other great ones I'm missing.</p>
        <p>What extensions do you consider essential for your development setup?</p>
      </div>
      <div class="comments">
        <div class="comment">
          <p>I really like GitLens for understanding code history and blame information.</p>
        </div>
        <div class="comment">
          <p>Auto Rename Tag is a lifesaver for HTML/JSX editing.</p>
        </div>
      </div>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: /VS Code extension/i,
      hasContent: true,
      minContentLength: 100,
      minImages: 0,
      maxImages: 2,
    },
  },
  {
    name: 'Hacker News Discussion',
    category: 'forum',
    url: 'https://news.ycombinator.com/item?id=12345',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Show HN: I built a tool for developers | Hacker News</title>
</head>
<body>
  <table class="itemlist">
    <tr class="athing">
      <td class="title"><a href="https://example.com">Show HN: I built a tool for developers</a></td>
    </tr>
    <tr>
      <td class="subtext">
        <span class="score">150 points</span>
        <a class="hnuser">developer123</a>
        <span class="age">3 hours ago</span>
      </td>
    </tr>
  </table>
  <table class="comment-tree">
    <tr>
      <td class="default">
        <div class="comment">
          <span class="commtext">I spent the last few months building this tool to help developers be more productive. It started as a side project and evolved into something I use daily.</span>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`,
    expected: {
      title: /Show HN|built a tool/i,
      hasContent: true,
      minContentLength: 50,
      minImages: 0,
      maxImages: 2,
    },
  },

  // ACADEMIC / RESEARCH
  {
    name: 'Academic Paper Abstract',
    category: 'academic',
    url: 'https://journal.org/paper/123',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Machine Learning Approaches in Natural Language Processing</title>
  <meta name="citation_title" content="Machine Learning Approaches in Natural Language Processing">
  <meta name="citation_author" content="Dr. Alan Researcher">
  <meta name="citation_author" content="Dr. Betty Scientist">
</head>
<body>
  <header>Journal of Computer Science</header>
  <main>
    <article>
      <h1 itemprop="headline">Machine Learning Approaches in Natural Language Processing</h1>
      <div class="authors">
        <span itemprop="author">Dr. Alan Researcher</span>,
        <span itemprop="author">Dr. Betty Scientist</span>
      </div>
      <div class="abstract">
        <h2>Abstract</h2>
        <p>This paper presents a comprehensive analysis of machine learning techniques applied to natural language processing tasks. We examine various architectures and their performance across multiple benchmarks.</p>
        <p>Our experiments demonstrate significant improvements over baseline methods, with particular gains in semantic understanding and context-aware processing.</p>
      </div>
      <div class="article-body">
        <h2>1. Introduction</h2>
        <p>Natural language processing has seen remarkable progress in recent years, largely driven by advances in machine learning methodologies.</p>
        <p>This research contributes to the growing body of work exploring neural network architectures for language understanding.</p>
        <h2>2. Related Work</h2>
        <p>Previous studies have explored various aspects of machine learning for NLP, including attention mechanisms and transformer architectures.</p>
        <h2>3. Methodology</h2>
        <p>We conducted experiments using multiple datasets and evaluation metrics to assess the effectiveness of our approach.</p>
      </div>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: 'Machine Learning Approaches in Natural Language Processing',
      author: 'Dr. Alan Researcher',
      hasContent: true,
      minContentLength: 400,
      minImages: 0,
      maxImages: 2,
    },
  },

  // PHOTO / VISUAL CONTENT
  {
    name: 'Photo Essay',
    category: 'visual',
    url: 'https://photosite.com/essay/mountain-journey',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>A Journey Through the Mountains - Photo Essay</title>
  <meta property="og:title" content="A Journey Through the Mountains">
</head>
<body>
  <header>Photo Essays</header>
  <main>
    <article class="photo-essay">
      <h1 class="essay-title">A Journey Through the Mountains</h1>
      <p class="subtitle">A visual exploration of alpine landscapes</p>
      <div class="essay-content">
        <figure>
          <img src="https://example.com/mountain1.jpg" alt="Sunrise over mountain peaks">
          <figcaption>Dawn breaks over the eastern ridge, casting long shadows across the valley below.</figcaption>
        </figure>
        <p>Our journey began before sunrise, with the first rays of light painting the mountain peaks in shades of gold and pink.</p>
        <figure>
          <img src="https://example.com/mountain2.jpg" alt="Forest path">
          <figcaption>The trail wound through ancient forests.</figcaption>
        </figure>
        <p>The path led us through dense forests, where the only sounds were the rustle of leaves and distant bird calls.</p>
        <figure>
          <img src="https://example.com/mountain3.jpg" alt="Alpine meadow">
          <figcaption>Wildflowers dotted the high meadows.</figcaption>
        </figure>
        <p>Above the tree line, alpine meadows stretched toward the horizon, carpeted in wildflowers.</p>
        <figure>
          <img src="https://example.com/mountain4.jpg" alt="Summit view">
          <figcaption>From the summit, the world spread out below.</figcaption>
        </figure>
        <p>The final ascent rewarded us with panoramic views extending for miles in every direction.</p>
      </div>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: 'A Journey Through the Mountains',
      hasContent: true,
      minContentLength: 200,
      minImages: 3,
      maxImages: 10,
    },
  },
  {
    name: 'Recipe Blog',
    category: 'visual',
    url: 'https://recipeblog.com/homemade-pasta',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>How to Make Homemade Pasta from Scratch</title>
  <meta name="author" content="Chef Maria">
</head>
<body>
  <header>Culinary Adventures</header>
  <main>
    <article class="recipe">
      <h1 class="recipe-title">How to Make Homemade Pasta from Scratch</h1>
      <div class="recipe-meta">
        <span class="author">By Chef Maria</span>
        <span class="date">March 12, 2024</span>
        <span class="time">Prep: 30 min | Cook: 5 min</span>
      </div>
      <figure class="recipe-image">
        <img src="https://example.com/pasta.jpg" alt="Fresh homemade pasta">
        <figcaption>Fresh pasta ready for cooking</figcaption>
      </figure>
      <div class="recipe-content">
        <p>There's something deeply satisfying about making pasta from scratch. The process is meditative and the results are incomparable.</p>
        <h2>Ingredients</h2>
        <ul>
          <li>2 cups all-purpose flour</li>
          <li>3 large eggs</li>
          <li>1 tablespoon olive oil</li>
          <li>1/2 teaspoon salt</li>
        </ul>
        <h2>Instructions</h2>
        <ol>
          <li>Mound the flour on a clean work surface and make a well in the center.</li>
          <li>Crack the eggs into the well and add olive oil and salt.</li>
          <li>Gradually incorporate flour from the edges into the eggs.</li>
          <li>Knead the dough for 8-10 minutes until smooth and elastic.</li>
          <li>Rest the dough for 30 minutes before rolling.</li>
        </ol>
      </div>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: 'How to Make Homemade Pasta from Scratch',
      author: 'Chef Maria',
      hasContent: true,
      minContentLength: 300,
      minImages: 0,
      maxImages: 3,
    },
  },

  // CHALLENGING CASES
  {
    name: 'Minimal HTML (No Semantic Elements)',
    category: 'challenging',
    url: 'https://minimal-site.com/page',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Simple Page</title>
</head>
<body>
  <div>
    <div>
      <div>
        <font size="5"><b>Welcome to My Page</b></font>
      </div>
      <div>
        <p>This is a simple page with minimal structure. It doesn't use semantic HTML elements like article or main.</p>
        <p>Despite the lack of proper structure, there is content here that should be extracted.</p>
        <p>The extractor should fall back to finding the content with the most text.</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    expected: {
      title: 'Welcome to My Page',
      hasContent: true,
      minContentLength: 150,
      minImages: 0,
      maxImages: 2,
    },
  },
  {
    name: 'Heavy Ads/Navigation',
    category: 'challenging',
    url: 'https://ad-heavy-site.com/article',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Interesting Article - Ad Site</title>
</head>
<body>
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/news">News</a>
      <a href="/sports">Sports</a>
    </nav>
  </header>
  <aside class="sidebar">
    <div class="ad">ADVERTISEMENT</div>
    <div class="related">Related Stories</div>
  </aside>
  <div class="ad-container">Sponsored Content</div>
  <main>
    <article>
      <h1>Interesting Article</h1>
      <div class="article-content">
        <p>This is the actual content of the article that should be extracted. It's surrounded by advertisements and navigation elements.</p>
        <p>The extractor should strip out the ads and navigation, leaving only the main content.</p>
        <p class="ad-inline">This looks like a paragraph but is actually an ad placement.</p>
        <p>Continuing with the real content, this paragraph has actual information.</p>
        <div class="newsletter-signup">Subscribe to our newsletter!</div>
        <p>The final paragraph of the article contains the conclusion of the story.</p>
      </div>
    </article>
  </main>
  <div class="popup">Sign up now!</div>
  <footer>
    <div class="ad">More Ads</div>
  </footer>
</body>
</html>`,
    expected: {
      title: 'Interesting Article',
      hasContent: true,
      minContentLength: 150,
      minImages: 0,
      maxImages: 2,
    },
  },
  {
    name: 'Infinite Scroll Page',
    category: 'challenging',
    url: 'https://infinite-scroll-site.com/feed',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Content Feed</title>
</head>
<body>
  <header>Feed Site</header>
  <main>
    <div class="feed">
      <article class="feed-item">
        <h2>First Article in Feed</h2>
        <p>This is the first article visible in the feed. It's a summary that links to the full article.</p>
      </article>
      <article class="feed-item">
        <h2>Second Article in Feed</h2>
        <p>Another article summary appears here in the infinite scroll feed.</p>
      </article>
      <article class="feed-item">
        <h2>Third Article in Feed</h2>
        <p>The third article in the sequence continues the pattern.</p>
      </article>
    </div>
    <div class="load-more">Load More</div>
  </main>
</body>
</html>`,
    expected: {
      hasContent: true,
      minContentLength: 100,
      minImages: 0,
      maxImages: 2,
    },
  },
  {
    name: 'JavaScript-Rendered Page (No Content)',
    category: 'challenging',
    url: 'https://spa-site.com/article',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>SPA Article</title>
</head>
<body>
  <div id="app"></div>
  <script>/* Content loaded via JavaScript */</script>
</body>
</html>`,
    expected: {
      title: 'SPA Article',
      hasContent: false,
      minContentLength: 0,
      minImages: 0,
      maxImages: 0,
    },
  },
  {
    name: 'Non-English Content',
    category: 'challenging',
    url: 'https://french-site.com/article',
    html: `<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Découverte scientifique importante</title>
  <meta property="og:title" content="Découverte scientifique importante">
</head>
<body>
  <header>Journal Français</header>
  <main>
    <article>
      <h1>Découverte scientifique importante</h1>
      <div class="article-body">
        <p>Une équipe de chercheurs a annoncé une découverte majeure qui pourrait transformer notre compréhension du domaine.</p>
        <p>Les résultats, publiés dans une revue scientifique renommée, ont attiré l'attention de la communauté internationale.</p>
        <p>Cette avancée ouvre de nouvelles perspectives pour les recherches futures dans ce domaine d'étude.</p>
      </div>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: 'Découverte scientifique importante',
      hasContent: true,
      minContentLength: 200,
      minImages: 0,
      maxImages: 2,
    },
  },

  // E-COMMERCE / PRODUCT
  {
    name: 'Product Description Page',
    category: 'ecommerce',
    url: 'https://store.com/product/widget',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Premium Widget - Best Quality | Store</title>
  <meta property="og:title" content="Premium Widget">
</head>
<body>
  <header>Online Store</header>
  <main>
    <div class="product">
      <h1 class="product-title">Premium Widget</h1>
      <div class="product-price">$29.99</div>
      <div class="product-gallery">
        <img src="https://example.com/widget-main.jpg" alt="Premium Widget main view">
        <img src="https://example.com/widget-side.jpg" alt="Premium Widget side view">
      </div>
      <div class="product-description">
        <p>Introducing our Premium Widget, designed for maximum efficiency and durability. This high-quality product is perfect for everyday use.</p>
        <h3>Features</h3>
        <ul>
          <li>Made from premium materials</li>
          <li>Easy to use design</li>
          <li>1 year warranty included</li>
        </ul>
        <h3>Specifications</h3>
        <p>Dimensions: 10x5x3 inches. Weight: 2 lbs. Material: Aluminum alloy.</p>
      </div>
    </div>
  </main>
</body>
</html>`,
    expected: {
      title: 'Premium Widget',
      hasContent: true,
      minContentLength: 100,
      minImages: 0,
      maxImages: 5,
    },
  },

  // WIKIPEDIA STYLE
  {
    name: 'Wikipedia Article',
    category: 'encyclopedia',
    url: 'https://en.wikipedia.org/wiki/Example',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Example - Wikipedia</title>
</head>
<body>
  <header>Wikipedia</header>
  <nav class="toc">Contents</nav>
  <main id="content">
    <h1 id="firstHeading">Example</h1>
    <div id="bodyContent">
      <p><b>Example</b> is a term used to illustrate a concept or represent a category. This article provides an overview of the subject.</p>
      <div class="toc">hide</div>
      <h2>History</h2>
      <p>The concept of examples has been used throughout history to teach and explain ideas. Early examples can be traced back to ancient civilizations.</p>
      <h2>Usage</h2>
      <p>Examples are commonly used in education, documentation, and communication to clarify abstract concepts.</p>
      <h3>In education</h3>
      <p>Teachers frequently use examples to help students understand new material and apply concepts to real-world situations.</p>
      <h2>See also</h2>
      <ul>
        <li>Sample</li>
        <li>Illustration</li>
        <li>Demonstration</li>
      </ul>
      <h2>References</h2>
      <ol class="references">
        <li>Smith, John. "Examples in Teaching". Journal of Education.</li>
      </ol>
    </div>
  </main>
</body>
</html>`,
    expected: {
      title: 'Example',
      hasContent: true,
      minContentLength: 300,
      minImages: 0,
      maxImages: 2,
    },
  },

  // NEWSLETTER / EMAIL ARCHIVE
  {
    name: 'Newsletter Archive',
    category: 'newsletter',
    url: 'https://newsletter.com/archive/issue-42',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Issue #42: Weekly Insights - Newsletter Name</title>
</head>
<body>
  <table width="600" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <h1 style="font-size: 24px;">Issue #42: Weekly Insights</h1>
        <p style="color: #666;">March 14, 2024</p>
      </td>
    </tr>
    <tr>
      <td>
        <h2>Top Story</h2>
        <p>This week's most important development involves significant changes in the industry landscape. Several key players announced strategic shifts that could reshape the market.</p>
        <p>Analysts predict these changes will have ripple effects throughout the sector over the coming months.</p>
      </td>
    </tr>
    <tr>
      <td>
        <h2>Quick Updates</h2>
        <ul>
          <li>Company A announced a new product launch scheduled for Q2.</li>
          <li>Industry conference dates were confirmed for September.</li>
          <li>New regulations take effect next month.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="#">Unsubscribe</a> | <a href="#">View in browser</a></p>
      </td>
    </tr>
  </table>
</body>
</html>`,
    expected: {
      title: /Issue #42|Weekly Insights/i,
      hasContent: true,
      minContentLength: 200,
      minImages: 0,
      maxImages: 2,
    },
  },

  // ADDITIONAL VARIATIONS
  
  // News variations
  {
    name: 'Washington Post Style',
    category: 'news',
    url: 'https://washingtonpost.com/politics/article',
    html: `<!DOCTYPE html>
<html>
<head>
  <meta property="og:title" content="Congress Debates New Infrastructure Bill">
  <meta name="author" content="Political Correspondent">
</head>
<body>
  <main>
    <article data-qa="article-body">
      <h1 itemprop="headline">Congress Debates New Infrastructure Bill</h1>
      <div data-qa="byline">By Political Correspondent</div>
      <time datetime="2024-03-10">March 10, 2024</time>
      <div class="article-body">
        <p>Lawmakers gathered this week to discuss the proposed infrastructure legislation, which has been the subject of intense negotiations.</p>
        <p>The bill includes provisions for road repairs, bridge maintenance, and public transit improvements across the country.</p>
        <p>Both parties have expressed willingness to find common ground, though disagreements remain over funding mechanisms.</p>
      </div>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: 'Congress Debates New Infrastructure Bill',
      hasContent: true,
      minContentLength: 200,
      minImages: 0,
      maxImages: 2,
    },
  },
  {
    name: 'Reuters Style',
    category: 'news',
    url: 'https://reuters.com/business/article',
    html: `<!DOCTYPE html>
<html>
<head>
  <meta property="og:title" content="Global markets show mixed results amid uncertainty">
</head>
<body>
  <main>
    <article>
      <h1>Global markets show mixed results amid uncertainty</h1>
      <div class="author">Business Reporter</div>
      <div class="date-line">March 8, 2024</div>
      <div class="article-body">
        <p>World stock markets displayed varied performance on Friday as investors assessed economic data and central bank signals.</p>
        <p>European indices closed higher while Asian markets experienced modest declines in overnight trading.</p>
        <p>Analysts point to upcoming policy decisions as a key factor influencing market sentiment.</p>
      </div>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: 'Global markets show mixed results amid uncertainty',
      hasContent: true,
      minContentLength: 200,
      minImages: 0,
      maxImages: 2,
    },
  },
  
  // Blog variations
  {
    name: 'Dev.to Style',
    category: 'blog',
    url: 'https://dev.to/user/post',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Understanding Async/Await in JavaScript - DEV Community</title>
</head>
<body>
  <main>
    <article class="crayons-article">
      <header class="crayons-article__header">
        <h1>Understanding Async/Await in JavaScript</h1>
        <div class="profile">
          <a href="/user">Dev Author</a>
          <span class="date">Posted on Mar 5</span>
        </div>
      </header>
      <div class="crayons-article__body">
        <p>JavaScript's async/await syntax has made asynchronous programming much more intuitive. Let's explore how it works.</p>
        <p>Before async/await, we had to chain .then() calls or nest callbacks, which could lead to complex code structures.</p>
        <div class="highlight">
          <pre><code>async function fetchData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
}</code></pre>
        </div>
        <p>The async keyword marks a function as asynchronous, and await pauses execution until a Promise resolves.</p>
        <h2>Error Handling</h2>
        <p>Use try/catch blocks to handle errors in async functions:</p>
        <pre><code>try {
  const data = await fetchData();
} catch (error) {
  console.error(error);
}</code></pre>
      </div>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: 'Understanding Async/Await in JavaScript',
      hasContent: true,
      minContentLength: 300,
      minImages: 0,
      maxImages: 2,
    },
  },
  {
    name: 'Ghost Blog Style',
    category: 'blog',
    url: 'https://ghostblog.com/welcome',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Welcome to My Blog</title>
  <meta name="author" content="Ghost User">
</head>
<body class="home-template">
  <main class="site-main">
    <article class="post">
      <header class="post-header">
        <h1 class="post-title">Welcome to My Blog</h1>
        <div class="post-meta">
          <span class="post-author">Ghost User</span>
          <time class="post-date" datetime="2024-02-28">Feb 28, 2024</time>
        </div>
      </header>
      <section class="post-content">
        <p>Thank you for visiting my new blog. I'm excited to share my thoughts and experiences with you.</p>
        <p>This blog will cover topics related to technology, creativity, and personal development.</p>
        <h2>What to Expect</h2>
        <p>I plan to post regularly about my journey, sharing insights and lessons learned along the way.</p>
        <blockquote>
          <p>The best way to predict the future is to create it.</p>
        </blockquote>
        <p>I hope you'll join me on this adventure. Feel free to reach out with questions or suggestions.</p>
      </section>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: 'Welcome to My Blog',
      author: 'Ghost User',
      hasContent: true,
      minContentLength: 200,
      minImages: 0,
      maxImages: 2,
    },
  },
  
  // Documentation variations
  {
    name: 'ReadTheDocs Style',
    category: 'documentation',
    url: 'https://docs.project.io/getting-started',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Getting Started - Project Documentation</title>
</head>
<body>
  <div class="wy-nav-content">
    <div class="rst-content">
      <main role="main">
        <div class="document">
          <section id="getting-started">
            <h1>Getting Started</h1>
            <p>This guide will help you set up and run your first project in just a few minutes.</p>
            <div class="contents">
              <ul class="simple">
                <li>Installation</li>
                <li>Configuration</li>
                <li>First Steps</li>
              </ul>
            </div>
            <h2 id="installation">Installation</h2>
            <p>Install the package using your preferred package manager:</p>
            <div class="highlight">
              <pre><code>pip install project</code></pre>
            </div>
            <h2 id="configuration">Configuration</h2>
            <p>Create a configuration file in your project directory:</p>
            <pre><code># config.yaml
version: 1
settings:
  debug: true
  output: ./dist</code></pre>
            <h2 id="first-steps">First Steps</h2>
            <p>Run the init command to create a new project:</p>
            <pre><code>project init my-app</code></pre>
          </section>
        </div>
      </main>
    </div>
  </div>
</body>
</html>`,
    expected: {
      title: 'Getting Started',
      hasContent: true,
      minContentLength: 200,
      minImages: 0,
      maxImages: 2,
    },
  },
  {
    name: 'Vue.js Docs Style',
    category: 'documentation',
    url: 'https://vuejs.org/guide/introduction',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Introduction | Vue.js</title>
</head>
<body>
  <main class="content">
    <h1>Introduction</h1>
    <p class="tagline">Vue.js - The Progressive JavaScript Framework</p>
    <p>Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript.</p>
    <h2 id="what-is-vue">What is Vue?</h2>
    <p>Vue provides a declarative and component-based programming model that helps you efficiently develop user interfaces.</p>
    <div class="options-api">
      <pre><code>import { createApp, ref } from 'vue'

createApp({
  setup() {
    const message = ref('Hello Vue!')
    return { message }
  }
}).mount('#app')</code></pre>
    </div>
    <h2 id="features">Features</h2>
    <ul>
      <li>Declarative Rendering</li>
      <li>Reactivity</li>
      <li>Component-based</li>
    </ul>
  </main>
</body>
</html>`,
    expected: {
      title: 'Introduction',
      hasContent: true,
      minContentLength: 200,
      minImages: 0,
      maxImages: 2,
    },
  },
  
  // More challenging cases
  {
    name: 'Lazy Loaded Images',
    category: 'challenging',
    url: 'https://lazy-site.com/article',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Article with Lazy Images</title>
</head>
<body>
  <main>
    <article>
      <h1>Article with Lazy Images</h1>
      <div class="content">
        <p>This article contains images that are loaded lazily using data-src attributes.</p>
        <img data-src="https://example.com/lazy1.jpg" alt="Lazy loaded image 1" class="lazy">
        <p>The first image above will be loaded when it enters the viewport.</p>
        <img data-src="https://example.com/lazy2.jpg" alt="Lazy loaded image 2" class="lazy">
        <p>Lazy loading improves initial page load performance by deferring image loading.</p>
      </div>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: 'Article with Lazy Images',
      hasContent: true,
      minContentLength: 150,
      minImages: 2,
      maxImages: 5,
    },
  },
  {
    name: 'Nested Article Elements',
    category: 'challenging',
    url: 'https://nested-site.com/page',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Complex Nested Structure</title>
</head>
<body>
  <article id="main-article">
    <header>
      <h1>Main Article Title</h1>
      <p class="subtitle">A complex structure with nested elements</p>
    </header>
    <div class="article-body">
      <p>This is the main article content with proper structure.</p>
      <article class="embedded-tweet">
        <p>This is an embedded tweet that shouldn't be extracted as main content.</p>
      </article>
      <p>The article continues with more relevant content here.</p>
      <aside class="pull-quote">
        <p>This is a pull quote from the article.</p>
      </aside>
      <p>Final paragraph of the main article wraps up the discussion.</p>
    </div>
  </article>
</body>
</html>`,
    expected: {
      title: 'Main Article Title',
      hasContent: true,
      minContentLength: 200,
      minImages: 0,
      maxImages: 2,
    },
  },
  {
    name: 'AMP Page',
    category: 'challenging',
    url: 'https://example.com/amp/article',
    html: `<!DOCTYPE html>
<html amp>
<head>
  <title>AMP Article - Accelerated Mobile Page</title>
  <meta property="og:title" content="AMP Article">
</head>
<body>
  <main role="main">
    <article class="amp-article">
      <h1>AMP Article</h1>
      <time class="amp-time" datetime="2024-03-01">March 1, 2024</time>
      <amp-img src="https://example.com/amp-hero.jpg" alt="Hero image" width="800" height="450" layout="responsive"></amp-img>
      <div class="amp-content">
        <p>This is an Accelerated Mobile Page with special AMP components.</p>
        <p>AMP pages are designed to load quickly on mobile devices with restrictions on JavaScript.</p>
        <p>The amp-img tag is used instead of regular img tags for optimized loading.</p>
      </div>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: 'AMP Article',
      hasContent: true,
      minContentLength: 150,
      minImages: 0,
      maxImages: 3,
    },
  },
  
  // Social media style
  {
    name: 'Twitter/X Thread',
    category: 'social',
    url: 'https://x.com/user/status/123',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Thread by @developer about web development</title>
</head>
<body>
  <main>
    <article data-testid="tweet">
      <div class="tweet-content">
        <p>I've been thinking about web development trends, and here's a thread with my thoughts 🧵</p>
        <p>First, the shift towards edge computing is changing how we think about server architecture.</p>
        <p>Second, AI-assisted development is becoming a real productivity booster for many teams.</p>
        <p>Third, the focus on developer experience continues to drive tool adoption.</p>
        <p>What trends are you most excited about?</p>
      </div>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: /Thread|web development/i,
      hasContent: true,
      minContentLength: 200,
      minImages: 0,
      maxImages: 2,
    },
  },
  {
    name: 'LinkedIn Article',
    category: 'social',
    url: 'https://linkedin.com/pulse/article',
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Leadership Lessons from 10 Years in Tech - LinkedIn</title>
  <meta property="og:title" content="Leadership Lessons from 10 Years in Tech">
</head>
<body>
  <main>
    <article class="article-content">
      <h1 class="article-title">Leadership Lessons from 10 Years in Tech</h1>
      <div class="author-info">
        <span class="author-name">Tech Leader</span>
        <span class="author-title">VP of Engineering</span>
      </div>
      <div class="article-body">
        <p>After a decade in technology leadership, I've learned several key lessons about building effective teams.</p>
        <h2>1. Communication is Everything</h2>
        <p>Clear, consistent communication forms the foundation of any successful team. Regular check-ins and transparent updates build trust.</p>
        <h2>2. Hire for Growth Mindset</h2>
        <p>Skills can be taught, but attitude and adaptability are harder to develop. Look for people who embrace challenges.</p>
        <h2>3. Celebrate Failures</h2>
        <p>Creating a culture where failure is seen as a learning opportunity encourages innovation and risk-taking.</p>
      </div>
    </article>
  </main>
</body>
</html>`,
    expected: {
      title: 'Leadership Lessons from 10 Years in Tech',
      hasContent: true,
      minContentLength: 300,
      minImages: 0,
      maxImages: 2,
    },
  },
];

const LINE = '='.repeat(80);
const DASH = '-'.repeat(80);

export function runExtractorTests(): void {
  console.log('\n' + LINE);
  console.log('CALMWEB ARTICLE EXTRACTOR TEST REPORT');
  console.log(LINE);
  console.log(`Total test cases: ${testCases.length}\n`);

  const results: {
    category: string;
    passed: number;
    failed: number;
    issues: string[];
  }[] = [];

  const categories = [...new Set(testCases.map(t => t.category))];

  for (const category of categories) {
    const categoryTests = testCases.filter(t => t.category === category);
    let passed = 0;
    let failed = 0;
    const issues: string[] = [];

    console.log(DASH);
    console.log(`CATEGORY: ${category.toUpperCase()} (${categoryTests.length} tests)`);
    console.log(DASH);

    for (const test of categoryTests) {
      const doc = createDoc(test.html);
      const result = extractArticle(doc, test.url);
      const evaluation = evaluateExtraction(result, test.expected);

      if (evaluation.passed) {
        passed++;
        console.log(`  ✓ ${test.name}`);
      } else {
        failed++;
        console.log(`  ✗ ${test.name}`);
        for (const issue of evaluation.issues) {
          console.log(`    - ${issue}`);
          issues.push(`${test.name}: ${issue}`);
        }
      }

      console.log(`    Title: "${result.title}"`);
      console.log(`    Author: ${result.author || 'N/A'}`);
      console.log(`    Content: ${result.content.length} chars, ${result.images.length} images`);
      console.log(`    Reading time: ${result.readingTime} min`);
      console.log('');
    }

    results.push({ category, passed, failed, issues });
  }

  console.log('\n' + LINE);
  console.log('SUMMARY');
  console.log(LINE);

  let totalPassed = 0;
  let totalFailed = 0;

  for (const result of results) {
    const pct = ((result.passed / (result.passed + result.failed)) * 100).toFixed(0);
    console.log(
      `${result.category.padEnd(15)}: ${result.passed}/${result.passed + result.failed} passed (${pct}%)`
    );
    totalPassed += result.passed;
    totalFailed += result.failed;
  }

  console.log(DASH);
  const totalPct = ((totalPassed / (totalPassed + totalFailed)) * 100).toFixed(0);
  console.log(`TOTAL           : ${totalPassed}/${totalPassed + totalFailed} passed (${totalPct}%)`);
  console.log(LINE + '\n');

  if (totalFailed > 0) {
    console.log('FAILURES:');
    for (const result of results) {
      if (result.issues.length > 0) {
        console.log(`\n${result.category}:`);
        for (const issue of result.issues) {
          console.log(`  - ${issue}`);
        }
      }
    }
    console.log('');
  }
}

runExtractorTests();
