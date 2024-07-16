
import { webdev, graphicDesigner, fullstack, photography, d3 } from "@/components/asset/about";
import {CSS, figma, firebase, git, html, javascript, mongodb, nodejs, reactjs, redux, tailwindcss, threejs, typescript, github, Womp, Qwik, Vue, Mysql, Blender, Angular } from "@/components/asset/tech";
import { Project11, Project12, Project13, Project21, Project22, Project23, Project31, Project32, Project33, Project34, Googledrive, link, Screen1, Screen2, Screen3, Screen4, Screen6 } from "@/components/asset/project";

import { D3, fullstack as full, photography as photo, GraphicDzn } from "@/components/asset/Services";
import { keb, kebs, ke } from "@/components/asset/testimonials";

import {D2} from "@/components/asset/Hero"

const skills = [
    {
        image: Womp,
        name: "Womp",
    },
    {
        image: CSS,
        name: "CSS",
    },
    {
        image: javascript,
        name: "JAVASCRIPT",
    },
    {
        image: Vue,
        name: "vue",
    },
    {
        image: reactjs,
        name: "REACT",
    },
    {
        image: git,
        name: "GIT",
    },
    {
        image: nodejs,
        name: "NODE JS",
    },
    {
        image: Qwik,
        name: "qwik",
    },
    {
        image: mongodb,
        name: "MONGO DB",
    },
    {
        image: tailwindcss,
        name: "TAILWIND",
    },
    {
        image: typescript,
        name: "TYPESCRIPT",
    },
    {
        image: figma,
        name: "FIGMA",
    },
    {
        image: threejs,
        name: "THREEJS",
    },
    {
        image: redux,
        name: "REDUX",
    },
    {
        image: firebase,
        name:"Firebase"
    },
    {
        image: github,
        name: "Gsap"
    },
    {
        image: html,
        name: "HTML"
    },
    {
        image: Angular,
        name: "Angular"
    },
    {
        image: Blender,
        name: "Blender"
    },
    {
        image: Mysql ,
        name: "MySql"
    }
]

const services = [
    {
        title: "Full-Stack",
        icon: full,
        smalltxt: "Full-Stack"
    },
    {
        title: "Photography",
        icon: photo,
        smalltxt: "Photography",
    },
    {
        title: "3D Design",
        icon: D3,
        smalltxt: "3D ",
    },
    {
        title: "Graphic Design",
        icon: GraphicDzn,
        smalltxt: "Graphics",
    },
];

const about = [
    {
        title: "Full-Stack Developer",
        description: "Expertise in front-end and back-end technologies. I create interactive and user-friendly websites",
        image: webdev
    },

    {
        title: "Web & Mobile Developer",
        description: "Expertise in front-end and back-end technologies. I create interactive and user-friendly websites",
        image: graphicDesigner
    },

    {
        title: "Graphic Designer",
        description: "Expertise in front-end and back-end technologies. I create interactive and user-friendly websites",
        image: fullstack
    },

    {
        title: "3D designer",
        description: "Expertise in front-end and back-end technologies. I create interactive and user-friendly websites",
        image: photography
    },
]

const Designs = [
    {
        title: "Web Developer",
        description: "Expertise in front-end and back-end technologies. I create interactive and user-friendly websites",
        image: Screen1
    },

    {
        title: "Web Developer",
        description: "Expertise in front-end and back-end technologies. I create interactive and user-friendly websites",
        image: Screen2
    },

    {
        title: "Web Developer",
        description: "Expertise in front-end and back-end technologies. I create interactive and user-friendly websites",
        image: Screen3
    },

    {
        title: "Web Developer",
        description: "Expertise in front-end and back-end technologies. I create interactive and user-friendly websites",
        image: Screen4
    },
]


