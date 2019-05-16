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

    }
    append(){
        if (arg instanceof HTMLElement) {
            this.elementsArray.forEach((ele) => {
                ele.innerHTML += arg.outerHTML;
            });
        } else if (arg instanceof String) {
            this.elementsArray.forEach((ele) =>{
                ele.innerHTML += arg;
            });
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