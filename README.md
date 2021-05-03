# Vite Lit Element TS SASS

This is an example [Vite](https://vitejs.dev/) project using [Lit 2](https://lit.dev), Typescript, and SASS imports.

## Changes from Vite's TS Lit template

* Changed Lit 1 implementation to Lit 2
* Added the [`rollup-plugin-postcss-lit`](https://www.npmjs.com/package/rollup-plugin-postcss-lit) plugin to `vite.config.ts`
* `npm i -D sass`
* Added `typings/scss.d.ts`
* Added the `typings` folder to `tsconfig.json`

**N.B.** Since Lit does not yet handle HMR, Vite triggers a full reload for Lit files, but SASS files currently only trigger an hot module reload (HMR) which will not update Lit without manually triggering a reload. Follow this [issue]() for more details.