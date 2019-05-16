const DOMNodeCollection = require('../src/dom_node_holder.js');
function $l(arg){
    if (arg instanceof HTMLElement) {
        let args = [arg];

        return new DOMNodeCollection(args);

    } else {
        const elements = document.querySelectorAll(arg);
        let elementArray = Array.from(elements);
        
        return new DOMNodeCollection(elementArray);
    }
    

}

window.$l = $l; // only done for testing purposes