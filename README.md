# Vite Lit Element TS SASS

This is an example [Vite](https://vitejs.dev/) project using [Lit 2](https://lit.dev), Typescript, and SASS imports.

## Changes from Vite's TS Lit template

* Changed Lit 1 implementation to Lit 2
* Added the [`rollup-plugin-postcss-lit`](https://www.npmjs.com/package/rollup-plugin-postcss-lit) plugin to `vite.config.ts`
* `npm i -D sass`
* Added `typings/scss.d.ts`
* Moved styles from `src/my-element.ts` to `src/my-element.scss` and imported them
* Added the `typings` folder to `tsconfig.json`
* Added `"skipLibCheck": true` to `tsconfig.json` to override Vite's `.scss` file typings

**N.B.** Since Lit does not yet handle HMR, Vite triggers a full reload for Lit files, but SASS files currently only trigger an hot module reload (HMR) which will not update Lit without manually triggering a reload. Follow this [issue](https://github.com/vitejs/vite/issues/3243) for more details or wait until [Lit HMR](https://github.com/lit/lit-element/pull/802) is released.
