<template>
  <div class="page-container">
    <!-- Header -->
    <header class="header bg-dark text-white py-3 text-center">
      <b-container>
        <h1 class="mb-0">⚽ GoalLine Football</h1>
      </b-container>
    </header>

    <!-- Navbar onder de header -->
    <nav class="custom-navbar">
      <b-container class="d-flex justify-content-end">
        <b-navbar-nav class="d-flex flex-row">
          <b-nav-item to="/" exact class="mx-3 text-white">Home</b-nav-item>
          <b-nav-item to="/players" class="mx-3 text-white">Players</b-nav-item>
          <b-nav-item to="/clubs" class="mx-3 text-white">Clubs</b-nav-item>
          <b-nav-item to="/contact" class="mx-3 text-white">Contact</b-nav-item>
        </b-navbar-nav>
      </b-container>
    </nav>

    <!-- Call to Action -->
    <section class="bg-light text-center py-5 flex-grow-1">
      <b-container>
        <h2 class="display-5 mb-3">Your Ultimate Football Companion</h2>
        <p class="lead">Live scores, highlights, and breaking news at your fingertips.</p>
        <b-button variant="primary" size="lg">Join the Club</b-button>
      </b-container>
    </section>

    <!-- About Section -->
    <section class="py-5 flex-grow-1">
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
            <p>At GoalLine, we bring fans closer to the game with:</p>
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
    <footer class="footer bg-dark text-white text-center py-3 mt-auto">
      <b-container>
        <small>&copy; 2025 GoalLine Football. All rights reserved.</small>
      </b-container>
    </footer>
  </div>
</template>

<script setup>
import {
  BButton,
  BCol,
  BContainer,
  BRow,
  BNavbarNav,
  BNavItem,
} from "bootstrap-vue-next";
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header styling */
.header {
  /* al donker en wit via classes, kan hier extra */
}

/* Navbar styling */
.custom-navbar {
  background-color: #198754; /* Bootstrap groen */
}

/* Nav links */
.mx-3 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.text-white {
  color: white !important;
}

/* Flex grow for main content */
.flex-grow-1 {
  flex-grow: 1;
}

/* Footer styling */
.footer {
  /* al donker en wit via classes */
}

.mt-auto {
  margin-top: auto;
}

ul {
  padding-left: 1.2rem;
  list-style-type: disc;
}
</style>
