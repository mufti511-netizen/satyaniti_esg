<template>
  <nav id="navbar" :class="{ transparent: ctrl.state.isHero, scrolled: !ctrl.state.isHero }">
    <div class="nav-inner">
      <a class="nav-logo" @click="ctrl.methods.scrollTo('hero')">
        <div class="nav-logo-mark">
          <img src="/assets/img/icon.png" alt="Satyaniti logo" />
        </div>
        <span class="nav-logo-text">Satyaniti</span>
      </a>
      
      <ul class="nav-links">
        <li><a @click="ctrl.methods.scrollTo('tentang')" :class="{ active: ctrl.state.activeSection === 'tentang' }">Tentang</a></li>
        <li><a @click="ctrl.methods.scrollTo('layanan')" :class="{ active: ctrl.state.activeSection === 'layanan' }">Layanan</a></li>
        <li><a @click="ctrl.methods.scrollTo('platform')" :class="{ active: ctrl.state.activeSection === 'platform' }">Platform</a></li>
        <li><a @click="ctrl.methods.scrollTo('academy')" :class="{ active: ctrl.state.activeSection === 'academy' }">ESG Academy</a></li>
        <li><a @click="ctrl.methods.scrollTo('mengapa')" :class="{ active: ctrl.state.activeSection === 'mengapa' }">Regulasi</a></li>
        <li><a @click="ctrl.methods.scrollTo('kontak')" class="nav-cta">Hubungi Kami</a></li>
      </ul>

      <button class="nav-mobile-btn" @click="ctrl.state.mobileOpen = !ctrl.state.mobileOpen" :class="{ open: ctrl.state.mobileOpen }" aria-label="Buka menu">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>
    </div>
  </nav>

  <div class="mobile-menu-backdrop" :class="{ open: ctrl.state.mobileOpen }" @click="ctrl.state.mobileOpen = false"></div>
  <div class="mobile-menu" :class="{ open: ctrl.state.mobileOpen }">
    <div class="mobile-menu-links">
      <a @click="ctrl.methods.scrollTo('tentang')" style="--i:1">Tentang</a>
      <a @click="ctrl.methods.scrollTo('layanan')" style="--i:2">Layanan</a>
      <a @click="ctrl.methods.scrollTo('platform')" style="--i:3">Platform Dashboard</a>
      <a @click="ctrl.methods.scrollTo('academy')" style="--i:4">ESG Academy</a>
      <a @click="ctrl.methods.scrollTo('mengapa')" style="--i:5">Regulasi</a>
      <a @click="ctrl.methods.scrollTo('kontak')" class="mobile-menu-cta" style="--i:6">Hubungi Kami →</a>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
const ctrl = inject('appController');
</script>

<!--
  Semua CSS navbar (#navbar, .nav-inner, .nav-logo*, .nav-links, .nav-cta,
  .nav-mobile-btn, .burger-line, .mobile-menu*) sudah dipindahkan ke tokens.css
  pada section "NAVBAR" dan "MOBILE MENU (DRAWER)", termasuk media query
  mobile-nya yang sudah digabung ke dalam blok @media (max-width: 768px) yang
  sudah ada di tokens.css. Dengan begitu styling tetap global & konsisten
  dengan token warna/spacing lain, dan tidak duplikat lewat <style scoped>
  di tiap komponen.
-->