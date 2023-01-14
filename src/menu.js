import './menu.css'


export const menu = function (){
    let menu = document.createElement("div")

    menu.innerHTML = `
                    <div id="grid">
                        <div id="grid-item">
                            <img src="../src/pizza/salsiccia.png" alt="" />
                            <p>Tomato Sauce, Mozarella</p>
                            <p>Tomato, Homemade</p>
                            <p>sausage, Garlic, Basil</p>
                        </div>
                        <div id="grid-item">
                            <img src="../src/pizza/gamberi.png" alt="" />
                            <p>Tomato Sauce, Mozarella</p>
                            <p>Shrimps, Feta cheese,</p>
                            <p>Olives, Basil</p>
                        </div>
                        <div id="grid-item">
                            <img src="../src/pizza/pepe.png" alt="" />
                            <p>Tomato Sauce, Mozarella</p>
                            <p>Chilli flakes, Olives, Basil</p>
                        </div>
                        <div id="grid-item">
                            <img src="../src/pizza/disgustoso.png" alt="" />
                            <p>Tomato Sauce, Bacon</p>
                            <p>Pineapple, Olives, Basil</p>
                        </div>
                        <div id="grid-item">
                            <img src="../src/pizza/colorato.png" alt="" />
                            <p>Tomato Sauce, Mozarella</p>
                            <p>Onion, Pepper,</p>
                            <p>Champignons, Basil</p>
                        </div>
                        <div id="grid-item">
                            <img src="../src/pizza/pomodoro.png" alt="" />
                            <p>Tomato Sauce, Mozarella</p>
                            <p>Tomato,Onion, Feta cheese</p>
                            <p>Chilli</p>
                        </div>
                        <div id="grid-item">
                            <img src="../src/pizza/crema.png" alt="" />
                            <p>White sauce, Mozarella</p>
                            <p>Shrimps, Salmon,</p>
                            <p>Pineapple, Olives, Basil</p>
                        </div>
                        <div id="grid-item">
                            <img src="../src/pizza/carne.png" alt="" />
                            <p>Tomato Sauce, Mozarella</p>
                            <p>Homemade sausage, Bacon</p>
                            <p>Garlic, Pepper, Chilli</p>
                            </div>
                    </div>    
    
    `
    menu.classList.add("menu")
    return menu
}