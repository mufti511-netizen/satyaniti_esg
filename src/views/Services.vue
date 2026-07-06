<template>
  <section id="layanan">
    <div class="section-wrap">
      <div class="section-header reveal">
        <div>
          <span class="section-eyebrow">Layanan Korporasi</span>
          <h2 class="section-title">Solusi Strategis <em>Ujung ke Ujung</em></h2>
        </div>
        <p class="section-desc">Pilar ganda kami mengombinasikan keahlian advisory tingkat tinggi dengan kekuatan komputasi awan (SaaS) untuk hasil yang optimal.</p>
      </div>

      <div class="services-grid">
        <div class="service-card reveal">
          <div class="service-card-top">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l-7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            </div>
            <div>
              <div class="service-card-label">Advisory &amp; Strategy</div>
              <h3 class="service-card-title">ESG &amp; CSR Consultation</h3>
            </div>
          </div>
          <div class="service-card-body">
            <p class="service-card-desc">Pendampingan penuh penyusunan Sustainability Report wajib OJK, perencanaan program CSR berdampak berbasis ISO 26000, dan gap analysis.</p>
            <div class="service-items">
              <div class="service-item">Penyusunan Sustainability Report (POJK 51)</div>
              <div class="service-item">Social Impact Assessment &amp; SROI Calculator</div>
              <div class="service-item">Penyusunan ESG Blueprint &amp; Kebijakan Internal</div>
            </div>
          </div>
          <div class="service-card-footer">
            <button @click="ctrl.methods.scrollTo('kontak')" class="btn-sage">Hubungi Konsultan →</button>
          </div>
        </div>

        <div class="service-card reveal">
          <div class="service-card-top" style="background: linear-gradient(135deg, var(--navy), var(--ocean))">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <div>
              <div class="service-card-label">Digital Platform</div>
              <h3 class="service-card-title">SaaS Pelaporan Keberlanjutan</h3>
            </div>
          </div>
          <div class="service-card-body">
            <p class="service-card-desc">Platform dasbor awan untuk mengumpulkan data emisi, energi, sosial, dan ketenagakerjaan dari berbagai site anak perusahaan secara otomatis.</p>
            <div class="service-items">
              <div class="service-item">Automated GHG Scope 1, 2, 3 Inventory</div>
              <div class="service-item">Audit Trail &amp; Enkripsi Amankan Data Klien</div>
              <div class="service-item">Export Sekali Klik Format GRI &amp; POJK</div>
            </div>
          </div>
          <div class="service-card-footer">
            <button @click="ctrl.methods.scrollTo('platform')" class="btn-sage" style="background:var(--social)">Lihat Demo Platform →</button>
          </div>
        </div>

        <div class="service-card reveal">
          <div class="service-card-top" style="background: linear-gradient(135deg, var(--forest), var(--navy))">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            <div>
              <div class="service-card-label">Capacity Building</div>
              <h3 class="service-card-title">Satyaniti ESG Academy</h3>
            </div>
          </div>
          <div class="service-card-body">
            <p class="service-card-desc">Program pelatihan intensif bersertifikat untuk eksekutif, manajer, dan staf guna memahami implementasi praktis regulasi nasional.</p>
            <div class="service-items">
              <div class="service-item">Pelatihan Pelaporan Standar GRI &amp; ISSB</div>
              <div class="service-item">Bimbingan Teknis Auditor Internal ESG</div>
              <div class="service-item">Edukasi Dekarbonisasi &amp; Pasar Karbon</div>
            </div>
          </div>
          <div class="service-card-footer">
            <button @click="ctrl.methods.scrollTo('academy')" class="btn-ghost">Eksplorasi Silabus →</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue';
const ctrl = inject('appController');
</script>

<style scoped>
#layanan { padding: 120px 0; background: rgba(246,245,239,0.90); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.service-card { background: var(--white); border-radius: var(--r-lg); overflow: hidden; border: 1px solid var(--border); transition: transform 0.25s, box-shadow 0.25s; display: flex; flex-direction: column; }
.service-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.service-card-top { padding: 32px; background: linear-gradient(135deg, var(--forest), var(--sage)); position: relative; overflow: hidden; min-height: 180px; display: flex; flex-direction: column; justify-content: space-between; }
.service-card-top::after { content: ''; position: absolute; bottom: -30px; right: -30px; width: 100px; height: 100px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.08); }
.service-icon { width: 48px; height: 48px; border-radius: var(--r-md); background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
.service-icon svg { width: 24px; height: 24px; color: var(--amber); }
.service-card-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--leaf); font-weight: 600; }
.service-card-title { font-family: var(--display); font-size: 1.4rem; color: var(--white); font-weight: 400; line-height: 1.3; margin-top: 6px; }
.service-card-body { padding: 28px 32px; flex: 1; }
.service-card-desc { font-size: 0.88rem; color: var(--muted); line-height: 1.75; margin-bottom: 24px; }
.service-items { display: flex; flex-direction: column; gap: 8px; margin-bottom: 28px; }
.service-item { display: flex; align-items: center; gap: 10px; font-size: 0.84rem; color: var(--text); }
.service-item::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--moss); flex-shrink: 0; }
.service-card-footer { padding: 16px 32px 28px; border-top: 1px solid var(--border); }
.btn-sage { display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: var(--forest); color: var(--white); border-radius: var(--r-sm); font-size: 0.85rem; font-weight: 500; border: none; cursor: pointer; text-decoration: none; transition: background 0.2s, transform 0.15s; }
.btn-sage:hover { background: var(--sage); transform: translateY(-1px); }
.btn-ghost { display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: transparent; color: var(--sage); border-radius: var(--r-sm); font-size: 0.85rem; font-weight: 500; border: 1px solid var(--border); cursor: pointer; text-decoration: none; transition: all 0.2s; }
.btn-ghost:hover { border-color: var(--sage); background: var(--mint); }
@media (max-width: 1024px) { .services-grid { grid-template-columns: 1fr; } }
</style>