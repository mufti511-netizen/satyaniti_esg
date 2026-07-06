<template>
  <section id="tim" class="team-section">
    <div class="section-wrap">
      <div class="section-header reveal">
        <div>
          <span class="section-eyebrow">Tim Kami</span>
          <h2 class="section-title">Dibalik Layar <em>Satyaniti</em></h2>
        </div>
        <p class="section-desc">
          Bukan sekadar konsultan — kami adalah mitra strategis yang merancang masa depan bisnis Anda: patuh regulasi, dipercaya investor, dan siap bertahan lintas generasi.
        </p>
      </div>

      <!-- ─── PILAR KEAHLIAN (E · S · G) ─── -->
      <div class="pillar-strip reveal">
        <div class="pillar-item pillar-environment">
          <span class="pillar-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 20c8 0 14-6 14-14 0-1 0-2-.3-3C10 3 4 9 4 17c0 1 0 2 .3 3z"></path>
              <path d="M4.5 19.5c4-6 8-9 13-11"></path>
            </svg>
          </span>
          <div class="pillar-copy">
            <span class="pillar-title">Environment</span>
            <span class="pillar-text">Transisi rendah karbon &amp; efisiensi sumber daya</span>
          </div>
        </div>
        <div class="pillar-item pillar-social">
          <span class="pillar-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="8.5" cy="8" r="3"></circle>
              <path d="M2.5 20c0-4.2 3-7.5 6-8"></path>
              <circle cx="16" cy="8.5" r="2.4"></circle>
              <path d="M14.5 12.3c3 .6 5 3.5 5 7.7"></path>
            </svg>
          </span>
          <div class="pillar-copy">
            <span class="pillar-title">Social</span>
            <span class="pillar-text">Advokasi komunitas &amp; hubungan pemangku kepentingan</span>
          </div>
        </div>
        <div class="pillar-item pillar-governance">
          <span class="pillar-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3l7 3v5.5c0 5-3.5 8.7-7 9.5-3.5-.8-7-4.5-7-9.5V6l7-3z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
          </span>
          <div class="pillar-copy">
            <span class="pillar-title">Governance</span>
            <span class="pillar-text">Kepatuhan regulasi &amp; kesiapan audit</span>
          </div>
        </div>
      </div>

      <div class="team-grid">
        <div
          v-for="entry in teamWithPillars"
          :key="entry.index"
          class="team-card reveal"
          :style="{ '--i': entry.index, '--accent': entry.pillar.accent }"
        >
          <div class="team-img-wrap">
            <img
              :src="entry.member.photo ? `/assets/img/${entry.member.photo}` : '/assets/img/avatar-placeholder.png'"
              :alt="entry.member.name"
              class="team-img"
              @error="handleImageError"
            />

            <span
              class="team-pillar-badge"
              :class="`badge-${entry.pillar.key}`"
              :title="entry.pillar.label"
              :aria-label="entry.pillar.label"
            >
              <svg v-if="entry.pillar.key === 'environment'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pillar-svg">
                <path d="M4 20c8 0 14-6 14-14 0-1 0-2-.3-3C10 3 4 9 4 17c0 1 0 2 .3 3z"></path>
                <path d="M4.5 19.5c4-6 8-9 13-11"></path>
              </svg>
              <svg v-else-if="entry.pillar.key === 'social'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pillar-svg">
                <circle cx="8.5" cy="8" r="3"></circle>
                <path d="M2.5 20c0-4.2 3-7.5 6-8"></path>
                <circle cx="16" cy="8.5" r="2.4"></circle>
                <path d="M14.5 12.3c3 .6 5 3.5 5 7.7"></path>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pillar-svg">
                <path d="M12 3l7 3v5.5c0 5-3.5 8.7-7 9.5-3.5-.8-7-4.5-7-9.5V6l7-3z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </span>

            <div class="team-overlay">
              <div class="team-socials">
                <a v-if="entry.member.linkedin" :href="entry.member.linkedin" target="_blank" rel="noopener" class="social-link" title="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-svg">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a v-if="entry.member.email" :href="`mailto:${entry.member.email}`" class="social-link" title="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="team-info">
            <h3 class="team-name">{{ entry.member.name }}</h3>
            <p class="team-role">{{ entry.member.role }}</p>
            <p class="team-desc-text">{{ entry.member.desc }}</p>
          </div>
        </div>
      </div>

      <!-- ─── CTA PENUTUP ─── -->
      <div class="team-cta reveal">
        <div class="team-cta-copy">
          <h3 class="team-cta-title">Siap melangkah bersama tim yang tepat?</h3>
          <p class="team-cta-desc">
            Konsultasikan kebutuhan ESG &amp; CSR perusahaan Anda — kami bantu petakan langkah paling strategis, mulai hari ini.
          </p>
        </div>
        <button class="team-cta-btn" @click="ctrl.methods.scrollTo('kontak')">
          Hubungi Tim Kami
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cta-arrow">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject, computed } from 'vue';

