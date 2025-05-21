<script>
export default {
  name: 'AppNavbar'
}
</script>

<template>
  <div class="d-none d-md-flex align-items-center">
    <b-nav-item to="/" exact class="nav-link fw-semibold mx-2 text-white" active-class="text-decoration-underline">Home</b-nav-item>
    <b-nav-item to="/players" class="nav-link fw-semibold mx-2 text-white" active-class="text-decoration-underline">Players</b-nav-item>
    <b-nav-item to="/clubs" class="nav-link fw-semibold mx-2 text-white" active-class="text-decoration-underline">Clubs</b-nav-item>
    <b-nav-item to="/contact" class="nav-link fw-semibold mx-2 text-white" active-class="text-decoration-underline">Contact</b-nav-item>
  </div>
</template>

<script setup>
import { BNavItem } from 'bootstrap-vue-next';
</script>
