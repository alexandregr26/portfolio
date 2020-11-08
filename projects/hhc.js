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
    projectInfo1: "Due to the fast expansion of e-commerce, especially during the COVID-19 pandemic,the Hard Hat Cafe hired me as a webmaster to fully implement their first website. The website was required to have a modern and simple design, display the complete menu of the cafe, and have an ordering system for students to select what they wanted and when they wanted it. Since this was to be a quick-access website, being mobile-friendly was also of utmost importance for the management team. The website was completed within two months and I invite you to check it out here:",
    websiteFeatures0: "Website Features",
    websiteFeatures1: "Over 200 items were added to the website and are ready to be ordered anytime.",
    websiteFeatures2: "A database was synchronized with the website to determine when a specific product is sold out.",
    websiteFeatures3: "WooCommerce was used to implement all e-commerce functionalities and process orders.",
    websiteFeatures4: "A linear design was created for an easier navigation and better shopping experience.",
    websiteFeatures5: "Branding and Contact Information were placed strategically on the website for higher visability.",
    websiteFeatures6: "Content was designed to adapt specifically to an user's device to improve the website's mobile-friendliness.",
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
    projectInfo1: "En raison de l'expansion rapide du e-commerce, en particulier pendant la pandémie de COVID-19, le Hard Hat Cafe m'a embauché en tant que webmaster pour implémenter son premier site Web. Le site Web devait avoir un design moderne et simple, afficher le menu complet du café et disposer d'un système de commande permettant aux étudiants de sélectionner ce qu'ils voulaient et quand ils le voulaient. Comme il s'agissait d'un site Web à accès rapide, il était également de la plus haute importance pour l'équipe de direction d'être compatible avec les appareils mobiles. Le site a été terminé en deux mois et je vous invite à le consulter ici:",
    websiteFeatures0: "Fonctionnalités du Site Web",
    websiteFeatures1: "Plus de 200 articles ont été ajoutés au site Web et sont prêts à être commandés à tout moment.",
    websiteFeatures2: "Une base de données a été synchronisée avec le site Web pour déterminer quand un produit spécifique est épuisé.",
    websiteFeatures3: "J'ai utilisé WooCommerce pour implémenter toutes les fonctionnalités de commerce électronique et traiter les commandes.",
    websiteFeatures4: "Un design linéaire a été créé pour une navigation plus facile et une meilleure expérience d'achat.",
    websiteFeatures5: "L'image de marque et les coordonnées ont été placées stratégiquement sur le site Web pour une meilleure visibilité.",
    websiteFeatures6: "Le contenu a été conçu pour s'adapter spécifiquement à l'appareil de l'utilisateur afin d'améliorer la convivialité mobile du site Web.",
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
    projectInfo1: "Devido à rápida expansão do e-commerce, especialmente durante a pandemia COVID-19, o Hard Hat Cafe me contratou como webmaster para implementar seu primeiro website. Foi solicitado que o website tivesse um design moderno e simples, mostrasse o menu completo da cafeteria e tivesse um sistema de pedidos para que os alunos selecionassem o que queriam e quando queriam. Como esse seria um website de acesso rápido, ser compatível com dispositivos móveis também era de extrema importância para a equipe de gerenciamento. O site foi concluído em dois meses e convido você a conferi-lo aqui:",
    websiteFeatures0: "Características do Website",
    websiteFeatures1: "Mais de 200 itens foram adicionados ao site e estão prontos para serem pedidos a qualquer momento.",
    websiteFeatures2: "Um banco de dados foi sincronizado com o site para determinar quando um produto específico está esgotado.",
    websiteFeatures3: "WooCommerce foi usado para implementar todas as funcionalidades de e-commerce e processar pedidos.",
    websiteFeatures4: "Um design linear foi criado para uma navegação mais fácil e melhor experiência de compra.",
    websiteFeatures5: "Branding e informações de contato foram colocados estrategicamente no site para maior visibilidade.",
    websiteFeatures6: "O conteúdo foi projetado para se adaptar especificamente ao dispositivo de um usuário para melhorar a compatibilidade do site com dispositivos móveis.",
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
    projectInfo1: "Debido a la rápida expansión del e-commerce, especialmente durante la pandemia de COVID-19, Hard Hat Cafe me contrató como webmaster para implementar completamente su primer sitio web. Se requería que el sitio web tuviera un design moderno y simple, mostrara el menú completo de la cafetería y tuviera un sistema de pedidos para que los estudiantes seleccionaran lo que querían y cuando lo querían. Dado que este iba a ser un sitio web de acceso rápido, ser compatible con dispositivos móviles también era de grande importancia para el equipo de administración. Completé el sitio web en dos meses y los invito a que lo revisen aquí:",
    websiteFeatures0: "Características del Sitio Web",
    websiteFeatures1: "Agregué más de 200 artículos al sitio web que están listos para solicitarse en cualquier momento.",
    websiteFeatures2: "Se sincronizó una base de datos con el sitio web para determinar cuándo se agota un producto específico.",
    websiteFeatures3: "Usé WooCommerce para implementar todas las funcionalidades de comercio electrónico y procesar pedidos.",
    websiteFeatures4: "Se creó un design lineal para una navegación más fácil y una mejor experiencia de compra.",
    websiteFeatures5: "La información de contacto y de marca fueran colocadas estratégicamente en el sitio web para una mayor visibilidad.",
    websiteFeatures6: "El contenido se diseñó para adaptarse específicamente al dispositivo de un usuario para mejorar la compatibilidad con dispositivos móviles del sitio web.",
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
    document.getElementById("websiteFeaturesText0").innerHTML = lang.websiteFeatures0;
    document.getElementById("websiteFeaturesText1").innerHTML = lang.websiteFeatures1;
    document.getElementById("websiteFeaturesText2").innerHTML = lang.websiteFeatures2;
    document.getElementById("websiteFeaturesText3").innerHTML = lang.websiteFeatures3;
    document.getElementById("websiteFeaturesText4").innerHTML = lang.websiteFeatures4;
    document.getElementById("websiteFeaturesText5").innerHTML = lang.websiteFeatures5;
    document.getElementById("websiteFeaturesText6").innerHTML = lang.websiteFeatures6;
}