<script setup>
import { ref } from 'vue';
import {
  BNavbar,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
} from 'bootstrap-vue-next';

const isNavCollapsed = ref(false);
</script>

<template>
  <BNavbar toggleable="md" type="dark" variant="success" class="p-0">
    <BNavbarToggle
        target="nav-collapse"
        @click="isNavCollapsed = !isNavCollapsed"
        aria-label="Toggle navigation"
    />
    <BCollapse id="nav-collapse" is-nav v-model="isNavCollapsed">
      <BNavbarNav>
        <BNavItem to="/" exact class="fw-semibold mx-2" active-class="text-decoration-underline">Home</BNavItem>
        <BNavItem to="/players" class="fw-semibold mx-2" active-class="text-decoration-underline">Players</BNavItem>
        <BNavItem to="/clubs" class="fw-semibold mx-2" active-class="text-decoration-underline">Clubs</BNavItem>
        <BNavItem to="/contact" class="fw-semibold mx-2" active-class="text-decoration-underline">Contact</BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<style scoped>
.nav-link {
  color: white !important;
}

.nav-link:hover {
  color: #f8f9fa !important;
}
</style>
