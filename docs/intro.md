---
sidebar_position: 1
---

# Utils-Full-JS

Utils-Full-JS is a browser-first wrapper around `@carry0987/utils/browser`.

The package is published as `@carry0987/utils-full` and exposes a single default export named `Utils`.

It is designed for projects that prefer one cohesive utility surface instead of splitting imports across multiple package entrypoints.

## Why this package exists

- Keep the integration model simple: import one default export and use it everywhere in browser code.
- Preserve the familiar `new Utils(extension)` pattern for app-specific helper methods.
- Re-export the full browser-ready helper surface from `@carry0987/utils`, including common value helpers, fetch helpers, form helpers, storage helpers, event helpers, DOM helpers, and stylesheet helpers.

## What you get

- Static methods such as `deepMerge`, `deepEqual`, `generateUUID`, `sendData`, `sendFormData`, `getElem`, `setLocalValue`, `dispatchEvent`, and `injectStylesheet`.
- Live metadata such as `Utils.version`, `Utils.utilsVersion`, `Utils.stylesheetId`, and `Utils.replaceRule`.
- Instance extension support through the `Utils` constructor.

## Runtime model

Utils-Full-JS has one public runtime entrypoint and one default export:

```ts
import Utils from '@carry0987/utils-full';

const helper = new Utils({
	log(message) {
		console.log('[docs]', message);
	},
});

helper.log(Utils.version);
Utils.setLocalValue('last-version', Utils.version);
```

- The constructor is for your app-specific extension methods.
- The static methods come from the upstream browser entrypoint.
- The version and stylesheet-related properties stay wired to the underlying module state.

## Documentation map

- [Getting Started](./getting-started.md) covers installation, import styles, and the first interactive example.
- [Entrypoints](./entrypoints.md) explains the package format, the default export, and the live metadata properties.
- [Core Methods](./universal-utilities.md) covers object, URL, fetch, form, timing, and error helpers that are available on `Utils`.
- [Browser Utilities](./browser-utilities.md) covers DOM, events, storage, cookies, and runtime stylesheet helpers.

## Relationship to `@carry0987/utils`

This project does not replace the upstream package structure. It builds on top of it.

- Use `@carry0987/utils-full` when you want one browser-oriented default export.
- Use `@carry0987/utils` directly when you need finer-grained entrypoint control.
- The `utilsVersion` property lets you inspect which upstream `@carry0987/utils` release is bundled into the wrapper.

