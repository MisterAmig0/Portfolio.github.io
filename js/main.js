const menu_toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menu_toggle.addEventListener('click', () => {
    menu_toggle.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
});

const link = document.querySelectorAll('.languageSelector');
const homeA = document.querySelector('.home');
const aboutmeA = document.querySelector('.aboutme');
const projectA = document.querySelector('.project');
const contactA = document.querySelector('.contact');
const herobuttonA = document.querySelector('.herobutton'); 
const maininfoA = document.querySelector('.maininfo');
const maininfo2A = document.querySelector('.maininfo2');
const maininfo3A = document.querySelector('.maininfo3');


link.forEach(el => {
    el.addEventListener('click', () => {

        const attr = el.getAttribute('language');


        homeA.textContent = data[attr].home;
        aboutmeA.textContent = data[attr].aboutme;
        projectA.textContent = data[attr].project;
        contactA.textContent = data[attr].contact;
        herobuttonA.textContent = data[attr].herobutton;
        maininfoA.textContent = data[attr].maininfo;
        maininfo2A.textContent = data[attr].maininfo2;
        maininfo3A.textContent = data[attr].maininfo3;
    });
});



let data = {
    "english":
    {
        "home": "Home", 
        "aboutme": "About me", 
        "project": "Projects", 
        "contact": "Contact me", 
        "herobutton": "Get in touch",
        "maininfo": "I'm Sam student",
        "maininfo2": "/ Web Developer",
        "maininfo3": "Sint Lucas student and Font-End Developer",
    }, 

    "dutch": 
    {
        "home": "Start", 
        "aboutme": "Over mij", 
        "project": "Projecten", 
        "contact": "Contact mij",
        "herobutton": "Bereik mij",
        "maininfo": "Ik ben Sam student",
        "maininfo2": "/ Web Developer",
        "maininfo3": "Sint Lucas student en Fond-End Developer",
    }
}