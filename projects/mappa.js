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
    gis: "Geographic Information System",
    skillsTools: "SKILLS & TOOLS USED",
    projectInfo0: "PROJECT INFORMATION",
    projectInfo1: "This project was part of the University of Toronto's second-year engineering design course ECE297, and it involved designing and completing a working application similar to Google Maps, and communicating effectively with both technical supervisors and less technical clients.",
    projectInfo2: "The project was fully completed in C++, in a Linux development environment, in under 4 months by a team of 3 individuals. Unfortunately, a demo of our solution cannot be displayed publicly but here follows some important information of our map, which we named 'Mappa'.",
    team0: "TEAM & STRATEGY",
    team1: "Forming the team was the first stage of this project. In this stage, all group members became acquainted and agreed on the project goals, created a team charter, and established individual roles. The group prioritized a clear communication system, both personal and technical, to increase the individual effort of every member and the willingness to cooperate. Weekly meetings were held and Git, a version control software tool, was chosen to help manage the source code of the project and prevent concurrent work from conflicting.",
    infrastructure0: "BUILDING THE INFRASTRUCTURE",
    infrastructure1: "The first part for this project was to take advantage of two APIS that allowed us to query a geographic information database for information such as street names and intersection locations. To accomplish this, functions and data structures were created and implemented to store and retrieve data.",
    uiux0: "The team used EzGL, a graphics library, to visualize the map and display critical information for the users. Our main focus throughout this process was on designing a simple user interface (UI) and creating a pleasant user experience (UX).",
    uiux1: "Visual Features",
    uiux2: "100% Customizable",
    uiux3: "We wanted to give as much control to the user as possible and to make every feature on the map Customizable. One of our ideas as a result of this was a mode that allows the user to fully customize the map color scheme as he or she wishes and filter specific content from the map.",
    uiux4: "Powerful Search Bar",
    uiux5: "We built a search bar with the following capabilities:"
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
    gis: "Système d'information Géographique",
    skillsTools: "OUTILS UTILISÉS",
    projectInfo0: "INFO SUR LE PROJET",
    projectInfo1: "Ce grand projet impliquait la conception et la réalisation d'une application similaire à Google Maps en équipe, et une communication efficace avec les superviseurs techniques et les clients moins techniques.",
    projectInfo2: "Le projet a été entièrement réalisé en C ++, dans un environnement de développement Linux, en moins de 4 mois par une équipe de 3 personnes. Malheureusement, une démo de notre solution ne peut pas être affichée publiquement mais voici quelques informations importantes de notre carte, que nous avons nommée «Mappa».",
    team0: "ÉQUIPE ET STRATÉGIE",
    team1: "La formation de l'équipe était la première étape de ce projet. À ce stade, tous les membres du groupe se sont familiarisés et se sont mis d'accord sur les objectifs du projet, ont créé une charte d'équipe et défini les rôles individuels. Le groupe a donné la priorité à un système de communication clair, à la fois personnel et technique, pour augmenter l'effort individuel de chaque membre et la volonté de coopérer. Des réunions hebdomadaires ont eu lieu et Git, un outil logiciel de contrôle de version, a été choisi pour aider à gérer le source code du projet et éviter les conflits de travail simultané.",
    infrastructure0: "CONSTRUIRE L'INFRASTRUCTURE",
    infrastructure1: "La première partie de ce projet consistait à tirer parti de deux APIS qui nous ont permis d'interroger une base de données d'informations géographiques pour obtenir des informations telles que les noms de rues et les emplacements des intersections. Pour ce faire, des fonctions et des structures de données ont été créées et implémentées pour stocker et récupérer des données.",
    uiux0: "Nous avons utilisé EzGL, une bibliothèque graphique, pour visualiser la carte et afficher des informations critiques pour les utilisateurs. Notre objectif principal tout au long de ce processus était de concevoir une interface simple et créer une expérience agréable.",
    uiux1: "Caractéristiques Visuelles",
    uiux2: "100% Personnalisable",
    uiux3: "Nous voulions donner le plus de contrôle possible aux utilisateurs et rendre chaque fonctionnalité de la carte personnalisable. L'une de nos idées était un mode qui permet à l'utilisateur de personnaliser entièrement le jeu de couleurs de la carte comme il le souhaite et de filtrer le contenu spécifique de la carte.",
    uiux4: "Barre de Recherche Puissante",
    uiux5: "Nous avons construit une barre de recherche avec les capacités suivantes::"
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
    gis: "Sistema de Informações Geográficas",
    skillsTools: "FERRAMENTAS USADAS",
    projectInfo0: "INFORMAÇÕES DO PROJETO",
    projectInfo1: "Este grande projeto envolveu o design e a conclusão de um aplicativo semelhante ao Google Maps e a comunicação eficaz com supervisores técnicos e clientes menos técnicos.",
    projectInfo2: "O projeto foi totalmente concluído em C ++, em um ambiente de desenvolvimento Linux, em menos de 4 meses por uma equipe de 3 pessoas. Infelizmente, uma demonstração de nossa solução não pode ser exibida publicamente, mas aqui seguem algumas informações importantes de nosso mapa, que chamamos de 'Mappa'.",
    team0: "EQUIPE E ESTRATÉGIA",
    team1: "A formação da equipe foi a primeira etapa desse projeto. Nesse estágio, todos os membros do grupo se conheceram e concordaram com as metas do projeto, criaram um estatuto da equipe e estabeleceram papéis individuais. O grupo priorizou um sistema de comunicação claro, pessoal e técnico, para aumentar o esforço individual de cada um e a vontade de cooperação. Reuniões semanais foram realizadas e o Git, uma ferramenta de software de controle de versão, foi escolhido para ajudar a gerenciar o código-fonte do projeto e evitar o conflito de trabalhos simultâneos.",
    infrastructure0: "CONSTRUINDO A INFRAESTRUTURA",
    infrastructure1: "A primeira parte deste projeto foi aproveitar as vantagens de dois APIS que nos permitiram consultar um banco de dados de informações geográficas para obter informações como nomes de ruas e locais de interseção. Para isso, funções e estruturas de dados foram criadas e implementadas para armazenar e recuperar dados.",
    uiux0: "Usamos o EzGL, uma biblioteca gráfica, para visualizar o mapa e exibir informações críticas para os usuários. Nosso foco principal ao longo desse processo foi criar uma interface simples e uma experiência agradável.",
    uiux1: "Recursos Visuais",
    uiux2: "100% Personalizável",
    uiux3: "Queríamos dar o máximo de controle possível aos usuários e fazer com que todos os recursos do mapa fossem personalizáveis. Uma das nossas ideias como resultado disso foi um modo que permite ao usuário personalizar totalmente o esquema de cores do mapa como ele ou ela desejar e filtrar conteúdo específico do mapa.",
    uiux4: "Barra de Pesquisa Poderosa",
    uiux5: "Construímos uma barra de pesquisa com os seguintes recursos:"
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
    gis: "Sistema de Información Geográfica",
    skillsTools: "HERRAMIENTAS UTILIZADAS",
    projectInfo0: "INFORMACIÓN DEL PROYECTO",
    projectInfo1: "Este gran proyecto implicó diseñar y completar una aplicación similar a Google Maps en equipo, y comunicarse de manera efectiva tanto con los supervisores técnicos como con los clientes menos técnicos.",
    projectInfo2: "El proyecto se completó completamente en C ++, en un entorno de desarrollo Linux, en menos de 4 meses por un equipo de 3 personas. Desafortunadamente, una demostración de nuestra solución no se puede mostrar públicamente, pero a continuación se muestra información importante de nuestro mapa, que llamamos 'Mappa'.",
    team0: "EQUIPO Y ESTRATEGIA",
    team1: "Formar el equipo fue la primera etapa de este proyecto. En esta etapa, todos los miembros del grupo se familiarizaron y acordaron los objetivos del proyecto, crearon un estatuto de equipo y establecieron roles individuales. El grupo priorizó un sistema de comunicación claro, tanto personal como técnico, para incrementar el esfuerzo individual de cada miembro y la voluntad de cooperar. Se llevaron a cabo reuniones semanales y se eligió Git, una herramienta de software de control de versiones, para ayudar a administrar el source code del proyecto y evitar que trabajo concurrente entrara en conflicto.",
    infrastructure0: "CONSTRUYENDO LA INFRAESTRUCTURA",
    infrastructure1: "La primera parte de este proyecto fue aprovechar dos APIS que nos permitieron consultar una base de datos de información geográfica para obtener información como nombres de calles y ubicaciones de intersecciones. Para lograr esto, creamos e implementamos funciones y estructuras de datos para almacenar y recuperar datos.",
    uiux0: "Usamos EzGL, una biblioteca de gráficos, para visualizar el mapa y mostrar información crítica para los usuarios. Nuestro enfoque principal a lo largo de este proceso fue diseñar una interfaz simple y crear una experiencia agradable.",
    uiux1: "Características Visuales",
    uiux2: "100% Personalizable",
    uiux3: "Queríamos dar el mayor control posible a los usuarios y hacer que cada característica del mapa sea personalizable. Una de nuestras ideas como resultado de esto fue un modo que permite al usuario personalizar completamente el esquema de color del mapa como lo desee y filtrar contenido específico del mapa.",
    uiux4: "Potente Barra de Búsqueda",
    uiux5: "Creamos una barra de búsqueda con las siguientes capacidades:"
}

