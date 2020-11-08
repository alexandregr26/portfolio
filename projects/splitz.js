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
    projectInfo1: "This project was initially created to improve my own experience with the Google Chrome browser. I was looking for a way to organize my open tabs into different categories and upon realizing that there weren't any tools that solved this incovenience, Splitz was born. Splitz is a new Chrome Extension created to help users manage their tabs efficiently and have a better experience browsing the Internet.",
    moreInfo: "MORE INFO",
    features0: "Features",
    features1: "Create categories (Splitz) to organize your tabs",
    features2: "Drag and drop tabs to whatever order you desire",
    features3: "Quickly switch between tabs using keyboard shortcuts",
    features4: "Add new tabs",
    features5: "Delete tabs & categories (Splitz)",
    features5: "Dark Mode",
    download: "Download Splitz",
    sourceCode0: "Source Code",
    sourceCode1: "The source code for the Splitz Extension is fully available on my Github page, feel free to check it out anytime!",
    code: "See Full Code"
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
    projectInfo1: "Ce projet a été initialement créé pour améliorer ma propre expérience avec le navigateur Google Chrome. Je cherchais un moyen d'organiser mes onglets ouverts en différentes catégories quand j'ai réalise qu'il n'y avait aucun outil qui résolvait cette inconvénience, Splitz est né. Splitz est une nouvelle extension de Chrome créée pour aider les utilisateurs à gérer efficacement leurs onglets et à avoir une meilleure expérience de navigation sur Internet.",
    moreInfo: "PLUS D'INFO",
    features0: "Options",
    features1: "Créez des catégories (Splitz) pour organiser vos onglets",
    features2: "Glissez-déposez les onglets dans l'ordre de votre choix",
    features3: "Basculer rapidement entre les onglets à l'aide des raccourcis clavier",
    features4: "Ajouter de nouveaux onglets",
    features5: "Supprimer les onglets et les catégories (Splitz)",
    features5: "Mode sombre",
    download: "Télécharger Splitz",
    sourceCode0: "Code Source",
    sourceCode1: "Le code source de l'extension Splitz est entièrement disponible sur ma page Github, n'hésitez pas à le vérifier à tout moment!",
    code: "Voir le code complet"
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
    projectInfo1: "Este projeto foi inicialmente criado para melhorar minha própria experiência com o navegador do Google Chrome. Eu estava procurando uma maneira de organizar minhas abas abertas em diferentes categorias e ao perceber que não havia ferramentas que resolvessem essa inconveniencias, nasceu o Splitz. Splitz é uma nova extensão do Chrome criada para ajudar os usuários a gerenciar suas guias com eficiência e ter uma experiência melhor navegando na Internet.",
    moreInfo: "MAIS INFORMAÇÕES",
    features0: "Opções",
    features1: "Crie categorias (Splitz) para organizar suas abas",
    features2: "Arraste e solte as guias na ordem que desejar",
    features3: "Alterne rapidamente entre as guias usando os atalhos do teclado",
    features4: "Adicionar novas guias",
    features5: "Excluir guias e categorias (Splitz)",
    features5: "Modo escuro",
    download: "Baixe Splitz",
    sourceCode0: "Source Code",
    sourceCode1: "O código-fonte da extensão Splitz está totalmente disponível na minha página do Github, fique à vontade para conferir a qualquer momento!",
    code: "Ver Código Completo"
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
    projectInfo1: "Cree este proyecto inicialmente para mejorar mi propia experiencia con el navegador Google Chrome. Estaba buscando una forma de organizar mis pestañas abiertas en diferentes categorías y al darme cuenta de que no había ninguna herramienta que solucionara este inconveniencia, nació Splitz. Splitz es una nueva extensión de Chrome creada para ayudar a los usuarios a administrar sus pestañas de manera eficiente y tener una mejor experiencia al navegar por Internet.",
    moreInfo: "MÁS INFORMACIÓN",
    features0: "Opciones",
    features1: "Crea categorías (Splitz) para organizar tus pestañas",
    features2: "Arrastra y suelta pestañas en el orden que desees",
    features3: "Cambiar rápidamente de una pestaña a otra usando atajos de teclado",
    features4: "Agregar nuevas pestañas",
    features5: "Eliminar pestañas y categorías (Splitz)",
    features5: "Modo oscuro",
    download: "Descargar Splitz",
    sourceCode0: "Source Code",
    sourceCode1: "El código fuente de la extensión Splitz está completamente disponible en mi página de Github, ¡no dudes en consultarlo en cualquier momento!",
    code: "Ver código completo"
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
    document.getElementById("moreInfoText").innerHTML = lang.moreInfo;
    document.getElementById("featuresText0").innerHTML = lang.features0;
    document.getElementById("featuresText1").innerHTML = lang.features1;
    document.getElementById("featuresText2").innerHTML = lang.features2;
    document.getElementById("featuresText3").innerHTML = lang.features3;
    document.getElementById("featuresText4").innerHTML = lang.features4;
    document.getElementById("featuresText5").innerHTML = lang.features5;
    document.getElementById("downloadText").innerHTML = lang.download;
    document.getElementById("sourceCodeText0").innerHTML = lang.sourceCode0;
    document.getElementById("sourceCodeText1").innerHTML = lang.sourceCode1;
    document.getElementById("codeText").innerHTML = lang.code;
}