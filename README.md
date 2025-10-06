# Usage
## Legacy importing (Should work on any version of browser JS)
You can import the `random` function by inputting in the `<body>` or the `<head>`:
```html
<script src="https://cdn.jsdelivr.net/gh/Tosoks67/Random-Number-Generator@master/random.js"></script>
```

## Importing inside a script (ES6+, should work on Node.js)
You can also import it using the `import` feature inside your script:
```js
import { random } from "https://cdn.jsdelivr.net/gh/Tosoks67/Random-Number-Generator@master/random_import.js";
```

## Do note that the `random.js` file is for the *Legacy importing* whilst the `random_import.js` is for inner-script importing (Don't mix them unless you want import errors)
