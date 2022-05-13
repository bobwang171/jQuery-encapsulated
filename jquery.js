window.jQuery = function (selectorOrArray) {
    let elements
    if (typeof selectorOrArray === "string") {  //重载
         elements = document.querySelectorAll(selectorOrArray)
    } else if
        (selectorOrArray instanceof Array) {
            elements=selectorOrArray
        }
    

return {
    addClass(className) {
        for (let i = 0; i < elements.length; i++)
            elements[i].classList.add(className);
        return this;
    },
    find(selectorOrArray) {
        let array = []
        for (let i = 0; i < elements.length; i++) {
            const elements2 = Array.from(elements[i].querySelectorAll(selectorOrArray))
            array = array.concat(elements2)
        }
        return jQuery(array);
    },
    each(fn) {
        for (let i = 0; i < elements.length; i++){
            fn.call(null,elements[i],i)
        }
        return this
    },
    parent() {
        array=[]
        this.each((x) => { array.push(x.parentNode) })
        return jQuery(array)
    },

}

}
window.$ = window.jQuery

    
