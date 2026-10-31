---
title: Getting started with AWS EC2 Mac instances
description: Notes from standing up macOS in the cloud, from dedicated hosts to automated MDM enrollment.
image: /assets/images/cover-cloud.svg
tags: [AWS, Terraform, Automation]
---

> **Placeholder post.** This is sample content to show off the layout. Replace it with your own write-up when you're ready.

EC2 Mac instances are a great way to run build agents, test packages, or try out Jamf workflows without a rack of Mac minis. They also come with a few quirks worth knowing before you start.
<!--more-->

## Dedicated hosts

EC2 Mac instances run on dedicated hosts with a 24-hour minimum allocation. Plan for that when you're experimenting, and release hosts you don't need.

## Provisioning with Terraform

```hcl
resource "aws_ec2_host" "mac" {
  instance_type     = "mac2.metal"
  availability_zone = "us-west-2a"
}

resource "aws_instance" "mac" {
  ami           = var.macos_ami
  instance_type = "mac2.metal"
  host_id       = aws_ec2_host.mac.id
}
```

## Enrolling into MDM

*Placeholder: walk through the enrollment approach from aws-ec2-mac-orbital.*

## Related projects

- [aws-ec2-mac-orbital](https://github.com/jhbush/aws-ec2-mac-orbital)
