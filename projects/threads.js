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
    threads0: "User-Level Thread Package",
    threads1: "Multi-threaded Web Server",
    skillsTools: "SKILLS & TOOLS USED",
    projectInfo0: "PROJECT INFORMATION",
    projectInfo1: "These projects were designed by the University of Toronto's ECE344 Operating Systems staff to help students gain a deeper understanding of threads, processes, and concurrency. In the first project, I built a preemptive, user-level thread package with mutex locks and condition variables to simulate concurrency on processors.",
    projectInfo2: "In the second project, I developed a caching, multi-threaded web server to enable parallelism. This was done by creating a fixed-size pool of worker threads that handled HTTP requests upon arrival, and by caching files that were recently requested in memory. This implementation improved the run time of the original code by over 55%.",
    code0: "The Code",
    code1: "The source code for the Thread Package and Caching Web Server are available on my Github page, but on a private repository to encourage Academic Integrity. Please contact me if you wish to see the full code.",
    code2: "See Full Code"
}

var fr = {
    about: "About",
    work: "Work",
    skills: "Skills",
    community: "Community",
    education: "Education",
    contact: "Contact",
    back: "PRÉCÉDENT",
    next: "PROCHAIN",
    threads0: "User-Level Thread Package",
    threads1: "Multi-threaded Web Server",
    skillsTools: "OUTILS UTILISÉS",
    projectInfo0: "INFO SUR LE PROJET",
    projectInfo1: "Les projets ont été conçus par les professeurs des systèmes d'exploitation de l'Université de Toronto pour aider les étudiants à mieux comprendre threads, processus, et la concurrence. Dans le premier projet, j'ai construit un package de threads préemptif avec des 'mutex locks' et des 'condition variables' pour simuler la concurrence sur les processeurs.",
    projectInfo2: "Dans le deuxième projet, j'ai développé un 'multi-threadead web server' activer le parallélisme. Cela a été fait en créant un pool de threads qui géraient les requêtes HTTP à l'arrivée, et en mettant en cache les fichiers récemment demandés. Cette implémentation a amélioré la durée d'exécution du code d'origine de plus de 55%.",
    code0: "Le Code",
    code1: "Le code source du Thread Package et du Caching Web Server est disponible sur mon Github, mais sur un 'Private Repository' pour encourager l'intégrité académique. Veuillez me contacter si vous souhaitez voir le code complet.",
    code2: "VOIR LE CODE COMPLET"
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
    threads0: "User-Level Thread Package",
    threads1: "Multi-threaded Web Server",
    skillsTools: "FERRAMENTAS USADAS",
    projectInfo0: "INFORMAÇÕES DO PROJETO",
    projectInfo1: "Esses projetos foram elaborados pelos professore de sistemas operacionais (ECE344) da Universidade de Toronto para ajudar os alunos aprenderem mais sobre threads, processos e simultaneidade. No primeiro projeto, eu construí um pacote de thread preemptivo com 'mutex locks' e 'condition variables' para simular a simultaneidade em processadores.",
    projectInfo2: "No segundo projeto, desenvolvi um 'multi-threade web server' com cache para obter paralelismo. Isso foi feito criando um pool de threads que cuidavam de novas solicitações HTTP, e armazenando em cache arquivos solicitados recentemente. Esta implementação melhorou o tempo de execução do código original em mais de 55%.",
    code0: "O Código",
    code1: "O código para o Thread Package e Caching Web Server estão disponíveis na minha página do Github, mas em um repositório privado para encorajar a Integridade Acadêmica. Por favor, entre em contato comigo se você deseja ver o código completo.",
    code2: "VER CÓDIGO COMPLETO"
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
    next: "Próximo",
    threads0: "User-Level Thread Package",
    threads1: "Multi-threaded Web Server",
    skillsTools: "HERRAMIENTAS UTILIZADAS",
    projectInfo0: "INFORMACIÓN DEL PROYECTO",
    projectInfo1: "Estos proyectos fueron diseñados por los professores de sistemas operativos (ECE344) de la Universidad de Toronto para ayudar a los estudiantes a aprender mas sobre los threads, procesos, y concurrencia. En el primer proyecto, construí un 'thread package' preventivo con 'mutex locks' y 'condition variables' para simular la concurrencia en procesadores.",
    projectInfo2: "En el segundo proyecto, desarrollé un 'multi-threaded web server' con caché para obtener el paralelismo. Esto se hizo creando un grupo de threads que manejaban las solicitudes HTTP a su llegada, y almacenando en caché archivos que se solicitaron recientemente. Esta implementación mejoró el tiempo de ejecución en más del 55%. ",
    code0: "El Código",
    code1: "El código para el Thread Package y Caching Web Server están disponibles en mi página de Github, pero en un repositorio privado para fomentar la Integridad académica. Por favor contácteme si desea ver el código completo.",
    code2: "VER CÓDIGO COMPLETO"
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
    document.getElementById("threads0Text").innerHTML = lang.threads0;
    document.getElementById("threads2Text").innerHTML = lang.threads1;
    document.getElementById("skillsToolsUsedText").innerHTML = lang.skillsTools;
    document.getElementById("projectInfoText0").innerHTML = lang.projectInfo0;
    document.getElementById("projectInfoText1").innerHTML = lang.projectInfo1;
    document.getElementById("projectInfoText2").innerHTML = lang.projectInfo2;
    document.getElementById("codeText0").innerHTML = lang.code0;
    document.getElementById("codeText1").innerHTML = lang.code1;
    document.getElementById("codeText2").innerHTML = lang.code2;
}