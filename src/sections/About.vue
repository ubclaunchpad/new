<template>
  <div
    class="container is-widescreen"
    :on-scroll="handleScroll"
  >
    <div class="columns is-vcentered">
      <div
        ref="about-col-left"
        class="hidden column"
      >
        <img
          src="@/assets/about.png"
          alt="feature image"
        >
      </div>
      <div
        ref="about-col-right"
        class="hidden column is-three-fifths pad-32"
      >
        <h2>Who we are</h2>
        <p>
          We’re a student-run software engineering team devoted to building software projects in a
          collaborative and professional environment.
        </p>
        <p>
          Our primary objective is to be the best space at UBC for students to meet other tech
          enthusiasts, build projects in a team setting, gain experience with professional development
          tools and principles, and share their knowledge with others.
        </p>
        <p>
          We form teams based on common interests and project ideas of our own choosing, and hack on
          our projects to completion! We are also lucky enough to have sponsors which help provide
          our teams with necessary resources, like servers, to help us achieve our goals.
        </p>

        <p>
          <a
            href="https://medium.com/ubc-launch-pad-software-engineering-blog/what-is-ubc-launch-pad-d3bbfe6322dc"
            target="_blank"
            rel="noopener noreferrer"
            class="margin-bottom-16"
            @click="reportArticleClick"
          >
            <b>Read the Medium article ></b>
          </a>
          <br>
          <a @click="goTo('sponsors')">
            <b>See our sponsors ></b>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import goals from '@/lib/fathomGoals';
import { updateClassesIfInView, goTo } from '@/lib/util';

/**
 * About implements a section for introducing visitors to Launch Pad.
 */
export default Vue.extend({
  name: 'About',
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    reportArticleClick() {
      this.$fathom.trackGoal(goals.ABOUTUSARTICLE_CLICK);
    },
    handleScroll() {
      updateClassesIfInView(window, this.$refs['about-col-left'], {
        addClasses: 'animated fadeInLeft',
        removeClasses: 'hidden',
      });
      updateClassesIfInView(window, this.$refs['about-col-right'], {
        addClasses: 'animated fadeInLeft',
        removeClasses: 'hidden',
      });
    },
    goTo(anchor: string) { goTo(document, anchor); },
  },
});
</script>

<style scoped lang="scss">

</style>
