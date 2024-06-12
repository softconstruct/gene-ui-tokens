1. add build and publish pipelines
2. fix tokens studio json generation for sem collections refs
3. create package, publish beta version and start testing

# Gene UI tokens

> The tokens used in the [@geneui/components](https://www.npmjs.com/package/@geneui/components)
> package.

[![NPM registry](https://img.shields.io/npm/v/@geneui/tokens?style=for-the-badge&color=red)](https://www.npmjs.com/package/@geneui/tokens)
[![License](https://img.shields.io/badge/license-mit-green.svg?style=for-the-badge)](https://github.com/softconstruct/gene-ui-tokens/blob/main/LICENSE)

## Table of Contents

-   [How to start](#-how-to-start)
-   [Installation](#%EF%B8%8F-installation)
-   [Documentation](#-documentation)
-   [Changelog](#-changelog)
-   [License](#%EF%B8%8F-license)

## 🚦 How to start

By default, this tokens package will cover all UI tokens of the
[Gene UI design system components](https://github.com/softconstruct/gene-ui-components/tree/main).<br>
You can customize it depending on your project needs. Let's dive into the process of override.

Let's break down the process into two parts, technical and design, as the redesign is a more
designer-centric process we do our best to provide an abstraction level and automated toolkit.

#### Technical

1. Fork this repository under your org or personal account
2. Add your NPM account secret variable `NPM_AUTOMATION_ACCESS_TOKEN`
3. Replace the package name like `@geneui/tokens-pascal` or something like this, and other
   stuff(author, etc...) in your `package.json` file
4. Create personal access token and keep it you need it later

#### Design

1. Duplicate foundation project from the Gene UI figma workspace
2. Change the Figma variables values and look at foundation guides to see the changes
3. When changes are done open the Figma plugins and find the Gene UI Tokens Hub plugin, open it
4. Go to settings tab and fill your repository credentials
5. Choose the branch where you want to push your tokens
6. Click on push button located in the footer
7. Review the changes and write commit message
8. Push changes to repository

The forked repository has configured build and publish pipelines, it will be executed when you will
merge PR with the `main` branch.

When publishing is done you need to install your custom tokens package and pass it to our
`GeneUIProvider` `tokens` prop. Follow the bellow steps.

## ⚙️ Installation

You can install your brand-specific overwritten Gene UI tokens using npm or yarn:

```bash
# Yarn
yarn add @geneui/tokens-pascal

# NPM
npm install --save @geneui/tokens-pascal
```

#### Bootstrap

Pass your tokens package to the `GeneUIProvider` component

```js
import GeneUIProvider from '@geneui/components/GeneUIProvider';
import { bootstrapTokens } from '@geneui/tokens-pascal';

<GeneUIProvider tokens={bootstrapTokens()}>
    <App />
</GeneUIProvider>;
```

## 📝 Documentation

Explore tokens documentation in-depth to make it easier to rebrand your tokens in the right way.

### API Reference

Visit our [API Reference](https://geneui.softconstruct.com/) for detailed information on each token,
and its usage in components.

## 📜 Changelog

Stay up-to-date with the latest changes and improvements by checking our
[Changelog](https://github.com/softconstruct/gene-ui-components/blob/main/CHANGELOG.md).

## ⚖️ License

The Gene UI design system tokens is licensed under the
[MIT License](https://github.com/softconstruct/gene-ui-components/blob/main/LICENSE)
