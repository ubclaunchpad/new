<template>
  <div id="main">
    <Nav />

    <!-- sections: refer to each section's component documentation for more details -->

    <Section
      :section-id="0"
      size="max"
      next-section-indicator
      :next-section-on-click="() => goTo('about')"
    >
      <Feature
        :applications-open="recruitment.applicationsOpen"
        :season="recruitment.season"
        :socials="club.socials"
      />
    </Section>

    <Section
      :section-id="1"
      size="large"
    >
      <About />
    </Section>

    <Section
      :section-id="2"
      size="medium"
    >
      <Highlights />
    </Section>

    <Section
      :section-id="3"
      size="medium"
    >
      <Events :events="club.currentEvents" />
    </Section>

    <Section :section-id="4">
      <Teams
        :member-count="club.memberCount"
        :projects="club.currentProjects"
      />
    </Section>

    <Section :section-id="5">
      <Projects
        :github="club.socials.github"
        :projects="club.featuredProjects"
      />
    </Section>

    <Section
      :section-id="6"
      size="large"
    >
      <Resources
        :socials="club.socials"
      />
    </Section>

    <Section
      v-if="recruitment.applicationsOpen"
      :section-id="7"
      size="medium"
    >
      <Join
        :positions="recruitment.positions"
      />
    </Section>

    <!-- section-id depends on if join section exists or not -->
    <Section
      :section-id="recruitment.applicationsOpen ? 8 : 7"
      size="medium"
    >
      <Sponsors
        :sponsors="sponsorship.sponsors"
        :sponsorship-package="sponsorship.packageURL"
      />
    </Section>

    <Footer :socials="club.socials" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

// configuration for site properties - this should ONLY be imported here
import { recruitmentConfig, clubConfig, sponsorshipConfig } from './config';

// utility functions
import { goTo } from '@/lib/util';

// useful components
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import Section from '@/components/Section.vue';

// visible sections, sorted by order they appear in
import Feature from '@/sections/Feature.vue';
import About from '@/sections/About.vue';
import Highlights from '@/sections/Highlights.vue';
import Events from '@/sections/Events.vue';
import Teams from '@/sections/Teams.vue';
import Projects from '@/sections/Projects.vue';
import Resources from '@/sections/Resources.vue';
import Join from '@/sections/Join.vue';
import Sponsors from '@/sections/Sponsors.vue';

/**
 * App is the primary entrypoint to the website.
 */
export default Vue.extend({
  name: 'App',
  components: {
    Nav, Footer, Section,

    Feature,
    About,
    Highlights,
    Events,
    Teams,
    Projects,
    Resources,
    Join,
    Sponsors,
  },
  data: () => ({
    recruitment: recruitmentConfig,
    club: clubConfig,
    sponsorship: sponsorshipConfig,
  }),
  created() {
    this.$fathom.trackPageview();
  },
  methods: {
    goTo(anchor: string) { goTo(document, anchor); },
  },
});
</script>

<style scoped lang="scss">
#main {
  background-color: $dark;
}
</style>
