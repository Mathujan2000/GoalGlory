<script setup>
import { ref } from 'vue';
import { BNavbar, BNavbarToggle, BCollapse, BNavbarNav, BNavItem } from 'bootstrap-vue-next';

// Create a reactive property to track the collapse state
const isNavCollapsed = ref(false);
</script>

<template>
  <b-navbar toggleable="md" type="dark" variant="success">
    <!-- Toggler Button -->
    <b-navbar-toggle
        target="nav-collapse"
        @click="isNavCollapsed = !isNavCollapsed"
    ></b-navbar-toggle>

    <!-- Collapsible Navigation -->
    <b-collapse id="nav-collapse" is-nav v-model="isNavCollapsed">
      <b-navbar-nav>
        <b-nav-item to="/" exact class="fw-semibold mx-2" active-class="text-decoration-underline">Home</b-nav-item>
        <b-nav-item to="/players" class="fw-semibold mx-2" active-class="text-decoration-underline">Players</b-nav-item>
        <b-nav-item to="/clubs" class="fw-semibold mx-2" active-class="text-decoration-underline">Clubs</b-nav-item>
        <b-nav-item to="/contact" class="fw-semibold mx-2" active-class="text-decoration-underline">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped>
/* Optional: Add custom styles for the navbar */
</style>