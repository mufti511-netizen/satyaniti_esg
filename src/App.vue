<template>
  <div class="site-bg-video" aria-hidden="true">
    <video autoplay muted loop playsinline preload="auto">
      <source src="/assets/vids/bg.mp4" type="video/mp4" />
    </video>
  </div>

  <div class="site-content">
    <Navbar />
    <main class="parallax-content">
      <Hero />
      <About />
      <Services />
      <Platform />
      <Academy />
      <Regulation />
      <Roadmap />
      
      <Team /> 
      
      <Contact />
    </main>
    <Footer />
  </div>

  </template>

<script setup>
import { provide } from 'vue';
import { useAppController } from '@/controllers/useAppController';

import Navbar from '@/views/Navbar.vue';
import Hero from '@/views/Hero.vue';
import About from '@/views/About.vue';
import Services from '@/views/Services.vue';
import Platform from '@/views/Platform.vue';
import Academy from '@/views/Academy.vue';
import Regulation from '@/views/Regulation.vue';
import Roadmap from '@/views/Roadmap.vue';

// PASTIKAN TEAM.VUE DI-IMPORT DI SINI
import Team from '@/views/Team.vue'; 

import Contact from '@/views/Contact.vue';
import Footer from '@/views/Footer.vue';

const ctrl = useAppController();
provide('appController', ctrl);
</script>