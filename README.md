To Reproduce

```
git clone git@github.com:quidmonkey/ava-ignore-repro.git
cd ava-ignore-repro
npm install
npm test
```

The `npm test` command simply uses ava to run `foo.spec.js`, which fails as follows:

```
module.js:340
    throw err;
    ^

Error: Cannot find module 'foo.j2'
    at Function.Module._resolveFilename (module.js:338:15)
    at Function.Module._load (module.js:289:25)
```

Contents of .babelrc
```json
{
  "presets": ["es2015"],
  "ignore": [
    "**/*.j2"
  ]
}
```

Contents of foo.spec.js

```js
import test from 'ava';
import "babel-core/register";

import { doSomething } from './foo'
import template from 'foo.j2'; // webpack bundles alias the pathing for templates

test('test:doSomething', t => {
    const ret = doSomething();
    t.true(ret);
});
```

Contents of foo.js

```js
import template from 'foo.j2';  // webpack bundles alias the pathing for templates
                                // just want to ignore this when testing

export const doSomething = () => {
    // code
    return true;
};

export const render = () => {
    // generate template string code then feed to vdom
};
```
