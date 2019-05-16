class DOMNodeCollection {
    constructor(elementsArray) {
        this.elementsArray = elementsArray;
    }
    
    html(string) {
        if (typeof string === "undefined") {
            return this.elementsArray[0].innerHTML;
        } else {
            this.elementsArray.forEach(ele => {
                ele.innerHTML = string;
            });
        }
    }

    empty() {
        this.html("");

    }
    remove(arg) {
        if (arg instanceof HTMLElement) {
            
        } else if (arg instanceof String) {

        } else if (arg instanceof DOMNodeCollection) {

        }

    }
    attr() {

    }
    addClass() {

    }
    removeClass() {

    }
    find() {

    }
    children() {

    }


}

module.exports = DOMNodeCollection;