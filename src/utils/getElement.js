
class GetElement {
    constructor(targetName = null) {
        if (targetName === null) {
            throw new Error("'targetName' not be null")
        }

        this.targetName = targetName
    }

    byClass() {
        return document.querySelector(`.${this.targetName}`)
    }

    byId() {
        return document.getElementById(this.targetName)
    }
}


function getElementByClass(className) {
    const getElement = new GetElement(className)
    return getElement.byClass()
}


function getElementById(idName) {
    const getElement = new GetElement(idName)
    return getElement.byId()
}


export { getElementByClass, getElementById }