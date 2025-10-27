# Usage
## HTML importing
Should work on any version of JS; input this in the `<body>` or the `<head>`:
```html
<script src="https://cdn.jsdelivr.net/gh/Tosoks67/Random-Number-Generator@master/random.js"></script>
```

## Importing inside a module (ES6+)
Always put it at the start of the module; Use the `.mjs` format for NodeJS; Use `<script type="module">` in HTML
```js
import { random } from "https://cdn.jsdelivr.net/gh/Tosoks67/Random-Number-Generator@master/random_import.js";
```

## Importing mid-script (ES6+)
You don't need to put it at the start; It still needs a module to work so use `.mjs` / `<script type="module">`
```js
import("https://cdn.jsdelivr.net/gh/Tosoks67/Random-Number-Generator@master/random_import.js")
.then((module) => {
    window.random = module.random;
})
.catch((error) => {
    console.error("Random-Number-Generator:", error);
});
```

### `random.js` is for importing using `<script>` while `random_import.js` is for module importing
