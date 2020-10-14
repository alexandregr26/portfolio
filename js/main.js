// Isotope Animation
$(document).ready(function () {

    window.addEventListener("hashchange", function () {
        window.scrollTo(window.scrollX, window.scrollY - 80);
    });

    $(window).click(function (e) {
        var spanX = (e.target);

        if (spanX.id != "list") {
            if ($(".navbar-collapse").hasClass("show")) {
                $('.navbar-collapse').removeClass("show");
            }
        }

    });

    let $btns = $('.button-group button');

    $btns.click(function (e) {
        $('.button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('#project-list').isotope({
            filter: selector
        });

        return false;
    })
});

// Language Translations
var en = {
    about: "About",
    work: "Work",
    skills: "Skills",
    community: "Community",
    education: "Education",
    contact: "Contact",
    hello: "Hello! My name is",
    welcome: "Welcome to my website, which I created to make our interaction more informative and pleasant.",
    resume: "Download Resume",
    about0: "About Me",
    about1: "I am a third-year student of Electrical and Computer Engineering pursuing a Business Minor at the University of Toronto. It is my firm belief that behind every project is a new challenge, a new goal, and a new solution to be discovered. For this reason, I am here to put my technical skills at the service of your creative ideas.",
    about2: "The focus of my work is to create simple and elegant solutions to complex problems. Thus, it is important to me to not only focus on the technical aspects of a project, but to be fully invested in your business goals. I look forward to working with you.",
    mywork: "My Work",
    all: "All",
    electrical: "Electrical",
    software: "Software",
    others: "Others",
    skills0: "Skills & Certificates",
    skills1: "Due to the different nature of my past and current projects, I have mastered and gained familiarity with a variety of tools. I am always looking to improve my current skills, and I am open to learning new ones.",
    languages: "Programming Languages:",
    languages2: "Languages: ",
    english: "English",
    portuguese: "Portuguese",
    french: "French",
    spanish: "Spanish",
    german: "German",
    fluent: "Fluent",
    advanced: "Advanced",
    beginner: "Beginner",
    certificates: " Certificates",
    volunteering0: "VOLUNTEERING & SOCIAL",
    volunteering1: "Community participation is very important in achieving social justice and creating a supportive, positive environment. I have always looked for opportunities to support my communities and believe that it was this path that strengthened my leadership skills and highlighted the importance of my role in my communities. In this sense, I know that these activities will bring me one step closer to achieving my long-term goals. These goals consist of being successful academically and becoming a responsible, positive contributor to society.",
    frosh0: "ENGINEERING ORIENTATION WEEK - LEADER",
    frosh1: "Introduced incoming students to the Univeristy of Toronto's campus and the Faculty of Applied Science & Engineering's values, traditions, and culture.",
    frosh2: "Lead a group of 44 first-year students throughout the Orientation program.",
    frosh3: "Role model appropriate academic and social behaviours to the incoming students and helped them transition from high school to university.",
    brasa0: "BRASA - Vice President",
    brasa1: "Implemented marketing and advertising strategies to expand the club’s influence within the University of Toronto's campus.",
    brasa2: "Managed social media pages to promote and organize events for Brazilian students in Toronto.",
    smc0: "ST. MICHAEL'S COLLEGE - HOUSE PRESIDENT",
    smc1: "Planned and hosted various house events and meetings to promote social wellbeing on residence.",
    smc2: "Helped to create a supportive, inclusive residence community that encouraged involvement and respect.",
    ece0: "ELECTRICAL AND COMPUTER ENGINEERING CLUB - FINANCE DIRECTOR",
    ece1: "Created and monitored a budget of $42000 for all club expenses during the 2018-2019 academic year.",
    ece2: "Maintained financial records and handled the accounts of the ECE Club.",
    ncdsb0: "NIAGARA CATHOLIC PILGRIMAGE - STUDENT VOLUNTEER",
    ncdsb1: "Leveraged communication skills to collect funds for the building of schools in Haiti, infrastructure projects, and other resources to help break the cycle of poverty.",
    ncdsb2: "Joined several other students in prayer services and Masses before and after a 15 kilometres walk.",
    ncdsb3: "Over $150,000 was raised across the eight schools from the Niagara Catholic District School Board to help those in need.",
    notl0: "NIAGARA-ON-THE-LAKE SOCCER CLUB - CAPTAIN",
    notl1: "Developed a strong work ethic and perseverance to uphold team standards.",
    notl2: "Communicated with a diverse group of athletes, coaches, and game officials for conflict resolution and fairness in the sport.",
    notl3: "Helped the team reach and win the 2017 Niagara Region Cup.",
    notl4: "Team's Top Scorer of the 2016 season.",
    myeducation: "EDUCATION & COURSES",
    firstyear: "First Year",
    secondyear: "Second Year",
    thirdyear: "Third Year"
}