const projectsData ={
    webworks: [
        {
            name: "Shopsy",
            description:
                "This features a user-friendly platform enabling shoppers to effortlessly navigate and engage with a comprehensive online shopping experience.",
            tags: [
                {
                    name: "react",
                    color: "#2F13B8",
                },
                {
                    name: "next.js",
                    color: "#161EB8",
                },
                {
                    name: "tailwindcss",
                    color: "#FE0CB1",
                },
            ],
            image: Project11,
            source_code_link: "https://shopper-mvlt.onrender.com/#",
            source: link
        },
        {
            name: "Qwik Drive",
            description:
                "This features a user-friendly platform enabling customers to effortlessly utilize online car rental services.",
            tags: [
                {
                    name: "react",
                    color: "#2F13B8",
                },
                {
                    name: "restapi",
                    color: "#237328",
                },
                {
                    name: "tailwindcss",
                    color: "#FE0CB1",
                },
            ],
            image: Screen6,
            source_code_link: "https://qwik-drive.onrender.com/",
            source: github
        },
        
        {
            name: "HiLink",
            description:
                "This features a user-friendly interface that enables adventurers to effortlessly navigate and utilize a comprehensive range of outdoor exploration services.",
            tags: [
                {
                    name: "nextjs",
                    color: "#2F13B8",
                },
                {
                    name: "tailwindcss",
                    color: "#FE0CB1",
                },
            ],
            image: Screen4,
            source_code_link: "https://travel-g-bsjv.onrender.com/",
            source: link
        },

    ],

    mobilework: [
        {
            name: "Job Finder",
            description:
                "This features a user-friendly platform that enables job seekers to effortlessly navigate and utilize job-finding services.",
            tags: [
                {
                    name: "Figma",
                    color: "#EB35C7"
                },
                {
                    name: "Expo",
                    color: "#4B36B1",
                },
                {
                    name: "React-Native",
                    color: "#4B36B1",
                },
            ],
            image: Project22,
            source_code_link: "https://github.com/IsraelKenneth/Job_finder.git",
            source: figma
        },
        {
            name: "E-commerce",
            description:
                "This features a user-friendly platform enabling shoppers to effortlessly navigate and engage with a comprehensive online shopping experience.",
            tags: [ 
                {
                    name: "Figma",
                    color: "#EB35C7"
                },
                {
                    name: "Expo",
                    color: "#4B36B1",
                },
                {
                    name: "React-Native",
                    color: "#4B36B1",
                },
            ],
            image: Project23,
            source_code_link: "https://github.com/IsraelKenneth/E-commerce.git",
            source: figma
        },
        {
            name: "Airbnb Clone",
            description:
                "This features a user-friendly interface that enables guests to effortlessly browse and book unique accommodations worldwide. ",
            tags: [
                {
                    name: "Figma",
                    color: "#EB35C7"
                },
                {
                    name: "Expo",
                    color: "#4B36B1",
                },
                {
                    name: "React-Native",
                    color: "#4B36B1",
                },
            ],
            image: Project21,
            source_code_link: "https://github.com/IsraelKenneth/Airbnb_clone.git",
            source: figma
        },
    ],

    graphicworks:[
        {
            name: "Branding",
            description:
                "Featuring a user-friendly design, this service offers seamless access to essential branding tools, simplifying the path to impactful brand identity.",
            tags: [
                {
                    name: "Photoshop",
                    color: "#083898",
                },
                {
                    name: "Illustrator",
                    color: "#FEC20C",
                },

                {
                    name: "Figma",
                    color: "#083898",
                }
            ],
            image: Project34,
            source_code_link: "https://drive.google.com/drive/folders/13-LIY5QLgf73l6ZqljJdDOFmkb5OPkHu?usp=share_link",
            source: Googledrive
        },
        {
            name: "Graphic Design",
            description:
                "This features a user-friendly design interface, enabling effortless navigation through creative design services.",
            tags: [
                {
                    name: "Photoshop",
                    color: "#083898",
                },
                {
                    name: "Illustrator",
                    color: "#FEC20C",
                },

            ],
            image: Project31,
            source_code_link: "https://drive.google.com/drive/folders/1FEyAvAIE3WXqGTqMQMM0L51Iq1eH3fGF?usp=share_link",
            source: Googledrive
        },
        {
            name: "3D Design",
            description:
                "This features a user-friendly interface that enables seamless interaction with immersive 3D design experiences.",
            tags: [
                {
                    name: "Spline",
                    color: "#083898",
                },
                {
                    name: "Blender",
                    color: "#FEC20C",
                },
                {
                    name: "Womp",
                    color: "#083898",
                }
            ],
            image: D2,
            source_code_link: "https://drive.google.com/drive/folders/1gVFq5GUt2S8DJkyHnyzpfOIkQ4SeOMeK?usp=share_link",
            source: Googledrive
        },
    ],

    designworks:[
        {
            name: "Branding",
            description:
                "Design that showcases a diverese range of creative works.",
            tags: [
                {
                    name: "Photoshop",
                    color: "#083898",
                },
                {
                    name: "Illustrator",
                    color: "#FEC20C",
                },
            ],
            image: Project34,
            source_code_link: "https://drive.google.com/drive/folders/13-LIY5QLgf73l6ZqljJdDOFmkb5OPkHu?usp=share_link",
            source: Googledrive
        },
        {
            name: "Logo creation",
            description:
                "Design that showcases a diverese range of Logo works.",
            tags: [
                {
                    name: "Photoshop",
                    color: "#083898",
                },
                {
                    name: "Illustrator",
                    color: "#FEC20C",
                },
            ],
            image: Project31,
            source_code_link: "https://drive.google.com/drive/folders/1FEyAvAIE3WXqGTqMQMM0L51Iq1eH3fGF?usp=share_link",
            source: Googledrive
        },
        {
            name: "Flyer",
            description:
                "Design that showcases a diverese range of creative flyers.",
            tags: [
                {
                    name: "Photoshop",
                    color: "#083898",
                },
                {
                    name: "Illustrator",
                    color: "#FEC20C",
                },
            ],
            image: Project33,
            source_code_link: "https://drive.google.com/drive/folders/1gVFq5GUt2S8DJkyHnyzpfOIkQ4SeOMeK?usp=share_link",
            source: Googledrive
        },
    ]
}


const testimonials = [
        {
            testimonial:
                "Israel is an excellent team player in my view. We worked in the same unit as a team and he was always open to everyone’s opinion and very collaborative. He’s very smart too.",
            name: "Modesta Aziire",
            designation: "Youth development Advocate",
            company: "Ghana Commodity Exchange",
            image: ke,
        },
        {
            testimonial:
                "Je recommande vivement Kenneth pour des projets exceptionnels d'art en 3D et de conception UI en raison de sa créativité remarquable, de son souci du détail, de ses compétences techniques et de ses capacités de collaboration professionnelles, ce qui en fait un atout précieux pour toute équipe.",
            name: "Latifa Qatrani",
            designation: "Industrial Designer",
            company: "Designer industriel",
            image: kebs,
        },
        {
            testimonial:
                "From our school days, as well as our interaction and project meetings, I’ve gotten to know him as a highly skilled and passionate data mining specialist with a knack for programming and graphic design.",
            name: "Mary Immaculata ",
            designation: "Frontend Development ",
            company: "WALTERGATES GHANA LIMITED",
            image: keb,
        },
    ]
  const navLinks = [
        {
            id: "about",
            title: "About",
        },
        {
            id: "services",
            title: "Services",
        },
        {
            id: "testimonials",
            title: "Testimonial",
        },
        {
            id: "work",
            title: "Work",
        },
        {
            id: "contact",
            title: "Contact",
        },

    ];
    


export {about, Designs, navLinks, skills, projectsData, testimonials, services}