/**
 * @author Thiago Sanches

 */


const main = document.querySelector('main')
const backgrounds = ['url(img/pcgamer1.png)','url(img/pcgamer2.png)','url(img/pcgamer3.png)' ]

let indice = 0

function slider(){
    indice ++
    if (indice >= backgrounds.length) {
        indice = 0
    }
    
main.style.backgroundImage = backgrounds[indice]
main.style.transition = 'background-image 1s ease-in-out'
}

setInterval(slider, 3000)





let ano = document.getElementById('copyrightYear')


let anoAtual = new Date().getFullYear()

ano.innerHTML = anoAtual