var fr = {
    about: "Moi",
    work: "Travail",
    skills: "Skills",
    community: " Communauté",
    education: "Education",
    contact: "Contacter",
    hello: "Bonjour! Je m'appelle",
    welcome: "Bienvenue sur mon site, que j'ai créé pour rendre notre interaction plus informative et agréable.",
    resume: "Télécharger le CV",
    about0: "À propos de moi",
    about1: "Je suis un étudiant de troisième année en ingénierie électrique et informatique qui poursuit une Minor en Commerce à l'Université de Toronto. Je suis fermement convaincu que derrière chaque projet se cache un nouveau défi, un nouvel objectif et une nouvelle solution à découvrir. Pour cette raison, je suis là pour mettre mes compétences techniques au service de vos idées créatives.",
    about2: "L'objectif de mon travail est de créer des solutions simples et élégantes à des problèmes complexes. Ainsi, il est important pour moi de ne pas se concentrer uniquement sur les aspects techniques d'un projet, mais d'être pleinement investi dans vos objectifs commerciaux. J'ai hâte de travailler avec vous.",
    mywork: "Mon travail",
    all: "Tout",
    electrical: "Électrique",
    software: "Software",
    others: "Autres",
    skills0: "Outils",
    skills1: "En raison de la nature différente de mes projets passés et actuels, j'ai maîtrisé et pris connaissance d'une variété d'outils. Je cherche toujours à améliorer mes compétences actuelles et je suis ouvert à en apprendre de nouvelles.",
    languages: "Langages de Programmation:",
    languages2: "Langues: ",
    english: "Anglais",
    portuguese: "Portugais",
    french: "Français",
    spanish: "Espagnol",
    german: "Allemand",
    fluent: "Courant",
    advanced: "Avancée",
    beginner: "Débutant",
    certificates: "Certificats",
    volunteering0: "BÉNÉVOLAT ET SOCIAL",
    volunteering1: "La participation communautaire est très importante pour atteindre la justice sociale et créer un environnement positif. J'ai toujours cherché des opportunités pour soutenir mes communautés et je crois que c'est cette voie qui a renforcé mes compétences en leadership et souligné l'importance de mon rôle dans mes communautés. En ce sens, je sais que ces activités me rapprocheront un peu plus de la réalisation de mes objectifs à long terme. Ces objectifs consistent à réussir sur le plan académique et à devenir un contributeur responsable et positif à la société.",
    frosh0: "ENGINEERING ORIENTATION WEEK - CHEF",
    frosh1: "J'ai présenté aux nouveaux étudiants le campus de l'Université de Toronto et les valeurs, traditions et culture de la Faculty of Applied Science & Engineering.",
    frosh2: "J'ai dirigé un groupe de 44 étudiants de première année tout au long du programme d'orientation.",
    frosh3: "J'ai montré les comportements scolaires et sociaux appropriés aux étudiants entrants et les aider à passer du lycée à l'université.",
    brasa0: "BRASA - Vice Président",
    brasa1: "J'ai mis en œuvre de stratégies de marketing et de publicité pour étendre l'influence du club sur le campus de l'Université de Toronto.",
    brasa2: "J'ai géré des pages de médias sociaux pour promouvoir et organiser des événements pour les étudiants brésiliens à Toronto.",
    smc0: "ST. MICHAEL'S COLLEGE - Président",
    smc1: "J'ai planifié et organisé divers événements et réunions à la maison pour promouvoir le bien-être social à la résidence.",
    smc2: "J'ai aidé à créer une communauté de résidence solidaire et solidaire qui encourage l'implication et le respect.",
    ece0: "ELECTRICAL AND COMPUTER ENGINEERING CLUB - Directeur des Finances",
    ece1: "J'ai créé et suivi un budget de 42000 $ pour toutes les dépenses du club au cours de l'année universitaire 2018-2019.",
    ece2: "J'ai tenu des registres financiers et géré les comptes du ECE Club.",
    ncdsb0: "NIAGARA CATHOLIC PILGRIMAGE - BÉNÉVOLAT",
    ncdsb1: "J'ai utilisé mes compétences en communication pour collecter des fonds pour la construction d'écoles en Haïti, des projets d'infrastructure et d'autres ressources pour aider à briser le cycle de la pauvreté.",
    ncdsb2: "J'ai rejoint plusieurs autres étudiants pour des services de prière et des messes avant et après une marche de 15 kilomètres.",
    ncdsb3: "Plus de 150 000 $ ont été amassés pour les huit écoles du Niagara Catholic District School Board pour aider les élèves haïtiens.",
    notl0: "NIAGARA-ON-THE-LAKE SOCCER CLUB - Capitaine",
    notl1: "J'ai développé une solide éthique de travail et de la persévérance pour respecter les normes de l'équipe.",
    notl2: "J'ai communiqué avec un groupe diversifié d'athlètes, d'entraîneurs et d'officiels de match pour la résolution des conflits et l'équité dans le sport.",
    notl3: "J'ai aidé l'équipe à atteindre et à gagner la Niagara Region Cup 2017.",
    notl4: "Meilleur buteur de l'équipe de la saison 2016.",
    myeducation: "FORMATION ET COURS",
    firstyear: "Première Année",
    secondyear: "Deuxième Année",
    thirdyear: "Troisième Année"
}

