import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Main } from "./components/Main"

class UI {
    static app = document.querySelector('#app')

    static location = 'Imus'

    static render = () => {
        this.app.innerHTML =`
            ${Header()}
            ${Main()}
            ${Footer()}
        `
    }
}
export { UI }