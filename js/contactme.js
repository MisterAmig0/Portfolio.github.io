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
const contactheaderA = document.querySelector('.contactheader');
const contactnameA = document.querySelector('.contactname');
const contactemailA = document.querySelector('.contactemail');
const contactsubjectA = document.querySelector('.contactsubject');
const contactmessageA = document.querySelector('.contactmessage');


link.forEach(el => {
    el.addEventListener('click', () => {

        const attr = el.getAttribute('language');

        homeA.textContent = data[attr].home;
        aboutmeA.textContent = data[attr].aboutme;
        projectA.textContent = data[attr].project;
        contactA.textContent = data[attr].contact;
        contactheaderA.textContent = data[attr].contactheader;
        contactnameA.textContent = data[attr].contactname;
        contactemailA.textContent = data[attr].contactemail;
        contactsubjectA.textContent = data[attr].contactsubject;
        contactmessageA.textContent = data[attr].contactmessage;
    });
});



let data = {
    "english":
    {
        "home": "Home", 
        "aboutme": "About me", 
        "project": "Projects", 
        "contact": "Contact me", 
        "contactheader": "Get in touch with me.",
        "contactname": "Name",
        "contactemail": "Email",
        "contactsubject": "Subject",
        "contactmessage": "Message",
    }, 

    "dutch": 
    {
        "home": "Start", 
        "aboutme": "Over mij", 
        "project": "Projecten", 
        "contact": "Contact mij",
        "herobutton": "Bereik mij",
        "contactheader": "Laat uw bericht achter",
        "contactname": "Naam",
        "contactemail": "Email",
        "contactsubject": "Onderwerp",
        "contactmessage": "Bericht",
    }
}