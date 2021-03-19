/**
 * This file contains configuration for most aspects of the website that might need frequent changing.
 *
 * It should **only** be imported by the main entrypoint to the website, `App.vue`. All other
 * components should accept *only* what they need as `props`, which `App.vue` will provide.
 *
 * Refer to `src/App.vue` for more details and examples.
 *
 * @packageDocumentation
 */

import { Project, ClubPosition, ClubSponsor, ClubSocials, ClubEvent, EventType } from './configTypes';

/* eslint-disable max-len */

/**
 * Recruitment configuration.
 *
 * @category Configuration
 */
export const recruitmentConfig: {
  season: string;
  applicationsOpen: boolean;
  positions: ClubPosition[];
} = {
  /**
   * Recruitment season name.
   */
  season: 'Fall 2020',

  /**
   * Toggle whether applications are open or not - this activates CTAs on the website for signup,
   * such as a 'Join Us' button and the 'Join Us' section.
   */
  applicationsOpen: false,

  /**
   * Define positions we are recruiting for. Each position will get a redirect generated under
   * `https://ubclaunchpad.com/join/$POSITION_NAME`
   *
   * Each element must satisfy [[`ClubPosition`]].
   */
  positions: [
    {
      name: 'Developer',
      rolePageURL: 'https://docs.ubclaunchpad.com/handbook/recruitment/developer',
    },
    {
      name: 'Designer',
      rolePageURL: 'https://docs.ubclaunchpad.com/handbook/recruitment/designer',
    },
    // {
    //   name: 'Strategy',
    //   rolePageURL: 'TODO',
    // },
  ],
};

/**
 * Club configuration (projects, members, etc.)
 *
 * @category Configuration
 */
