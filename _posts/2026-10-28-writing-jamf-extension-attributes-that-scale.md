---
title: Writing Jamf Pro extension attributes that scale
description: Patterns I use to keep extension attributes fast, predictable and easy to report on across thousands of Macs.
image: /assets/images/cover-extension-attributes.svg
tags: [Jamf, Shell, Inventory]
featured: true
---

> **Placeholder post.** This is sample content to show off the layout. Replace it with your own write-up when you're ready.

Extension attributes (EAs) are one of the most useful features in Jamf Pro, and also one of the easiest ways to slow down inventory updates. After maintaining a public [collection of EAs](https://github.com/jhbush/extension-attributes) for years, these are the patterns I keep coming back to.
<!--more-->

## Keep them fast

Every EA runs during every inventory update. A script that takes three seconds on one Mac adds up across a fleet. Avoid network calls, avoid `system_profiler` when a faster tool exists, and bail out early when the thing you're checking isn't installed.

```bash
#!/bin/zsh
# Report the installed version of an app, or "Not Installed".
app="/Applications/Example.app"

if [[ ! -d "$app" ]]; then
  echo "<result>Not Installed</result>"
  exit 0
fi

version=$(defaults read "$app/Contents/Info.plist" CFBundleShortVersionString 2>/dev/null)
echo "<result>${version:-Unknown}</result>"
```

## Return values you can report on

Smart groups work best with a small set of predictable values. Prefer `Installed`, `Not Installed` and `Unknown` over free-form error messages, and use consistent date formats so "less than" and "more than" criteria work.

## Test on the oldest supported macOS

Commands and output formats change between macOS releases. Test each EA on the oldest macOS version you still support, not only the newest.

## Wrapping up

*Placeholder: add a summary and link to the EAs in the repo.*
