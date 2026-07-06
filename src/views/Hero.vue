<template>
  <section
    id="hero"
    ref="root"
    :class="{ 'is-loaded': loaded, 'reduce-motion': reduceMotion }"
    @mousemove="onMove"
    @mouseleave="resetParallax"
  >
    <!-- ================= AMBIENT BACKGROUND ================= -->
    <div class="hero-pattern" aria-hidden="true"></div>
    <div class="hero-grid" aria-hidden="true"></div>

    <div class="leaf-field" aria-hidden="true">
      <svg class="leaf-particle" style="left:12%; width:20px; height:20px; animation-duration:14s; animation-delay:0s;" viewBox="0 0 24 24" fill="none" stroke="rgba(72,179,138,0.20)" stroke-width="1.5"><path d="M2 22C12 22 22 12 22 2M2 22c5-12 15-15 20-20M2 22c12-5 15-15 20-20"/></svg>
      <svg class="leaf-particle" style="left:34%; width:24px; height:24px; animation-duration:18s; animation-delay:3s;" viewBox="0 0 24 24" fill="none" stroke="rgba(41,103,167,0.16)" stroke-width="1.5"><path d="M2 22C12 22 22 12 22 2M2 22c5-12 15-15 20-20M2 22c12-5 15-15 20-20"/></svg>
      <svg class="leaf-particle" style="left:58%; width:16px; height:16px; animation-duration:20s; animation-delay:6s;" viewBox="0 0 24 24" fill="none" stroke="rgba(72,179,138,0.14)" stroke-width="1.5"><path d="M2 22C12 22 22 12 22 2M2 22c5-12 15-15 20-20M2 22c12-5 15-15 20-20"/></svg>
      <svg class="leaf-particle" style="left:80%; width:19px; height:19px; animation-duration:16s; animation-delay:1.5s;" viewBox="0 0 24 24" fill="none" stroke="rgba(242,222,107,0.14)" stroke-width="1.5"><path d="M2 22C12 22 22 12 22 2M2 22c5-12 15-15 20-20M2 22c12-5 15-15 20-20"/></svg>
    </div>

    <div class="hero-inner">
      <!-- ================= LEFT / CONTENT ================= -->
      <div class="hero-left">
        <div class="hero-eyebrow anim-item" style="--d:0ms">
          <span class="hero-eyebrow-dot"></span>
          Pioneer Solusi ESG Terintegrasi
        </div>

        <h1 class="hero-title anim-item" style="--d:90ms">
          Katalisator Utama Pembiayaan Hijau &amp;
          <em>Keberlanjutan Korporasi</em> di Indonesia.
        </h1>

        <p class="hero-subtitle anim-item" style="--d:170ms">
          Satyaniti menghadirkan ekosistem kepatuhan ESG ujung-ke-ujung bagi korporasi:
          konsultasi strategis komprehensif, platform SaaS pelaporan otomatis, dan
          akademi peningkatan kompetensi.
        </p>

        <div class="hero-actions anim-item" style="--d:250ms">
          <button type="button" class="btn-primary" @click="scrollTo('kontak')">
            <span>Mulai Konsultasi</span>
            <svg class="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <button type="button" class="btn-outline" @click="scrollTo('platform')">
            Eksplorasi Platform SaaS
          </button>
        </div>

        <dl class="hero-stats anim-item" style="--d:330ms">
          <div class="hero-stat" v-for="(s, i) in stats" :key="i">
            <dt class="hero-stat-num">{{ formatInt(statValues[i]) }}{{ s.suffix }}</dt>
            <dd class="hero-stat-label">{{ s.label }}</dd>
          </div>
        </dl>
      </div>

      <!-- ================= RIGHT / VISUAL ================= -->
      <div class="hero-visual">
        <!-- Living ESG globe -->
        <svg class="hero-earth" viewBox="0 0 500 500" aria-hidden="true">
          <defs>
            <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="var(--leaf, #48B38A)" />
              <stop offset="100%" stop-color="var(--forest, #123626)" stop-opacity="0" />
            </radialGradient>
          </defs>

          <circle class="earth-orbit orbit-1" cx="250" cy="250" r="220" />
          <circle class="earth-orbit orbit-2" cx="250" cy="250" r="170" />
          <circle class="earth-orbit orbit-3" cx="250" cy="250" r="130" />
          <circle class="earth-glow" cx="250" cy="250" r="90" fill="url(#glowGrad)" opacity="0.4" />

          <g class="earth-sphere">
            <circle cx="250" cy="250" r="90" fill="var(--forest, #123626)" stroke="rgba(72,179,138,0.4)" stroke-width="1.5" />
            <path d="M190 250c0 33.1 26.9 60 60 60s60-26.9 60-60-26.9-60-60-60-60 26.9-60 60zm10 0c0-27.6 22.4-50 50-50s50 22.4 50 50-22.4 50-50 50-50-22.4-50-50z" fill="none" stroke="rgba(72,179,138,0.25)" stroke-width="1" />
            <line x1="160" y1="250" x2="340" y2="250" stroke="rgba(72,179,138,0.2)" stroke-width="1" />
            <line x1="250" y1="160" x2="250" y2="340" stroke="rgba(72,179,138,0.2)" stroke-width="1" />
          </g>

          <!-- Orbiting E / S / G satellites -->
          <g class="esg-satellites">
            <circle class="sat sat-e" cx="250" cy="100" r="7" />
            <circle class="sat sat-s" cx="250" cy="100" r="7" />
            <circle class="sat sat-g" cx="250" cy="100" r="7" />
          </g>
        </svg>

        <div class="visual-cards">
          <!-- Live carbon stream -->
          <article class="hero-card card-carbon anim-item" style="--d:220ms">
            <div class="card-pill">
              <span class="card-pill-dot"></span>Aliran kalkulator karbon langsung
            </div>
            <div class="card-metric">
              {{ carbonDisplay }} <span class="card-unit">tCO₂e</span>
            </div>
            <div class="card-metric-sub">
              Total pengurangan emisi terverifikasi Scope 1 &amp; 2 — Proyek Percontohan
            </div>
            <div class="card-bars" aria-hidden="true">
              <span
                v-for="(b, i) in bars"
                :key="i"
                class="card-bar"
                :class="{ active: b.active }"
                :style="{ height: b.h + '%', '--i': i }"
              ></span>
            </div>
          </article>

          <!-- NEW: Interactive ESG performance index -->
          <article class="hero-card card-esg anim-item" style="--d:340ms">
            <div class="esg-head">
              <span class="card-label">Indeks Kinerja ESG</span>
              <span class="esg-live"><span class="esg-live-dot"></span>Live</span>
            </div>

            <div class="esg-rings">
              <div
                v-for="p in pillars"
                :key="p.key"
                class="esg-ring"
                :style="{ '--c': p.color }"
                tabindex="0"
                :aria-label="`${p.name}: ${Math.round(p.value)} persen`"
              >
                <svg viewBox="0 0 72 72" class="ring-svg" aria-hidden="true">
                  <circle class="ring-track" cx="36" cy="36" r="28" />
                  <circle class="ring-fill" cx="36" cy="36" r="28" :style="ringStyle(p.value)" />
                </svg>
                <span class="ring-center">
                  <span class="ring-letter">{{ p.key }}</span>
                  <span class="ring-val">{{ Math.round(p.value) }}</span>
                </span>
                <span class="ring-name">{{ p.name }}</span>
              </div>
            </div>

            <div class="esg-note">Data ilustrasi agregat proyek percontohan</div>
          </article>

          <!-- Audit readiness -->
          <article class="hero-card card-audit anim-item" style="--d:460ms">
            <div class="card-label">Kesiapan Audit ESG</div>
            <div class="card-metric sunlight">{{ auditValue.toFixed(1) }}%</div>
            <div class="card-metric-sub">
              Skor kepatuhan regulasi rata-rata instansi dampingan awal.
            </div>
          </article>
        </div>
      </div>
    </div>

    <button type="button" class="hero-scroll" @click="scrollTo('tentang')" aria-label="Gulir ke bawah">
      <span>SCROLL</span>
      <span class="hero-scroll-line"></span>
    </button>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, inject } from 'vue';

