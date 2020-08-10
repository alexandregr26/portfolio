// Isotope Animation
$(document).ready(function () {

    let $btns = $('.projects .button-group button');

    $btns.click(function (e) {
        $('.projects .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.projects .row').isotope({
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
    skills0: "Skills & Experience",
    skills1: "Due to the different nature of my past and current projects, I have mastered and gained familiarity with a variety of tools. I am always looking to improve my current skills, and I am open to learning new ones.",
    languages: "Languages:",
    english: "English",
    portuguese: "Portuguese",
    french: "French",
    spanish: "Spanish",
    german: "German",
    volunteering0: "VOLUNTEERING & SOCIAL",
    volunteering1: "Community participation is very important in achieving social justice and creating a supportive, positive environment. I have always looked for opportunities to support my communities and believe that it was this path that strengthened my leadership skills and highlighted the importance of my role in my communities. In this sense, I know that these activities will bring me one step closer to achieving my long-term goals. These goals consist of being successful academically and becoming a responsible, positive contributor to society.",
    brasa0: "BRASA - DIRECTOR OF COMMUNICATIONS",
    brasa1: "Implemented marketing and advertising strategies to expand the club’s influence within the University of Toronto's campus",
    brasa2: "Managed social media pages to promote and organize events for Brazilian students in Toronto",
    smc0: "ST. MICHAEL'S COLLEGE - HOUSE PRESIDENT",
    smc1: "Planned and hosted various house events and meetings to promote social wellbeing on residence.",
    smc2: "Helped to create a supportive, inclusive residence community that encourages involvement and respect",
    ece0: "ELECTRICAL AND COMPUTER ENGINEERING CLUB - FINANCE DIRECTOR",
    ece1: "Created and monitored a budget of $42000 for all club expenses during the 2018-2019 academic year.",
    notl0: "NIAGARA-ON-THE-LAKE SOCCER CLUB - CAPTAIN",
    notl1: "Developed a strong work ethic and perseverance to uphold team standards.",
    notl2: "Communicated with a diverse group of athletes, coaches, and game officials for conflict resolution and fairness in the sport.",
    myeducation: "EDUCATION & COURSES",
    firstyear:"First Year",
    secondyear:"Second Year",
    thirdyear:"Third Year"
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
    languages: "Langues:",
    english: "Anglais",
    portuguese: "Portugais",
    french: "Français",
    spanish: "Espagnol",
    german: "Allemand",
    volunteering0: "BÉNÉVOLAT ET SOCIAL",
    volunteering1: "La participation communautaire est très importante pour atteindre la justice sociale et créer un environnement positif. J'ai toujours cherché des opportunités pour soutenir mes communautés et je crois que c'est cette voie qui a renforcé mes compétences en leadership et souligné l'importance de mon rôle dans mes communautés. En ce sens, je sais que ces activités me rapprocheront un peu plus de la réalisation de mes objectifs à long terme. Ces objectifs consistent à réussir sur le plan académique et à devenir un contributeur responsable et positif à la société.",
    brasa0: "BRASA - Directeur des Communications",
    brasa1: "J'ai mis en œuvre de stratégies de marketing et de publicité pour étendre l'influence du club sur le campus de l'Université de Toronto.",
    brasa2: "J'ai géré des pages de médias sociaux pour promouvoir et organiser des événements pour les étudiants brésiliens à Toronto.",
    smc0: "ST. MICHAEL'S COLLEGE - Président",
    smc1: "J'ai planifié et organisé divers événements et réunions à la maison pour promouvoir le bien-être social à la résidence.",
    smc2: "J'ai aidé à créer une communauté de résidence solidaire et solidaire qui encourage l'implication et le respect.",
    ece0: "ELECTRICAL AND COMPUTER ENGINEERING CLUB - Directeur des Finances",
    ece1: "J'ai créé et suivi un budget de 42000 $ pour toutes les dépenses du club au cours de l'année universitaire 2018-2019.",
    notl0: "NIAGARA-ON-THE-LAKE SOCCER CLUB - Capitaine",
    notl1: "J'ai développé une solide éthique de travail et de la persévérance pour respecter les normes de l'équipe.",
    notl2: "J'ai communiqué avec un groupe diversifié d'athlètes, d'entraîneurs et d'officiels de match pour la résolution des conflits et l'équité dans le sport.",
    myeducation: "FORMATION ET COURS",
    firstyear:"Première Année",
    secondyear:"Deuxième Année",
    thirdyear:"Troisième Année"
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
    skills0: "Ferramentas & Experiencias",
    skills1: "Devido à natureza diferente de meus projetos anteriores e atuais, dominei e ganhei familiaridade com uma variedade de ferramentas. Estou sempre procurando melhorar minhas habilidades atuais e estou aberto para aprender novas.",
    languages: "Línguas:",
    english: "Inglês",
    portuguese: "Portugues",
    french: "Francês",
    spanish: "Espanhol",
    german: "Alemão",
    volunteering0: "Serviços Sociais",
    volunteering1: "A participação na comunidade é muito importante para alcançar a justiça social e criar um ambiente positivo. Sempre busquei oportunidades de apoiar minhas comunidades e acredito que foi esse caminho que fortaleceu minhas habilidades de liderança e me fez perceber a importância do meu papel em minhas comunidades. Nesse sentido, sei que essas atividades me levarão um passo mais perto de alcançar meus objetivos de longo prazo. Esses objetivos consistem em ter sucesso acadêmico e se tornar um contribuinte responsável e positivo para a sociedade.",
    brasa0: "BRASA - DIRETOR DE COMUNICAÇÕES",
    brasa1: "Implementei estratégias de marketing e publicidade para expandir a influência do clube dentro do campus da Universidade de Toronto.",
    brasa2: "Gerenciei páginas de mídia sociais do time para promover e organizar eventos para estudantes brasileiros em Toronto.",
    smc0: "ST. MICHAEL'S COLLEGE - Presidente",
    smc1: "Planejei vários eventos e reuniões na casa para promover o bem-estar social na residência.",
    smc2: "Ajudei a criar uma comunidade residencial inclusiva e solidária que incentiva o envolvimento e o respeito.",
    ece0: "ELECTRICAL AND COMPUTER ENGINEERING CLUB - DIRETOR DE FINANÇAS",
    ece1: "Criei e monitorei um orçamento de $ 42.000 para todas as despesas do clube durante o ano acadêmico de 2018-2019.",
    notl0: "NIAGARA-ON-THE-LAKE SOCCER CLUB - Capitão",
    notl1: "Desenvolvi uma forte ética de trabalho e perseverança para manter os padrões da equipe.",
    notl2: "Comuniquei com um grupo diversificado de atletas, treinadores e oficiais de jogo para resolução de conflitos e justiça no esporte.",
    myeducation: "Educação e Cursos",
    firstyear:"Primeiro Ano",
    secondyear:"Segundo Ano",
    thirdyear:"Terceiro Ano"
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
    skills0: "Herramientas & Experiencia",
    skills1: "Debido a la naturaleza diferente de mis proyectos pasados ​​y actuales, he dominado y familiarizado con una variedad de herramientas. Siempre busco mejorar mis habilidades actuales y estoy abierto a aprender nuevas.",
    languages: "Idiomas:",
    english: "Inglés",
    portuguese: "Portugués",
    french: "Francés",
    spanish: "Español",
    german: "Alemán",
    volunteering0: "Servicios Voluntariados & Sociales",
    volunteering1: "La participación de la comunidad es muy importante para lograr la justicia social y crear un entorno positivo y de apoyo. Siempre he buscado oportunidades para apoyar a mis comunidades y creo que fue este camino el que fortaleció mis habilidades de liderazgo y resaltó la importancia de mi rol en mis comunidades. En este sentido, sé que estas actividades me acercarán un paso más al logro de mis objetivos a largo plazo. Estos objetivos consisten en tener éxito académico y convertirse en un contribuyente responsable y positivo a la sociedad.",
    brasa0: "BRASA - Director de Comunicaciones",
    brasa1: "Implementé estrategias de marketing y publicidad para expandir la influencia del club dentro del campus de la Universidad de Toronto.",
    brasa2: "Gestioné páginas de redes sociales para promover y organizar eventos para estudiantes Brasileños en Toronto.",
    smc0: "ST. MICHAEL'S COLLEGE - PRESIDENTE",
    smc1: "Planifiqué y organicé varios eventos y reuniones en la casa para promover el bienestar social en la residencia.",
    smc2: "Ayudé a crear una comunidad de residencia inclusiva y solidaria que fomenta la participación y el respeto.",
    ece0: "ELECTRICAL AND COMPUTER ENGINEERING CLUB - Director de Finanzas",
    ece1: "Creé y supervisé un presupuesto de $ 42000 para todos los gastos del club durante el año académico 2018-2019.",
    notl0: "NIAGARA-ON-THE-LAKE SOCCER CLUB - Capitán",
    notl1: "Desarrollé una sólida ética de trabajo y perseverancia para mantener los estándares del equipo.",
    notl2: "Me comuniqué con un grupo diverso de atletas, entrenadores y oficiales del juego para la resolución de conflictos y la equidad en el deporte.",
    myeducation: "EDUCACIÓN Y CURSOS",
    firstyear:"Primer Año",
    secondyear:"Segundo Año",
    thirdyear:"Tercer Año"
}

// Standard Setup
var lang = en;
updateLanguage();

// Select Item Physics
function getSelectValue() {
    var selectedValue = document.getElementById("list").value;
    console.log(selectedValue + " Mate");
    lang = selectedValue;
    if (lang === "en") {
        lang = en;
    } else if (lang === "fr") {
        lang = fr;
    } else if (lang === "pt") {
        lang = pt;
    } else if (lang === "es") {
        lang = es;
    }
    updateLanguage();
}

// Update Changes
function updateLanguage() {
    console.log(document.getElementById("aboutText").innerHTML);
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
    document.getElementById("englishText").innerHTML = lang.english;
    document.getElementById("portugueseText").innerHTML = lang.portuguese;
    document.getElementById("frenchText").innerHTML = lang.french;
    document.getElementById("spanishText").innerHTML = lang.spanish;
    document.getElementById("germanText").innerHTML = lang.german;
    document.getElementById("volunteeringText0").innerHTML = lang.volunteering0;
    document.getElementById("volunteeringText1").innerHTML = lang.volunteering1;
    document.getElementById("brasaText0").innerHTML = lang.brasa0;
    document.getElementById("brasaText1").innerHTML = lang.brasa1;
    document.getElementById("brasaText2").innerHTML = lang.brasa2;
    document.getElementById("smcText0").innerHTML = lang.smc0;
    document.getElementById("smcText1").innerHTML = lang.smc1;
    document.getElementById("smcText2").innerHTML = lang.smc2;
    document.getElementById("eceText0").innerHTML = lang.ece0;
    document.getElementById("eceText1").innerHTML = lang.ece1;  
    document.getElementById("notlText0").innerHTML = lang.notl0;
    document.getElementById("notlText1").innerHTML = lang.notl1;
    document.getElementById("notlText2").innerHTML = lang.notl2;
    document.getElementById("myeducationText").innerHTML = lang.myeducation;
    document.getElementById("firstyearText").innerHTML = lang.firstyear;
    document.getElementById("secondyearText").innerHTML = lang.secondyear;
    document.getElementById("thirdyearText").innerHTML = lang.thirdyear;
}