export const clubConfig: {
  memberCount: number;
  currentProjects: Project[];
  currentEvents: ClubEvent[];
  featuredProjects: Project[];
  socials: ClubSocials;
} = {
  /**
   * The current club member membership count.
   */
  memberCount: 50,

  /**
   * The current or most recent active Launch Pad projects.
   *
   * Each element must satisfy [[`Project`]].
   */
  currentProjects: [
    {
      name: 'Sync',
      description: '📺 Watch YouTube videos in sync with friends',
      elevatorPitch: `Sync is a synchronous YouTube streaming app for you to watch, share, and talk
        about videos with your friends. Create stream rooms with your friends. Chat and video call
        your friends and create endless playlists to watch videos together.`,
      banner: {
        url: 'https://raw.githubusercontent.com/ubclaunchpad/sync/master/.static/banner.png',
        hasName: true,
      },
      media: {
        type: 'youtube',
        id: 'Y143tZxDp2A',
      },
      links: {
        repository: 'https://github.com/ubclaunchpad/sync',
        website: 'https://sync.ubclaunchpad.com/',
      },
    },
    {
      name: 'Physio Space',
      description: 'The physio that’s always at your side',
      elevatorPitch: `Physio Space collects real-time 3D position data of the patient's body while
        doing exercises for the therapist to adjust exercises using a machine learning model directly
        implemented into the browser, which is first analyzed within the app, and then provided
        to a physiotherapist who can further analyze the data.`,
      banner: {
        url: 'https://raw.githubusercontent.com/ubclaunchpad/physiospace-react/master/showcasethumbnail_PhysioSpace.png',
        hasName: true,
      },
      media: {
        type: 'youtube',
        id: 'gNtLn0EDFeQ',
      },
      links: {
        repository: 'https://github.com/ubclaunchpad/physiospace-react',
        website:'https://thephysio.space/',
        writeup:'https://github.com/ubclaunchpad/physiospace-react/blob/master/README.md',
      },
    },
    {
      name: 'Footprint',
      description: '🍃 Learn how the food you eat impacts your carbon footprint ',
      elevatorPitch: `Footprint is a React Native application that enables users to scan food items
        using computer vision and obtain the corresponding ecological footprint of the product.
        We hope that Footprint will empower individuals to make environmentally informed decisions
        about the food they consume.`,
      banner: {
        url: 'https://raw.githubusercontent.com/ubclaunchpad/Footprint/master/project_images/final_design.png',
        hasName: true,
      },
      media: {
        type: 'youtube',
        id: 'iA3D2AmhkZE',
      },
      links: {
        repository: 'https://github.com/ubclaunchpad/Footprint',
        writeup: 'https://github.com/ubclaunchpad/Footprint/blob/master/README.md',
      },
    },
    {
      name: 'UBC Simulator 2',
      description: '💭 A \'choose your own adventure\' game set in UBC',
      elevatorPitch: `UBC Simulator 2 is a 'choose your own adventure' style browser game where
        the player attempts to survive a year as a student at UBC, featuring time sensitive events,
        minigames, and campaign personalization!`,
      banner: {
        url: 'https://raw.githubusercontent.com/ubclaunchpad/ubcsim2/master/.static/thumbnail.png',
        hasName: true,
      },
      media: {
        type: 'youtube',
        id: 'xWBKmqTYMYc',
      },
      links: {
        repository: 'https://github.com/ubclaunchpad/ubcsim2',
        website: 'https://ubcsim2.ubclaunchpad.com',
      },
    },
    {
      name: 'keepfresh',
      description: 'Dabbing out food waste and over-spending on groceries',
      elevatorPitch: `keepfresh is an iOS app that will allow users to track the food in their
        homes, see when items are expiring, and find recipes based on their inventory.`,
      banner: {
        // TODO: update when https://github.com/ubclaunchpad/food-doods/tree/showcase is merged
        url: 'https://raw.githubusercontent.com/ubclaunchpad/food-doods/showcase/photos/keepfresh-thumbnail.png',
        hasName: true,
      },
      media: {
        type: 'youtube',
        id: 'TWh32lj3Yjs',
      },
      links: {
        repository: 'https://github.com/ubclaunchpad/food-doods',
        // TODO: update when https://github.com/ubclaunchpad/food-doods/tree/showcase is merged
        writeup: 'https://github.com/ubclaunchpad/food-doods/blob/showcase/README.md',
      },
    },
    {
      name: 'Access Youth',
      description: '💪 Supporting troubled youth outreach and empowerment',
      elevatorPitch: `Access Youth is a non-profit organization designed to help at-risk youth
        across the Greater Vancouver area by providing them with counseling services. The organization
        has a bus program which serves as a mobile counseling service for at-risk youth. Our mobile
        app targets the users of the bus program.`,
      banner: {
        url: 'https://raw.githubusercontent.com/ubclaunchpad/accessyouth-api/fb271fc2fad9a89a637f58769408ea4efea0faf0/Thumbnail.png',
        hasName: true,
      },
      links: {
        repository: 'https://github.com/ubclaunchpad/accessyouth-api',
        writeup: 'https://github.com/ubclaunchpad/accessyouth-api#access-youth-mobile---our-experience-building-this',
      },
    },
  ],

  /**
   * Show upcoming Launch Pad events.
   * 
   * Each element must satisfy [[`ClubEvent`]].
   */
  currentEvents: [
    {
      type: EventType.TechTalk,
      title: 'Continuous Integration and Deployment',
      date: 'Saturday, March 20 at 7:00PM PST',
      blurb: `Want to learn more about what continuous integration and deployment is and how it works?`,
      description: `We're hosting a tech talk that will cover what is CI/CD, why it's essential in Software Engineering, and how to get started building workflows in GitHub Actions. You will learn to build simple workflows, setup containers for testing, and build workflows that automatically deploy your application.`,
      rsvpLink: `https://forms.gle/EPKEmduYihneefdo7`,
    },
  ],

  /**
   * Feature past Launch Pad projects.
   *
   * Each element must satisfy [[`Project`]].
   */
  featuredProjects: [
    {
      name: 'Inertia',
      description: '✈️ Effortless, self-hosted continuous deployment',
      elevatorPitch: `Inertia is an app that enables effortless setup and management of automated,
        continuous deployment on any virtual private server. It is used by several Launch Pad projects
        and features a serverside service, a command-line interface, and the ability to deploy
        almost anything anywhere.`,
      banner: {
        url: 'https://raw.githubusercontent.com/ubclaunchpad/inertia/master/.static/banner.png',
        hasName: true,
      },
      media: {
        type: 'youtube',
        id: 'amBYMEKGzTs',
        startAt: 17945,
      },
      links: {
        repository: 'https://github.com/ubclaunchpad/inertia',
        website: 'https://inertia.ubclaunchpad.com',
        writeup: 'https://medium.com/ubc-launch-pad-software-engineering-blog/building-continuous-deployment-87a2bd8eedbe',
      },
    },
    {
      name: 'Rocket 2',
      description: '🚀 Slack bot for UBC Launch Pad',
      elevatorPitch: `Rocket 2 is a from-the-ground-up rebuild of our previous in-house management
        Slack bot. Rocket 2 handles team management, GitHub permissions, member onboarding, and
        more through a robust set of commands accessible from Slack.`,
      banner: {
        url: 'https://raw.githubusercontent.com/ubclaunchpad/rocket2/master/docs/rocket-banner.gif',
      },
      links: {
        repository: 'https://github.com/ubclaunchpad/rocket2',
        website: 'https://rocket2.readthedocs.io',
      },
    },
    {
      name: 'Bumper',
      description: '🥊 Fast-paced multiplayer arcade game',
      elevatorPitch: `Bumper is a game fast-paced multiplayer game where you try to bump other
        players out of the playing field to stay alive.`,
      banner: {
        url: 'https://raw.githubusercontent.com/ubclaunchpad/bumper/master/.static/bumper-small.gif',
      },
      links: {
        repository: 'https://github.com/ubclaunchpad/bumper',
      },
    },
    {
      name: 'ubclaunchpad.com',
      description: '✨ the new UBC Launch Pad website!',
      elevatorPitch: `This website is also a Launch Pad project, designed and implemented from the
        ground up by members of our team!`,
      banner: {
        url: require('../.static/banner.png') as string,
        hasName: true, // this one should be self-explanatory
      },
      links: {
        repository: 'https://github.com/ubclaunchpad/ubclaunchpad.com',
        writeup: 'https://medium.com/ubc-launch-pad-software-engineering-blog/introducing-the-new-launch-pad-website-42175181d644',
      },
    },
    {
      name: 'Cumulus',
      description: '💸 Cryptocurrency that doesn\'t waste your time',
      elevatorPitch: `Cumulus is a cryptocurrency that allows users to send and receive tokens on
        a P2P network or "mine" on the network to create tokens for themselves. Cumulus reimagines
        the proof-of-work mechanism used by Bitcoin and many other major cryptocurrencies to put
        coin mining computation time to good use.`,
      banner: {
        url: 'https://raw.githubusercontent.com/ubclaunchpad/cumulus/dev/.static/banner.png',
        hasName: true,
      },
      links: {
        repository: 'https://github.com/ubclaunchpad/cumulus',
        writeup: 'https://medium.com/ubc-launch-pad-software-engineering-blog/introducing-cumulus-940456b7e05c',
      },
    },
    {
      name: 'Minutes',
      description: '🔭 Speaker diarization via transfer learning',
      elevatorPitch: `Minutes is a Python library for speaker diarization: the process of splitting
        up an audio file into its unique speakers. Its base model is trained on hundreds of hours
        of spoken English text, and it uses transfer learning to predict on new speakers.`,
      banner: {
        url: 'https://raw.githubusercontent.com/ubclaunchpad/minutes/master/.static/spec.png',
      },
      links: {
        repository: 'https://github.com/ubclaunchpad/minutes',
        writeup: 'https://medium.com/ubc-launch-pad-software-engineering-blog/speaker-diarisation-using-transfer-learning-47ca1a1226f4',
      },
    },
    {
      name: 'etch.space',
      description: '📝 A live multi-user collaborative etch-a-sketch',
      elevatorPitch: `Etch is a live multi-user collaborative etch-a-sketch built on websockets.
        Each user is assigned their own color and can draw whatever their imagination allows while
        watching others draw at the same time.`,
      banner: {
        url: 'https://raw.githubusercontent.com/ubclaunchpad/etch.space/master/banner.png',
        hasName: true,
      },
      links: {
        repository: 'https://github.com/ubclaunchpad/etch.space',
      },
    },
    {
      name: 'Eat',
      description: 'Should we eat 🌮, 🍟, or 🍣?',
      elevatorPitch: `Eat helps you decide on a restaurant that accommodates everyone's preferences
        by suggesting places to eat based the group's location, dietary restrictions, price range,
        and intended meal time. After everyone has voted on the suggested restaurants the app
        selects the best one for the group.`,
      banner: {
        url: 'https://raw.githubusercontent.com/ubclaunchpad/eat/master/Images/animated-banner.gif',
        hasName: true,
      },
      links: {
        repository: 'https://github.com/ubclaunchpad/eat',
        app: {
          url: 'https://apps.apple.com/ca/app/eat-now-find-where-to-eat/id1366648100',
          type: 'ios',
        },
      },
    },
  ],

  /**
   * Links to Launch Pad online!
   */
  socials: {
    instagram: 'https://www.instagram.com/ubclaunchpad',
    facebook: 'https://www.facebook.com/ubclaunchpad',
    medium: 'https://medium.com/ubc-launch-pad-software-engineering-blog',
    github: 'https://github.com/ubclaunchpad',
    linkedin: 'https://www.linkedin.com/company/10054664',
    youtube: 'https://www.youtube.com/channel/UCS0ghlwqTOc1RH_nYENNT5A',
    email: 'team@ubclaunchpad.com',
    buttondown: 'https://buttondown.email/ubclaunchpad',
  },
};

