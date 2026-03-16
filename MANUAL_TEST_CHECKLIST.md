# CalmWeb Super Reader - Manual Test Checklist

Use this checklist to manually verify the article extractor and Super Reader against real websites.
Open the extension, navigate to each URL, press Alt+R (or click Super Reader), and evaluate.

## Scoring Guide
- ✅ Excellent: Title, author, date, content extracted cleanly, images preserved
- ⚠️ Partial: Most content extracted but missing metadata or some content lost
- ❌ Poor: Wrong content extracted, missing most content, or broken rendering

---

## NEWS SITES

### Major Newspapers
- [ ] https://www.nytimes.com — verify headline, byline, date, body, images
- [ ] https://www.washingtonpost.com — verify headline, author, article body
- [ ] https://www.theguardian.com/world — verify section header, article content
- [ ] https://www.bbc.com/news — verify headline, summary, full article
- [ ] https://www.cnn.com — verify headline, timestamp, article body
- [ ] https://www.reuters.com — verify headline, byline, article body
- [ ] https://apnews.com — verify headline, article content
- [ ] https://www.latimes.com — verify headline, author, article body
- [ ] https://www.npr.org — verify headline, audio embeds, article body
- [ ] https://www.aljazeera.com — verify headline, article body

### Business/Finance
- [ ] https://www.bloomberg.com — verify headline, article body (may have paywall)
- [ ] https://www.wsj.com — verify headline preview (paywall expected)
- [ ] https://www.ft.com — verify headline preview (paywall expected)
- [ ] https://www.economist.com — verify headline preview (paywall expected)
- [ ] https://finance.yahoo.com — verify headline, article body

### Tech News
- [ ] https://techcrunch.com — verify headline, author, article body
- [ ] https://arstechnica.com — verify headline, author, long-form content
- [ ] https://www.theverge.com — verify headline, author, article body
- [ ] https://www.wired.com — verify headline, author, article body
- [ ] https://www.zdnet.com — verify headline, article body
- [ ] https://www.cnet.com — verify headline, article body
- [ ] https://www.engadget.com — verify headline, article body
- [ ] https://9to5mac.com — verify headline, article body
- [ ] https://www.anandtech.com — verify headline, article body
- [ ] https://news.ycombinator.com — verify title, points, comments structure

---

## BLOG PLATFORMS

### Major Platforms
- [ ] https://medium.com — verify title, author, reading time, article body, images
- [ ] https://dev.to — verify title, author, tags, article body, code blocks
- [ ] https://hashnode.com — verify title, author, article body
- [ ] https://substack.com (any newsletter) — verify title, author, article body
- [ ] https://ghost.org/explore — verify title, author, article body

### Personal Blogs
- [ ] https://paulgraham.com/articles.html — pick any article, verify title and body
- [ ] https://overreacted.io — verify title, author (Dan Abramov), article body
- [ ] https://kentcdodds.com/blog — verify title, author, article body
- [ ] https://css-tricks.com — verify title, author, article body, code examples
- [ ] https://www.smashingmagazine.com — verify title, author, article body

---

## DOCUMENTATION & TECHNICAL

### Documentation Sites
- [ ] https://developer.mozilla.org/en-US/docs/Web/JavaScript — verify title, code blocks, descriptions
- [ ] https://react.dev/learn — verify title, code examples, article body
- [ ] https://vuejs.org/guide/introduction — verify title, code blocks
- [ ] https://docs.github.com/en/get-started — verify title, steps, code blocks
- [ ] https://nodejs.org/en/docs — verify title, code blocks

### Tutorials
- [ ] https://www.freecodecamp.org/news — pick an article, verify title, author, code blocks
- [ ] https://javascript.info — pick a chapter, verify title, code examples
- [ ] https://www.digitalocean.com/community/tutorials — verify title, author, code blocks
- [ ] https://www.tutorialspoint.com — verify title, article body

