import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CommandLineIcon,
  CpuChipIcon,
  MapIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import profilepic from '../images/profilepic.jpg';
import {About, Hero, HomepageMeta, SkillGroup, Social, TimelineItem} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Elio Koka | Senior Robotics Systems & Integration Engineer',
  description:
    'Elio Koka builds and scales robotic systems across hardware, software, manufacturing, automation, and test.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Impact: 'impact',
  Skills: 'skills',
  Resume: 'resume',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  name: `I build and scale robotic systems.`,
  description: (
    <>
      <p>
        Hi, I&apos;m Elio. I work across hardware, software, manufacturing, and test. Right now, I&apos;m building
        production and automation systems for humanoids at Foundation.
      </p>
      <p>
        I&apos;m looking for a senior or founding engineering role with real ownership—from deciding what matters to
        getting it working in production.
      </p>
    </>
  ),
  actions: [
    {
      href: '/Resume-site/Elio_Koka_Senior_Systems_Integration.pdf',
      text: 'View résumé',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: '/Resume-site/#impact',
      text: 'See the impact',
      Icon: RocketLaunchIcon,
    },
  ],
};

/**
 * Aboutsection
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description:
    'I like the messy part: where hardware, software, manufacturing, and test meet. That is where I do my best work—bringing up new systems, finding root causes, and turning one-off fixes into tools the team can keep using.',
  aboutItems: [
    {label: 'Based in', text: 'Redwood City, CA', Icon: MapIcon},
    {label: 'Building', text: 'Humanoid production systems at Foundation', Icon: BuildingOffice2Icon},
    {label: 'Experience', text: '8+ years across robotics, manufacturing, and systems', Icon: WrenchScrewdriverIcon},
    {label: 'Platforms', text: 'Humanoids, AGVs, and autonomous agricultural robots', Icon: CpuChipIcon},
    {label: 'Core leverage', text: 'Integration, automation, diagnostics, and production test', Icon: CommandLineIcon},
    {label: 'Education', text: 'B.S. Computational Mathematics, Michigan State', Icon: AcademicCapIcon},
  ],
};

export const impactHighlights = [
  {
    value: '30×',
    label: 'Faster firmware upgrades',
    detail: 'Parallel CAN flashing reduced a 1.5-hour humanoid update workflow to under 3 minutes.',
  },
  {
    value: '83%',
    label: 'Faster robot bring-up',
    detail: 'Python and Bash automation transformed end-of-line integration for autonomous agricultural robots.',
  },
  {
    value: '20%',
    label: 'Less fleet downtime',
    detail: 'Automated diagnostics exposed AGV failure patterns while cutting manual validation time by 33%.',
  },
];

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Robotics Integration',
    skills: [
      {
        name: 'System bring-up & production integration',
        level: 10,
      },
      {
        name: 'Hardware, firmware & software interfaces',
        level: 10,
      },
      {
        name: 'CAN diagnostics & firmware workflows',
        level: 9,
      },
      {
        name: 'Root cause analysis & FMEA',
        level: 9,
      },
      {
        name: 'Production readiness',
        level: 9,
      },
    ],
  },
  {
    name: 'Automation & Validation',
    skills: [
      {
        name: 'Python & Bash automation',
        level: 9,
      },
      {
        name: 'HIL, functional & end-of-line testing',
        level: 9,
      },
      {
        name: 'Calibration & parallel flashing',
        level: 9,
      },
      {
        name: 'Diagnostic pipelines & QC logging',
        level: 9,
      },
      {
        name: 'Vision-based inspection integration',
        level: 8,
      },
    ],
  },
  {
    name: 'Manufacturing Systems',
    skills: [
      {
        name: 'MES, eDHR & product genealogy',
        level: 9,
      },
      {
        name: 'BOM, inventory & traceability',
        level: 9,
      },
      {
        name: 'ACID data logic & retention',
        level: 9,
      },
      {
        name: '3D work instructions & QC workflows',
        level: 8,
      },
      {
        name: 'Lean manufacturing & production readiness',
        level: 8,
      },
    ],
  },
  {
    name: 'Software & Infrastructure',
    skills: [
      {
        name: 'Python, C & Bash',
        level: 9,
      },
      {
        name: 'Application auth & test coverage',
        level: 9,
      },
      {
        name: 'MongoDB, S3 & Azure',
        level: 8,
      },
      {
        name: 'Git, CircleCI, Jenkins & CI/CD',
        level: 8,
      },
      {
        name: 'Linux, Windows, macOS & networking',
        level: 8,
      },
    ],
  },
  {
    name: 'Platforms & Hardware',
    skills: [
      {
        name: 'Humanoids, AGVs & autonomous robots',
        level: 9,
      },
      {
        name: 'NVIDIA Thor, ARM, x86 & RISC-V',
        level: 8,
      },
      {
        name: 'Actuators, sensors, servos & BMS',
        level: 9,
      },
      {
        name: 'Raspberry Pi test instrumentation',
        level: 8,
      },
      {
        name: 'Mobility, perception & power subsystems',
        level: 9,
      },
    ],
  },
  {
    name: 'Technical Ownership',
    skills: [
      {
        name: 'Problem framing & architecture',
        level: 9,
      },
      {
        name: 'Cross-functional execution',
        level: 9,
      },
      {
        name: 'Vendor specification & procurement',
        level: 8,
      },
      {
        name: 'Manufacturing & operations partnership',
        level: 9,
      },
      {
        name: 'Documentation & team enablement',
        level: 9,
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
        Built a foundation in mathematical modeling, machine learning, computer vision, and algorithm development that
        now informs how I debug, measure, and improve complex physical systems.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2025 - Present',
    location: 'Foundation',
    title: 'Automation & Integration Engineer',
    companyUrl: 'https://foundation.bot/',
    context: 'San Francisco company building autonomous humanoid robots.',
    content: (
      <ul className="list-disc space-y-2 pl-5 text-left">
        <li>
          Built an end-to-end production tracking system from scratch, combining eDHR and product genealogy,
          authentication, ACID data logic, retention, test coverage, CI/CD, QC metrics, calibrations, and EOL
          verification.
        </li>
        <li>
          Led the core software migration from x86 to ARM, adapting low-level system dependencies for NVIDIA Thor
          onboard compute bring-up.
        </li>
        <li>
          Own technical procurement and vendor integration for production automation, including vision-based QC systems
          and instrumented treadmills.
        </li>
        <li>
          Automated calibration workflows and built parallel CAN-based flashing that cut firmware upgrades from 1.5
          hours to under 3 minutes.
        </li>
      </ul>
    ),
  },
  {
    date: 'April 2024 - May 2025',
    location: 'wheel.me',
    title: 'Robotics Test Engineer',
    companyUrl: 'https://www.wheel.me/',
    context: 'Industrial automation company whose autonomous wheels turn existing carts and fixtures into robots.',
    content: (
      <ul className="list-disc space-y-2 pl-5 text-left">
        <li>
          Architected Python and Azure diagnostic pipelines to triage autonomous guided vehicle fleet anomalies,
          reducing system downtime by 20% and manual validation time by 33%.
        </li>
        <li>
          Executed FMEA and nominal-path functional testing for safety-critical mobility, diagnosing CAN failures and
          cross-domain issues across hardware and software.
        </li>
        <li>
          Verified early hardware/software interfaces and delivered continuous, data-driven feedback that improved
          system performance, stability, and design decisions.
        </li>
      </ul>
    ),
  },
  {
    date: 'June 2022 - April 2024',
    location: 'Carbon Robotics',
    title: 'Robot Bring-up Engineer',
    companyUrl: 'https://carbonrobotics.com/',
    context: 'Agricultural robotics company building AI-guided laser weed control and tractor autonomy.',
    content: (
      <ul className="list-disc space-y-2 pl-5 text-left">
        <li>
          Owned system bring-up and end-of-line validation for AI-powered autonomous agricultural robots across
          mobility, perception, power, and electromechanical subsystems.
        </li>
        <li>
          Rebuilt manufacturing integration workflows with Python and Bash automation, reducing robot bring-up time by
          83%.
        </li>
        <li>
          Designed custom diagnostic tools and instrumentation, including a Raspberry Pi test jig for sensor and servo
          characterization.
        </li>
      </ul>
    ),
  },
  {
    date: 'August 2017 - August 2021',
    location: 'TechSmith Corporation & Michigan State University',
    title: 'IT Systems Support Engineer & Technician',
    context:
      'Earlier systems and support work at TechSmith—the visual communication software company behind Camtasia and Snagit—and Michigan State University.',
    content: (
      <ul className="list-disc space-y-2 pl-5 text-left">
        <li>
          Automated OS deployment and managed network and compute infrastructure, building an early foundation in
          reliable systems operations and fast cross-functional triage.
        </li>
        <li>
          Partnered with development and QA teams to reproduce user issues, deploy patches, and turn recurring failures
          into documented, repeatable solutions.
        </li>
      </ul>
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