// Mengambil data dan fungsi dari Controller Global
const ctrl = inject('appController');

// Tiga pilar ESG — dipakai untuk memberi aksen warna & ikon yang konsisten
// dengan tema situs (Environment = hijau, Social = biru, Governance = emas).
// Jika data anggota tim sudah punya field `pillar` ('environment' | 'social' | 'governance'),
// nilai itu yang dipakai. Jika tidak ada, dibagi rata bergiliran per index sebagai fallback.
const PILLARS = [
  { key: 'environment', label: 'Environment', accent: 'var(--moss)' },
  { key: 'social', label: 'Social', accent: 'var(--social)' },
  { key: 'governance', label: 'Governance', accent: 'var(--gold)' },
];

const teamWithPillars = computed(() => {
  const list = ctrl.state.team || [];
  return list.map((member, index) => {
    const pillar = PILLARS.find((p) => p.key === member.pillar) || PILLARS[index % PILLARS.length];
    return { member, pillar, index };
  });
});

// Menangani kegagalan memuat foto profil dengan aman menggunakan placeholder SVG dinamis
const handleImageError = (event) => {
  event.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%23EDE9DD"><circle cx="50" cy="45" r="25" fill="%2398A099"/><path d="M20 90c0-15 12-25 30-25s30 10 30 25z" fill="%2398A099"/></svg>'
}
</script>

<style scoped>
/* ─── SPESIFIKASI STYLING & ANIMASI TIM ─── */
.team-section {
  padding: 120px 0;
  background: rgba(246, 245, 239, 0.90);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.section-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  margin-bottom: 48px;
}

.section-eyebrow {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--sage);
  margin-bottom: 14px;
}

.section-title {
  font-family: var(--display);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 300;
  letter-spacing: -0.02em;
  color: var(--forest);
  line-height: 1.2;
}

.section-title em {
  font-style: italic;
  color: var(--sage);
}

.section-desc {
  font-size: 1rem;
  color: var(--muted);
  line-height: 1.75;
  max-width: 560px;
}

/* ─── STRIP PILAR ESG ─── */
.pillar-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 56px;
}

.pillar-item {
  flex: 1 1 240px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease;
}

.pillar-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.pillar-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pillar-icon-wrap svg {
  width: 20px;
  height: 20px;
}

.pillar-environment .pillar-icon-wrap { background: var(--mint); color: var(--sage); }
.pillar-environment { border-color: rgba(47, 156, 119, 0.25); }
.pillar-social .pillar-icon-wrap { background: var(--ice); color: var(--social); }
.pillar-social { border-color: rgba(41, 103, 167, 0.22); }
.pillar-governance .pillar-icon-wrap { background: var(--wheat); color: var(--gold); }
.pillar-governance { border-color: rgba(200, 154, 46, 0.28); }

