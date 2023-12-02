
const header = document.querySelector("header") ;

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 120)
})

let menu = document.querySelector("#menu-icon")
let navlist = document.querySelector(".navlist")

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('active')

    console.log("amir", true)
};

// SCRIPT PROGRESS CIRCULAR

function progres_skills ( element, percentSkill ) {
    let counter = 0 ;
    setInterval(() => {
        if ( counter == percentSkill ) {
            clearInterval();
        } else {
            counter += 1;
            element.innerHTML = counter + "%";
        }
    } , 30)
}


progres_skills( document.querySelector(".one-skill #number"), 90 );
progres_skills( document.querySelector(".two-skill #number"), 35 );
progres_skills( document.querySelector(".three-skill #number"), 90 );
progres_skills( document.querySelector(".four-skill #number"), 47 );
progres_skills( document.querySelector(".five-skill #number"), 98 );
progres_skills( document.querySelector(".six-skill #number"), 87 );
progres_skills( document.querySelector(".seven-skill #number"), 75 );
progres_skills( document.querySelector(".eight-skill #number"), 85 );




//  // Écouter l'événement d'animation terminée
//  document.querySelector(".one-skill circle").addEventListener('animationstart', function () {
//     // Récupérer la valeur de l'attribut 'stroke-dashoffset' après l'animation
//     var finalStrokeDashoffset = window.getComputedStyle(document.querySelector(".one-skill circle")).getPropertyValue('stroke-dashoffset');

//     console.log( finalStrokeDashoffset );
//     // Utiliser la valeur dans d'autres propriétés CSS (par exemple, pour changer la couleur de fond)
//     // document.body.style.backgroundColor = 'rgba(255, 0, 0, ' + (parseFloat(finalStrokeDashoffset) / 472) + ')';
// });
// // Sélection de l'élément du cercle

// rayon = document.querySelector(".one-skill circle").getAttribute('r')
// longCirconference = 2 * Math.PI * parseInt(rayon) ;
// strokeValue = (90 * longCirconference) / 100

// console.log( rayon , longCirconference, strokeValue, Math.PI )

// document.querySelector(".one-skill circle").style.strokeDasharray = 15668983 ;
