# ⚒️ Contributing to the UBC Launch Pad Website

This document will guide you through contributing changes to the new UBC Launch Pad website! It assumes basic knowledge of git and pull request workflows.

If you spot anything out of date or incorrect, please [open an issue](https://github.com/ubclaunchpad/ubclaunchpad.com/issues)!

- [Dependencies](#dependencies)
- [Development](#development)
  - [TypeScript Guidelines](#typescript-guidelines)
  - [Vue Guidelines](#vue-guidelines)
    - [Documentation](#documentation)
    - [Styling](#styling)
  - [Handling Assets](#handling-assets)
  - [Configuration](#configuration)
- [Deployment](#deployment)
- [GitHub Actions](#github-actions)

<br />

## Dependencies

The most important dependencies of this project are:

* [Node](https://nodejs.org), which powers all of our Javascript development locally
* [TypeScript](https://www.typescriptlang.org/), a typed superset of JavaScript
* [Vue.js](https://vuejs.org), a framework for building web interfaces
* [Bulma](https://bulma.io), a pure-CSS layout/component framework
* [animate.css](https://github.com/daneden/animate.css), a pure-CSS animation framework
* [Sass (`.scss` syntax)](https://sass-lang.com/documentation/syntax), a stylesheet language we use for styling

To get started, make sure you have [Node](https://nodejs.org/en/download) installed:

```
node -v
npm install
```

You can then run the website locally by running the following and visiting [`localhost:8081`](http://localhost:8081):

```
npm run serve
```

Refer to the links above for more details on each dependency.

<br />

## Development

[Visual Studio Code](https://code.visualstudio.com/) with extensions like [Veter](https://marketplace.visualstudio.com/items?itemName=octref.vetur) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is recommended.

This codebase is largely contained in [`src`](/src), where you will find the following directories:

* [`src/assets`](./src/assets): assets (images, etc.) that get bundled in the application - see [Handling Assets](#handling-assets) for more details
* [`src/components`](./src/components): Vue components that are shared throughout the website
* [`src/sections`](./src/sections): the website is mostly designed around horizontal sections that you scroll through - each section is defined as a Vue component here
* [`src/lib`](./src/lib): library of utility functions for Vue components
* [`src/data`](./src/data): data type definitions for configuration used in the website - see [Configuration](#configuration) for more details
* [`src/styles`](./src/styles): global styles are declared here and imported throughout the application

Also noteworthy are the following files:

* [`src/config.ts`](./src/config.ts): website configuration for frequently updated values - refer to the [Configuring the UBC Launch Pad Website](https://ubclaunchpad.github.io/new/config) documentation site and [Configuration](#configuration) for more details
* [`src/App.vue`](./src/App.vue): the main entrypoint component to the site - it currently declares the site layout and provides data from `src/config.ts` to relevant components (other components *should not* import `src/config.ts`)

Refer to [Dependencies](#dependencies) for our core dependencies and links to their websites, where you can find documentation on how to use them. Also refer to the existing code and components for guidance on how to work with the codebase.

Using `npm run serve`, code you write will automatically be visible at [`localhost:8081`](http://localhost:8081).

### TypeScript Guidelines

[TypeScript](https://www.typescriptlang.org/) is a typed superset of JavaScript, and is used as the main programming language in this project.

Most simple style rules are enforced using [`eslint`](https://eslint.org/). Our `eslint` rules are defined in [`package.json`](./package.json). In general:

* always use `<script lang="ts">` in Vue components.
* always use `.ts` when adding additional source files.
* follow documentation formats used by existing code in the repository.

### Vue Guidelines

[Vue.js](https://vuejs.org) is a framework for building web interfaces, and is the framework that drives this project.

In general, when working with Vue:

* use [Vue single file components](https://vuejs.org/v2/guide/single-file-components.html) defined in `.vue` files.
* stick to [`Vue.extend`](https://vuejs.org/v2/api/#Vue-extend) (and not class-based components).

#### Documentation

* Add a simple block docstring above `Vue.extend` for all components. For example:
  ```ts
  /**
   * About implements a section for introducing visitors to Launch Pad.
      */
  export default Vue.extend({
    name: 'About',
    props: {},
  });
  ```
* Shared components (`src/components`) should document their props as well with block docstrings:
  ```ts
  /**
   * Button is a simple stylized Launch Pad button.
    */
  export default Vue.extend({
    name: 'Button',
    props: {
      /**
       * Toggle whether to use a primary, attention-grabbing style or a more lowkey style for this button
        */
      primary: Boolean,
    },
  });
  ```

#### Styling

* Stylesheets should use [Sass (`.scss`) syntax](https://sass-lang.com/documentation/syntax).
* **Use existing classes wherever possible** - refer to the [Bulma](https://bulma.io) and [animate.css](https://github.com/daneden/animate.css) documentation for what is available. Other global styles are also available in [`src/styles`](./src/styles).
* Simple, non-specific styles (`margin`, `padding`, other modifiers) should be defined in [`src/styles`](./src/styles/util.scss).
* Vue declares a `<style />` section at the end of each single file component - use this and `scoped` styles for component-specific styles to avoid making unintentional changes to other components, for example:
  ```html
  <style scoped lang="scss">
  h2 {
    margin-bottom: 84px;
  }
  </style>
  ```

### Handling Assets

Image assets are kept in [`src/assets`](./src/assets), and are bundled alongside our code during build time. To reference images in Vue:

```html
<img src="@/assets/my-image.png">
```

To load an image to use it as a variable, use `require` and bind it to `src`:

```vue
<template>
  <img :src="myImage">
</template>

<script lang="ts">
import Vue from 'vue';

const myImage = require('@/assets/my-image.png');

export default Vue.extend({
  // ...
  data: () => ({ myImage }),
  // ...
})
</script>
```

In general:

* if the image can be hosted elsewhere (i.e. a company website or project repository), host it there instead and reference it by URL
* use suitably-sized assets that don't exceed 1MB in size
* do not put assets in `/public`
* **icons**: see [`unicons.ts`](./src/unicons.ts).

We also have an [automated workflow](https://github.com/ubclaunchpad/ubclaunchpad.com/actions?workflow=Compress+images) that runs on PRs that edit images and automatically adds a commit to compress them if possible while minimizing quality loss - see [GitHub Actions](#github-actions).

### Configuration

Site configuration is defined in [`src/config.ts`](./src/config.ts), with additional relevant types defined in [`src/data/types.ts`](./src/data/types.ts). Docstrings and types in these files are used to render the [UBC Launch Pad Site Configuration Guide](https://ubclaunchpad.github.io/new/config) as part of the post-build step to `npm run build` or by running:

```
npm run docs
```

Included in this documentation website is [CONFIGURING.md](./CONFIGURING.md), where any updated guidance regarding the configuration of the website should be added.

You can view the configuration documentation site locally using a static file server like [`serve`](https://github.com/zeit/serve):

```
npm i -g serve
serve ./dist/config
```

These changes are published automatically - see [Deployment](#deployment).

<br />

## Deployment

Deployments are handled automatically by the [Netlify](https://www.netlify.com/).

This means that when your changes are merged to `master`, your contribution will automatically be deployed! This deployment includes both the actual website as well as [configuration documentation](#configuration).

<br />

## GitHub Actions

[GitHub Actions](https://github.com/features/actions) is a workflow automation platform provided by GitHub. We use it for automating a variety of tasks for this project.

* [![Checks](https://github.com/ubclaunchpad/ubclaunchpad.com/workflows/Checks/badge.svg)](https://github.com/ubclaunchpad/ubclaunchpad.com/actions?workflow=Checks) ([`checks.yml`](./.github/workflows/checks.yml)) runs on every single pull request to run linters and verify the website builds correctly. Every pull request should pass these checks.
* [![Compress images](https://github.com/ubclaunchpad/ubclaunchpad.com/workflows/Compress%20images/badge.svg)](https://github.com/ubclaunchpad/ubclaunchpad.com/actions?workflow=Compress+images) ([`compress.yml`](./.github/workflows/compress.yml)) runs on pull requests that modify image assets and, if possible, compresses them without losing too much quality. You should still only add images of suitable size regardless - see [Handling Assets](#handling-assets).

<br />