/* Kompatibel dengan app: tetap pakai appController, tapi aman jika dipreview mandiri */
const ctrl = inject('appController', null);
const scrollTo = (id) => ctrl?.methods?.scrollTo?.(id);

const root = ref(null);
const loaded = ref(false);
const reduceMotion = ref(false);

/* -------- Statistik (ubah target di sini dengan angka riil Anda) -------- */
const stats = [
  { target: 0,   suffix: '',  label: 'Calon Emiten & Perusahaan Publik Dipetakan' },
  { target: 0,   suffix: '',  label: 'Jam Advisory & Pelatihan Kurikulum Modul Terpadu' },
  { target: 100, suffix: '%', label: 'Sesuai Standar Kepatuhan POJK 51 & GRI Standards' },
];
const statValues = reactive(stats.map(() => 0));

/* -------- Kartu karbon & audit -------- */
const carbonTarget = 2841.52;
const carbonValue = ref(0);
const auditValue = ref(0);
const bars = reactive([
  { h: 35, active: false },
  { h: 50, active: false },
  { h: 45, active: false },
  { h: 75, active: true },
  { h: 60, active: false },
]);

/* -------- Pilar ESG (elemen animasi ESG utama) -------- */
const pillars = reactive([
  { key: 'E', name: 'Environmental', target: 92, value: 0, color: 'var(--leaf, #48B38A)' },
  { key: 'S', name: 'Social',        target: 88, value: 0, color: '#2E8FC0' },
  { key: 'G', name: 'Governance',    target: 95, value: 0, color: 'var(--sunlight, #F2DE6B)' },
]);

