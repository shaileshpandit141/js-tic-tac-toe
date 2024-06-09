class EventListener {
    constructor(element, eventType) {
        this.element = element
        this.eventType = eventType
    }

    addEventListener(listener) {
        this.element.addEventListener(this.eventType, listener)
    }
}


function useEventListener(element, eventType) {
    let eventListener = new EventListener(element, eventType)
    return [eventListener.addEventListener.bind(eventListener)]
}


export default useEventListener