import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Kevin",
  lastName: "Chan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-stack and web scraping engineer",
  avatar: "/images/avatar.jpg",
  location: "Europe/Dublin", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/epicdeveloper0928",
  },
  // {
  //   name: "LinkedIn",
  //   icon: "linkedin",
  //   link: "https://www.linkedin.com/company/once-ui/",
  // },
  // {
  //   name: "X",
  //   icon: "x",
  //   link: "",
  // },
  {
    name: "Email",
    icon: "email",
    link: "mailto:kevin.chan2030@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full-stack and web scraping engineer</>,
  subline: (
    <>
      I'm Kevin, a happy coder based in Dublin. I like building something
      digital to make our world better.
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
    link: "https://calendly.com/webcomet928",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Kevin is a Dublin-based full-stack & web scraping engineer with a
        passion for transforming idea to real, elegant solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Toolla.net",
        timeframe: "2022 - Present",
        role: "Full-stack Developer",
        achievements: [
          <>
            Developed and maintained client on-demand projects using modern
            JavaScript frameworks like Angular, Next.js
          </>,
          <>
            Implemented server-side rendering (SSR) to improve performance and
            SEO optimization.
          </>,
          <>
            Built a web scraping tool using Puppeteer to automate data
            extraction from websites, improving efficiency and reducing manual
            errors.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-02/cover-02-01.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-02/cover-02-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "My Home",
        timeframe: "2020 - 2022",
        role: "Frontend Developer",
        achievements: [
          <>
            Designed and developed responsive, user-friendly real estate
            websites with advanced property search, listing management, and
            interactive maps using Angular.
          </>,
          <>
            Achieved a 20% increase in user retention by improving UI/UX by
            implementing new design principles.
          </>,
          <>
            Increased code reusability by implementing HOC patterns, reducing
            future development time by 30%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "SOTI Inc",
        timeframe: "2017 - 2020",
        role: "Senior Software Developer (Full-stack)",
        achievements: [
          <>
            Developed innovative solutions to tackle big industry problems using
            Next.js, Nest.js.
          </>,
          <>
            Wrote well designed, scalable, reliable, testable, and reusable code
            by using best software development practices, clean code, solid
            principles and contribute towards the entire development life cycle
            of analysis, design, implementation, and test.
          </>,
          <>
            Stay up to date with advanced technologies to be able to provide the
            best solutions for new projects.
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
        name: "University of Galway",
        description: (
          <>
            Bachelor of Science (Honours) Computer Science and Information
            Technology
          </>
        ),
      },
      {
        name: "Build the Future",
        description: <>Studied online tutorial and learn by intern.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Web Application Development",
        description: <>Building next gen apps with Next.js, Angular.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Mobile Application Development",
        description: (
          <>
            Able to build beautiful hybrid mobile apps using React Native /
            Expo.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Scraping & Automation",
        description: (
          <>
            Familiar with web scraping and automation using Puppeteer, Selenium.
          </>
        ),
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
