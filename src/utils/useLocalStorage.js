class UseLocalStorage {
    constructor(name, data) {
        this.name = name
        this.data = JSON.stringify(data)
    }

    getItem() {
        return JSON.parse(localStorage.getItem(this.name) || this.data)
    }

    setItem(updatedObject) {
        localStorage.setItem(this.name, JSON.stringify(updatedObject))
    }
}


function useLocalStorage(name, data) {
    const useIt = new UseLocalStorage(name, data)
    return [useIt.getItem.bind(useIt), useIt.setItem.bind(useIt)]
}


export default useLocalStorage