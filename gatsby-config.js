module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'William Hendrix',
    // Main Site Title
    title: `William Hendrix | Software Developer`,
    // Description that goes under your name in main bio
    description: `Software Developer in Washington, DC.`,
    // Optional: Twitter account handle
    author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/wfhendrix11`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/wfhendrix/`,
    // Content of the About Me section
    about: `I'm a motivated software engineer who has experience developing web applications and services in various domains. `,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Celestial Navigation',
        description:
          'A microservices Python application to determine your location on Earth using the position of stars built using Flask.',
        link: 'https://github.com/wfhendrix11/Celestial-Navigation',
      },
      {
        name: 'Autocomplete',
        description:
          'A Java program to autocomplete for a given prefix using a Trie data structure.',
        link: 'https://github.com/wfhendrix11/autocomplete',
      },
      // {
      //   name: 'ENPM 691',
      //   description:
      //     'Programs related to the Hacking of C Programs and Unix Binaries course at the University of Maryland',
      //   link: 'https://github.com/wfhendrix11/ENPM-691',
      // },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Accenture',
        description: 'Software Engineering Senior Analyst, October 2021 - Present',
        link: 'https://www.accenture.com/us-en',
      },
      {
        name: 'Dark Wolf Solutions',
        description: 'Software Developer, July 2021 - October 2021',
        link: 'https://darkwolfsolutions.com/',
      },
      {
        name: 'IBM',
        description: 'Federal Associate Developer, July 2020 - July 2021',
        link: 'https://www.ibm.com/us-en/',
      },
      {
        name: 'Institute for Defense Analyses',
        description: 'Programmer/Analyst Intern, May 2019 - August 2019',
        link: 'https://www.ida.org/',
      },
      {
        name: 'Bentley Systems',
        description: 'Software Development Intern, May 2018 - August 2018',
        link: 'https://www.bentley.com/en/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming',
        description:
          'Java, Python, JavaScript, C#, C/C++, HTML, CSS, SQL, Bash, Assembly, Prolog, Lisp, R',
      },
      {
        name: 'Frameworks/Libraries',
        description: 'ASP.NET, Angular, React, Node.js, Flask, Spring, Hibernate, Django, Ionic',
        
      },
      {
        name: 'Tools/Platforms',
        description:
          'Docker, Ansible, GitLab CI/CD, Gradle, Splunk, npm, Azure, AWS, RedHat OpenShift, NUnit, XUnit, JUnit, PyUnit, Selenium, Karma, Docker, CosmosDB, Microsoft, SQL Server, PostgreSQL, MySQL',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
