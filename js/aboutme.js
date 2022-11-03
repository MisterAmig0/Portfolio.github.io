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
const infomationA = document.querySelector('.infomation');
const headerA = document.querySelector('.header ');
const header2A = document.querySelector('.header2');


link.forEach(el => {
    el.addEventListener('click', () => {

        const attr = el.getAttribute('language');

        homeA.textContent = data[attr].home;
        aboutmeA.textContent = data[attr].aboutme;
        projectA.textContent = data[attr].project;
        contactA.textContent = data[attr].contact;
        infomationA.textContent = data[attr].infomation;
        headerA.textContent = data[attr].header;
        header2A.textContent = data[attr].header2;
    });
});



let data = {
    "english":
    {
        "home": "Home", 
        "aboutme": "About me", 
        "project": "Projects", 
        "contact": "Contact me", 
        "infomation": "Hello! My name is Sam, 17 years old and I’m a starting developer.  I’m a student on Sint Lucas and follow a course Software Development. I live in Waalre near Eindhoven and lived there for my whole life.  Futhermore, I like to full stack developing, so I can do everything that is needed.  My interest started in 2018, but I didn’t do anything with it till 2020. Also, I’m trying to learn ethical hacking this is because this looks dope to do. My best coding skills now are CSS, HTML and PHP. I am now learning JS (JavaScript).Beside, coding I also like to play soccer / basketball and watch / play  Formula One.",
        "header": "About me",
        "header2": "This project",
    }, 

    "dutch": 
    {
        "home": "Start", 
        "aboutme": "Over mij", 
        "project": "Projecten", 
        "contact": "Contact mij",
        "infomation": "Hallo! Mijn naam is Sam, 17 jaar oud en ik ben een beginnend ontwikkelaar. Ik ben een student op Sint Lucas en volg een cursus Software Development. Ik woon in Waalre bij Eindhoven en heb daar mijn hele leven gewoond. Verder ontwikkel ik graag full stack, zodat ik alles kan doen wat nodig is. Mijn interesse begon in 2018, maar ik heb er tot 2020 niets mee gedaan. Ook Ik probeer ethisch hacken te leren, dit is omdat dit dope lijkt om te doen. Mijn beste codeervaardigheden zijn nu CSS, HTML en PHP. Ik ben nu JS (JavaScript) aan het leren.Naast coderen vind ik het ook leuk om te voetballen/basketballen en naar de Formule 1 te kijken/spelen.",
        "header": "Over mijzelf",
        "header2": "Dit project",
    }
}



