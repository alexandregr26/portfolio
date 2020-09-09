$(document).ready(function () {
    $(window).click(function (e) {
        var spanX = (e.target);

        if (spanX.id != "list") {
            if ($(".navbar-collapse").hasClass("show")) {
                $('.navbar-collapse').removeClass("show");
            }
        }

    });
});

// Language Translations
var en = {
    about: "About",
    work: "Work",
    skills: "Skills",
    community: "Community",
    education: "Education",
    contact: "Contact",
    back: "Previous",
    next: "Next",
    skillsTools: "SKILLS & TOOLS USED",
    projectInfo0: "PROJECT INFORMATION",
    projectInfo1: "This Low Power Sensor design was requested as a critical component of the Ground Station for the launch of the University of Toronto Aerospace Team's (UTAT) Defiance rocket. The Defiance rocket is one of UTAT’s hybrid rockets that has been in development since late 2017 with the goal of launching to an altitude that breaks the Canadian amateur altitude record of 13.4 km. The Ground Station, which this circuit was designed for, tracks the Defiance rocket and controls test/fill procedures on its launch pad. Due to the COVID-19 pandemic, this designed has not been fully tested since the required parts are located on campus and access currently is restricted.",
    specifications: "Specifications",
    requirements: "Requirements",
    components: "Components"
}

var fr = {
    about: "Moi",
    work: "Travail",
    skills: "Skills",
    community: " Communauté",
    education: "Education",
    contact: "Contacter",
    back: "Précédent",
    next: "Prochain",
    skillsTools: "OUTILS UTILISÉS",
    projectInfo0: "INFO SUR LE PROJET",
    projectInfo1: "Cette conception de capteur de faible puissance a été demandée en tant que composant essentiel de la GroundStation pour le lancement de la fusée Defiance de l'équipe University of Toronto Aerospace Team (UTAT). La fusée Defiance est l’une des fusées hybrides d’UTAT qui est en développement depuis la fin de 2017 dans le but de se lancer à une altitude qui bat le record canadien d’altitude amateur de 13,4 km. La GroundStation, pour laquelle ce circuit a été conçu, suit la fusée Defiance et contrôle les procédures de test / remplissage sur sa rampe de lancement. En raison de la pandémie COVID-19, cette conception n'a pas été entièrement testée car les pièces requises sont situées sur le campus et l'accès est actuellement limité.",
    specifications: "Caractéristiques",
    requirements: "Exigences",
    components: "Composants"
}

var pt = {
    about: "Eu",
    work: "Trabalhos",
    skills: "Ferramentas",
    community: "Comunidade",
    education: "Educação",
    contact: "Contato",
    back: "Anterior",
    next: "Próximo",
    skillsTools: "FERRAMENTAS USADAS",
    projectInfo0: "INFORMAÇÕES DO PROJETO",
    projectInfo1: "Este projeto de sensor de baixa potência foi solicitado como um componente crítico do GroundStation para o lançamento do foguete Defiance da University of Toronto Aerospace Team (UTAT). O foguete Defiance é um dos foguetes híbridos da UTAT que está em desenvolvimento desde o final de 2017 com o objetivo de ser lançado a uma altitude que quebra o recorde canadense de altitude amador de 13,4 km. O GroundStation, para o qual este circuito foi projetado, rastreia o foguete Defiance e controla os procedimentos de teste / enchimento em sua plataforma de lançamento. Devido à pandemia COVID-19, este projeto não foi totalmente testado, uma vez que as peças necessárias estão localizadas no campus e o acesso atualmente é restrito.",
    specifications: "Especificações",
    requirements: "Requisitos",
    components: "Componentes"
}

var es = {
    about: "Yo",
    work: "Trabajos",
    skills: "Herramientas",
    community: "Comunidad",
    education: "Educacion",
    contact: "Contacto",
    back: "Anterior",
    next: "Próximo",
    skillsTools: "HERRAMIENTAS UTILIZADAS",
    projectInfo0: "INFORMACIÓN DEL PROYECTO",
    projectInfo1: "Este design de sensor de baja potencia se solicitó como un componente crítico de GroundStation para el lanzamiento del cohete Defiance del equipo University of Toronto Aerospace Team (UTAT). El cohete Defiance es uno de los cohetes híbridos de UTAT que ha estado en desarrollo desde finales de 2017 con el objetivo de lanzarse a una altitud que rompa el récord canadiense de altitud amateur de 13,4 km. El GroundStation, para el que se diseñó este circuito, rastrea el cohete Defiance y controla los procedimientos de prueba / llenado en su plataforma de lanzamiento. Debido a la pandemia de COVID-19, este design no ha sido completamente probado ya que las piezas requeridas están ubicadas en el campus y el acceso actualmente está restringido.",
    specifications: "Especificaciones",
    requirements: "Requisitos",
    components: "Componentes"
}

var lang = 0;
var langData = localStorage.getItem("langData");

if (langData == "en") {
    lang = en;
    localStorage.setItem("langData", langData);
    document.getElementById("list").value = langData;
} else if (langData == "fr") {
    lang = fr;
    localStorage.setItem("langData", langData);
    document.getElementById("list").value = langData;
} else if (langData == "pt") {
    lang = pt;
    localStorage.setItem("langData", langData);
    document.getElementById("list").value = langData;
} else if (langData == "es") {
    lang = es;
    localStorage.setItem("langData", langData);
    document.getElementById("list").value = langData;
}
updateLanguage();

// Select Item Physics
function getSelectValue() {
    var selectedValue = document.getElementById("list").value;
    lang = selectedValue;
    if (lang === "en") {
        lang = en;
        langData = "en";
        localStorage.setItem("langData", langData);
    } else if (lang === "fr") {
        lang = fr;
        langData = "fr";
        localStorage.setItem("langData", langData);
    } else if (lang === "pt") {
        lang = pt;
        langData = "pt";
        localStorage.setItem("langData", langData);
    } else if (lang === "es") {
        lang = es;
        langData = "es";
        localStorage.setItem("langData", langData);
    }
    updateLanguage();
}

// Update Changes
function updateLanguage() {
    document.getElementById("aboutText").innerHTML = lang.about;
    document.getElementById("workText").innerHTML = lang.work;
    document.getElementById("skillsText").innerHTML = lang.skills;
    document.getElementById("communityText").innerHTML = lang.community;
    document.getElementById("educationText").innerHTML = lang.education;
    document.getElementById("contactText").innerHTML = lang.contact;
    document.getElementById("backText").innerHTML = lang.back;
    document.getElementById("nextText").innerHTML = lang.next;
    document.getElementById("skillsToolsUsedText").innerHTML = lang.skillsTools;
    document.getElementById("projectInfoText0").innerHTML = lang.projectInfo0;
    document.getElementById("projectInfoText1").innerHTML = lang.projectInfo1;
    document.getElementById("requirementsText").innerHTML = lang.requirements;
    document.getElementById("componentsText").innerHTML = lang.components;
    document.getElementById("specificationsText").innerHTML = lang.specifications;
}