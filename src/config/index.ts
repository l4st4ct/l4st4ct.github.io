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
    { text: "Experience", href: "/resume" },
    { text: "Projects", href: "/uxprojects" },
    { text: "About", href: "/about" },
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
      company: "Genius Sports Group",
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
     {
      company: "Media Temple",
      position: "UX Architect",
      startDate: "November 2015",
      endDate: "December 2017",
      summary: [
        "Facilitated workshops with design and front-end development teams to draft product design principles and plan strategy for company design system;",
        "Created UX recommendation document and wireframes for new billing page based on customer reported issues and customer service agents' testing prototypes;",
        "Conducted usability tests with Usertesting.com and card sorting activities to resolve names applied to private server packages that confused customers;",
        "Planned Optimizely A/B tests of product page layouts to improve conversion rates;",
        "Created user journey maps for checkout workflow to highlight opportunities for checkout process improvement and conversion.",
        ],
    },
  ],
  projects: [
    {
      name: "XO Group",
      summary: "tbd",
      role: "UX Designer",
      linkPreview: "/uxdetails/xogroup",
      linkSource: "/",
      image: "/spotifu.png",
    },
    {
      name: "Media Temple",
      summary: "tbd",
      role: "UX Architect",
      linkPreview: "/uxdetails/mediatemple",
      linkSource: "/",
      image: "/shopify-clon.png",
    },
    {
      name: "Genius Sports Group",
      summary: "A social network that replicates the features of Instagram",
      role: "UX Strategist",
      linkPreview: "/uxdetails/geniussports",
      linkSource: "/",
      image: "/clone-ig.png",
    },
    {
      name: "Pearson Virtual Schools",
      summary: "tbd",
      role: "Senior UX Designer",
      linkPreview: "/uxdetails/pearsonvirtualschools",
      linkSource: "/",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and 10+ years of user experience working in complex platform environments:
Teaching, training, and collaborating with teams to produce user-centric products, features, and prototypes;
Communicating effectively and partnering with design, engineering, and product management team members to meet business goals;
Validating product strategy features by building detailed research plans with appropriate mixed methods for testing and uncovering actionable user insight
scalability.
    `,
    image: "/",
  },
};

// #5755ff
