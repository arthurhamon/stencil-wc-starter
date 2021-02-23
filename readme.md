![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Stencil Component Starter

This is a starter project for building a standalone Web Component using Stencil.

This starter include the following features:

- I18Next, for the internationalization
- Phrase, our Localization Platform
- Sentry, for error monitoring

And this starter come with the following dev plugin :

- Eslint + AirBnB conf
- Jest
- Typesscript 4+
- Css pre-processors: SASS

# Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

# Table of content

- [Stencil Component Starter](#stencil-component-starter)
- [Stencil](#stencil)
- [Table of content](#table-of-content)
- [Installation](#installation)
  - [Env](#env)
  - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
- [Test your work](#test-your-work)
  - [Lints and fixes files](#lints-and-fixes-files)
  - [Run your end-to-end tests](#run-your-end-to-end-tests)
  - [Run your unit tests](#run-your-unit-tests)
- [Build the web component](#build-the-web-component)
- [Naming Components](#naming-components)
- [Using this component](#using-this-component)
  - [Script tag](#script-tag)
  - [Node Modules](#node-modules)
  - [In a stencil-starter app](#in-a-stencil-starter-app)
- [Data structure](#data-structure)
- [Internationalization (i18n)](#internationalization-i18n)
  - [Translating](#translating)
- [Sentry, how to use](#sentry-how-to-use)
- [Links](#links)
- [Usefull links](#usefull-links)

# Installation
To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone git@github.com:arthurhamon/stencil-wc-starter.git my-component
cd my-component
git remote rm origin
```
and run:

```bash
npm install
npm start
```

## Env

Add your different environment configuration on this file `src/utils/environment.ts`

## Compiles and hot-reloads for development
```
npm start
```

# Test your work

## Lints and fixes files
To run the linting for the components, run:

```bash
npm run lint
```

## Run your end-to-end tests
```bash
npm run test:e2e
```

## Run your unit tests
To run the unit tests for the components, run:

```bash
npm run test:unit
```

# Build the web component
The build command compiles and minifies the files for production.
To build the component for production, run:

```bash
npm run build
```

Need help? Check out our docs [here](https://stenciljs.com/docs/output-targets).


# Naming Components
When creating new component tags, we recommend _not_ using `stencil` in the component name (ex: `<stencil-datepicker>`). This is because the generated component has little to nothing to do with Stencil; it's just a web component!

Instead, use a prefix that fits your company or any name for a group of related components. For example, all of the Ionic generated web components use the prefix `ion`.


# Using this component
There are three strategies we recommend for using web components built with Stencil.

The first step for all three of these strategies is to [publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages).

## Script tag
- Put a script tag similar to this `<script src='https://unpkg.com/my-component@0.0.1/dist/mycomponent.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

## Node Modules
- Run `npm install my-component --save`
- Put a script tag similar to this `<script src='node_modules/my-component/dist/mycomponent.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

## In a stencil-starter app
- Run `npm install my-component --save`
- Add an import to the npm packages `import my-component;`
- Then you can use the element anywhere in your template, JSX, html etc


# Data structure
The custom element accept one argument `wcconfig`. This object is not require, but usefull if you want to have the same environment for the WC and the mother app.
See the `IWcConfig` (`sr/interfaces/wc-config.ts`) interface for the list of properties.

# Internationalization (i18n)
We are using `i18next` module for the translation, the language is based on `app_locale` cookie. Check the config file : `src/utils/i18n.ts`

The translations files are located in `src/i18n/{lang}.json`

## Translating
> If this is the first time, you will probably need to install Phrase Client on your computer:
>
> - download it: [Phrase CLI latest](https://phrase.com/cli/)
> - install it: [How to install the Phrase Client.](https://help.phrase.com/help/phrase-in-your-terminal)

> Don't forget to add your Phrase access_token and project_id on `.phraseapp.yml`.

To push new translation to PhraseApp follow those steps

- Extract website translation (this will automatically detect new untranslated keys and had them on each files)
```bash
npm run i18n:extract
```
- Push it to Phrase (this will send untranslated keys to Phrase client)
> Note: if you have unused keys you need to delete them manualy on the Phrase dashboard
> Click on the new uploaded source file by clicking `review` then click on `Delete unmentioned keys`
```bash
npm run i18n:push
```
- Translate all the missing keys in all locale language with [Phrase](https://app.phrase.com/) dashboard.

- Pull it into the project (this will get the translation you add on Phrase dashboard and add it to our app)
```bash
npm run i18n:pull
```
- Don't forget to create a merge request with the new translation.

# Sentry, how to use
To use Sentry you need to call the local Sentry. You can do it like this
`this._appBoot.sentry.captureMessage('WC error');`

# Links
> TODO: Add your links here, your gitlab project, your design project on figma, your Jira, etc

# Usefull links
* [Stencil](https://stenciljs.com/docs/introduction)
* [I18Next](https://www.i18next.com)
* [I18Next Scanner](https://github.com/i18next/i18next-scanner)
* [Sentry](https://github.com/getsentry/sentry-javascript/tree/master/packages/browser)
