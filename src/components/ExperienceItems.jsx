import dali from '../../dali.jpeg';
import dart from '../../dartmouthlogo_original.jpeg';
import moment from '../../moment.png';

const ExperienceItems = [
    {
        name: "DALI Lab",
        img: dali,
        link: "http://dali.dartmouth.edu/",
        position: "Software Engineer • May 2023 – Present",
        description: [
            "Selected through a competitive application process to join innovative startup like organization that solves problems brought by partners from around the world. Student teams simulate startup like environments and work on real projects brought to DALI by students, professors, entrepreneurs, non profits, corporate companies, and more.",
            "As a developer, I collaborate with a project manager, designers, and other developers to create mobile and web applications, utilizing expertise in React and Firebase to deliver effective solutions to complex problems.",
        ],
        skills: [
            "React",
            "HTML",
            "CSS",
            "Firebase",
        ]
    },
    {
        name: "Research: Gaze Aware Reading Browser",
        img: dart,
        link: "https://ugresearch.dartmouth.edu/projects/12778",
        position: "Software Engineer / Research Assistant • June 2023 – Present",
        description: [
            "Assisting Dartmouth professor with research project, which utilizes an eye tracker to provide reading-aid and analytics for browser reading. Accessible as a chrome extension, the service tracks users’ eyes to provide active or trailing highlighting and other functionality meant to aid long-text reading.",
            "Leveraged full stack web development skills to build server configuration between user data and browser. Brainstormed and implemented new features including providing reading pace and recommendations for user based on eye tracking data.",
        ],
        skills: [
            "JavaScript",
            "CSS",
            "Python",
        ]
    },
    {
        name: "Moment Dating App",
        img: moment,
        position: "Software Engineer • July 2023 – Present",
        description: [
            "Brought on by early stage startup to help build new mobile dating app. Utilized SwiftUI in code rewrite to scale up app from beta version, focusing on front end development in preparation for full scale launch. Contributed to redesign of the app as part of scale up. Employed Figma skills to enhance UI/UX design of the app.",
        ],
        skills: [
            "SwiftUI",
            "Figma",
        ]
    },
];

export default ExperienceItems;