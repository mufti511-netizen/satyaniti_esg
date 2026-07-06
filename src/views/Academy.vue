<template>
  <section id="academy" style="background: var(--forest); padding: 120px 0; color:white;">
    <div class="section-wrap">
      <div class="academy-grid">
        <div class="academy-left reveal">
          <span class="section-eyebrow" style="color:var(--leaf)">Peningkatan Kompetensi</span>
          <h2 class="section-title" style="color:white">Satyaniti <em>ESG Academy</em></h2>
          <p class="section-desc" style="color:rgba(255,255,255,0.65); margin-top:16px">
            Regulasi tanpa kapabilitas internal akan berujung pada inefisiensi biaya. Kami menyediakan kurikulum komprehensif bersertifikasi resmi untuk melatih fungsionaris keberlanjutan Anda.
          </p>
          <div class="academy-cta">
            <button @click="ctrl.methods.scrollTo('kontak')" class="btn-light">Daftar Gelombang Berikutnya</button>
          </div>
        </div>

        <div class="academy-right">
          <div class="academy-prog reveal">
            <div class="academy-prog-pill"><span class="card-pill-dot"></span>Sertifikasi Profesional</div>
            <h3 class="academy-prog-title">Bimbingan Teknis Penyusunan Laporan Keberlanjutan Berbasis Standar GRI &amp; POJK 51</h3>
            <p class="academy-target"><strong>Target Peserta:</strong> Corporate Secretary, Legal, &amp; CSR Managers</p>
            <div class="academy-price-range">Estimasi Biaya: Kontak Kami</div>
          </div>

          <div class="academy-prog reveal">
            <div class="academy-prog-pill" style="color:var(--sky); background:rgba(41,103,167,0.2)"><span class="card-pill-dot" style="background:var(--sky)"></span>Workshop Eksekutif</div>
            <h3 class="academy-prog-title">Carbon Accounting &amp; Strategi Dekarbonisasi Menuju Net Zero Emission Korporasi</h3>
            <p class="academy-target"><strong>Target Peserta:</strong> Direksi, Head of Operations, &amp; HSE Leads</p>
            <div class="academy-price-range">Estimasi Biaya: Kontak Kami</div>
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
.academy-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.academy-prog { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 28px; border-radius: var(--r-lg); margin-bottom: 20px; transition: background 0.2s; }
.academy-prog:hover { background: rgba(255,255,255,0.07); }
.academy-prog-pill { display: inline-flex; align-items: center; gap: 6px; font-size: 0.75rem; color: var(--leaf); font-weight: 500; margin-bottom: 16px; }
.card-pill-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--leaf); }
.academy-prog-title { font-family: var(--display); font-size: 1.1rem; color: var(--white); font-weight: 400; margin-bottom: 10px; line-height: 1.4; }
.academy-target { font-size: 0.8rem; color: rgba(255,255,255,0.5); margin-bottom: 16px; }
.academy-price-range { font-family: var(--mono); font-size: 1rem; color: var(--amber); font-weight: 400; }
.academy-cta { margin-top: 48px; display: flex; }
.btn-light { padding: 14px 32px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.25); color: white; border-radius: var(--r-sm); font-size: 0.9rem; font-weight: 500; cursor: pointer; text-decoration: none; transition: all 0.2s; }
.btn-light:hover { background: rgba(255,255,255,0.2); border-color: rgba(255,255,255,0.4); }
@media (max-width: 768px) { .academy-grid { grid-template-columns: 1fr; gap: 40px; } }
</style>