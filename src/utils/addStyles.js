class Styles {
    constructor(element) {
        this.element = element
    }

    convertCamelCaseToKebabCase(str) {
        return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
    }

    add(styleObject) {
        let styles = ''
        Object.values(styleObject).forEach((value, index) => {
            const key = Object.keys(styleObject)[index];
            const cssAttribut = this.convertCamelCaseToKebabCase(key)
            styles += `${cssAttribut}: ${value}; `
        });
        
        this.element.setAttribute("style", styles)
    }
    
}


function addStyles(element, styleObject) {
    const styles = new Styles(element)
    styles.add(styleObject)
}


export default addStyles