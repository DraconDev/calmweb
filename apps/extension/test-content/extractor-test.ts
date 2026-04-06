/**
 * Article Extractor Test Suite
 * Tests extraction against various real-world HTML page structures
 */

// Module removed - extractor functionality not yet implemented
// TODO: Implement article extraction module

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

// Functions below reference ExtractedArticle which doesn't exist yet
// Uncomment when extractor module is implemented

// function createDoc(html: string) {
//   return parser.parseFromString(html, 'text/html') as unknown as Document;
// }

// function evaluateExtraction(result: ExtractedArticle, expected: TestCase['expected']): { passed: boolean; issues: string[] } {
//   ...
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
  <title>Welcome to My Page</title>
</head>
<body>
  <div>
    <div>
      <div>
        <font size="5"><b>Page Title</b></font>
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

  // === MORE NEWS SITES ===
  {
    name: 'Guardian Style',
    category: 'news',
    url: 'https://theguardian.com/world/article',
    html: `<!DOCTYPE html><html><head><title>Global Health Initiative Launches | World News</title><meta property="og:title" content="Global Health Initiative Launches"></head><body><header>Guardian</header><main id="maincontent"><article><h1>Global Health Initiative Launches</h1><div class="byline"><span>Health Correspondent</span></div><div class="article-body"><p>An ambitious new global health initiative has been announced, bringing together researchers and healthcare providers from around the world.</p><p>The project aims to address disparities in healthcare access and outcomes, with a particular focus on underserved communities.</p><p>Initial funding has been secured through partnerships with several foundations and governments.</p></div></article></main></body></html>`,
    expected: { title: 'Global Health Initiative Launches', hasContent: true, minContentLength: 200, minImages: 0, maxImages: 3 },
  },
  {
    name: 'Bloomberg Style',
    category: 'news',
    url: 'https://bloomberg.com/news/article',
    html: `<!DOCTYPE html><html><head><title>Tech Sector Sees Record Investment - Bloomberg</title><meta property="og:title" content="Tech Sector Sees Record Investment"></head><body><main><article><header><h1>Tech Sector Sees Record Investment</h1><div class="article-authors">Technology Reporter</div><time>March 15, 2024</time></header><div class="body-content"><p>Venture capital investment in technology companies reached unprecedented levels in the first quarter of 2024.</p><p>AI-focused startups attracted the largest share of funding, with several deals exceeding $500 million.</p><p>Analysts note that investor confidence remains strong despite market volatility in other sectors.</p></div></article></main></body></html>`,
    expected: { title: 'Tech Sector Sees Record Investment', hasContent: true, minContentLength: 200, minImages: 0, maxImages: 2 },
  },
  {
    name: 'TechCrunch Style',
    category: 'news',
    url: 'https://techcrunch.com/article',
    html: `<!DOCTYPE html><html><head><title>Startup Raises $50M Series B | TechCrunch</title></head><body><main><article class="article-content"><h1>Startup Raises $50M Series B</h1><div class="article-author">TechCrunch Staff</div><time datetime="2024-03-08">March 8, 2024</time><div class="article-entry"><p>Cloud-native startup announced today it has closed a $50 million Series B funding round led by prominent investors.</p><p>The company plans to use the funding to expand its engineering team and accelerate product development.</p><p>Founded in 2022, the startup has seen rapid growth in the enterprise market.</p></div></article></main></body></html>`,
    expected: { title: 'Startup Raises $50M Series B', hasContent: true, minContentLength: 150, minImages: 0, maxImages: 3 },
  },
  {
    name: 'Ars Technica Style',
    category: 'news',
    url: 'https://arstechnica.com/science/article',
    html: `<!DOCTYPE html><html><head><title>New Research Sheds Light on Climate Patterns</title><meta name="author" content="Science Editor"></head><body><main><article><h1 class="heading">New Research Sheds Light on Climate Patterns</h1><p class="byline">By Science Editor</p><div class="article-content"><p>Researchers have published findings that significantly advance our understanding of global climate dynamics.</p><p>The study, which analyzed decades of atmospheric data, identifies previously unknown feedback mechanisms.</p><p>These discoveries could improve climate prediction models and inform future policy decisions.</p></div></article></main></body></html>`,
    expected: { title: 'New Research Sheds Light on Climate Patterns', author: /Science Editor/i, hasContent: true, minContentLength: 200, minImages: 0, maxImages: 2 },
  },
  {
    name: 'Associated Press Style',
    category: 'news',
    url: 'https://apnews.com/article',
    html: `<!DOCTYPE html><html><head><title>Housing Market Shows Signs of Stabilization</title></head><body><main><article><h1>Housing Market Shows Signs of Stabilization</h1><div class="Page-authors">AP Real Estate Writer</div><div class="RichTextStoryBody"><p>The housing market is showing early signs of stabilizing after months of fluctuation, according to new data released today.</p><p>Median home prices remained steady in most major metropolitan areas, while inventory levels improved modestly.</p><p>Economists suggest the data points to a gradual normalization in the market.</p></div></article></main></body></html>`,
    expected: { title: 'Housing Market Shows Signs of Stabilization', hasContent: true, minContentLength: 150, minImages: 0, maxImages: 2 },
  },

  // === MORE BLOGS ===
  {
    name: 'Tumblr Style Post',
    category: 'blog',
    url: 'https://user.tumblr.com/post/123',
    html: `<!DOCTYPE html><html><head><title>My Thoughts on Design - Tumblr</title></head><body><main><article class="post"><h2 class="post-title">My Thoughts on Design</h2><div class="post-content"><p>Design is about more than aesthetics. It's about solving problems and communicating ideas effectively.</p><p>Good design is invisible. You don't notice it because it just works.</p><p>Bad design, on the other hand, is painfully obvious. It frustrates and confuses users.</p></div></article></main></body></html>`,
    expected: { title: /Design/i, hasContent: true, minContentLength: 100, minImages: 0, maxImages: 2 },
  },
  {
    name: 'Hashnode Blog',
    category: 'blog',
    url: 'https://hashnode.com/post/tech-article',
    html: `<!DOCTYPE html><html><head><title>Building Scalable APIs - Hashnode</title></head><body><main><article><h1>Building Scalable APIs</h1><div class="article-meta"><span class="author">Dev Writer</span><span class="date">Feb 2024</span></div><div class="article-content"><p>API scalability is a critical consideration for any growing application. Here are my lessons learned from building APIs that handle millions of requests.</p><h2>Design for Growth</h2><p>From the start, design your API with growth in mind. Consider pagination, rate limiting, and caching from day one.</p><h2>Monitor Everything</h2><p>You can't improve what you don't measure. Set up comprehensive monitoring for all your endpoints.</p></div></article></main></body></html>`,
    expected: { title: 'Building Scalable APIs', hasContent: true, minContentLength: 200, minImages: 0, maxImages: 2 },
  },
  {
    name: 'Squarespace Blog',
    category: 'blog',
    url: 'https://squarespace-site.com/blog',
    html: `<!DOCTYPE html><html><head><title>Travel Guide: Japan - My Blog</title></head><body><main><article class="blog-item"><h1 class="blog-title">Travel Guide: Japan</h1><div class="meta"><span class="author vcard">Travel Writer</span><time>2024-02-15</time></div><div class="blog-body"><p>Japan offers a fascinating blend of ancient traditions and cutting-edge modernity. Here's my guide to experiencing the best of both.</p><p>From the serene temples of Kyoto to the bustling streets of Tokyo, every destination offers something unique.</p><img src="https://example.com/japan.jpg" alt="Cherry blossoms in Japan"><p>The food alone is worth the trip, with regional specialties that vary dramatically from city to city.</p></div></article></main></body></html>`,
    expected: { title: 'Travel Guide: Japan', author: /Travel Writer/i, hasContent: true, minContentLength: 200, minImages: 0, maxImages: 3 },
  },
  {
    name: 'Wix Blog',
    category: 'blog',
    url: 'https://wixsite.com/blog',
    html: `<!DOCTYPE html><html><head><title>10 Tips for Better Photography</title></head><body><main><article class="blog-post"><h1>10 Tips for Better Photography</h1><div class="post-info"><span class="author">Photo Blog</span></div><div class="post-body"><p>Whether you're a beginner or experienced photographer, these tips will help improve your craft.</p><ol><li>Understand lighting</li><li>Use the rule of thirds</li><li>Focus on composition</li><li>Experiment with angles</li><li>Practice regularly</li></ol><p>Photography is a journey, not a destination. Keep shooting and learning.</p></div></article></main></body></html>`,
    expected: { title: '10 Tips for Better Photography', hasContent: true, minContentLength: 150, minImages: 0, maxImages: 2 },
  },

  // === MORE DOCUMENTATION ===
  {
    name: 'Confluence Wiki',
    category: 'documentation',
    url: 'https://confluence.atlassian.com/page',
    html: `<!DOCTYPE html><html><head><title>API Reference - Confluence</title></head><body><main id="main-content"><article><h1 id="title-text">API Reference</h1><div id="page-content"><p>This page documents all available API endpoints for the platform.</p><h2>Authentication</h2><p>All requests require a valid API key passed in the Authorization header.</p><pre><code>curl -H "Authorization: Bearer TOKEN" https://api.example.com/v1/users</code></pre><h2>Endpoints</h2><h3>GET /users</h3><p>Returns a list of all users in the organization.</p><h3>POST /users</h3><p>Creates a new user account.</p></div></article></main></body></html>`,
    expected: { title: 'API Reference', hasContent: true, minContentLength: 200, minImages: 0, maxImages: 2 },
  },
  {
    name: 'Notion Page',
    category: 'documentation',
    url: 'https://notion.so/page',
    html: `<!DOCTYPE html><html><head><title>Meeting Notes - March 2024 - Notion</title></head><body><main><article class="notion-page"><h1 class="notion-title">Meeting Notes - March 2024</h1><div class="notion-content"><p>Team meeting to discuss Q1 goals and plan for Q2 initiatives.</p><h2>Attendees</h2><p>Engineering, Product, Design teams represented.</h2><h2>Key Decisions</h2><ul><li>Approve new feature roadmap</li><li>Allocate resources to platform migration</li><li>Schedule follow-up in two weeks</li></ul><h2>Action Items</h2><ul><li>Prepare technical specifications</li><li>Review budget proposals</li></ul></div></article></main></body></html>`,
    expected: { title: /Meeting Notes/i, hasContent: true, minContentLength: 150, minImages: 0, maxImages: 2 },
  },
  {
    name: 'GitBook Style',
    category: 'documentation',
    url: 'https://docs.gitbook.com/guide',
    html: `<!DOCTYPE html><html><head><title>User Guide - Documentation</title></head><body><main><article><h1>User Guide</h1><div class="page-content"><p>Welcome to the comprehensive user guide. This documentation covers all features and functionality.</p><h2>Getting Started</h2><p>Follow these steps to set up your account and begin using the platform.</p><h3>Step 1: Create Account</h3><p>Visit the registration page and fill out the required information.</p><h3>Step 2: Configure Settings</h3><p>Customize your workspace settings to match your workflow.</p></div></article></main></body></html>`,
    expected: { title: 'User Guide', hasContent: true, minContentLength: 200, minImages: 0, maxImages: 2 },
  },

  // === MORE FORUMS ===
  {
    name: 'Quora Answer',
    category: 'forum',
    url: 'https://quora.com/question',
    html: `<!DOCTYPE html><html><head><title>What are the best programming languages to learn? - Quora</title></head><body><main><article><h1>What are the best programming languages to learn?</h1><div class="answer"><p>The answer depends on your goals. Here's my breakdown:</p><p><b>For web development:</b> JavaScript and TypeScript are essential. They run everywhere and have enormous ecosystems.</p><p><b>For data science:</b> Python is the clear winner with libraries like NumPy, Pandas, and scikit-learn.</p><p><b>For systems programming:</b> Rust is gaining popularity for its safety guarantees and performance.</p><p>Ultimately, the best language is the one that solves your specific problem effectively.</p></div></article></main></body></html>`,
    expected: { title: /programming languages/i, hasContent: true, minContentLength: 200, minImages: 0, maxImages: 2 },
  },
  {
    name: 'Discourse Forum',
    category: 'forum',
    url: 'https://forum.discourse.org/topic',
    html: `<!DOCTYPE html><html><head><title>How to optimize database queries - Forum</title></head><body><main><article class="topic-post"><h1>How to optimize database queries</h1><div class="post"><p>I'm experiencing slow queries on my production database. Here are the details of my setup and what I've tried so far.</p><pre><code>SELECT * FROM users WHERE created_at > '2024-01-01' ORDER BY last_name;</code></pre><p>The table has about 2 million rows and the query takes 5+ seconds. I've added indexes but the performance is still poor.</p></div></article></main></body></html>`,
    expected: { title: /optimize database/i, hasContent: true, minContentLength: 150, minImages: 0, maxImages: 2 },
  },

  // === ENCYCLOPEDIA / REFERENCE ===
  {
    name: 'Britannica Style',
    category: 'encyclopedia',
    url: 'https://britannica.com/science/topic',
    html: `<!DOCTYPE html><html><head><title>Photosynthesis - Encyclopedia Britannica</title></head><body><main><article><h1>Photosynthesis</h1><div class="topic-content"><p>Photosynthesis is the process by which green plants and certain other organisms transform light energy into chemical energy.</p><p>During photosynthesis in green plants, light energy is captured and used to convert water, carbon dioxide, and minerals into oxygen and energy-rich organic compounds.</p><h2>Process</h2><p>The process occurs primarily in the leaves of plants, where specialized structures called chloroplasts contain the pigment chlorophyll.</p><h2>Significance</h2><p>Photosynthesis is the primary source of organic matter for nearly all organisms on Earth.</p></div></article></main></body></html>`,
    expected: { title: 'Photosynthesis', hasContent: true, minContentLength: 300, minImages: 0, maxImages: 2 },
  },
  {
    name: 'Scholarpedia',
    category: 'encyclopedia',
    url: 'https://scholarpedia.org/article',
    html: `<!DOCTYPE html><html><head><title>Neural Networks - Scholarpedia</title></head><body><main><article><h1>Neural Networks</h1><div class="articleText"><p>Neural networks are computing systems inspired by biological neural networks. They consist of interconnected nodes that process information using connectionist approaches.</p><p>The concept dates back to the 1940s, but practical applications have exploded in recent years due to advances in computing power and algorithm design.</p><h2>Architecture</h2><p>Modern neural networks consist of multiple layers of interconnected nodes, with each layer transforming the input data in increasingly abstract representations.</p></div></article></main></body></html>`,
    expected: { title: 'Neural Networks', hasContent: true, minContentLength: 200, minImages: 0, maxImages: 2 },
  },

  // === CHALLENGING EDGE CASES ===
  {
    name: 'Table-Based Layout',
    category: 'challenging',
    url: 'https://legacy-site.com/page',
    html: `<!DOCTYPE html><html><head><title>Legacy Table Layout</title></head><body><table><tr><td><h1>Legacy Table Layout</h1></td></tr><tr><td><p>This page uses table-based layout, a technique common in the early 2000s. Despite the outdated structure, there is real content here.</p><p>The extractor should still be able to identify the main content area even without semantic HTML elements.</p><p>Some legacy websites still rely on this approach for layout.</p></td></tr></table></body></html>`,
    expected: { title: 'Legacy Table Layout', hasContent: true, minContentLength: 150, minImages: 0, maxImages: 2 },
  },
  {
    name: 'Frameset Page',
    category: 'challenging',
    url: 'https://old-site.com/frames',
    html: `<!DOCTYPE html><html><head><title>Framed Content</title></head><body><frameset><frame src="content.html"><frame src="nav.html"></frameset><noframes><p>This page uses frames which are not supported.</p></noframes></body></html>`,
    expected: { title: 'Framed Content', hasContent: false, minContentLength: 0, minImages: 0, maxImages: 2 },
  },
  {
    name: 'Print Version Article',
    category: 'challenging',
    url: 'https://news.com/article?print=true',
    html: `<!DOCTYPE html><html><head><title>Print: City Council Approves New Park</title></head><body><div class="print-article"><h1>City Council Approves New Park</h1><p class="print-meta">Staff Reporter | March 10, 2024</p><p>The city council voted unanimously to approve the construction of a new community park in the downtown area.</p><p>The park will feature walking trails, a playground, and community gathering spaces.</p><p>Construction is expected to begin in the spring and be completed by late summer.</p><p class="print-footer">Reproduced for personal use only.</p></div></body></html>`,
    expected: { title: /Park/i, hasContent: true, minContentLength: 200, minImages: 0, maxImages: 2 },
  },
  {
    name: 'Paywall Preview',
    category: 'challenging',
    url: 'https://premium-news.com/article',
    html: `<!DOCTYPE html><html><head><title>The Future of Renewable Energy - Premium News</title><meta property="og:title" content="The Future of Renewable Energy"></head><body><main><article><h1>The Future of Renewable Energy</h1><div class="article-content"><p>Renewable energy sources are transforming the global energy landscape. Solar and wind power have become increasingly cost-competitive.</p><p class="preview-end">Subscribe to continue reading...</p><div class="paywall-overlay">This article is available to subscribers only.</div></div></article></main></body></html>`,
    expected: { title: 'The Future of Renewable Energy', hasContent: true, minContentLength: 100, minImages: 0, maxImages: 2 },
  },
  {
    name: 'Multiple Articles on Page',
    category: 'challenging',
    url: 'https://magazine.com/issue/42',
    html: `<!DOCTYPE html><html><head><title>Magazine Issue 42</title></head><body><main><article class="featured"><h1>Featured: The Art of Slow Living</h1><div class="content"><p>In our busy world, the slow living movement offers a different approach to life. Practitioners emphasize mindfulness, quality over quantity, and intentional choices.</p><p>This philosophy extends beyond personal habits to include consumption, work, and relationships.</p></div></article><article class="secondary"><h2>Side Story: Local Art Scene Thrives</h2><div class="content"><p>The local art community has seen remarkable growth this year, with new galleries opening monthly.</p></div></article></main></body></html>`,
    expected: {
      title: 'Featured: The Art of Slow Living',
      hasContent: true,
      minContentLength: 100,
      minImages: 0,
      maxImages: 3,
    },
  },

  // === E-COMMERCE VARIATIONS ===
  {
    name: 'Amazon Style Product',
    category: 'ecommerce',
    url: 'https://amazon.com/dp/product',
    html: `<!DOCTYPE html><html><head><title>Wireless Headphones Pro - Amazon.com</title></head><body><main><div class="product"><h1 class="product-title">Wireless Headphones Pro</h1><div class="product-price">$79.99</div><div class="product-description"><p>Experience premium audio quality with our Wireless Headphones Pro. Featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design.</p><h3>About this item</h3><ul><li>Active Noise Cancellation</li><li>30-hour battery life</li><li>Bluetooth 5.0 connectivity</li><li>Built-in microphone for calls</li></ul><p>Perfect for commuting, working from home, or enjoying your favorite music.</p></div></div></main></body></html>`,
    expected: { title: /Wireless Headphones/i, hasContent: true, minContentLength: 150, minImages: 0, maxImages: 5 },
  },
  {
    name: 'Etsy Listing',
    category: 'ecommerce',
    url: 'https://etsy.com/listing/handmade',
    html: `<!DOCTYPE html><html><head><title>Handmade Ceramic Mug - Etsy</title></head><body><main><article class="listing"><h1>Handmade Ceramic Mug</h1><div class="listing-details"><p>This unique ceramic mug is handcrafted with care. Each piece is one-of-a-kind, featuring organic shapes and earth-tone glazes.</p><img src="https://example.com/mug.jpg" alt="Ceramic mug"><p>Made from locally-sourced clay and fired at high temperatures for durability.</p><h3>Specifications</h3><p>Height: 4 inches. Capacity: 12 oz. Dishwasher safe.</p></div></article></main></body></html>`,
    expected: { title: 'Handmade Ceramic Mug', hasContent: true, minContentLength: 150, minImages: 0, maxImages: 3 },
  },

  // === VIDEO / MULTIMEDIA SITES ===
  {
    name: 'YouTube Video Page',
    category: 'multimedia',
    url: 'https://youtube.com/watch?v=abc',
    html: `<!DOCTYPE html><html><head><title>How to Build a Web App - YouTube</title></head><body><main><div class="video"><h1 class="video-title">How to Build a Web App from Scratch</h1><div class="video-description"><p>In this tutorial, I walk through building a complete web application using modern tools and frameworks.</p><p>Topics covered: project setup, component architecture, state management, and deployment.</p><p>Timestamps:</p><p>0:00 Introduction</p><p>2:15 Project Setup</p><p>10:30 Building Components</p><p>25:00 State Management</p><p>35:00 Deployment</p></div></div></main></body></html>`,
    expected: { title: /Web App/i, hasContent: true, minContentLength: 150, minImages: 0, maxImages: 2 },
  },
  {
    name: 'Vimeo Video Page',
    category: 'multimedia',
    url: 'https://vimeo.com/123456',
    html: `<!DOCTYPE html><html><head><title>Short Film: The Journey - Vimeo</title></head><body><main><article class="video"><h1>Short Film: The Journey</h1><div class="description"><p>A short film exploring the theme of personal growth through a visual narrative.</p><p>Directed by independent filmmaker. Shot on location in various natural settings.</p><p>Runtime: 12 minutes. Released 2024.</p></div></article></main></body></html>`,
    expected: { title: /Short Film/i, hasContent: true, minContentLength: 100, minImages: 0, maxImages: 2 },
  },
  {
    name: 'Podcast Show Notes',
    category: 'multimedia',
    url: 'https://podcast.fm/episode/42',
    html: `<!DOCTYPE html><html><head><title>Episode 42: AI in Healthcare - Tech Podcast</title></head><body><main><article class="episode"><h1>Episode 42: AI in Healthcare</h1><div class="show-notes"><p>In this episode, we discuss the latest applications of artificial intelligence in healthcare.</p><h3>Topics</h3><ul><li>AI-powered diagnostics</li><li>Drug discovery acceleration</li><li>Patient care optimization</li></ul><p>Guest: Dr. Sarah Chen, AI Research Lead at HealthTech Inc.</p><p>Duration: 45 minutes</p></div></article></main></body></html>`,
    expected: { title: /AI in Healthcare/i, hasContent: true, minContentLength: 150, minImages: 0, maxImages: 2 },
  },

  // === CMS OUTPUT VARIATIONS ===
  {
    name: 'Drupal Article',
    category: 'news',
    url: 'https://drupal-site.org/news',
    html: `<!DOCTYPE html><html><head><title>Community Event Announced</title></head><body><main><article class="node"><h1 class="node-title">Community Event Announced</h1><div class="field field-name-body"><p>The annual community event has been announced for this summer. Local organizations are coming together to celebrate the neighborhood.</p><p>Activities will include live music, food vendors, and family-friendly entertainment.</p><p>The event is free and open to all residents.</p></div></article></main></body></html>`,
    expected: { title: 'Community Event Announced', hasContent: true, minContentLength: 150, minImages: 0, maxImages: 2 },
  },
  {
    name: 'Joomla Article',
    category: 'news',
    url: 'https://joomla-site.com/article',
    html: `<!DOCTYPE html><html><head><title>Local Business Expansion Plans</title></head><body><main><article class="com-content-article"><h1 class="item-title">Local Business Expansion Plans</h1><div class="item-body"><p>A local tech company has announced plans to expand its operations, adding 200 new positions over the next year.</p><p>The expansion will focus on research and development, with a new facility planned for the downtown area.</p><p>State officials have praised the move as a positive sign for the local economy.</p></div></article></main></body></html>`,
    expected: { title: 'Local Business Expansion Plans', hasContent: true, minContentLength: 150, minImages: 0, maxImages: 2 },
  },
  {
    name: 'Strapi/Headless CMS',
    category: 'blog',
    url: 'https://headless-cms.com/blog',
    html: `<!DOCTYPE html><html><head><title>React Server Components Explained</title></head><body><main><article><h1>React Server Components Explained</h1><div class="content"><p>React Server Components represent a paradigm shift in how we build React applications. They allow components to run on the server, reducing bundle size and improving performance.</p><h2>How They Work</h2><p>Server Components run exclusively on the server and can access backend resources directly. They render to a special format that the client can hydrate.</p><h2>Benefits</h2><ul><li>Smaller JavaScript bundles</li><li>Direct backend access</li><li>Automatic code splitting</li></ul></div></article></main></body></html>`,
    expected: { title: 'React Server Components Explained', hasContent: true, minContentLength: 200, minImages: 0, maxImages: 2 },
  },

  // === INTERNATIONAL SITES ===
  {
    name: 'Japanese Blog',
    category: 'blog',
    url: 'https://blog.jp/post',
    html: `<!DOCTYPE html><html lang="ja"><head><title>技術ブログ：プログラミングのヒント</title></head><body><main><article><h1>プログラミングのヒント</h1><div class="content"><p>効率的なコードを書くための基本的なヒントを紹介します。良いコードは読みやすく、保守しやすいものです。</p><p>まず、変数名は意味のある名前をつけましょう。次に、関数は一つの責任を持つようにしてください。</p><p>これらの基本を守ることで、長期的にメンテナンスしやすいコードを書けるようになります。</p></div></article></main></body></html>`,
    expected: { title: /プログラミング/i, hasContent: true, minContentLength: 100, minImages: 0, maxImages: 2 },
  },
  {
    name: 'German News Article',
    category: 'news',
    url: 'https://nachrichten.de/article',
    html: `<!DOCTYPE html><html lang="de"><head><title>Neue Umweltmaßnahmen angekündigt</title><meta property="og:title" content="Neue Umweltmaßnahmen angekündigt"></head><body><main><article><h1>Neue Umweltmaßnahmen angekündigt</h1><div class="text"><p>Die Regierung hat heute neue Umweltmaßnahmen angekündigt, die darauf abzielen, die CO2-Emissionen bis 2030 zu halbieren.</p><p>Die Maßnahmen umfassen Investitionen in erneuerbare Energien und strengere Vorschriften für Industriebetriebe.</p><p>Umweltschützer begrüßen die Pläne, fordern aber noch ambitioniertere Ziele.</p></div></article></main></body></html>`,
    expected: { title: /Umweltmaßnahmen/i, hasContent: true, minContentLength: 150, minImages: 0, maxImages: 2 },
  },
  {
    name: 'Spanish Tutorial',
    category: 'documentation',
    url: 'https://docs.es/tutorial',
    html: `<!DOCTYPE html><html lang="es"><head><title>Tutorial: Introducción a JavaScript</title></head><body><main><article><h1>Introducción a JavaScript</h1><div class="content"><p>JavaScript es un lenguaje de programación versátil que se utiliza para crear páginas web interactivas.</p><h2>Variables</h2><p>Las variables se declaran usando let, const o var. Se recomienda usar const para valores que no cambian.</p><h2>Funciones</h2><p>Las funciones son bloques de código reutilizables que realizan tareas específicas.</p></div></article></main></body></html>`,
    expected: { title: /JavaScript/i, hasContent: true, minContentLength: 150, minImages: 0, maxImages: 2 },
  },

  // === LAYOUT VARIATIONS ===
  {
    name: 'Single Page Article (Long Form)',
    category: 'news',
    url: 'https://longreads.com/feature',
    html: `<!DOCTYPE html><html><head><title>The Hidden World of Deep Sea Exploration</title><meta name="author" content="Feature Writer"></head><body><main><article class="longform"><h1>The Hidden World of Deep Sea Exploration</h1><p class="lead">Miles beneath the ocean surface lies a world that remains largely unknown to humanity.</p><div class="article-body"><p>For decades, scientists have been pushing the boundaries of underwater exploration, developing new technologies to venture into the deepest parts of the ocean.</p><p>The challenges are immense: crushing pressure, total darkness, and extreme cold make deep-sea exploration one of the most difficult scientific endeavors.</p><p>Despite these obstacles, recent expeditions have revealed incredible biodiversity and geological formations that challenge our understanding of life on Earth.</p><p>The creatures found at these depths have evolved remarkable adaptations, including bioluminescence and extreme pressure tolerance.</p><p>As technology continues to advance, we can expect even more discoveries from this hidden frontier.</p></div></article></main></body></html>`,
    expected: { title: 'The Hidden World of Deep Sea Exploration', author: /Feature Writer/i, hasContent: true, minContentLength: 300, minImages: 0, maxImages: 3 },
  },
  {
    name: 'Sidebar-Heavy Layout',
    category: 'challenging',
    url: 'https://sidebar-site.com/post',
    html: `<!DOCTYPE html><html><head><title>Main Article Content</title></head><body><div class="layout"><header>Site Header</header><nav>Sidebar Navigation</nav><aside class="left-sidebar"><div class="widget">Widget Content</div><div class="ad">Advertisement</div></aside><main><article><h1>Main Article Content</h1><div class="entry"><p>This is the actual content of the article. It's surrounded by multiple sidebars and widgets that should be filtered out by the extractor.</p><p>The main content area contains the information the user actually wants to read.</p></div></article></main><aside class="right-sidebar"><div class="related">Related Articles</div><div class="popular">Popular Posts</div></aside><footer>Site Footer</footer></div></body></html>`,
    expected: { title: 'Main Article Content', hasContent: true, minContentLength: 100, minImages: 0, maxImages: 2 },
  },

  // === MINIMAL / EDGE CASES ===
  {
    name: 'RSS Feed View',
    category: 'challenging',
    url: 'https://blog.com/feed',
    html: `<!DOCTYPE html><html><head><title>Blog Feed</title></head><body><div class="feed"><div class="entry"><h2>First Post Title</h2><p>Published: March 1, 2024</p><p>This is the excerpt from the first post in the feed. It provides a summary of the full article.</p></div><div class="entry"><h2>Second Post Title</h2><p>Published: February 28, 2024</p><p>Another excerpt from a different post in the feed.</p></div></div></body></html>`,
    expected: { title: 'Blog Feed', hasContent: true, minContentLength: 100, minImages: 0, maxImages: 2 },
  },
  {
    name: 'Error Page',
    category: 'challenging',
    url: 'https://site.com/missing',
    html: `<!DOCTYPE html><html><head><title>404 - Page Not Found</title></head><body><div class="error"><h1>404 - Page Not Found</h1><p>The page you requested could not be found.</p><p>Please check the URL or return to the homepage.</p></div></body></html>`,
    expected: { title: '404 - Page Not Found', hasContent: true, minContentLength: 50, minImages: 0, maxImages: 2 },
  },
  {
    name: 'Maintenance Page',
    category: 'challenging',
    url: 'https://site.com/maintenance',
    html: `<!DOCTYPE html><html><head><title>Under Maintenance</title></head><body><div class="maintenance"><h1>Under Maintenance</h1><p>We are currently performing scheduled maintenance. Please check back later.</p><p>Expected completion: March 15, 2024 at 6:00 AM EST.</p></div></body></html>`,
    expected: { title: 'Under Maintenance', hasContent: true, minContentLength: 50, minImages: 0, maxImages: 2 },
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