const RING_C = 2 * Math.PI * 28; // keliling cincin r=28
const ringStyle = (v) => ({
  strokeDasharray: RING_C,
  strokeDashoffset: RING_C * (1 - v / 100),
});

const formatInt = (v) => Math.round(v).toString();
const carbonDisplay = ref('0.00');

/* -------- Utilitas count-up (easeOutCubic) -------- */
function animate(to, onUpdate, duration = 1600, delay = 0) {
  if (reduceMotion.value) { onUpdate(to); return; }
  const start = performance.now() + delay;
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  function frame(now) {
    if (now < start) { requestAnimationFrame(frame); return; }
    const p = Math.min((now - start) / duration, 1);
    onUpdate(to * ease(p));
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* -------- Parallax halus (hanya pointer presisi, hormati reduced-motion) -------- */
let rafId = null;
let allowParallax = false;
function onMove(e) {
  if (!allowParallax || reduceMotion.value || !root.value) return;
  if (rafId) return;
  rafId = requestAnimationFrame(() => {
    const mx = e.clientX / window.innerWidth - 0.5;
    const my = e.clientY / window.innerHeight - 0.5;
    root.value.style.setProperty('--mx', mx.toFixed(3));
    root.value.style.setProperty('--my', my.toFixed(3));
    rafId = null;
  });
}
function resetParallax() {
  if (!root.value) return;
  root.value.style.setProperty('--mx', '0');
  root.value.style.setProperty('--my', '0');
}

onMounted(() => {
  reduceMotion.value =
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  allowParallax = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches ?? false;

  requestAnimationFrame(() => (loaded.value = true));

  const startDelay = reduceMotion.value ? 0 : 350;

  stats.forEach((s, i) => animate(s.target, (v) => (statValues[i] = v), 1500, startDelay));
  animate(carbonTarget, (v) => {
    carbonValue.value = v;
    carbonDisplay.value = v.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }, 1800, startDelay);
  animate(94.8, (v) => (auditValue.value = v), 1600, startDelay + 150);
  pillars.forEach((p, i) =>
    animate(p.target, (v) => (p.value = v), 1700, startDelay + 200 + i * 120)
  );
});

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId);
});
</script>

