import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Lissa Aguilar — UX Analyst & Service Designer",
  author: "Lissa Aguilar",
  description:
    "I specialize in accessibility, usability testing, and user interaction design for web and desktop applications.",
  lang: "en",
  siteLogo: "/profile.jpg",
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/lissaaguilar/" },
    { text: "Github", href: "https://github.com/l4st4ct" },
    { text: "itch.io", href: "https://l4st4ct.itch.io/" },
  ],
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Lissa Aguilar",
    specialty: "UX Analyst & Service Designer",
    summary:
      "I specialize in accessibility, usability testing, and user interaction design for web and desktop applications.",
    email: "lissa.aguilar@gmail.com",
  },
  experience: [
      {
      company: "RTX (Raytheon Technologies)",
      position: "UX Researcher/BA Analyst",
      startDate: "January 2023",
      endDate: "July 2024",
      summary: [
        "Conducted 5-8 usability studies monthly for ADX Migration and Learning Center experience, analyzed research, and presented findings;",
        "Created continuous discovery process for ADX Program to test web page designs weekly;",
        "Conducted accessibility assessment on ADX Migration Learning Center website and designed recommendations based on 508 and WCAG 2.1 compliance;",
        "Created card sorting and tree testing activities to test new content and concepts on ADX Migration Learning Center website redesign, recruited participants, analyzed results with actionable next steps to take on intranet website using PlaybookUX platform;",
        "Created documents for building research operations and research best practices documentation, saved on UX team Confluence page; Conducted heuristics analysis for 20 intranet web pages, analyzed page analytics and shared findings in Power BI report with page owners;",
        "Scheduled and hosted Zoom demonstrations and learning sessions on Microsoft O365 Planner for company employees.",
      ],
    },
    {
      company: "Pearson Virtual Schools",
      position: "Senior UX Designer",
      startDate: "August 2019",
      endDate: "December 2022",
      summary: [
        "Designed surveys and interview guides as part of teacher-family research for Alt Curriculum and Synchronous learning practices;",
        "Collaborated with Special Population and Alt Curriculum teams on service blueprint for new curriculum offering with Figma and FigJam whiteboard workshop;",
        "Conducted Discovery res/earch to understand Special Population student needs;",
        "Interviewed K12 and Special Population teachers on their instruction experiences in Zoom and Adobe Connect;",
        "Planned usability unmoderated tests to evaluate year 1, K5 course design on Usertesting.com and shared findings with product owners;",
        "Created student personas, workflow charts, and student journeys for product managers to understand the student experience with the current learning management system.",
      ],
    },
    {
      company: "Genius Sprts Group",
      position: "UX Strategist",
      startDate: "January 2018",
      endDate: "February 20 19",
      summary: [
        "Researched and collaborated with design and front-end teams to develop components for the company design system;",
        "Facilitated strategic meetings for the AI Coaching Tool Product including requirement meetings with PM to identify accounts management screens and different roles for team management product:",
        "Conducted card sorting activity of basketball statistics terms with users to develop proper taxonomy;",
        "Planned and facilitated Design System Kickoff meeting with front-end developer leads, product managers, and designers; Designed Invision prototype for AI Coaching Tool playback interface;",
        "Interviewed soccer and basketball statisticians on current workflow tracking a game score and player performance.",
    ],
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
