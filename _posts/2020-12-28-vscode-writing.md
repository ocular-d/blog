---
title: VS Code for (technical) writing
date: 2020-12-28
description: How to configure and setup VS Code for Markdown based (technical) writing
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

*Add info about reading time, number of words, git, etc*

## Prerequisite

*Add a note that we install everything into the project dir and not global*

For a fully working setup please make sure to have all needed dependencies installed.

- [Vale](https://docs.errata.ai/vale/about "Link to Vale website")
- [ocld-writing](https://www.npmjs.com/package/ocld-writing "Link to package on NPM")

[ocld-writing](https://www.npmjs.com/package/ocld-writing "Link to package on NPM")is a NPM meta package,
installing the following NPM packages

- remark,
- remark-cli
- remark-preset-lint-consistent
- remark-preset-lint-markdown-style-guide
- remark-preset-lint-recommended
- remark-validate-links
- alex,
- markdown-link-check

If you prefer, you can install all included packages one by one.

Check the [README](https://github.com/ocular-d/ocld-writing/blob/master/README.md "Link to ocld-writing README on GitHub") for the included packages.

## VS Code Extension

::: notice Recommendation
Backup your VS Code configuration and plugins **before** you install this extension!
:::

Install the [ocular-d extension package](https://marketplace.visualstudio.com/items?itemName=ocular-d.writing-extension-pack)
for VS Code for creating stunning Markdown based documentation.

*ADD INFO ABOUT ALL THE PLUGINS INCLUDED*

### Configuration

Configure the settings via the VS Code UI or by adding the settings below to your *settings.json* file.

You may want to adjust the settings below to your needs!

```json
{
    "telemetry.enableTelemetry": false,
    "telemetry.enableCrashReporter": false,
    "workbench.editor.highlightModifiedTabs": true,
    "editor.cursorBlinking": "solid",
    "files.trimFinalNewlines": true,
    "files.autoSave": "afterDelay",
    "vale.core.useCLI": true,
    "vale.server.provideFixes": false,
    "settingsSync.ignoredExtensions": [

    ],
    "editor.codeActionsOnSave": null,
    "editor.rulers": [

        80,
        160
      ],
      "tws.highlightTrailingWhiteSpace": true,
      "editor.renderWhitespace": "trailing",
      "alex-linter.noBinary": true,
      "cSpell.languageSettings": [

      ],

}
```

### Explanation

*`"telemetry.enableTelemetry": false`* Disable VS Code Telemetry (ADD LINK) \
*`"telemetry.enableCrashReporter": false`* Disable Telemetry Crash Reporter

| Setting  | Description | Default
|---------|----------------|-------|
| telemetry.enableTelemetry: false |  Disable VS Code Telemetry | false |
| telemetry.enableCrashReporter: false | Disable Telemetry Crash Reporter |
| workbench.editor.highlightModifiedTabs: true | Highlight modified tab (non-saved) |
