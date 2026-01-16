import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ecommerce,
  
  threejs,
  ims,
} from "../assets";


export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
   { id: "certificates",
     title: "Certificates" },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
  title: "Enterprise ERP Solutions",
  icon: creator,
},

];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
];



const experiences: TExperience[] = [
  {
    title: "Full Stack Developer",
    companyName: "AlephTav Consultancy and Trading PLC ",
    icon: reactjs, 
    iconBg: "#383E56",
    date: "Oct 26, 2023 - July 20, 2024",
    points: [
      "Designed and developed a full inventory management system using React for the frontend.",
      "Built RESTful APIs with Laravel and managed backend logic.",
      "Designed and maintained MySQL database schemas and queries.",
      "Implemented authentication, role-based access, and CRUD operations.",
    ],
  },
  {
    title: "Full Stack Developer & IT Support",
    companyName: "Hamtek Trading PLC",
    icon: web, // replace with your icon if you have one
    iconBg: "#E6DEDD",
    date: "Aug 12, 2024 - Aug 16, 2025",
    points: [
      "Developed and maintained full stack applications using React, Laravel, and MySQL.",
      "Provided IT support including system troubleshooting, hardware, and software maintenance.",
      "Collaborated with internal teams to improve system reliability and performance.",
      "Managed deployment, updates, and user support for internal systems.",
    ],
  },
  {
  title: "Frappe & ERPNext Developer",
  companyName: "Mevinai PLC",
  icon: web, 
  iconBg: "#E6DEDD",
  date: "Aug 22, 2025 - Dec 29, 2025",
  points: [
    "Worked on Frappe Framework and ERPNext customization to meet business requirements.",
    "Developed and customized backend features using Python within the Frappe framework.",
    "Contributed to Frappe UI development using React to improve user experience and interface consistency.",
    "Configured, customized, and supported ERPNext modules and workflows.",
    "Collaborated with team members to troubleshoot, enhance, and maintain ERP systems.",
  ],
},

];


const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I worked with Yordanos Bifa at Mevinai PLC on Frappe and ERPNext projects. She is dependable, professional, and demonstrates strong commitment and integrity in her work.",
    name: "Mesfin Tsegaye",
    designation: "Founder & CEO",
    company: "Mevinai PLC",
  },
];




const projects: TProject[] = [
  {
    name: "Inventory Management System (IMS)",
    description:
      "A full-featured inventory management system built with React.js and Laravel. It supports product management, stock tracking, role-based authentication, and CRUD operations with a MySQL database.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "red-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "rest-api",
        color: "pink-text-gradient",
      },
    ],
    image: ims, 
    sourceCodeLink: "https://github.com/YordiiB",
  },
  {
    name: "Electronics eCommerce Shop",
    description:
      "An electronics eCommerce platform built with Next.js and TypeScript featuring an admin dashboard, product and order management, authentication, and a scalable backend using Node.js and Prisma.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    sourceCodeLink: "https://github.com/YordiiB",
  },
];


export type TCertificate = {
  title: string;
  issuer: string;
  year: string;
  description?: string;
  link?: string;
  category: "Tech" | "Microsoft" | "Other";
};

export const certificates: TCertificate[] = [
   {
    category: "Microsoft",
    title: "Describe Cloud Computing",
    issuer: "Microsoft Learn",
    year: "2024",
    // link: "/assets/certificates/Describe-Cloud-Computing.pdf",
  },
  {
    category: "Microsoft",
    title: "Describe Features and Tools for Managing and Deploying Azure Resources",
    issuer: "Microsoft Learn",
    year: "Feb 12, 2024",
    // link: "/assets/certificates/azure_resources.pdf",
  },
  {
    category: "Microsoft",
    title: "Describe Cloud Service Types",
    issuer: "Microsoft Learn",
    year: "2024",
    // link: "/assets/certificates/cloud_service_types.pdf",
  },
  {
    category: "Tech",
    title: "Computer Maintenance and Networking",
    issuer: "Satcom Institute of Technology",
    year: "2022",
  },
  {
    category: "Tech",
    title: "Coding Courses",
    issuer: "OmniTech Consultancy Plc",
    year: "2016 – 2017",
  },
  {
    category: "Tech",
    title: "Adobe Photoshop",
    issuer: "Virtual Computer Engineering",
    year: "2016",
  },
  {
    category: "Tech",
    title: "Digital Marketing Workshop",
    issuer: " ",
    year: "2023",
  },
  {
    category: "Other",
    title: "IELTS Certificate",
    issuer: " ",
    year: " ",
  },
  {
    category: "Other",
    title: "Certificate of Appreciation",
    issuer: "Bahir Dar University – Institute of Technology (KTS)",
    year: "3 Years",
    description:
      "Awarded for dedicated service and contribution to the Knowledge and Technology Store (KTS).",
  },
 
];


export const personalInfo = {
  email: "yordibifa22@gmail.com",
  linkedin: "https://www.linkedin.com/in/yordanos-d-225b65200/",
  github: "https://github.com/YordiiB",
};

export { services, technologies, experiences, testimonials, projects };
