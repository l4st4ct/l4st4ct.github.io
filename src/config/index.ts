import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Lissa Aguilar — UX Analyst & Service Designer",
  author: "Lissa Aguilar",
  description:
    "I specialize in accessibility, usability testing, and user interaction design for web and desktop applications.",
  lang: "en",
  siteLogo: "/profile.jpg",
  navLinks: [
    { text: "Projects", href: "/uxprojects" },
    { text: "Resume", href: "/resume" },
    { text: "Blog", href: "/blog"}
  ],
  socialLinks: [
    { text: "itch.io", href: "https://l4st4ct.itch.io/" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/lissaaguilar/" },
    { text: "Github", href: "https://github.com/l4st4ct" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: " ",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Lissa Aguilar",
    specialty: "UX Analyst & Service Designer",
    summary:
      "I specialize in accessibility, usability testing, and user interaction design for web and desktop applications.",
    email: "example@email.com",
  },
  experience: [
    {
      company: "Hello Inclusion",
      position: "CX Strategy and Creative Services Coordinator",
      startDate:"December 2025",
      endDate:"Present",
      summary:["tbd"]
    },
    {
      company: "RTX (Raytheon Technologies)",
      position: "UX Researcher/UX Analyst",
      startDate: "January 2023",
      endDate: "July 2024",
      summary: [
        "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
        "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
      ],
    },
    {
      company: "Pearson Virtual Schools",
      position: "Senior UX Researcher & Designer",
      startDate: "August 2019",
      endDate: "December 2022",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Genius Sports Group",
      position: "UX Strategist",
      startDate: "January 2018",
      endDate: "February 2019",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
    {
      company: "Media Temple, A GoDaddy Company",
      position: "UX Architect",
      startDate: "November 2015",
      endDate: "  December 2017",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
  projects: [
    {
      name: "Pearson Virtual Schools",
      summary: "10-12 word count",
      role: 'Senior UX Designer',
      linkPreview: "/studies/pearson",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/PVS_frame.png",
    },
    {
      name: "Genius Sports Group",
      summary: "10-12 word count",
      role: 'UX Strategist',
      linkPreview: "/studies/genius-sports",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/[Registry] Charity FAQ_charity_wireframe_snpshot.png",
    },
    {
      name: "Media Temple",
      summary: "10-12 word count",
      role: 'UX Architect',
      linkPreview: "/studies/media-temple",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/[Registry] Charity FAQ_charity_wireframe_snpshot.png",
    },
    {
      name: "XO Group | The Knot",
      summary: "10-12 word count",
      role: 'UX Designer',
      linkPreview: "/studies/xogroup",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/[Registry] Charity FAQ_charity_wireframe_snpshot.png",
    },
  ],
  posts: [
    {
      name: "Exploring Elm, Sound Design,AudioWeb API",
      linkPreview: "/posts/audio-elm",
    },
    {
      name: "Wayfinding in A Loud Digital Market",
      linkPreview: "/posts/wayfinding-loud-market",
     },
    {
      name: "Communication - Explain It To Me Like I'm 5...",
      linkPreview: "/posts/communication",
    },
    {
      name: "End of Year WTF Report",
      linkPreview: "/posts/eoy-wtf",
    },
  ],
  about: {
    description: `
      I'm a systems thinker who approaches user experience design by asking what motivates each design decision.. I'm fascinated by the tension between a business's needs and those of its users. They influence a product and its ecosystem. I believe in understanding the complete landscape — the complex interconnections between users, business goals, and technical constraints. Designing the appropriate solution means
        1. researching the landscape and validating the problem
        2. designing a solution,
        3. prototyping the interactions,
        4. testing the solution,
        5. Measuring its performance -is it solving the problem?

    `,
    image: "/profile.jpg",
  },
};

// #5755ff
