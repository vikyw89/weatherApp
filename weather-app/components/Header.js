import { UI } from "../UI"
import { Main } from "./Main"

const Header = () => {
    setTimeout(()=>{
        // cache dom
        const inputBar = document.querySelector('.Header > input')
        // focus inputBar
        inputBar.focus()
        // on input change
        inputBar.addEventListener('input',(e)=>{
            UI.location = e.target.value
            const main = document.querySelector('.Main')
            if (!main.outerHTML === Main()) {
                main.innerHTML = ''
            }
        })
    })
    return `
        <div class="Header">
            <span>Current Weather in </span></br>
            <input/>
        </div>
    `
}

export { Header }