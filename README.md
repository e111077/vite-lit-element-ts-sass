# Vite Lit TS Minified Templates

This is an example [Vite](https://vitejs.dev/) project using [Lit 2](https://lit.dev), Typescript, and Sass imports.

## Changes from Vite's TS Lit template

* `npm i -D sass`
* Moved styles from `src/my-element.ts` to `src/my-element.scss` and imported them with `import styles from './my-element.scss?inline';`
* Updated `vite.config.ts`
  * Changed library build to follow [WC best practices](https://justinfagnani.com/2019/11/01/how-to-publish-web-components-to-npm/)
  * Added a commented-out build for applications

**N.B.** Since Vite does does not yet handle Lit HMR, Vite triggers a full reload for Lit files, but SASS files currently only trigger a hot module reload which will not update Lit without manually triggering a reload. Follow this [issue](https://github.com/vitejs/vite/issues/3243) for more details or wait until [Lit HMR](https://github.com/lit/lit-element/pull/802) is released.
