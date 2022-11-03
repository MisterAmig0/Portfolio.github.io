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
const text1A = document.querySelector('.text1'); 
const text2A = document.querySelector('.text2');
const text3A = document.querySelector('.text3');


link.forEach(el => {
    el.addEventListener('click', () => {

        const attr = el.getAttribute('language');


        homeA.textContent = data[attr].home;
        aboutmeA.textContent = data[attr].aboutme;
        projectA.textContent = data[attr].project;
        contactA.textContent = data[attr].contact;
        text1A.textContent = data[attr].text1;
        text2A.textContent = data[attr].text2;
        text3A.textContent = data[attr].text3;
    });
});



let data = {
    "english":
    {
        "home": "Home", 
        "aboutme": "About me", 
        "project": "Projects", 
        "contact": "Contact me", 
        "text1": "This was a school project I needed to make to showcase what we were doing. People were walking by and seeing your projects. I loved doing this project because I learned a lot of PHPS in this project and made something that I was proud of. What tools / language / technology were used: I made this project in VScode, XXAMP for the live server and, I tried to use FileZilla Client but that didn’t work because I didn’t want to spent money. Link: This didn’t work, and I talked with Pieter about it. We will fix this later",
        "text2": " What is it: This is a website I made for school we needed to choose a site. And we needed to make it actuality the same as the mean site only using bootstrap. I decided to make the Bitcoin site, if I say so myself it is almost the same.  What tools / language / technology were used: I only used VScode for this website and for the language I used bootstrap and the bootstrap page / bootstrap builder. Link: This didn’t work, and I talked with Pieter about it. We will fix this later",
        "text3": "What is it: This was a website I made for fun just to test my skills. I didn’t have purpose. In my opinion I did a good job for the experience I had because this was after 6 months. The only thing that is buggy is “Skills” tab. Because I screwed op the resolution and I used bars to showcase my skills what is also not good. With this site I just learned a bit more and tested skills What tools / language / technology were used: I only used VScode for this website and for the language I used CSS and HTML nothing else because I didn’t learn a other thing. Link: This didn’t work, and I talked with Pieter about it. We will fix this later"

    }, 

    "dutch": 
    {
        "home": "Start", 
        "aboutme": "Over mij", 
        "project": "Projecten", 
        "contact": "Contact mij",
        "text1": "Dit was een schoolproject dat ik moest maken om te laten zien wat we aan het doen waren. Mensen liepen langs en zagen je projecten. Ik vond het geweldig om dit project te doen omdat ik veel PHPS heb geleerd in dit project en iets heb gemaakt waar ik trots op was. Welke tools / taal / technologie werden gebruikt: ik maakte dit project in VScode, XXAMP voor de live server en ik probeerde FileZilla Client te gebruiken, maar dat werkte niet omdat ik geen geld wilde uitgeven. Link: Dit werkte niet, en ik heb er met Pieter over gesproken. We zullen dit later oplossen",
        "text2": "Wat is het: Dit is een website die ik heb gemaakt voor school, we moesten een site kiezen. En we moesten het in werkelijkheid hetzelfde maken als de gemiddelde site, alleen met behulp van bootstrap. Ik besloot om de Bitcoin-site te maken, al zeg ik het zelf, het is bijna hetzelfde. Welke tools / taal / technologie werden gebruikt: Ik gebruikte alleen VScode voor deze website en voor de taal gebruikte ik bootstrap en de bootstrap-pagina / bootstrap-builder. Link: Dit werkte niet, en ik heb er met Pieter over gesproken. We zullen dit later oplossen",
        "text3": "Wat is het: Dit was een website die ik voor de lol heb gemaakt om mijn vaardigheden te testen. Ik had geen doel. Naar mijn mening heb ik goed werk geleverd voor de ervaring die ik had, want dit was na 6 maanden. Het enige dat buggy is, is het tabblad Vaardigheden. Omdat ik de resolutie heb verprutst en balken heb gebruikt om mijn vaardigheden te laten zien wat ook niet goed is. Met deze site heb ik net wat meer geleerd en vaardigheden getest Welke tools / taal / technologie werden gebruikt: ik gebruikte alleen VScode voor deze website en voor de taal gebruikte ik CSS en HTML niets anders omdat ik niets anders leerde. Link: Dit werkte niet, en ik heb er met Pieter over gesproken. We zullen dit later oplossen",
    }

 
}