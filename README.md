  <h1>🍕 KhulnaSoft.ai 🍕</h1>
</div>
<p align="center">
  <img src="https://img.shields.io/github/languages/code-size/khulnasoft-opensource/browser-extensions" alt="GitHub code size in bytes">
  <img src="https://img.shields.io/github/commit-activity/w/khulnasoft-opensource/browser-extensions" alt="GitHub commit activity">
  <a href="https://github.com/khulnasoft-opensource/browser-extensions/issues">
    <img src="https://img.shields.io/github/issues/khulnasoft-opensource/browser-extensions" alt="GitHub issues">
  </a>
  <a href="https://discord.gg/U2peSNf23P">
    <img src="https://img.shields.io/discord/714698561081704529.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2" alt="Discord">
  </a>
  <a href="https://twitter.com/saucedopen">
    <img src="https://img.shields.io/twitter/follow/saucedopen?label=Follow&style=social" alt="Twitter">
  </a>
</p>

![pr description demo](https://khulnasoft.ai/pr-description.gif)

Leverage AI to generate pull request descriptions based on the diff & commit messages. It works! [Install the Chrome Extension](https://bit.ly/khulnasoftai) to get started.

## Documentation

The developer documentation for the project can be found [here](./docs/). For a usage guide, click [here](https://docs.khulnasoft.com/chrome-extension/introduction-to-the-chrome-extension/).

## Running the project locally

To run the project, you'll need the following software binaries installed on your development machines:

- [Node.js](https://nodejs.org/en)
- [NPM](https://www.npmjs.com/)

To install the project dependencies:

```shell
npm ci
```


To run a local instance of the project:

### On development environment

```shell
npm run dev
```

### On Production environment 

```shell
npm run build
npm run preview
```


## Installing the local build on a Chromium based browser:
After running the above commands,
1. Navigate to `chrome://extensions`. 
2. Enable the `Developer Mode`.
3. Select `Load unpacked` and choose the generated `dist` directory from the project folder to install it.

You should now have the extension installed and running.

## 🤝 Contributing

We encourage you to contribute to KhulnaSoft! Please check out the [Contributing guide](https://docs.khulnasoft.com/contributing/introduction-to-contributing/) for guidelines about how to proceed.

We have a commit utility called [@khulnasoft-opensource/conventional-commit](https://github.com/khulnasoft-opensource/conventional-commit) that helps you write your commits in a way that is easy to understand and process by others.

## 🚀 Releases

We use our own [configuration for semantic-release](https://github.com/khulnasoft-opensource/release). This allows us to automatically generate changelogs and releases for our projects based on the commit messages.

The `beta` branch is the default branch. We squash & merge PRs to the `beta` branch. We never commit directly to `main`.

A merge to `beta` will trigger a beta release. A merge to `main` will trigger a full release.

Make sure to checkout the beta branch for the latest changes, and follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification when writing commit messages.

## 🍕 Community

Got Questions? Join the conversation in our [Discord](https://discord.gg/58KbV5w2).  

## ⚖️ LICENSE

MIT © [KhulnaSoft OpenSource](LICENSE)
