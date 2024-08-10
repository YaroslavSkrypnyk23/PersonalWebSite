import { color } from "framer-motion";

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    sass,
    reactjs,
    tailwind,
    git,
    jquery,
    figma,
    vspu,
    education,
    olLyceum,
    chLyceum,
    threejs,
    bootstrap,
    vite,
    webpack,
    weather,
    store,
    system,
    jobs,
    univer_bach,
    university_mast,
    school_main,
    school1,
    school3,
    school5,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "tech",
        title: "Technologies"
    },
    {
        id: 'projects',
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];


const services = [
    {
        title: "English & Germany Teacher",
        icon: web,
    },
    {
        title: "Foreign Literature Teacher",
        icon: mobile,
    },
    {
        title: "Frontend Developer",
        icon: backend,
    },
    {
        title: "JavaScript Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Sass",
        icon: sass,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "JQuery",
        icon: jquery,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap 5",
        icon: bootstrap,
    },
    {
        name: "Vite",
        icon: vite,
    },
    {
        name: "Webpack",
        icon: webpack,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },

];

const experiences = [
    {
        title: "Secondary School Diploma",
        company_name: [
            "Berizko-Chechelnytska Gumnasium",
            "Demivka Gumnasium",
            "Olhopil Lyceum",
            "Chechelnyk Lyceum",
        ],
        icon: chLyceum,
        iconBg: "#383E56",
        date: "September 2006 - June 2018",
        points: [
            "Finished incomplete secondary education (9 years) at 'Demivka Gumnasium of Haisyn District, Vinnytsia Region'.",
            "Completed secondary education at the municipal institution 'Chechelnyk Lyceum of Haisyn District, Vinnytsia Region'.",
        ],
    },
    {
        title: "Bachelor's Diploma",
        company_name: [
            "Vinnitsia State Pedagogical University",
        ],
        icon: vspu,
        iconBg: "#E6DEDD",
        date: "Sep 2018 - Jun 2022",
        points: [
            "In 2022 completed the full course at Vinnitsia Mykhailo Kotsiubynski State Pedagogical University",
            "Educational programme Secondary Education.Language and Literature(English)",
            "Obtained qualification Bachelor of Secondary Education(Language and Literature(English))",
            "Professional qualification Teacher of the English language and Foreign Literature"
        ],
    },
    {
        title: "Master's Diploma",
        company_name: [
            "Vinnitsia State Pedagogical University",
        ],
        icon: vspu,
        iconBg: "#383E56",
        date: "Sep 2022 - Jan 2024",
        points: [
            "In 2024 completed the full course of Vinnitsia Mykhailo Kotsiubynski State Pedagogical University",
            "Educational Programme Secondary Education. English and Germany Language and Literature",
            "Obtained qualification Master of Secondary Education(Language and Literature(English))",
            "Professional qualification Teacher of the English and German languages",
        ],
    },
    {
        title: "English Teacher",
        company_name: [
            "Olhopil Lyceum",
        ],
        icon: olLyceum,
        iconBg: "#E6DEDD",
        date: "Sep 2021 - Nov 2024",
        points: [
            "Appointed to the position of Foreign Language Teacher with a part-time weekly workload for one academic year starting from September 1, 2021",
            "Worked as the English teacher in three classes: 5-A(2-nd subgroup), 5-B, and 1-A. I've gained experience in creating engaging lesson plans, managing classroom dynamics, and tailoring instruction to meet diverse student needs",
            "Resigned from the position of Foreign Language Teacher due to the expiration of the employment contract",
            "Appointed to the position of Foreign Language Teacher from September 1, 2022",
            "Continue working with pupils in 1-A, 1-B, 2, 3-A, 4(both subgroups), 6, 7-B, 7-A(2nd subgroup) and gained experience working with children with special educational needs",
            "Developed strong stress resistance by effectively handling the demands of teaching and maintaining a positive learning environment",
            "Demonstrated responsibility and commitment by consistently meeting deadlines and delivering quality educational outcomes",
            "Exhibited persistence and a results-oriented approach, striving to achieve educational goals and improve student performance",
            "Learned to manage time efficiently, balancing multiple tasks and responsibilities to ensure effective teaching and administrative duties",
            "Cultivated teamwork skills by collaborating with colleagues, participating in school and after school activities, and contributing to a supportive educational community"
        ]
    },
    {
        title: "Frontend Developer",
        company_name: [
            "Self-education",
        ],
        icon: education,
        iconBg: "#383E56",
        date: "May 2024 - Present",
        points: [
            "Resigned from the position of Foreign Language Teacher by mutual agreement",
            "In May started learning HTML/CSS/Sass/JQuery wathing YouTube tutorials and reading documentation by creating simple sites",
            "Created my first repository on GitHub and launch my first site on Git Hub pages",
            "Started learning JavaScript and improved my previous web sites with some  simple logic",
            "Tought to use Webpack&Vite to make building my projects more quick and easier",
            "Updated my styles skills with css frameworks like Bootstrap and Tailwind",
            "Stardet usig Three.js library to create good looking 3D user interfaces and web applications",
            "Continue my Frontend developer roadmap by learning React library on YouTube"
        ],
    },
];

