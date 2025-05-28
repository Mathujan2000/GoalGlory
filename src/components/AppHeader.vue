<script setup>
import logo from '@/assets/GoalGlory.png'; // Adjust path if needed
import { BContainer, BButton } from 'bootstrap-vue-next';
import AppNavbar from './AppNavbar.vue';
</script>

<template>
  <header class="bg-success py-3">
    <b-container fluid>
      <div class="d-flex align-items-center justify-content-between">
        <!-- Logo -->
        <div class="logo-container">
          <img
              :src="logo"
              alt="GoalLine logo"
              class="header-logo"
          />
        </div>

        <!-- Navbar and Join Button -->
        <div class="d-flex align-items-center ms-auto">
          <AppNavbar />
          <b-button variant="light" class="fw-bold ms-3 px-4 text-success">JOIN</b-button>
        </div>
      </div>
    </b-container>
  </header>
</template>

<style>
/* Adjust logo size */
.header-logo {
  height: 120px; /* Adjust size as needed */
}

@media (max-width: 768px) {
  .logo-container {
    justify-content: center;gi
    width: auto;
  }

  .navbar-container {
    justify-content: flex-end;
  }
}
</style>