/**
 * Sponsorship configuration.
 *
 * @category Configuration
 */
export const sponsorshipConfig: {
  packageURL: string;
  sponsors: ClubSponsor[];
} = {
  /**
   * Link to the most recent sponsorship package.
   *
   * We will generate a redirect for this link under https://ubclaunchpad.com/sponsorship
   */
  packageURL: 'https://drive.google.com/file/d/1qHG5GDN_2JZbJzOTBEQc8OULsx3VjXEz/view',

  /**
   * Current sponsors.
   *
   * Each element must satisfy [[`ClubSponsor`]].
   */
  sponsors: [
    {
      name: 'Axiom Zen',
      website: 'https://www.axiomzen.co/',
      tier: 'gold',
      logo: {
        url: 'https://res.cloudinary.com/dfgx570fg/image/upload/w_700,h_700,c_limit/v1468362472/f2ed2lbpqujvxa8r6zux.png',
        filter: 'invert()',
      },
    },
    {
      name: 'East Side Game Studio',
      website: 'https://www.eastsidegames.com/',
      tier: 'gold',
      logo: {
        url: 'https://www.eastsidegames.com/wp-content/themes/esgnew/img/logo-final.png',
        filter: 'invert() grayscale(0.5)',
      },
    },
    {
      name: 'GitHub',
      website: 'https://github.com',
      logo: {
        url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png',
        filter: 'invert()',
      },
    },
    {
      name: 'Netlify',
      website: 'https://netlify.com',
      logo: {
        url: 'https://www.netlify.com/img/press/logos/full-logo-dark.png',
      },
    },
    {
      name: 'Fathom Analytics',
      website: 'https://usefathom.com',
      logo: {
        url: require('./assets/logos/fathom-light.svg'),
      },
    },
  ],
};

