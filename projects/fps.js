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
    projectInfo1: "This FPS game was completed and submitted as the final project for the University of Toronto's second-year engineering course ‘Computer Organization’ (ECE243). The project is an early arcade shooter inspired game which uses a simple ray tracing algorithm to draw a 3D environment for the player to walk around in and shoot fireballs at enemies. These animations were coded in the C language and designed to be performed on the DE1-SoC board using switches and push buttons.",
    codebutton: "See Game Code"
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
    projectInfo1: "Ce jeu FPS a été réalisé et présenté comme le projet final du sujet «Computer Organization» (ECE243) de Electrical and Computer Engineering à l'Université de Toronto. Le projet est inspiré des premiers jeux d'arcade et utilise un algorithme de ray tracing pour concevoir un environnement 3D permettant au joueur de marcher et de tirer des boules de feu sur les ennemis. Ces animations ont été codées en langage C et conçues pour être exécutées sur la carte DE1-SoC d'Altera à l'aide d'interrupteurs et de boutons.",
    codebutton: "Voir le Code du Jeu"
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
    projectInfo1: "Este jogo de FPS foi feito e apresentado como o projeto final para a materia 'Computer Organization' (ECE243) de Electrical and Computer Engineering na Universidade de Toronto. O projeto é inspirado nos primeiros jogos de arcade e usa um algoritmo de ray tracing para desenhar um ambiente 3D para o jogador andar e atirar bolas de fogo nos inimigos. Essas animações foram codificadas na linguagem C e projetadas para serem executadas na placa DE1-SoC da Altera usando interruptores e botões.",
    codebutton: "Ver Código do Jogo"
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
    projectInfo1: "Este juego de FPS fue creado y presentado como el proyecto final de la materia 'Computer Organization' (ECE243) de Electrical and Computer Engineering en la Universidad de Toronto. El proyecto fue inspirado en los primeros juegos de arcade y utiliza un algoritmo de ray tracing para diseñar un entorno 3D para que el jugador camine y dispare bolas de fuego a los enemigos. Estas animaciones fueron codificadas en lenguaje C y se diseñaron para ejecutarse en la placa DE1-SoC de Altera mediante interruptores y botones.",
    codebutton: "Ver código del juego"
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
    document.getElementById("codeText").innerHTML = lang.codebutton;
}