<template>
  <div
    class="container is-widescreen"
  >
    <div>
      <h2>Our Events</h2>
      <p>UBC Launch Pad does a variety of events including Tech Talks, Workshops, and Q&As. RSVP to our upcoming events below!</p>
      <ul class="event-list">
        <li
          v-for="event in events"
          :key="event.date"
          class="event"
        >
          <h1>{{ event.type }}</h1>
          <h2>{{ event.title }}</h2>
          <p class="date">
            {{ event.date }}
          </p>
          <p>{{ event.blurb }}</p>
          <p>{{ event.description }}</p>
          <a
            :href="event.rsvpLink"
            target="_blank"
          >RSVP</a>
        </li>
        <li class="event empty">
          <h1>Stay tuned for more!</h1>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ClubEvent } from '@/configTypes';

/**
 * Events implements a section for listing upcoming Launch Pad events.
 */
export default Vue.extend({
  name: 'Events',
  props: {
    /**
     * Upcoming events
     */
    events: {
      type: Array as () => ClubEvent[],
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.event-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 850px;
}

.event {
  flex: 1 0 24rem;
  min-height: 24rem;
  border: 2px solid white;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;

  &.empty {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 3rem;
    }
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  h2 {
    font-size: 2rem;
    line-height: 1.1;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  a {
    margin-top: 3rem;
    width: 100%;
    background: $rocket;
    color: white;
    font-weight: bold;
    padding: 0.5rem 0;
    border-radius: 4px;
  }

  .date {
    opacity: 1;
    text-transform: uppercase;
  }
}
</style>
