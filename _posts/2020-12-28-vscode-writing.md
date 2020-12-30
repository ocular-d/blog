---
title: VS Code for (technical) writing
date: 2020-12-28
description: How to configure and setup VS Code for (technical) writing
meta:
  - name: "og:description"
    content: VS Code for technical writing
  - name: keywords
    content: VS Code
tags:
  - VS Code
  - writing
---

<Header/>

---

<ImageEmbed caption="VS Code">
<img src="/vs-code-wip.png" alt="Vs Code" />
</ImageEmbed>

In the same manner that you configure VS Code for reporting coding style violations, you can configure it to report writing inconsistencies and validations.

This article showcases how you can use VS Code to catch insensitive, inconsiderate writing,
check your content against your editorial and content style guides, identify typos and grammatical errors.

## Prerequisite

For a fully working setup please make sure to have all needed dependencies installed.

- [Vale](https://docs.errata.ai/vale/about "Link to Vale website")
- [ocld-writing](https://www.npmjs.com/package/ocld-writing "Link to package on NPM")

[ocld-writing](https://www.npmjs.com/package/ocld-writing "Link to package on NPM")is a meta package,
if you prefer, you can install all included packages one by one.

Check the [README](https://github.com/ocular-d/ocld-writing/blob/master/README.md "Link to ocld-writing README on GitHub") for the included packages.

::: notice Recommendation
Backup your VS Code configuration and plugins **before** you install this extension!
:::