var pt = {
    about: "Eu",
    work: "Trabalhos",
    skills: "Ferramentas",
    community: "Comunidade",
    education: "Educação",
    contact: "Contato",
    hello: "Olá! Meu nome é",
    welcome: "Bem vindo ao meu site, que criei para tornar nossa interacao mais informativa e agradavel.",
    resume: "Baixar Curriculo",
    about0: "Sobre mim",
    about1: "Eu sou um estudante no terceiro ano de Engenharia Elétrica e da Computação, tambem cursando um Business Minor na Universidade de Toronto. Eu acredito que por trás de cada projeto há um novo desafio, uma nova meta e uma nova solução a ser descoberta. Por isso estou aqui para colocar minhas habilidades técnicas a serviço de suas ideias criativas.",
    about2: "O foco do meu trabalho é criar soluções simples e elegantes para problemas complexos. Desta forma, é muito importante para mim não apenas focar nos aspectos técnicos de um projeto, mas estar totalmente investido em seus objetivos de negócio. Espero trabalhar com você em breve.",
    mywork: "Meus Trabalhos",
    all: "Todos",
    electrical: "Elétrica",
    software: "Software",
    others: "Outros",
    skills0: "Ferramentas & Certificados",
    skills1: "Devido à natureza diferente de meus projetos anteriores e atuais, dominei e ganhei familiaridade com uma variedade de ferramentas. Estou sempre procurando melhorar minhas habilidades atuais e estou aberto para aprender novas.",
    languages: "Linguagens de Programação:",
    languages2: "Línguas: ",
    english: "Inglês",
    portuguese: "Portugues",
    french: "Francês",
    spanish: "Espanhol",
    german: "Alemão",
    fluent: "Fluente",
    advanced: "Avançado",
    beginner: "Iniciante",
    certificates: " Certificados",
    volunteering0: "Serviços Sociais",
    volunteering1: "A participação na comunidade é muito importante para alcançar a justiça social e criar um ambiente positivo. Sempre busquei oportunidades de apoiar minhas comunidades e acredito que foi esse caminho que fortaleceu minhas habilidades de liderança e me fez perceber a importância do meu papel em minhas comunidades. Nesse sentido, sei que essas atividades me levarão um passo mais perto de alcançar meus objetivos de longo prazo. Esses objetivos consistem em ter sucesso acadêmico e se tornar um contribuinte responsável e positivo para a sociedade.",
    frosh0: "ENGINEERING ORIENTATION WEEK - LÍDER",
    frosh1: "Apresentei o campus da Universidade de Toronto e os valores, tradições e cultura do departamento de Engenharia para os novos alunos.",
    frosh2: "Liderei um grupo de 44 alunos do primeiro ano ao longo do programa de Orientação.",
    frosh3: "Mostrei um modelo de comportamento acadêmico e social apropriado para os novos alunos e os ajudei na transição do ensino médio para a universidade.",
    brasa0: "BRASA - Vice Presidente",
    brasa1: "Implementei estratégias de marketing e publicidade para expandir a influência do clube dentro do campus da Universidade de Toronto.",
    brasa2: "Gerenciei páginas de mídia sociais do time para promover e organizar eventos para estudantes brasileiros em Toronto.",
    smc0: "ST. MICHAEL'S COLLEGE - Presidente",
    smc1: "Planejei vários eventos e reuniões na casa para promover o bem-estar social na residência.",
    smc2: "Ajudei a criar uma comunidade residencial inclusiva e solidária que incentivava o envolvimento e o respeito.",
    ece0: "ELECTRICAL AND COMPUTER ENGINEERING CLUB - DIRETOR DE FINANÇAS",
    ece1: "Criei e monitorei um orçamento de $ 42.000 para todas as despesas do clube durante o ano acadêmico de 2018-2019.",
    ece2: "Eu mantive registros financeiros e administrei as contas do ECE Club",
    ncdsb0: "NIAGARA CATHOLIC PILGRIMAGE - ESTUDANTE VOLUNTÁRIO",
    ncdsb1: "Usei minhas habilidades de comunicação para coletar fundos para a construção de escolas no Haiti, projetos de infraestrutura e outros recursos para ajudar a quebrar o ciclo da pobreza.",
    ncdsb2: "Juntei-me a vários outros alunos para serviços de oração e missas antes e depois de uma caminhada de 15 quilômetros.",
    ncdsb3: "Mais de $ 150.000 CAD foram arrecadados por oito escolas do Niagara Catholic District School Board para ajudar os alunos haitianos.",
    notl0: "NIAGARA-ON-THE-LAKE SOCCER CLUB - Capitão",
    notl1: "Desenvolvi uma forte ética de trabalho e perseverança para manter os padrões da equipe.",
    notl2: "Comuniquei com um grupo diversificado de atletas, treinadores e oficiais de jogo para resolução de conflitos e justiça no esporte.",
    notl3: "Ajudei a equipe a alcançar e ganhar a Niagara Region Cup em 2017.",
    notl4: "Artilheiro da equipe na temporada 2016.",
    myeducation: "Educação e Cursos",
    firstyear: "Primeiro Ano",
    secondyear: "Segundo Ano",
    thirdyear: "Terceiro Ano"
}

