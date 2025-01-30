import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import profilepic from '../images/profilepic.jpg';
import {About, Hero, HomepageMeta, SkillGroup, Social, TimelineItem} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Skills: 'skills',
  : '',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hey, I'm Elio Koka 👋`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        As a <strong className="text-stone-100">Robotics Systems and Testing Engineer</strong>, operating out of the
        metro-Detroit area, I'm currently leveraging my expertise at{' '}
        <strong className="text-stone-100">Wheel.me</strong>. My expertise lies in advancing and streamlining
        cutting-edge autonomous guided vehicle technology.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training at the <strong className="text-stone-100">gym</strong> 🏋️,
        playing with my <strong className="text-stone-100">2 cats</strong> 🐈 🐈‍⬛, or exploring breathtaking{' '}
        <strong className="text-stone-100">Michigan</strong> 🧤.
      </p>
    </>
  ),
  actions: [
  {
    href: 'https://nbviewer.org/github/ekoka99/Resume-site/blob/main/public/ElioKoka_IntegrationTestEngineerSr_Resume.pdf',
    text: 'Resume',
    primary: true,
    Icon: ArrowDownTrayIcon,
  },
],
};

/**
 * Aboutsection
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hardworking and innovating robotics engineer who's always keen on picking up whatever new skills are necessary to get the job done. I'm a quick learner and a team player who's always ready to take on new challenges, with strong interpersonal skills to influence and guide technical and non-technical stakeholders`,
  aboutItems: [
    {label: 'Location', text: 'Royal Oak, MI', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Albanian', Icon: FlagIcon},
    {label: 'Interests', text: 'Cooking, Movies, Video Games, and Reading', Icon: SparklesIcon},
    {label: 'Study', text: 'Michigan State University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Wheel.me', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Software',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'C++',
        level: 8,
      },
      {
        name: 'MATLAB',
        level: 7,
      },
      {
        name: 'Shell Scripting',
        level: 9,
      },
    ],
  },
  {
    name: 'Hardware & Electronics',
    skills: [
      {
        name: 'Mechatronics',
        level: 7,
      },
      {
        name: 'Computer Networking',
        level: 8,
      },
      {
        name: 'Hardware Infrastructure',
        level: 9,
      },
      {
        name: 'System Architecture',
        level: 8,
      },
    ],
  },
  {
    name: 'Tools & Platforms',
    skills: [
      {
        name: 'Git',
        level: 9,
      },
      {
        name: 'Azure DevOps (CI/CD)',
        level: 8,
      },
      {
        name: 'Docker',
        level: 9,
      },
      {
        name: 'MySQL/MongDB',
        level: 7,
      },
    ],
  },
  {
    name: 'Robotics & Control Systems',
    skills: [
      {
        name: 'Computer Vision',
        level: 8,
      },
      {
        name: 'Machine Learning',
        level: 7,
      },
      {
        name: 'Systems Integration',
        level: 10,
      },
      {
        name: 'Test Engineering and Automation',
        level: 10,
      },
    ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2022',
    location: 'Michigan State University',
    title: (
      <>
        <span style={{fontStyle: 'italic'}}>Bachelor of Science</span> in Computational Mathematics
      </>
    ) as unknown as string,
    content: (
      <p>
        Specialized in machine learning and computer vision, with a strong foundation in mathematical modeling and
        algorithm development. Completed advanced coursework in neural networks, image processing, and data analysis.
        Developed projects including an undetectable AI powered aimbot for the online game CS:GO.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2024 - Present',
    location: 'wheel.me, Detroit, Michigan',
    title: 'Robotics Test Engineer',
    content: (
      <p>
        Leveraging expertise in mechatronics and hardware infrastructure to enhance and validate cutting-edge autonomous
        guided vehicle technology, focusing on optimizing and automating critical processes in robotics systems.
      </p>
    ),
  },
  {
    date: 'June 2022 - April 2024',
    location: 'Carbon Robotics, Livonia, Michigan',
    title: 'Robot Bringup Engineer',
    content: (
      <p>
        Spearheaded end-of-line validation and automation for AI-powered robots, reducing bring-up times by 83% through
        strategic implementation of Python and Bash scripts, while ensuring exceptional stability across software,
        hardware, and electrical subsystems.
      </p>
    ),
  },
  {
    date: 'September 2020 - August 2021',
    location: 'TechSmith Corporation, Okemos, Michigan',
    title: 'IT Support Engineer',
    content: (
      <p>
        Managed and optimized multi-site network infrastructure, automating OS and software deployment while providing
        comprehensive support for hundreds of devices, significantly enhancing operational efficiency and system
        reliability.
      </p>
    ),
  },
  {
    date: 'March 2020 - September 2020',
    location: 'TechSmith Corporation, Okemos, Michigan',
    title: 'Technical Support Specialist',
    content: (
      <p>
        Delivered expert-level support for TechSmith products across platforms, collaborating with development teams to
        address user needs and contributing to product improvement through detailed feedback and documentation.
      </p>
    ),
  },
  {
    date: 'May 2019 - March 2020',
    location: 'TechSmith Corporation, Okemos, Michigan',
    title: 'IT Specialist Intern',
    content: (
      <p>
        Supported large multi-site network operations, assisted with ticket triage, and contributed to the
        implementation and maintenance of IT systems and processes, enhancing overall infrastructure efficiency and user
        experience.
      </p>
    ),
  },
  {
    date: 'August 2017 - August 2019',
    location: 'Michigan State University, East Lansing, MI',
    title: 'RHS Information Services Technician',
    content: (
      <p>
        Provided comprehensive technical support across the university, troubleshooting and maintaining a diverse range
        of devices. Delivered exceptional customer service while diagnosing and resolving complex technical issues for
        staff and faculty.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
// This section was empty in the original file, so I've left it as is.

/**
 * Contact section
 */
// This section was empty in the original file, so I've left it as is.

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ekoka99'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/elio-koka'},
];
