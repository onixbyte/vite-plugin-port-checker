# vite-plugin-port-checker

A Vite plugin that warns when the dev server listens on a port blocked by browsers (e.g. Chrome, Firefox).

Reference: [Fetch spec — port blocking](https://fetch.spec.whatwg.org/#port-blocking)

## Install

```bash
npm install vite-plugin-port-checker -D
# or
pnpm add vite-plugin-port-checker -D
# or
yarn add vite-plugin-port-checker -D
```

## Usage

```ts
// vite.config.ts
import { defineConfig } from "vite"
import checkRestrictedPort from "vite-plugin-port-checker"

export default defineConfig({
  plugins: [checkRestrictedPort()],
})
```

When the dev server starts on a restricted port, you'll see a yellow warning in the console suggesting you change `server.port`.

## Licence

MIT