const testimonials = [
    {
        description: "Bachelor's Journey",
        image: univer_bach,
    },
    {
        description: "Mastering It All",
        image: university_mast,
    },
    {
        description: "School Days",
        image: school_main,
    },
    {
        description: "First Step Forward",
        image: school1,
    },
    {
        description: "Third-Grade Adventures",
        image: school3,
    },
    {
        description: "Fifth-Grade Memories",
        image: school5,
    }
];


const projects = [
    {
        name: "Weather App",
        description:
            "Weather-App for 5 days weather(API from openWeatherMap) that can provide weather forecast including temperature, sunset&sunrise time, huminidy, pressure and wind speed&direction.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "orange-text-gradient",
            },
            {
                name: "javaScript",
                color: "pink-text-gradient",
            },
        ],
        image: weather,
        source_code_link: "https://yaroslavskrypnyk23.github.io/weather-app/",
    },
    {
        name: "Online Store",
        description:
            "Typical online-store that allows customers to select & filter different products such as clothes,electronics and  jewellery and provides a possibility to register in a personal cabinet.",
        tags: [
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javaScript",
                color: "pink-text-gradient",
            },
            {
                name: "html",
                color: "yellow-text-gradient",
            },
            {
                name: "bootstrap",
                color: "orange-text-gradient",
            },
        ],
        image: store,
        source_code_link: "https://yaroslavskrypnyk23.github.io/Online-Store/",
    },
    {
        name: "Jobs Website",
        description:
            "Basic react jobs website which can easely get all data from api(using file jobs.json) and than helps users to find job they are looking for.Also site provide a possibility to edit job or add a new one.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "javaScipt",
                color: "yellow-text-gradient",
            },
            {
                name: "vite",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: jobs,
        source_code_link: "https://yaroslavskrypnyk23.github.io/Jobs-Website/",
    },
    {
        name: "3D Solar System",
        description:
            "3D project of real Solar System by using Three.js library that includes all planets and their satellites, their orbits and dynamic stars bg.It can iteract with users by GUI controls that provide speed and visibility settings.",
        tags: [
            {
                name: "css",
                color: "blue-text-gradient",
            },
            {
                name: "javaScipt",
                color: "yellow-text-gradient",
            },
            {
                name: "webpack",
                color: "green-text-gradient",
            },
            {
                name: "three.js",
                color: "orange-text-gradient",
            },
        ],
        image: system,
        source_code_link: "https://yaroslavskrypnyk23.github.io/SolarSystem/",
    },

];

export { services, technologies, experiences, testimonials, projects };