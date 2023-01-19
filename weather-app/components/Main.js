import { getWeather } from "../modules/get"
import { UI } from "../UI"

const InfoCard = (props) => {
    // break condition
    const { key, value } = props
    if (typeof(value) === 'string' || typeof(value) === 'number') {
        return`
        <div class="InfoCard">
            <span class="key">${key}</span>
            <span class="value">${value}</span>
        </div>
        `
    }
    // recursion
    // create new key value to pass down
    return`
    <div class="InfoCard">
        <div class="key">${key}</div>
        <div class="value">
            ${Object.entries(value).map(item=>{
                return InfoCard({key:item[0], value:item[1]})
            }).join('')}
        </div>
    </div>
    `
}

const Main = () => {
    setTimeout(async()=>{
        const content = await getWeather({ location: UI.location ?? 'Imus' })
        if (content.cod === '404') {
            console.log(content)
            return
        }
        const iterableContent = Object.entries(content)
        const node = document.querySelector('.Main')
        const child = document.createElement('div')
        child.innerHTML =`
            <div class="key">
                ${iterableContent[11][1]}
            </div>
            <div class="value">
            ${iterableContent.map((item)=>{
                const key = item[0]
                const value = item[1]
                return InfoCard({key, value})
            }).join('')}
            </div>
        `
        node.innerHTML = ''
        node.appendChild(child)
    })
    return`
    <div class="Main">
        
    </div>
    `
}



export { Main }