var es = {
    about: "Yo",
    work: "Trabajos",
    skills: "Herramientas",
    community: "Comunidad",
    education: "Educacion",
    contact: "Contacto",
    hello: "Hola! Me llamo",
    welcome: "Bienvenido a mi sitio web, que creé para que nuestra interacción sea más informativa y agradable.",
    resume: "Descargar Currículum",
    about0: "Sobre Mi",
    about1: "Soy un estudiante de tercer año de Ingeniería Eléctrica e Informática que cursa un Minor de Business en la Universidad de Toronto. Creo firmemente que detrás de cada proyecto hay un nuevo desafío, un nuevo objetivo y una nueva solución por descubrir. Por eso estoy aquí para poner mis habilidades técnicas al servicio de tus ideas creativas.",
    about2: "El enfoque de mi trabajo es crear soluciones simples y elegantes a problemas complejos. Por lo tanto, es importante para mí no solo enfocarme en los aspectos técnicos de un proyecto, sino también estar completamente involucrado en sus objetivos comerciales. Tengo muchas ganas de trabajar con usted.",
    mywork: "Mis Trabajos",
    all: "Todos",
    electrical: "Eléctrica",
    software: "Software",
    others: "Otros",
    skills0: "Herramientas & Certificados",
    skills1: "Debido a la naturaleza diferente de mis proyectos pasados ​​y actuales, he dominado y familiarizado con una variedad de herramientas. Siempre busco mejorar mis habilidades actuales y estoy abierto a aprender nuevas.",
    languages: "Lenguajes de Programación: ",
    languages2: "Idiomas: ",
    english: "Inglés",
    portuguese: "Portugués",
    french: "Francés",
    spanish: "Español",
    german: "Alemán",
    fluent: "Fluido",
    advanced: "Avanzado",
    beginner: "Principiante",
    certificates: " Certificados",
    volunteering0: "Servicios Voluntariados & Sociales",
    volunteering1: "La participación de la comunidad es muy importante para lograr la justicia social y crear un entorno positivo y de apoyo. Siempre he buscado oportunidades para apoyar a mis comunidades y creo que fue este camino el que fortaleció mis habilidades de liderazgo y resaltó la importancia de mi rol en mis comunidades. En este sentido, sé que estas actividades me acercarán un paso más al logro de mis objetivos a largo plazo. Estos objetivos consisten en tener éxito académico y convertirse en un contribuyente responsable y positivo a la sociedad.",
    frosh0: "ENGINEERING ORIENTATION WEEK - LÍDER",
    frosh1: "Presenté a los estudiantes entrantes el campus de la Universidad de Toronto y los valores, tradiciones y cultura de la Faculty of Applied Science & Engineering",
    frosh2: "Diriji un grupo de 44 estudiantes a lo largo del programa de Orientación.",
    frosh3: "Mostré un modelo de comportamiento académico y social apropiado para los estudiantes y los ayudé en la transición de la escuela secundaria a la universidad.",
    brasa0: "BRASA - Vicepresidente",
    brasa1: "Implementé estrategias de marketing y publicidad para expandir la influencia del club dentro del campus de la Universidad de Toronto.",
    brasa2: "Gestioné páginas de redes sociales para promover y organizar eventos para estudiantes Brasileños en Toronto.",
    smc0: "ST. MICHAEL'S COLLEGE - PRESIDENTE",
    smc1: "Planifiqué y organicé varios eventos y reuniones en la casa para promover el bienestar social en la residencia.",
    smc2: "Ayudé a crear una comunidad de residencia inclusiva y solidaria que fomenta la participación y el respeto.",
    ece0: "ELECTRICAL AND COMPUTER ENGINEERING CLUB - Director de Finanzas",
    ece1: "Creé y supervisé un presupuesto de $ 42000 para todos los gastos del club durante el año académico 2018-2019.",
    ece2: "Mantuve registros financieros y manejé las cuentas del ECE Club.",
    ncdsb0: "NIAGARA CATHOLIC PILGRIMAGE - VOLUNTARIO",
    ncdsb1: "Usé mis habilidades de comunicación para recolectar fondos para la construcción de escuelas en Haití, proyectos de infraestructura y otros recursos para ayudar a romper el ciclo de la pobreza.",
    ncdsb2: "Me uní a varios otros estudiantes para servicios de oración y misas antes y después de una caminata de 15 kilómetros.",
    ncdsb3: "Recaudamos más de $ 150,000 CAD para ayudar a los estudiantes haitianos.",
    notl0: "NIAGARA-ON-THE-LAKE SOCCER CLUB - Capitán",
    notl1: "Desarrollé una sólida ética de trabajo y perseverancia para mantener los estándares del equipo.",
    notl2: "Me comuniqué con un grupo diverso de atletas, entrenadores y oficiales del juego para la resolución de conflictos y la equidad en el deporte.",
    notl3: "Ayudé al equipo a alcanzar y ganar la Niagara Region Cup 2017.",
    notl4: "Máximo goleador del equipo de la temporada 2016.",
    myeducation: "EDUCACIÓN Y CURSOS",
    firstyear: "Primer Año",
    secondyear: "Segundo Año",
    thirdyear: "Tercer Año"
}

