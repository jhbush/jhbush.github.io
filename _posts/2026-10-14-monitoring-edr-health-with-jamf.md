---
title: Monitoring EDR agent health with Jamf Pro
description: Using extension attributes and smart groups to catch Macs where Cortex XDR or Nessus agents have quietly stopped working.
image: /assets/images/cover-security.svg
tags: [Security, Jamf, EDR]
featured: true
---

> **Placeholder post.** This is sample content to show off the layout. Replace it with your own write-up when you're ready.

Security agents fail quietly. A Mac can show the agent as installed while the service is stopped, the system extension isn't approved, or the agent hasn't checked in for weeks. Here's how I surface those Macs in Jamf Pro before the security team does.
<!--more-->

## What "healthy" means

For each agent, I check three things:

1. The app or binary is installed
2. Its system extension or daemon is running
3. It has checked in with its console recently

## Checking the system extension

```bash
#!/bin/zsh
# Report whether a system extension is activated and enabled.
team_id="XXXXXXXXXX"  # replace with the agent vendor's Team ID

if systemextensionsctl list | grep "$team_id" | grep -q "activated enabled"; then
  echo "<result>Running</result>"
else
  echo "<result>Not Running</result>"
fi
```

## Smart groups that drive remediation

*Placeholder: describe the smart groups and the policies they scope to.*

## Related projects

- [PaloAltoCortexXDR-EA](https://github.com/jhbush/PaloAltoCortexXDR-EA)
- [TenableNessus-EA](https://github.com/jhbush/TenableNessus-EA)
- [halcyon-ar](https://github.com/jhbush/halcyon-ar)
