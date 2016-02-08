import test from 'ava';
import "babel-core/register";

import { doSomething } from './foo'

test('test:doSomething', t => {
    const ret = doSomething();
    t.true(ret);
});
