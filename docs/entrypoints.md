---
sidebar_position: 3
---

# Runtime Surface

Utils-Full-JS intentionally exposes one public runtime surface.

## Package import

Use the package like this:

```ts
import Utils from '@carry0987/utils-full';
```

The default export is both a constructor and a static helper container.

## Constructor behavior

Use the constructor when you want project-specific instance methods:

```ts showLineNumbers
import Utils from '@carry0987/utils-full';

const helper = new Utils({
  notify(message) {
    console.log(`[notify] ${message}`);
  },
});

helper.notify('ready');
```

The constructor does not hide any built-in functionality. It simply lets the instance carry your own methods alongside the library shape.

## Static helper behavior

Use the static side for the bundled utility methods:

```ts
Utils.deepMerge({ page: 1 }, { page: 2 });
Utils.sendData({ url: '/api/demo' });
Utils.setLocalValue('mode', 'docs');
Utils.dispatchEvent('utils-full:ready', document);
```

These statics are sourced from `@carry0987/utils/browser`, which already includes the upstream common helpers.

## Distributed files

This project currently ships three main artifacts:

- `dist/utils-full.esm.js` for modern ESM workflows
- `dist/utils-full.min.js` for UMD or direct browser usage
- `dist/index.d.ts` for published TypeScript declarations

## Live metadata properties

Several properties are exposed through `Object.defineProperties`, so they stay aligned with the underlying module state.

- `Utils.version` reports the wrapper package version.
- `Utils.utilsVersion` reports the upstream `@carry0987/utils` version.
- `Utils.stylesheetId` reflects the current stylesheet prefix.
- `Utils.replaceRule` reflects the current stylesheet selector replacement rule.

Because `stylesheetId` and `replaceRule` are read through getters, calls such as `Utils.setStylesheetId()` and `Utils.setReplaceRule()` are reflected immediately.

## Browser-first expectation

This wrapper should be treated as browser-oriented even though some common helpers are runtime-safe elsewhere.

- DOM, storage, cookie, event, and stylesheet helpers are all available on the same static surface.
- Some methods fail softly outside the browser, but DOM-heavy helpers still expect a real document.
- If you need strict SSR or Node.js-only boundaries, use `@carry0987/utils` directly instead of the full wrapper.
