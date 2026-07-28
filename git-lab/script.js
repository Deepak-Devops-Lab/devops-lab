/* ==============================
   TYPING EFFECT
============================== */


const words = [

    "DevOps Engineer",
    "AWS Cloud Engineer",
    "Linux Administrator",
    "Terraform Enthusiast",
    "Python Automation"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


const typingElement = document.getElementById("typing");


function typingEffect(){


    let currentWord = words[wordIndex];


    if(!deleting){


        typingElement.textContent =
        currentWord.substring(0,charIndex++);


        if(charIndex > currentWord.length){

            deleting=true;

            setTimeout(typingEffect,1000);

            return;

        }


    }

    else{


        typingElement.textContent =
        currentWord.substring(0,charIndex--);


        if(charIndex < 0){

            deleting=false;

            wordIndex++;


            if(wordIndex >= words.length){

                wordIndex=0;

            }

        }

    }


    setTimeout(typingEffect,100);

}


typingEffect();
/* ==============================
   NAVBAR EFFECT
============================== */


window.addEventListener("scroll",()=>{


    const header=document.querySelector("header");
    
    
    if(window.scrollY > 50){
    
        header.style.background="#08101d";
    
    }
    
    else{
    
        header.style.background="rgba(11,17,32,.7)";
    
    }
    
    
    });

/* ==========================
   SCROLL ANIMATION
========================== */

const sections = document.querySelectorAll("section");

function revealSections(){

    sections.forEach(section=>{

        const sectionTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(sectionTop < window.innerHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
/* ==========================
   HAMBURGER MENU
========================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});