<template>
  <div>
    <!-- Header -->
    <header class="bg-dark text-white py-3">
      <b-container>
        <h1 class="mb-0">⚽ GoalLine Football</h1>
      </b-container>
    </header>

    <!-- Call to Action -->
    <section class="bg-light text-center py-5">
      <b-container>
        <h2 class="display-5 mb-3">Your Ultimate Football Companion</h2>
        <p class="lead">Live scores, highlights, and breaking news at your fingertips.</p>
        <b-button variant="primary" size="lg">Join the Club</b-button>
      </b-container>
    </section>

    <!-- About Section -->
    <section class="py-5">
      <b-container>
        <b-row class="align-items-center">
          <b-col md="6">
            <img
                src="https://via.placeholder.com/500x300"
                class="img-fluid rounded shadow"
                alt="Football action"
            />
          </b-col>
          <b-col md="6" class="mt-4 mt-md-0">
            <h3>About GoalLine</h3>
            <p>
              At GoalLine, we bring fans closer to the game with:
            </p>
            <ul>
              <li>Real-time match updates</li>
              <li>Detailed stats and analytics</li>
              <li>Transfer news and exclusive reports</li>
              <li>Interactive fan community</li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3">
      <b-container>
        <small>&copy; 2025 GoalLine Football. All rights reserved.</small>
      </b-container>
    </footer>
  </div>
</template>

<script setup>
// No logic needed for now
import {BButton, BCol, BContainer, BRow} from "bootstrap-vue-next";
</script>

<style scoped>
ul {
  padding-left: 1.2rem;
  list-style-type: disc;
}
</style>
