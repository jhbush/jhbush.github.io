---
title: Keeping Macs patched with AutoPkg
description: How I use AutoPkg recipes and overrides to keep third-party apps current without manual packaging.
image: /assets/images/cover-packaging.svg
tags: [AutoPkg, Packaging, Automation]
---

> **Placeholder post.** This is sample content to show off the layout. Replace it with your own write-up when you're ready.

Third-party app updates are a constant. AutoPkg turns "download, package, upload, test" into a scheduled job, so patching becomes a review step instead of a chore.
<!--more-->

## Recipes and overrides

Start from community recipes, then create overrides so your changes survive upstream updates.

```bash
autopkg make-override Firefox.jamf.recipe
autopkg run -v Firefox.jamf.recipe
```

## Running it on a schedule

*Placeholder: describe your scheduling setup and how you review new packages.*

## Related projects

- [jhbush-recipes](https://github.com/jhbush/jhbush-recipes)
