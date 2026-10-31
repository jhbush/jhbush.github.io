# jhbush.github.io

Personal site and blog for Jason Bush, built with Jekyll and hosted on GitHub Pages.

## Writing a post

Add a Markdown file to `_posts/` named `YYYY-MM-DD-title.md`:

```markdown
---
title: My post title
description: One-sentence summary shown on cards and in search results.
image: /assets/images/my-cover.svg   # optional cover image
tags: [Jamf, Security]
featured: true                       # optional: show in the Featured section
---

Intro paragraph shown as the excerpt.
<!--more-->

## First section
```

Push to `master` and GitHub Pages rebuilds the site in about a minute.

## Running locally

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Layout

- `_layouts/`, `_includes/`: page templates
- `assets/css/main.scss`: all styles, with light and dark themes
- `assets/js/main.js`: theme toggle, table of contents, copy-code buttons, reading progress
- `_posts/`: blog posts (the current ones are placeholders)