/**
 * Defines a redirect - see [[`redirectsConfig`]].
 */
type Redirect = {
  /**
   * Path to redirect, such as `/my/amazing-link`. This will translate to `ubclaunchpad.com/my/amazing-link`.
   */
  path: string;
  /**
   * URL or path to redirect to, such as `https://my-event-page.com`.
   */
  target: string;
}

/**
 * Declare additional redirects to generate on each build. Make sure it does not conflict with any
 * existing redirects - a complete list is available in [`redirects.txt`](https://ubclaunchpad.com/redirects.txt).
 * 
 * See [[`Redirect`]] for options.
 * 
 * @category Configuration
 */
export const redirectsConfig: Redirect[] = [
  {
    path: '/events',
    target: `${clubConfig.socials.facebook}/events`,
  },
  {
    path: '/slack',
    target: 'https://ubclaunchpad.slack.com',
  },
  {
    // newsletter redirect to #resources, which is nicer-looking than the buttondown page
    path: '/newsletter',
    target: '/#resources',
  },
  {
    // redirect to latest campaign's Medium blog post - learn more about campaigns in our handbook:
    // https://docs.ubclaunchpad.com/handbook/tools/social-media#social-media-campaigns
    path: '/latest',
    target: `${clubConfig.socials.medium}/state-of-launch-pad-2020-2da3f4cfbc36`,
  },
];