<style scoped>
/* ============ FALLBACK TOKENS (dipakai hanya jika token global tak ada) ============ */
#hero {
  --_gradient-dark: var(--gradient-dark, linear-gradient(150deg, #08201699 0%, #0b2a1e 45%, #0a2233 100%), #0b2419);
  --_gradient-esg: var(--gradient-esg, linear-gradient(90deg, #48B38A, #2967A7, #F2DE6B));
  --_white: var(--white, #ffffff);
  --_leaf: var(--leaf, #48B38A);
  --_forest: var(--forest, #123626);
  --_sunlight: var(--sunlight, #F2DE6B);
  --_gold: var(--gold, #E4BE55);
  --_amber: var(--amber, #C89A2E);
  --_display: var(--display, "Fraunces", Georgia, "Times New Roman", serif);
  --_mono: var(--mono, ui-monospace, "SFMono-Regular", "JetBrains Mono", monospace);
  --_r-sm: var(--r-sm, 10px);
  --_r-md: var(--r-md, 14px);
  --_r-lg: var(--r-lg, 20px);

  --mx: 0; --my: 0;

  min-height: 100vh;
  background: var(--gradient-dark, linear-gradient(150deg, #082016 0%, #0b2a1e 45%, #0a2233 100%));
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* ============ AMBIENT BG ============ */
.hero-pattern {
  position: absolute; inset: 0;
  background-image:
    radial-gradient(circle at 18% 46%, rgba(47,156,119,0.30) 0%, transparent 55%),
    radial-gradient(circle at 82% 18%, rgba(41,103,167,0.28) 0%, transparent 50%),
    radial-gradient(circle at 60% 82%, rgba(242,222,107,0.14) 0%, transparent 46%);
  animation: hero-drift 22s ease-in-out infinite alternate;
}
@keyframes hero-drift {
  0%   { filter: hue-rotate(0deg) brightness(1); }
  100% { filter: hue-rotate(6deg) brightness(1.05); }
}
.hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, #000 55%, transparent 100%);
}
.leaf-field { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }
.leaf-particle {
  position: absolute; bottom: -40px; opacity: 0;
  animation-name: leaf-rise; animation-timing-function: ease-in; animation-iteration-count: infinite;
}
@keyframes leaf-rise {
  0%   { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
  8%   { opacity: 0.55; }
  50%  { transform: translateY(-52vh) translateX(18px) rotate(160deg); }
  92%  { opacity: 0.35; }
  100% { transform: translateY(-102vh) translateX(-12px) rotate(320deg); opacity: 0; }
}

/* ============ LAYOUT ============ */
.hero-inner {
  position: relative;
  max-width: 1200px; margin: 0 auto; width: 100%;
  padding: 120px 32px 96px;
  display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 72px;
  align-items: center;
}

/* ============ ENTRANCE REVEAL ============ */
.anim-item {
  opacity: 0; transform: translateY(18px);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--d, 0ms);
}
.is-loaded .anim-item { opacity: 1; transform: none; }

/* ============ LEFT CONTENT ============ */
.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 14px; margin-bottom: 24px;
  background: rgba(200,154,46,0.15); border: 1px solid rgba(200,154,46,0.3);
  border-radius: 100px;
  font-size: 0.78rem; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase;
  color: var(--_amber);
}
.hero-eyebrow-dot {
  width: 6px; height: 6px; border-radius: 50%; background: var(--_amber);
  animation: pulse-dot 2s ease-in-out infinite;
}
@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(200,154,46,0.5); }
  50%      { opacity: 0.6; transform: scale(0.8); box-shadow: 0 0 0 5px rgba(200,154,46,0); }
}
.hero-title {
  font-family: var(--_display);
  font-size: clamp(2.3rem, 5vw, 3.8rem); font-weight: 300; line-height: 1.12;
  letter-spacing: -0.02em; color: var(--_white); margin-bottom: 24px;
}
.hero-title em {
  font-style: italic;
  background: var(--_gradient-esg); background-size: 200% auto;
  -webkit-background-clip: text; background-clip: text; color: transparent;
  animation: gradient-pan 6s ease-in-out infinite;
}
@keyframes gradient-pan {
  0%, 100% { background-position: 0% center; }
  50%      { background-position: 100% center; }
}
.hero-subtitle {
  font-size: 1.05rem; line-height: 1.75; color: rgba(255,255,255,0.65);
  max-width: 480px; margin-bottom: 40px;
}

.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.btn-primary {
  position: relative; overflow: hidden;
  padding: 14px 28px; border: none; border-radius: var(--_r-sm);
  background: var(--_gold); color: var(--_forest);
  font-weight: 600; font-size: 0.9rem; cursor: pointer;
  display: inline-flex; align-items: center; gap: 8px;
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
}
.btn-primary::after {
  content: ""; position: absolute; top: 0; left: -120%; width: 60%; height: 100%;
  background: linear-gradient(100deg, transparent, rgba(255,255,255,0.55), transparent);
  transform: skewX(-18deg);
}
.btn-primary:hover {
  background: var(--_amber); transform: translateY(-2px);
  box-shadow: 0 10px 26px -12px rgba(228,190,85,0.7);
}
.btn-primary:hover::after { animation: btn-shine 0.9s ease; }
@keyframes btn-shine { to { left: 130%; } }
.btn-arrow { transition: transform 0.2s ease; }
.btn-primary:hover .btn-arrow { transform: translateX(4px); }

.btn-outline {
  padding: 14px 28px; border-radius: var(--_r-sm);
  background: transparent; color: rgba(255,255,255,0.85);
  border: 1px solid rgba(255,255,255,0.25);
  font-weight: 500; font-size: 0.9rem; cursor: pointer;
  transition: background 0.2s, border-color 0.2s, transform 0.15s;
}
.btn-outline:hover {
  background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.45);
  transform: translateY(-2px);
}

.hero-stats {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
  background: rgba(255,255,255,0.08); border-radius: var(--_r-md);
  overflow: hidden; margin: 56px 0 0;
}
.hero-stat { padding: 24px 20px; background: rgba(18,54,38,0.6); text-align: center; }
.hero-stat-num {
  font-family: var(--_mono); font-size: 1.9rem; font-weight: 600;
  color: var(--_sunlight); line-height: 1; margin-bottom: 6px;
}
.hero-stat-label { font-size: 0.78rem; line-height: 1.4; color: rgba(255,255,255,0.55); }

/* ============ RIGHT VISUAL ============ */
.hero-visual { position: relative; min-height: 460px; }

.hero-earth {
  position: absolute; top: 50%; left: 50%;
  width: 460px; height: 460px; opacity: 0.9; pointer-events: none; z-index: 0;
  transform: translate(-50%, -50%)
             translate(calc(var(--mx) * 22px), calc(var(--my) * 22px));
  transition: transform 0.4s ease-out;
}
.earth-glow { animation: earth-breathe 5s ease-in-out infinite; transform-origin: center; }
.earth-sphere { animation: earth-rotate 60s linear infinite; transform-origin: center; }
.earth-orbit { fill: none; stroke: rgba(255,255,255,0.14); stroke-dasharray: 2 6; transform-origin: center; }
.orbit-1 { animation: orbit-spin 14s linear infinite; }
.orbit-2 { animation: orbit-spin 20s linear infinite reverse; }
.orbit-3 { animation: orbit-spin 26s linear infinite; }
@keyframes earth-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes orbit-spin  { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes earth-breathe {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50%      { opacity: 0.85; transform: scale(1.04); }
}

/* Satelit E/S/G mengorbit */
.esg-satellites { transform-origin: 250px 250px; }
.sat { transform-origin: 250px 250px; filter: drop-shadow(0 0 6px currentColor); }
.sat-e { fill: var(--_leaf);     color: var(--_leaf);     animation: sat-orbit 18s linear infinite; }
.sat-s { fill: #2E8FC0;          color: #2E8FC0;          animation: sat-orbit 18s linear infinite; animation-delay: -6s; }
.sat-g { fill: var(--_sunlight); color: var(--_sunlight); animation: sat-orbit 18s linear infinite; animation-delay: -12s; }
@keyframes sat-orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

/* ---- Kartu: FLOW layout (tidak lagi absolute -> tidak bertumpuk) ---- */
.visual-cards {
  position: relative; z-index: 1;
  display: flex; flex-direction: column; gap: 16px;
  transform: translate(calc(var(--mx) * -10px), calc(var(--my) * -10px));
  transition: transform 0.4s ease-out;
}
.hero-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--_r-lg);
  -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px);
  padding: 22px 24px;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}
.hero-card:hover {
  transform: translateY(-4px);
  border-color: rgba(72,179,138,0.4);
  box-shadow: 0 18px 40px -22px rgba(0,0,0,0.6);
}
.card-carbon { background: rgba(255,255,255,0.08); }
.card-audit  { align-self: flex-end; width: 84%; }

.card-label {
  font-size: 0.7rem; font-weight: 500; text-transform: uppercase;
  letter-spacing: 0.08em; color: rgba(255,255,255,0.45); margin-bottom: 10px;
}
.card-metric {
  font-family: var(--_mono); font-size: 2.15rem; font-weight: 300;
  color: var(--_white); line-height: 1.1; margin-bottom: 4px;
}
.card-metric.sunlight { color: var(--_sunlight); }
.card-unit { font-size: 1.1rem; color: rgba(255,255,255,0.5); }
.card-metric-sub { font-size: 0.82rem; line-height: 1.45; color: rgba(255,255,255,0.55); }

.card-pill {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 5px 10px; margin-bottom: 12px;
  background: rgba(47,156,119,0.25); border-radius: 100px;
  font-size: 0.75rem; color: var(--_leaf);
}
.card-pill-dot {
  width: 6px; height: 6px; border-radius: 50%; background: var(--_leaf);
  animation: pulse-dot 1.6s ease-in-out infinite;
}
.card-bars { margin-top: 16px; display: flex; align-items: flex-end; gap: 6px; height: 60px; }
.card-bar {
  flex: 1; background: rgba(72,179,138,0.3); border-radius: 3px 3px 0 0;
  transform-origin: bottom; transform: scaleY(0);
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--i) * 90ms + 300ms);
}
.is-loaded .card-bar { transform: scaleY(1); }
.card-bar.active { background: var(--_leaf); }
.is-loaded .card-bar.active { animation: bar-pulse 2.6s ease-in-out infinite 1.2s; }
@keyframes bar-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.55; } }

/* ---- Kartu ESG index (elemen signature) ---- */
.esg-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
.esg-live {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 0.68rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
  color: rgba(255,255,255,0.7);
}
.esg-live-dot {
  width: 7px; height: 7px; border-radius: 50%; background: #ff5f6d;
  box-shadow: 0 0 0 0 rgba(255,95,109,0.6); animation: live-blink 1.8s ease-out infinite;
}
@keyframes live-blink {
  0%   { box-shadow: 0 0 0 0 rgba(255,95,109,0.6); }
  70%  { box-shadow: 0 0 0 7px rgba(255,95,109,0); }
  100% { box-shadow: 0 0 0 0 rgba(255,95,109,0); }
}
.esg-rings { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.esg-ring {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  position: relative; padding: 6px 4px; border-radius: 14px;
  transition: background 0.2s ease, transform 0.2s ease; cursor: default; outline: none;
}
.esg-ring:hover, .esg-ring:focus-visible {
  background: rgba(255,255,255,0.05); transform: translateY(-3px);
}
.esg-ring:focus-visible { box-shadow: 0 0 0 2px var(--c); }
.ring-svg { width: 66px; height: 66px; overflow: visible; }
.ring-track { fill: none; stroke: rgba(255,255,255,0.1); stroke-width: 6; }
.ring-fill {
  fill: none; stroke: var(--c); stroke-width: 6; stroke-linecap: round;
  transform: rotate(-90deg); transform-origin: center;
  filter: drop-shadow(0 0 5px color-mix(in srgb, var(--c) 55%, transparent));
}
.ring-center {
  position: absolute; top: 6px; left: 50%; transform: translateX(-50%);
  height: 66px; width: 66px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  pointer-events: none;
}
.ring-letter {
  font-family: var(--_display); font-style: italic;
  font-size: 1.05rem; font-weight: 500; color: var(--c); line-height: 1;
}
.ring-val { font-family: var(--_mono); font-size: 0.72rem; color: rgba(255,255,255,0.6); margin-top: 2px; }
.ring-name { font-size: 0.66rem; letter-spacing: 0.02em; color: rgba(255,255,255,0.55); }
.esg-note { margin-top: 14px; font-size: 0.68rem; color: rgba(255,255,255,0.35); text-align: center; }

/* ============ SCROLL CUE ============ */
.hero-scroll {
  position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  background: none; border: none; cursor: pointer;
  color: rgba(255,255,255,0.4); font-size: 0.72rem; letter-spacing: 0.16em;
  animation: float-ud 3s ease-in-out infinite;
}
.hero-scroll:hover { color: rgba(255,255,255,0.75); }
@keyframes float-ud {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%      { transform: translateX(-50%) translateY(6px); }
}
.hero-scroll-line {
  width: 1px; height: 40px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
}

/* ============ FOCUS VISIBILITY ============ */
.btn-primary:focus-visible,
.btn-outline:focus-visible,
.hero-scroll:focus-visible {
  outline: 2px solid var(--_sunlight); outline-offset: 3px;
}

/* ============ RESPONSIVE (mencegah tumpang tindih) ============ */
@media (max-width: 980px) {
  .hero-inner {
    grid-template-columns: 1fr; gap: 56px; padding: 104px 28px 88px;
  }
  .hero-subtitle { max-width: 560px; }
  .hero-visual { min-height: auto; }
  .hero-earth {
    position: relative; top: auto; left: auto;
    width: min(360px, 78vw); height: min(360px, 78vw);
    margin: 0 auto 8px; transform: none; opacity: 0.85;
  }
  .visual-cards { transform: none; max-width: 520px; margin: 0 auto; }
  .card-audit { width: 100%; align-self: stretch; }
}

@media (max-width: 560px) {
  .hero-inner { padding: 96px 20px 80px; gap: 44px; }
  .hero-actions { flex-direction: column; align-items: stretch; }
  .btn-primary, .btn-outline { justify-content: center; text-align: center; }

  /* Statistik jadi baris agar label panjang tidak sempit & bertumpuk */
  .hero-stats { grid-template-columns: 1fr; margin-top: 40px; }
  .hero-stat {
    display: flex; align-items: center; gap: 16px; text-align: left; padding: 18px 20px;
  }
  .hero-stat-num { font-size: 1.5rem; margin-bottom: 0; min-width: 84px; }
  .hero-stat-label { font-size: 0.8rem; }

  .card-metric { font-size: 1.85rem; }
  .ring-svg { width: 58px; height: 58px; }
  .ring-center { width: 58px; height: 58px; }
}

/* ============ REDUCED MOTION ============ */
@media (prefers-reduced-motion: reduce) {
  .hero-pattern, .hero-eyebrow-dot, .hero-title em, .earth-glow, .earth-sphere,
  .earth-orbit, .sat, .card-pill-dot, .card-bar.active, .esg-live-dot, .hero-scroll,
  .leaf-particle {
    animation: none !important;
  }
  .anim-item, .card-bar { transition: none !important; opacity: 1 !important; transform: none !important; }
  .hero-earth, .visual-cards { transform: none !important; }
}
.reduce-motion .anim-item,
.reduce-motion .card-bar { opacity: 1; transform: none; }
</style>