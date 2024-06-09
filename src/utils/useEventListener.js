class EventListener {
    constructor(eventType, element) {
        this.eventType = eventType
        this.element = element
    }

    addEventListener(listener) {
        this.element.addEventListener(this.eventType, listener)
    }
}


function useEventListener(eventType, element) {
    let eventListener = new EventListener(eventType, element)
    return [eventListener.addEventListener.bind(eventListener)]
}


export default useEventListener