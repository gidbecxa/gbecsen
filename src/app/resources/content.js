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
    link: "https://docs.google.com/document/d/1QosshOreEpUMsNaclq4VKdvF9lF1pOmGxRPFKZN8O1k/edit?usp=sharing",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm <strong>{person.name}</strong>, a <strong>{person.role}</strong> with over seven years of experience in building sleek mobile apps, powerful web platforms, and scalable cloud solutions.
        I blend <InlineCode>design</InlineCode> and <InlineCode>engineering</InlineCode> to create products that don’t just function—they feel right.
        My passion lies in transforming complex ideas into user-centered, innovative solutions that deliver high-quality, groundbreaking results.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "What I Do 🚀",
    experiences: [
      {
        company: "Harpiee",
        timeframe: "May 2024 - Present",
        role: "Lead Developer",
        achievements: [
          <>
            Architected and developed Harpiee, a social media platform integrating real-time engagement, video compression, and cloud-based media storage.
          </>,
          <>
            Led development across mobile, web, and backend services using <InlineCode>Expo/React Native</InlineCode>, <InlineCode>Nest.js</InlineCode>, <InlineCode>AWS</InlineCode>, and <InlineCode>Next.js</InlineCode>,
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "DMORAU",
        timeframe: "February 2023 - October 2024",
        role: "Fullstack Developer, DevOps",
        achievements: [
          <>
            Spearheaded the development of DMORAU, a dating app that reached the top 10 in the social apps category on the Google Play Store at launch.
          </>,
          <>
            Integrated essential AWS services such as S3, EC2, RDS, and IAM for a robust and scalable server-side infrastructure.
          </>,
          <>
            Implemented innovative features like manual profile verification via video calls, locked private conversations, and in-app gifting to enhance user trust and engagement.
          </>,
        ],
        images: [],
      },
      {
        company: "Grow by Aisely",
        timeframe: "June 2022 - June 2023",
        role: "Director & Lead Instructor",
        achievements: [
          <>
            Designed and delivered high-quality course programs and projects for a developer bootcamp, helping learners become proficient software developers through a project-based learning system.
          </>,
          <>
            Generated over 1 million FCFA in revenue and secured $7,000 in angel investments for the bootcamp.
          </>,
          <>
            Mentored learners by providing guidance and support to help them overcome challenges while building functional software solutions.
          </>,
        ],
        images: [],
      },
      {
        company: "Aisely",
        timeframe: "December 2020 - June 2023",
        role: "Fullstack Developer & Team Lead",
        achievements: [
          <>
            Led a startup team of developers and designers to build Aisely, a document automation app that gained users both locally and internationally.
          </>,
          <>
            Successfully deployed two social media apps (Harplee and Sociagram) and two mobile games (TriviaRush and Messbites).
          </>,
          <>
            Designed and deployed two e-commerce websites for international stores, featuring product galleries valued at over €100,000 each.
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
    title: "Technical skills",
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
      src: "/images/gallery/screenshot-sg-01.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-sg-02.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/screenshot-esgi-02.png",
      alt: "image",
      orientation: "horizontal",
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
      src: "/images/gallery/screenshot-sg-07.png",
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
    // {
    //   src: "/images/gallery/screenshot-misc-03.png",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    {
      src: "/images/gallery/screenshot-misc-04.png",
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
