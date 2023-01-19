import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Main } from "./components/Main"

class UI {
    static app = document.querySelector('#app')

    static location = 'Imus'

    static render = async() => {
        this.app.innerHTML =`
            ${Header()}
            ${await Main()}
            ${Footer()}
        `
    }
}
export { UI }