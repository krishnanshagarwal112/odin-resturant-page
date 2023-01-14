import './initial_page.css'

import { heading, main, footer} from './initial_page.js'
import { menu } from './menu.js'

const content = document.getElementById("content")
const mid_box = document.createElement("div")
mid_box.classList.add("mid-box")
let middle = main()
mid_box.append(middle)
content.classList.add("content")



content.appendChild(heading())
content.appendChild(mid_box)

const btns = document.getElementsByClassName("button")
let activebtn = null;

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click",()=>{
        check()
        activebtn.setAttribute("active","false")
        activebtn.classList.remove("active-button")
        mid_box.removeChild(mid_box.firstChild)

        btns[i].setAttribute("active", "true")
        btns[i].classList.add("active-button")
        if(btns[i].innerHTML == "HOME"){
           middle = main()
        }
        else if(btns[i].innerHTML == "MENU"){
            middle = menu()
        }

        mid_box.appendChild(middle)
        console.log(middle)
    })
}

function check(){
    for(let i = 0; i < btns.length; i++){
        if(btns[i].getAttribute("active") == "true"){
            activebtn = btns[i]
        }
    }
}

// content.appendChild(main())

content.appendChild(footer())

console.log(btns)






