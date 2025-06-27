import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Kevin",
  lastName: "Chan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-stack and web scraping engineer",
  avatar: "/images/avatar.jpg",
  location: "Europe/Warsaw", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
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
  headline: <>Web, Mobile and scraping engineer</>,
  subline: <>I'm Kevin, who likes to build digital things to make our world better.</>,
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
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
      <>I like to solve complex problems with code. That's why I'm being called a developer 😁</>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Toolla.net",
        timeframe: "2022 - 2025",
        role: "Frontend Application Engineer",
        achievements: [
          <>
            Developed and maintained client on-demand projects using modern JavaScript frameworks
            like Angular 16+, Next.js 13+
          </>,
          <>
            Collaborated with cross-functional teams to design and implement scalable solutions that
            meet business requirements and user needs.
          </>,
          <>
            Provided innovative solutions to complex problems for UI/UX, resulting in a 20% increase
            in efficiency and a 30% reduction in development time.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-02/cover-02-01.png",
            alt: "Browser Forensics Viewer",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-02/cover-02-02.png",
            alt: "Browser Forensics Viewer",
            width: 16,
            height: 9,
          },
          {
            src: "https://www.youtube.com/watch?v=0IJMbYfE4xw",
            alt: "Tanbuu AI meeting schedule",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Molequle.io",
        timeframe: "2021 - 2022",
        role: "Senior UI/UX Developer",
        achievements: [
          <>
            Led UI/UX design & implementation of a cutting-edge SaaS CDXP platform using Next.js,
            TypeScript, and styled-components, delivering a clean, responsive design aligned with
            user personas and company brand.
          </>,
          <>
            Designed and developed browser extensions using React, TypeScript, and Tailwind CSS,
            delivering seamless integration with both Chrome and Firefox contexts
          </>,
          <>
            Engineered UI components (pop-ups, options panels, content scripts) with React Query to
            manage background and API data, ensuring performant and state-synced UX across browser
            tabs.
          </>,
          <>
            Architected data-driven interfaces leveraging React Query for efficient data fetching,
            caching, and seamless state management across client dashboards, profile views, and
            analytics modules.
          </>,
          <>
            Collaborated with product managers and backend engineers to define component libraries,
            design tokens, and scalable layout systems, ensuring consistent UI across both web and
            mobile-focused marketing products.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "https://cdn.phenomenonstudio.com/wp-content/uploads/2021/09/outputcompress-video-online.com_.mp4",
            alt: "Molequle",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-05.jpg",
            alt: "Molequle",
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
            Architected and implemented a scalable frontend architecture using React.js, Redux, and
            TypeScript, resulting in a 20% improvement in application load times and a 90% in
            project performance.
          </>,
          <>
            Developed and maintained high-quality mobile applications with over 500,000 users using
            React Native and TypeScript
          </>,
          <>
            Designed and built RESTful APIs and GraphQL endpoints using Express.js and MongoDB to
            support mobile and web applications, improving data retrieval speed by 40%.
          </>,
          <>
            Enforced coding standards and best practices through code reviews, pair programming, and
            automated testing, leading to a 30% reduction in bugs and technical debt.
          </>,
          <>
            Set up and managed CI/CD pipelines using Jenkins and Docker, reducing deployment times
            by 50% and improving application reliability.
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
        name: "Tsinghua University",
        description: <>Bachelor’s degree in Computer Science and Technology </>,
      },
      {
        name: "Self-taught",
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
        description: <>Building next gen web apps</>,
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
        description: <>Innovate mobile apps with React Native, Flutter</>,
        images: [
          {
            src: "/images/projects/project-01/mobile-banner.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Scraping & Automation",
        description: <>Familiar with web scraping and automation using Puppeteer, Selenium.</>,
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
