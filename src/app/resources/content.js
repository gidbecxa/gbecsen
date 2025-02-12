import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Gideon",
  lastName: "Oni-Becsen",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Fullstack Developer (Mobile, Web)",
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
  headline: <>Software Developer, Designer</>,
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
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm <strong>{person.name}</strong>, a <strong>{person.role}</strong> with over seven years of experience in building sleek mobile apps, powerful web platforms, and scalable cloud solutions.  
        I blend <InlineCode>design</InlineCode> and <InlineCode>engineering</InlineCode> to create products that don’t just function—they feel right.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "What I Do 🚀",
    experiences: [
      {
        company: "Harpiee",
        timeframe: "2023 - Present",
        role: "Lead Developer",
        achievements: [
          <>
            Architected and developed Harpiee, a social media platform integrating real-time engagement, video compression, and cloud-based media storage.
          </>,
          <>
            Led development across mobile, web, and backend services using <InlineCode>React Native</InlineCode>, <InlineCode>Next.js</InlineCode>, <InlineCode>Nest.js</InlineCode>, and AWS.
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
      /* {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      }, */
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "UPI-ONM",
        description: <>Bachelor's in Telecommunications and Computer Networks</>,
      },
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend & Mobile",
        description: <>React Native, Expo, Next.js, Tailwind, TypeScript, React Three Fiber</>,
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
        description: <>Nest.js, PostgreSQL, Supabase, AWS (EC2, RDS, S3), WebSockets</>,
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
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
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
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
