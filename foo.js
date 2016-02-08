import template from 'foo.j2';  // webpack bundles alias the pathing for templates
                                // just want to ignore this when testing

export const doSomething = () => {
    // code
    return true;
};

export const render = () => {
    // generate template string code then feed to vdom
};