### Q&A Forums
- [ ] https://stackoverflow.com/questions — pick any question, verify title, code, answers
- [ ] https://www.reddit.com/r/programming — pick a post, verify title, content
- [ ] https://news.ycombinator.com/item?id= — pick any thread, verify title, comments
- [ ] https://www.quora.com — pick a question, verify question, answers

---

## ACADEMIC & RESEARCH

- [ ] https://arxiv.org/abs/ — pick any paper, verify title, authors, abstract
- [ ] https://scholar.google.com — pick a result, verify title, authors, abstract
- [ ] https://www.nature.com/articles — verify title, authors, abstract
- [ ] https://www.sciencedirect.com — verify title, abstract (paywall expected)
- [ ] https://en.wikipedia.org/wiki/Special:Random — verify title, sections, content

---

## VISUAL & LIFESTYLE

- [ ] https://www.buzzfeed.com — verify headline, article body, images
- [ ] https://medium.com/tag/photography — pick photo essay, verify images, captions
- [ ] https://www.foodnetwork.com/recipes — verify title, ingredients, steps, images
- [ ] https://www.allrecipes.com/recipe/ — verify title, ingredients, directions, image
- [ ] https://www.nytimes.com/section/travel — pick article, verify images, content

---

## SOCIAL MEDIA

- [ ] https://twitter.com (any long thread) — verify thread content
- [ ] https://www.linkedin.com/pulse/ — pick article, verify title, author, content
- [ ] https://www.producthunt.com/posts/ — verify product name, description

---

## VIDEO & MULTIMEDIA

- [ ] https://www.youtube.com/watch?v= — any video, verify title, description
- [ ] https://vimeo.com — any video, verify title, description
- [ ] https://podcasts.google.com — pick episode, verify title, show notes

---

## E-COMMERCE

- [ ] https://www.amazon.com/dp/ — any product, verify title, description, specs
- [ ] https://www.etsy.com/listing/ — any listing, verify title, description, images
- [ ] https://www.ebay.com/itm/ — any item, verify title, description

---

## ENCYCLOPEDIA & REFERENCE

- [ ] https://en.wikipedia.org/wiki/ — verify title, content, sections
- [ ] https://www.britannica.com/topic/ — verify title, content
- [ ] https://www.imdb.com/title/ — verify title, description, cast info
- [ ] https://www.goodreads.com/book/show/ — verify title, author, description

---

## INTERNATIONAL (Non-English)

- [ ] https://www.lemonde.fr — French news, verify headline, content
- [ ] https://www.spiegel.de — German news, verify headline, content
- [ ] https://elpais.com — Spanish news, verify headline, content
- [ ] https://www.yomiuri.co.jp — Japanese news, verify headline
- [ ] https://www.bbc.com/hindi — Hindi news, verify headline, content

---

## EDGE CASES

### Ad-Heavy Sites
- [ ] https://www.dailymail.co.uk — verify article content extracted, ads removed
- [ ] https://www.foxnews.com — verify headline, article body, ads stripped

### Minimal/Complex Layouts
- [ ] https://text.npr.org — plain text NPR, verify clean extraction
- [ ] https://longreads.com — long-form, verify full article extraction
- [ ] https://waitbutwhy.com — unique layout, verify content extraction

### Single Page Apps (may have limited content)
- [ ] https://app.netlify.com — verify if any content extracted
- [ ] https://docs.google.com/document/ — verify document content

### AMP Pages
- [ ] Search Google News and open an AMP result — verify AMP content extraction

---

## RESULTS LOG

| Site | Date | Layout Used | Title OK | Author OK | Content OK | Images OK | Issues |
|------|------|-------------|----------|-----------|------------|-----------|--------|
| | | | | | | | |
| | | | | | | | |
| | | | | | | | |

### Summary Stats
- Total sites tested: ___
- Excellent: ___
- Partial: ___
- Poor: ___
- Pass rate: ___%

### Notes
<!-- Add any observations, patterns, or issues discovered during testing -->
