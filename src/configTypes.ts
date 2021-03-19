/**
 * Describes a video. Currently, we only support YouTube embeds.
 */
export type MediaYouTube = {
  type: 'youtube';
  /**
   * The video ID, usually found at the end of the link. For example, the following link:
   * 
   * ```
   * https://youtu.be/gNtLn0EDFeQ
   * ```
   * 
   * has video ID `gNtLn0EDFeQ`.
   */
  id: string;
  /**
   * Number of seconds into the video to start at by default.
   */
  startAt?: number;
};

/**
 * Describes an image.
 */
export type MediaImage = {
  type: 'image';
  url: string;
};

/**
 * Describes a Launch Pad project.
 */
export type Project = {
  /**
   * Human-readable name for project.
   */
  name: string;
  /**
   * Super short one-line description about this project, around 5-10 words.
   */
  description: string;
  /**
   * Two or three sentences diving into your project - what does it do? How does it do it?
   */
  elevatorPitch: string;
  /**
   * Small **640px by 320px** banner image (or equivalent 2:1 image of reasonable resolution,
   * i.e. less than 1mb) for featuring your project.
   * 
   * Bonus: note that this image format is also used by GitHub to provide link previews when you
   * share your repository - just go to your repository's Settings and upload the same image under
   * the "Social preview" option.
   */
  banner: {
    url: string;
    /**
     * Indicate if the banner has project name, and that a name should not be generated on the website.
     */
    hasName?: boolean;
  };
  /**
   * Detailed or more descriptive media to showcase your project - featured in project modals.
   * 
   * This can be one of:
   * - video (`type: 'youtube'` - see [[`MediaYouTube`]])
   * - image (`type: 'image'` - see [[`MediaImage`]])
   */
  media?: MediaYouTube | MediaImage;
  /**
   * Links to further information about this project.
   */
  links: {
    /**
     * Link to GitHub repository
     */
    repository: string;
    /**
     * Link to deployed website
     */
    website?: string;

     /**
     * If the project is an app, link to the app and type of app. 
     */
    app?: {
      url: string;
      type: 'ios' | 'android';
    };

    /**
     * Link to a blog post or similar writeup
     */
    writeup?: string;
  };
}

export enum EventType {
  TechTalk = 'Tech Talk'
}

/**
 * Describes a Launch Pad event.
 */
export type ClubEvent = {
  type: EventType;
  title: string;
  /**
   * The event date should conform to the following format:
   *  `Weekday, Month Date at Time Timezone`
   *  e.g. `Saturday, March 20 at 7:00 PM PST
   */
  date: string;
  blurb: string;
  description: string;
  rsvpLink: string;
}

/**
 * Describes a Launch Pad position (e.g. 'Developer', 'Designer')
 */
export type ClubPosition = {
  /**
   * Position name.
   */
  name: string;
  /**
   * Link to learn more and apply to this position.
   */
  rolePageURL: string;
}

/**
 * Describes a club sponsor.
 */
export type ClubSponsor = {
  /**
   * Sponsor name.
   */
  name: string;
  /**
   * Link to sponsor website.
   */
  website: string;
  /**
   * How much support this sponsor provided. Refer to the sponsorship package for more details.
   */
  tier?: 'bronze' | 'silver' | 'gold' | 'platinum';
  /**
   * Sponsor logo - the `url` must be PNG, with transparent backgrounds, and roughly 140px by 120px
   * (or a 3:2 aspect ratio).
   *
   * Try to source logos from online. If the company does not have a linkable logo suitable for
   * the sponsors section, add the logo to `/src/assets/logos`.
   *
   * To make simple adjustments to help the logo look better against the website's background, use
   * `logoFilter` to apply some simple CSS effects.
   */
  logo: {
    url: string;
    /**
     * Simple CSS filters for the sponsor logo - see https://developer.mozilla.org/en-US/docs/Web/CSS/filter
     */
    filter?: string;
  };
}

/**
 * Describes set of links to Launch Pad online.
 * 
 * We will generate redirects for most links here, for example https://ubclaunchpad.com/facebook
 */
export type ClubSocials = {
  instagram: string;
  facebook: string;
  medium: string;
  github: string;
  email: string;
  linkedin: string;
  youtube: string;
  /**
   * Buttondown is a newsletter provider - see https://buttondown.email
   */
  buttondown: string;
}

