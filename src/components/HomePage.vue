<template>
  <div class="page-container">

    <!-- Main content -->
    <section class="bg-light text-center py-5 flex-grow-1">
      <b-container>
        <h2 class="display-5 mb-3 text-success">Your Ultimate Football Companion</h2>
        <p class="lead text-secondary">Clubs, Player, PlayerDetail.</p>
        <b-button variant="success" size="lg">Join the Club</b-button>
      </b-container>
    </section>

    <!-- About Section -->
    <section class="py-5 flex-grow-1">
      <b-container>
        <b-row class="align-items-center">
          <b-col md="6">
            <router-link to="/players">
              <img
                  :src="action"
                  class="img-fluid rounded shadow"
                  alt="Football action"
                  style="cursor: pointer;"
              />
            </router-link>
          </b-col>
          <b-col md="6">
            <img
                :src="about"
                class="img-fluid rounded shadow"
                alt="about"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>

  </div>
</template>

<script setup>
import { BButton, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import action from '@/assets/Calltoaction.png';
import about from '@/assets/aboutnew.png'; // adjust path if needed
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