.pillar-copy { display: flex; flex-direction: column; }

.pillar-title {
  font-family: var(--display);
  font-weight: 600;
  font-size: 1rem;
  color: var(--forest);
  margin-bottom: 4px;
}

.pillar-text {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.5;
}

/* Team Grid Layout */
.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

/* Team Card structure */
.team-card {
  position: relative;
  background: var(--white);
  border-radius: var(--r-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  text-align: center;
  display: flex;
  flex-direction: column;
  transition: opacity 0.6s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
}

.team-card.reveal {
  transition-delay: calc(var(--i, 0) * 90ms);
}

/* Aksen warna di puncak kartu, mengikuti pilar (E/S/G) anggota tim */
.team-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent, var(--forest));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.45s cubic-bezier(0.65, 0, 0.35, 1);
  z-index: 2;
}

.team-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(18, 54, 38, 0.15);
}

.team-card:hover::before {
  transform: scaleX(1);
}

/* Frame Gambar Profil */
.team-img-wrap {
  position: relative;
  width: 100%;
  padding-top: 110%; /* Rasio vertikal premium */
  background: var(--warm);
  overflow: hidden;
}

.team-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.team-card:hover .team-img {
  transform: scale(1.06);
}

/* Badge pilar ESG di sudut foto */
.team-pillar-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 2;
}

.team-card:hover .team-pillar-badge {
  transform: scale(1.1) rotate(-6deg);
}

.pillar-svg { width: 16px; height: 16px; }

.badge-environment { background: var(--mint); color: var(--sage); }
.badge-social { background: var(--ice); color: var(--social); }
.badge-governance { background: var(--wheat); color: var(--gold); }

/* Hover Overlays & Socials */
.team-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(18, 54, 38, 0.85) 0%, rgba(18, 54, 38, 0.2) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.team-card:hover .team-overlay {
  opacity: 1;
}

.team-socials {
  display: flex;
  gap: 12px;
  transform: translateY(12px);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.team-card:hover .team-socials {
  transform: translateY(0);
}

.social-link {
  width: 40px;
  height: 40px;
  background: var(--white);
  color: var(--forest);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s, transform 0.15s;
}

.social-link:hover {
  background: var(--amber);
  color: var(--forest);
  transform: scale(1.1);
}

.icon-svg {
  width: 18px;
  height: 18px;
}

/* Tipografi Informasi */
.team-info {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.team-name {
  font-family: var(--display);
  font-size: 1.25rem;
  color: var(--forest);
  font-weight: 500;
  margin-bottom: 4px;
}

.team-role {
  font-family: var(--mono);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.team-desc-text {
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.6;
}

/* ─── CTA PENUTUP ─── */
.team-cta {
  margin-top: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 40px 44px;
  border-radius: var(--r-xl);
  background: var(--gradient-dark);
  box-shadow: var(--shadow-lg);
  flex-wrap: wrap;
}

.team-cta-copy { max-width: 560px; }

.team-cta-title {
  font-family: var(--display);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--white);
  margin-bottom: 8px;
}

.team-cta-desc {
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
}

.team-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 26px;
  background: var(--white);
  color: var(--forest);
  border: none;
  border-radius: var(--r-sm);
  font-weight: 600;
  font-size: 0.92rem;
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.2s ease, gap 0.2s ease;
}

.team-cta-btn:hover {
  background: var(--amber);
  gap: 14px;
  transform: translateY(-2px);
}

.cta-arrow {
  width: 18px;
  height: 18px;
  transition: transform 0.2s ease;
}

.team-cta-btn:hover .cta-arrow {
  transform: translateX(2px);
}

/* ─── BREAKPOINTS RESPONSIF ─── */
@media (max-width: 1024px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 40px;
  }
  .pillar-strip {
    flex-direction: column;
  }
  .team-cta {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 32px;
  }
  .team-cta-btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
  .section-wrap {
    padding: 0 20px;
  }
}
</style>