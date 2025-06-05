<template>
  <div class="page-container">

    <!-- Main content -->
    <section class="bg-light text-center py-5 flex-grow-1" role="main" aria-label="Main introduction">
      <b-container>
        <h1 class="display-5 mb-3 text-success">Your Ultimate Football Companion</h1>
        <p class="lead text-dark">Clubs, Player, PlayerDetail.</p>
        <b-button variant="success" size="lg" aria-label="Join the Football Club">Join the Club</b-button>
      </b-container>
    </section>

    <!-- About Section -->
    <section class="py-5 flex-grow-1" aria-label="About football">
      <b-container>
        <b-row class="align-items-center">
          <b-col md="6">
            <router-link to="/players" aria-label="View players page">
              <img
                  :src="action"
                  class="img-fluid rounded shadow"
                  alt="Football players in action on the field"
                  fetchpriority=high
                  width="600"
                  height="400"
              />
            </router-link>
          </b-col>
          <b-col md="6">
          <template>
    <img
      :src="about"
      :srcset="`${imgSmall} 400w, ${imgMedium} 800w, ${imgDefault} 1200w`"
      sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
      class="img-fluid rounded shadow"
      alt="About football clubs and players"
      width="600"
      height="400"
    />
  </template>
            </b-col>
          </b-row>
        </b-container>
    </section>

  </div>
</template>

<script setup>
import { BButton, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import action from '@/assets/Calltoaction.webp';
import about from '@/assets/aboutnew.webp';
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* List in About section */
ul {
  padding-left: 1.2rem;
  list-style-type: disc;
}
</style>