// Standard Setup
var lang = 0;
var langData = localStorage.getItem("langData");

if (langData == "en") {
    lang = en;
    document.getElementById("list").value = langData;
}
else if (langData == "fr") {
    lang = fr;
    document.getElementById("list").value = langData;
} else if (langData == "pt") {
    lang = pt;
    document.getElementById("list").value = langData;
} else if (langData == "es") {
    lang = es;
    document.getElementById("list").value = langData;
} else {
    lang = en;
    getSelectValue();
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
    document.getElementById("helloText").innerHTML = lang.hello;
    document.getElementById("welcomeText").innerHTML = lang.welcome;
    document.getElementById("resumeText").innerHTML = lang.resume;
    document.getElementById("aboutText0").innerHTML = lang.about0;
    document.getElementById("aboutText1").innerHTML = lang.about1;
    document.getElementById("aboutText2").innerHTML = lang.about2;
    document.getElementById("myWorkText").innerHTML = lang.mywork;
    document.getElementById("allText").innerHTML = lang.all;
    document.getElementById("electricalText").innerHTML = lang.electrical;
    document.getElementById("softwareText").innerHTML = lang.software;
    document.getElementById("othersText").innerHTML = lang.others;
    document.getElementById("skillsText0").innerHTML = lang.skills0;
    document.getElementById("skillsText1").innerHTML = lang.skills1;
    document.getElementById("languagesText").innerHTML = lang.languages;
    document.getElementById("languagesText2").innerHTML = lang.languages2;
    document.getElementById("englishText").innerHTML = lang.english;
    document.getElementById("portugueseText").innerHTML = lang.portuguese;
    document.getElementById("frenchText").innerHTML = lang.french;
    document.getElementById("spanishText").innerHTML = lang.spanish;
    document.getElementById("germanText").innerHTML = lang.german;
    document.getElementById("fluentText").innerHTML = lang.fluent;
    document.getElementById("fluentText2").innerHTML = lang.fluent;
    document.getElementById("advancedText").innerHTML = lang.advanced;
    document.getElementById("advancedText2").innerHTML = lang.advanced;
    document.getElementById("beginnerText").innerHTML = lang.beginner;
    document.getElementById("certificatesText").innerHTML = lang.certificates;
    document.getElementById("volunteeringText0").innerHTML = lang.volunteering0;
    document.getElementById("volunteeringText1").innerHTML = lang.volunteering1;
    document.getElementById("froshText0").innerHTML = lang.frosh0;
    document.getElementById("froshText1").innerHTML = lang.frosh1;
    document.getElementById("froshText2").innerHTML = lang.frosh2;
    document.getElementById("froshText3").innerHTML = lang.frosh3;
    document.getElementById("brasaText0").innerHTML = lang.brasa0;
    document.getElementById("brasaText1").innerHTML = lang.brasa1;
    document.getElementById("brasaText2").innerHTML = lang.brasa2;
    document.getElementById("smcText0").innerHTML = lang.smc0;
    document.getElementById("smcText1").innerHTML = lang.smc1;
    document.getElementById("smcText2").innerHTML = lang.smc2;
    document.getElementById("eceText0").innerHTML = lang.ece0;
    document.getElementById("eceText1").innerHTML = lang.ece1;
    document.getElementById("eceText2").innerHTML = lang.ece2;
    document.getElementById("notlText0").innerHTML = lang.notl0;
    document.getElementById("notlText1").innerHTML = lang.notl1;
    document.getElementById("notlText2").innerHTML = lang.notl2;
    document.getElementById("notlText3").innerHTML = lang.notl3;
    document.getElementById("ncdsbText0").innerHTML = lang.ncdsb0;
    document.getElementById("ncdsbText1").innerHTML = lang.ncdsb1;
    document.getElementById("ncdsbText2").innerHTML = lang.ncdsb2;
    document.getElementById("ncdsbText3").innerHTML = lang.ncdsb3;
    document.getElementById("notlText4").innerHTML = lang.notl4;
    document.getElementById("myeducationText").innerHTML = lang.myeducation;
    document.getElementById("firstyearText").innerHTML = lang.firstyear;
    document.getElementById("secondyearText").innerHTML = lang.secondyear;
    document.getElementById("thirdyearText").innerHTML = lang.thirdyear;
}