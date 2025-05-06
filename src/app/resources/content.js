import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Gideon",
  lastName: "Oni-Becsen",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Fullstack Developer & Designer",
  avatar: "/images/avatar.png",
  location: "Africa/Lagos", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French"],
};

const newsletter = {
  display: true,
  title: <>Step Into My Build Log</>,
  description: (
    <>
      Not a newsletter—more like a backstage pass.
      I tend to share dev insights, design inspirations, and deep dives into the tech I&apos;m experimenting with.
      Stay in the loop, no spam—just cool stuff.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/gidbecxa",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gideon-oni-becsen-880917226/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/gbecsen",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:gideonaonibecsen@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Welcome to the tech sanctuary of ${person.role}, a ${person.role} who crafts digital experiences that just work.`,
  headline: <>Fullstack Developer, Designer</>,
  subline: (
    <>
      Hey there! I'm Gideon—your friendly pro software developer. I feel alive writing{" "}
      <InlineCode>code</InlineCode>, but I have a soft spot for <InlineCode>design</InlineCode>.
      For over seven years, I&apos;ve been on an earnest quest for innovation building sleek mobile apps, powerful web platforms,
      and cloud solutions that don&apos;t just function—they feel right.
      <br />
      I think in logic, operate by algorithms, and see the world in pixels. Somehow, I make all work together.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  resume: {
    display: true,
    link: "https://drive.google.com/file/d/1xSJLKtga66pHX2AonkoeNvTkqtWv9oCp/view?usp=sharing",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm <strong>{person.name}</strong>, a <strong>{person.role}</strong> with over seven years of experience in crafting scalable web, mobile, and game applications.
        Specializing in <InlineCode>fullstack development</InlineCode> and <InlineCode>game design</InlineCode>, I create intuitive, high-performance solutions that delight users.
        My passion lies in transforming complex ideas into user-centered, innovative solutions that deliver high-quality, groundbreaking results.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "What I Do 🚀",
    experiences: [
      {
        company: "Aisely",
        timeframe: "February 2021 - Mar 2025",
        role: "Fullstack Developer & Team Lead",
        achievements: [
          <>
            Led a team of five to develop Harpiee, a social media app aiming to be the next viral social app 1 billion users, using <InlineCode>Expo</InlineCode>, <InlineCode>React Native</InlineCode>, <InlineCode>Node.js</InlineCode>, <InlineCode>Nest.js</InlineCode>, <InlineCode>PostgreSQL</InlineCode> and <InlineCode>AWS</InlineCode>, achieving top user ratings.
          </>,
          <>
            Built Aisely, a document automation SaaS app for creating, invoices and other transactional documents, that gained users international recognition and ranked top 7 globally on Pioneer startup's leaderboard in 2022.
          </>,
          <>
            Built Color Heist, a hypercasual mobile game, with <InlineCode>Godot</InlineCode> and <InlineCode>GDScript</InlineCode>, implementing dynamic UI and real-time scoring for 5,000+ players.
          </>,
          <>
            Developed a space-themed web3 game, integrating <InlineCode>blockchain</InlineCode> for in-game currency (Crypto Shards), enhancing player engagement by 20%.
          </>,
          <>
            Deployed two e-commerce platforms valued at €100,000+ each, integrating payment APIs with <InlineCode>Kotlin</InlineCode> and optimizing performance by 20%.
          </>,
        ],
        images: [],
      },
      {
        company: "DMORAU",
        timeframe: "April 2023 - October 2024",
        role: "Fullstack Developer, UI/UX Designer",
        achievements: [
          <>
            Spearheaded DMORAU, a dating app ranked top-10 on Google Play, using <InlineCode>React Native</InlineCode> and <InlineCode>Node.js</InlineCode> for real-time chat and payment features.
          </>,
          <>
            Optimized backend APIs with <InlineCode>Express.js</InlineCode> and <InlineCode>AWS</InlineCode>, reducing latency by 15% and boosting retention by 20%.
          </>,
          <>
            Designed UI/UX prototypes with <InlineCode>Figma</InlineCode>, iterating based on user feedback to enhance trust and engagement.
          </>,
        ],
        images: [],
      },
      {
        company: "Growcampus by Aisely",
        timeframe: "September 2022 - May 2023",
        role: "Director & Lead Instructor",
        achievements: [
          <>
            Mentored 50+ students in <InlineCode>JavaScript</InlineCode> and <InlineCode>React</InlineCode>, generating 2M+ FCFA in bootcamp revenue through project-based learning.
          </>,
          <>
            Secured $7,000 in angel investments to expand curriculum, incorporating real-world coding challenges.
          </>,
          <>
            Ranked top-10 in Wema Hackaholics Hackathon (2023), leading students to build functional prototypes.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Université Polytechnique Internationale - Dr. Obiang Nguema Mbasogo",
        description: <>Bachelor's in Computer Networks and Telecommunications</>,
      },
      {
        name: "Centre Béninois des Langues Étrangères",
        description: <>A2, B1 & B2 certifications in French Language.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Frontend & Mobile",
        description: <>React Native, Expo, Next.js, Tailwind, TypeScript, React, Kotlin</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Backend & Cloud",
        description: <>Nest.js, Express.js, PostgreSQL, MySQL, AWS (EC2, RDS, S3, IAM etc.), Google Cloud/Firebase, Supabase, Node.js</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "UI/UX Design",
        description: <>Figma, Adobe Illustrator, Adobe Photoshop, User-Centered Design, Wireframing, Prototyping</>,
        images: [],
      },
      {
        title: "Soft Skills",
        description: <>Communication, Teamwork, Empathy, Adaptability, Leadership, Problem-Solving,Creativity, Attention to detail, Negotiation</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Updates",
  title: "Interesting notes on design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "A collection of some of my works",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/screenshot-h-03.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-mb-01.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/screenshot-tr-02.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-h-04.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-h-05.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-h-02.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-mb-02.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/screenshot-tr-05.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-tr-06.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-mb-04.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/screenshot-tr-07.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-tr-03.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-mb-03.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/screenshot-h-01.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-misc-04.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-dm-01.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-esgi-02.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/screenshot-dm-03.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-dm-04.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-esgi-04.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/screenshot-tr-04.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-sg-01.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-esgi-05.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/screenshot-esgi-06.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/screenshot-sg-02.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-sg-04.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-sg-05.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-sg-07.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-sg-06.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-misc-01.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-misc-02.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-dm-02.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-dm-05.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-dm-07.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-dm-08.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-esgi-03.png",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