var lang = 0;
var langData = localStorage.getItem("langData");

if (langData == "en") {
    lang = en;
    localStorage.setItem("langData", langData);
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
    document.getElementById("gisText").innerHTML = lang.gis;
    document.getElementById("skillsToolsUsedText").innerHTML = lang.skillsTools;
    document.getElementById("projectInfoText0").innerHTML = lang.projectInfo0;
    document.getElementById("projectInfoText1").innerHTML = lang.projectInfo1;
    document.getElementById("projectInfoText2").innerHTML = lang.projectInfo2;
    document.getElementById("teamText0").innerHTML = lang.team0;
    document.getElementById("teamText1").innerHTML = lang.team1;
    document.getElementById("infrastructureText0").innerHTML = lang.infrastructure0;
    document.getElementById("infrastructureText1").innerHTML = lang.infrastructure1;
    document.getElementById("infrastructureText0").innerHTML = lang.infrastructure0;
    document.getElementById("uiuxText0").innerHTML = lang.uiux0;
    document.getElementById("uiuxText1").innerHTML = lang.uiux1;
    document.getElementById("uiuxText2").innerHTML = lang.uiux2;
    document.getElementById("uiuxText3").innerHTML = lang.uiux3;
    document.getElementById("uiuxText4").innerHTML = lang.uiux4;
    document.getElementById("uiuxText5").innerHTML = lang.uiux5;
}