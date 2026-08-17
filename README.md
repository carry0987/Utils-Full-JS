# Utils-Full-JS

[![version](https://img.shields.io/npm/v/@carry0987/utils-full.svg)](https://www.npmjs.com/package/@carry0987/utils-full)

Utils-Full-JS is a browser-first wrapper around `@carry0987/utils/browser`.

It provides a single default export, `Utils`, combining built-in static helpers with the familiar `new Utils(extension)` pattern.

Full Docs: https://carry0987.github.io/Utils-Full-JS/

## Install

```bash
pnpm add @carry0987/utils-full
```

## Use

```ts
import Utils from '@carry0987/utils-full';

const helper = new Utils({
    log(message: string) {
        console.log(`[app] ${message}`);
    }
});

const requestId = Utils.generateUUID();
const payload = Utils.deepMerge({ page: 1 }, { requestId });

helper.log(requestId);
Utils.setLocalValue('latest-request', payload);
```

## Browser Bundle

```html
<script src="https://unpkg.com/@carry0987/utils-full/dist/utils-full.min.js"></script>
```

The global `Utils` constructor is then available in the page.

## Docs

- npm: https://www.npmjs.com/package/@carry0987/utils-full
- Upstream package: https://www.npmjs.com/package/@carry0987/utils
