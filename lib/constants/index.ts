export const services = [
  {
    id: '01',
    title: 'Full-Stack Development',
    description:
      'From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.',
    stacks: {
      '01': 'React, Node.js, Express.js',
      '02': 'REST APIs, Firebase, Docker',
      '03': 'Git, GitHub, Postman',
    },
  },
  {
    id: '02',
    title: 'UI/UX & Frontend',
    description:
      'Design is more than looks — it’s about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.',
    stacks: {
      '01': 'NextJs, TailwindCSS, GSAP',
      '02': 'Figma to Code',
      '03': 'HTML, CSS, JavaScript',
    },
  },
  {
    id: '03',
    title: 'Optimization',
    description:
      'Beyond handling data, I’m driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.',
    stacks: {
      '01': 'Data Structures & Algorithms',
      '02': 'DBMS, OOP, OS Fundamentals',
      '03': 'Data Pipelines, ETL, and Scalability',
    },
  },
];

export const containerVariants = {
  hidden: { opacity: 1 }, // keep opacity to avoid flicker, children handle entrance
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.06,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.01, 1, 0.3, 1] as const },
  },
};

export const LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Work',
    href: '/projects',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const PROJECT_CARDS = [
  {
    title: 'Pro Store',
    id: 1,
    bgColor: 'bg-blue-500',
    image: '/prostore.png',
  },
  {
    title: 'Travel App',
    id: 2,
    bgColor: 'bg-green-500',
    image: '/trips_app.png',
  },
  {
    title: 'Store It',
    id: 3,
    bgColor: 'bg-red-500',
    image: '/storeit_app.png',
  },
  {
    title: 'Title 4',
    id: 4,
    bgColor: 'bg-blue-500',
    image: '/storeit_app.png',
  },
  {
    title: 'Title 5',
    id: 5,
    bgColor: 'bg-green-500',
    image: '/storeit_app.png',
  },
  // {
  //   title: 'Title 6',
  //   id: 6,
  //   bgColor: 'bg-red-500',
  //   image: '/storeit_app.png',
  // },
  // {
  //   title: 'Title 7',
  //   id: 7,
  //   bgColor: 'bg-blue-500',
  //   image: '/storeit_app.png',
  // },
];
