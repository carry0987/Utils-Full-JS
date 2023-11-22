# Utils-Full-JS
[![version](https://img.shields.io/npm/v/@carry0987/utils-full.svg)](https://www.npmjs.com/package/@carry0987/utils-full)  
A full library for `Utils` modules, include all methods from **[`@carry0987/utils`](https://www.npmjs.com/package/@carry0987/utils)**

## Installation
```bash
npm i @carry0987/utils-full
```

Or you can just download the file [`utils-full.min.js`](dist/utils-full.min.js) and include it in your HTML file:

```html
<script src="utils-full.min.js"></script>
```

## Usage
The following code is a simple example of using `Utils-Full-JS`, you can also find it from **[Demo](carry0987.github.io/Utils-Full-JS/)**:
```js
let util = new Utils({
    ll: (msg) => console.log(msg)
});
util.ll('Utils-Full');
Utils.getElem('#app h1.mb-3').innerHTML = 'Utils';
Utils.insertAfter(Utils.getElem('#app h1.mb-3'), `<h2 class="mb-3">Utils-Full v${Utils.version}</h2>`);
Utils.insertAfter(Utils.getElem('#app h2.mb-3'), `<h2 class="mb-3 text-center">Core v${Utils.utilsVersion}</h2>`);
Utils.addClass(Utils.getElem('#app h2.mb-3'), 'text-center');
let styles = {
    h1: {
        color: '#818181',
        fontSize: '50px'
    }
};
Utils.setStylesheetId('test');
Utils.injectStylesheet(styles, 1);
Utils.setLocalValue('test', {1:2,2:4,3:5});
console.log(Utils.getLocalValue('test'));
Utils.removeLocalValue('test');
Utils.setSessionValue('test', {1:2,2:4,3:5});
console.log(Utils.getSessionValue('test'));
// Test deepMerge
const target = {
    a: 1,
    b: {
        c: 2,
        d: 3,
    },
};
const source1 = {
    b: {
        c: 3,
        e: 4,
        haha: {
            a: 1,
            b: 2,
        }
    },
    f: 5,
};
const source2 = {
    g: {
        h: 6,
    },
};
const merged = Utils.deepMerge(target, source1, source2);
console.log(JSON.stringify(merged, null, 2));
// Test sendFormData
Utils.sendFormData({
    url: 'https://httpbin.org/post',
    data: {
        name: 'test',
        age: 18
    },
    success: (res) => {
        console.log(res);
    },
    error: (err) => {
        console.log(err);
    }
});
// Test Cookie operations
Utils.setCookie('testCookie', 'TEST-Value', {expires: '2024-02-16T10:01:15.000Z'});
console.log(Utils.getCookie('testCookie'));
// Test Event operations
function customEventHandler(event) {
    console.log('Event detail:', event.detail);
    console.log('Clicked!');
}

const h1Element = Utils.getElem('#app h1.mb-3');
if (h1Element && h1Element instanceof Element) {
    Utils.addEventListener(h1Element, 'click', () => {
        const myCustomEvent = Utils.createEvent('testEvent', {
            detail: {
                name: 'test',
                age: 18
            }
        });
        Utils.dispatchEvent(myCustomEvent, h1Element);
    });
    Utils.addEventListener(h1Element, 'testEvent', customEventHandler);
}
```
