const bouttonTheme = document.querySelector(".champ")

if(bouttonTheme){
    let aGauche = true
    bouttonTheme.addEventListener("click",()=>{
        const bouttonArrondie = document.querySelector(".bouttonRond")
        if(aGauche){
            gsap.to(bouttonArrondie, {duration: .2,x: 40,ease: "power1.out"})
            bouttonArrondie.firstElementChild.className = "fa-regular fa-moon"
            bouttonArrondie.firstElementChild.style.color = "#d4dcff"
            bouttonArrondie.style.background = "#5396e7"
        }else{
            gsap.to(bouttonArrondie, {duration: .2,x:0,ease: "power1.out"})
            bouttonArrondie.firstElementChild.className = "fa-regular fa-sun"
            bouttonArrondie.firstElementChild.style.color = "#d2921c"
            bouttonArrondie.style.background = "#fff"
        }
        aGauche = !aGauche
        document.body.classList.toggle("theme-dark")
    })
    
}

const fonctionnalite = document.querySelector("#user-name")

if(fonctionnalite != null){
    const cadreFonctionnalite = document.querySelector(".fonctionnalite")
    fonctionnalite.addEventListener("click",()=>{
            cadreFonctionnalite.style.display = "block"
            gsap.fromTo(cadreFonctionnalite,{
                y:0,
                opacity:0
            },{
                y:13,
                opacity:1,
                duration:.3
            })
    })

    cadreFonctionnalite.addEventListener("mouseleave",function (){
        gsap.fromTo(cadreFonctionnalite,{
            y:13,
            opacity:1
        },{
            y:0,
            opacity:0,
            duration:.3
        })  
        setTimeout(()=>{cadreFonctionnalite.style.display = "none"},300)
    })
    
}

const afficherPopup =  function (){
    document.body.style.overflow = 'hidden'
    popupOverlay.style.display = 'block'
}

const pens = document.querySelectorAll('.pen')
const popupOverlay = document.querySelector('.popup-overlay')
if(pens != null){
    pens.forEach(pen=>pen.addEventListener("click",()=>{
        document.querySelector(".fonctionnalites").name="modifier"
        document.querySelector(".popup span").textContent = "modifier un tutoriel"
        document.querySelector("form input:last-child").value = "modifier"
        afficherPopup()
    }))
    
}

if(popupOverlay != null){
    popupOverlay.addEventListener('click',event=>{
        if (event.target.dataset.close) {
            document.body.style.overflow = 'visible'
            popupOverlay.style.display = 'none';
    }})
    
}

const popup = document.querySelector('.popup');

if(popup != null){
    popup.addEventListener('click', event =>event.stopPropagation())
}

const bouttonAjouter = document.querySelector(".ajouter")

if(bouttonAjouter != null){
        bouttonAjouter.addEventListener("click",()=>{
        document.querySelector(".fonctionnalites").name="ajouter"
        document.querySelector(".popup span").textContent = "ajouter un tutoriel"
        document.querySelector("form input:last-child").value = "ajouter"
        afficherPopup()
    })
}

const video = document.querySelector('.player');
const progressButton = document.querySelector('.videoARegarder  .progressButton');
const progressCircle = progressButton!= null ? progressButton.querySelector('circle'): null

if(video != null && progressButton != null && progressCircle != null){
    video.addEventListener('timeupdate', function () {
        const percentage = video.currentTime / video.duration;
        const offset = 283 * (1 - percentage);
        progressCircle.style.strokeDashoffset = offset.toString();
    });
    
    progressButton.addEventListener('click', function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
}

const icons = document.querySelectorAll(".fa-solid.fa-eye-slash")

if(icons != null){
    icons.forEach(icon =>{
        icon.addEventListener("click",function (){
            if(this.className == 'fa-solid fa-eye-slash'){
                this.className = 'fa-solid fa-eye'
                this.nextElementSibling.type = "text"
            }else{
                this.className = 'fa-solid fa-eye-slash'
                this.nextElementSibling.type = "password"
            }
        })
    })
}

window.addEventListener("load",()=>{
    gsap.fromTo(
        document.querySelector('.containerFormulaire'),
        {
            y:130   ,
            opacity:0
        },
        {
            y:0,
            opacity:1,
            duration:.8
        }
    )
})


document.addEventListener('DOMContentLoaded', function() {
    const tooltipContainers = document.querySelectorAll('.tooltip-container')
    if(tooltipContainers){
        tooltipContainers.forEach(container => {
            const tooltipText = container.getAttribute('data-tooltip')
            const tooltipElement = document.createElement('div')
            tooltipElement.classList.add('tooltip-text')
            tooltipElement.innerText = tooltipText
            container.appendChild(tooltipElement)
        
            container.addEventListener('mouseenter', function() {
              tooltipElement.style.visibility = 'visible'
              tooltipElement.style.opacity = '1'
            });
        
            container.addEventListener('mouseleave', function() {
              tooltipElement.style.visibility = 'hidden'
              tooltipElement.style.opacity = '0'
            });
          });
    }
  });
