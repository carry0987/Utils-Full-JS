---
sidebar_position: 2
---

# Getting Started

## Installation

Install the package with your preferred package manager:

```bash
pnpm add @carry0987/utils-full
```

You can also load the prebuilt UMD bundle in a browser page:

```html
<script src="https://unpkg.com/@carry0987/utils-full/dist/utils-full.min.js"></script>
```

In that mode, the library is available as the global `Utils` constructor.

## ESM usage

Use the package as a default import:

```ts
import Utils from '@carry0987/utils-full';
```

## Constructor plus statics

The library combines two patterns:

- `new Utils(extension)` creates an instance with your own helper methods.
- `Utils.someMethod()` calls the built-in static helpers re-exported from `@carry0987/utils/browser`.

Example:

```ts
import Utils from '@carry0987/utils-full';

const helper = new Utils({
  log(message) {
    console.log(`[app] ${message}`);
  },
});

const requestId = Utils.generateUUID();
const payload = Utils.deepMerge(
  { page: 1, filters: { status: 'draft' } },
  { filters: { status: 'published' }, requestId }
);

helper.log(`Created ${requestId}`);
Utils.setLocalValue('latest-request', payload);
```

## Interactive quick start

The playground below uses the real `Utils` export from this package.

```tsx live
function UtilsFullStarter() {
  const [requestId, setRequestId] = React.useState(() => Utils.generateUUID().slice(0, 8));

  const helper = new Utils({
    format(value) {
      return `Request ${value.toUpperCase()}`;
    },
  });

  const payload = Utils.deepMerge(
    { page: 1, filters: { status: 'draft' } },
    { filters: { status: 'published' }, requestId }
  );

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <div>
        <strong>{helper.format(requestId)}</strong>
      </div>
      <button className="button button--primary" onClick={() => setRequestId(Utils.generateUUID().slice(0, 8))}>
        Generate another ID
      </button>
      <pre style={{ margin: 0 }}>{JSON.stringify(payload, null, 2)}</pre>
    </div>
  );
}
```

## Script tag usage

If you are delivering a direct browser bundle, the same API is available through the global `Utils` object.

```html
<script src="https://unpkg.com/@carry0987/utils-full/dist/utils-full.min.js"></script>
<script>
const helper = new Utils({
  ll(message) {
    console.log(message);
  },
});

helper.ll(`Utils-Full ${Utils.version}`);
console.log(Utils.getCookie('locale'));
</script>
```

## Metadata properties

- `Utils.version` is the wrapper package version.
- `Utils.utilsVersion` is the bundled `@carry0987/utils` version.
- `Utils.stylesheetId` and `Utils.replaceRule` reflect the current stylesheet helper state.

## Next steps

Read [Entrypoints](./entrypoints.md) to understand the distribution model, then continue with [Core Methods](./universal-utilities.md) or [Browser Utilities](./browser-utilities.md) depending on the helpers you need first.
