import './initial_page.css'

export const heading = function () {
    let header  = document.createElement("div")
    header.innerHTML = `
                        <h1>One Piece Cafe</h1>
                        <br>
                        <div class="button-row">
                            <button class="button active-button" active="true" >HOME</button>
                            <button class="button" active="false" >MENU</button>
                        </div>
                        <br>

                            `

    header.classList.add('heading')
    return header
}

export const main = function() {
    let main = document.createElement("div")
    main.innerHTML =  `<div class="main">
                            <p>
                                Best Pizza in Grand Line
                                <br>
                                <br>
                                Made with passion since the Void Century 
                            </p>
                            <br>
                            <div id="sanji"></div>
                        </div>
                        `
    main.classList.add("main-box")
    return main
}

export const footer = function(){
    let footer = document.createElement("div")
    footer.innerHTML = `Copyright © 2023 krishnanshagarwal112  
                        <a href="www.github.com/krishnanshagarwal112">
                        <img src="../src/github.png" alt="" / class="git-img">
                        </a>`
    footer.classList.add("footer")
    return footer
}

// function foo(a){
//     console.log(a)
// }

// export const active_button = function(){
//     let div = document.createElement("div")
//     const btns = document.getElementsByClassName("button")
//     for(let i = 0; i < btns.length; i++){
//         let active = btns[i].getAttribute("active")
//         if(active == "true"){
//             btns[i].classList.add("active-button")
//         }
//         console.log()
//     }
//     div.classList.add("empty")
//     return div
// }