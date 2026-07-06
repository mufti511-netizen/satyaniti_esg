<template>
  <section id="platform" style="background: var(--gradient-dark); padding:120px 0; color:white;">
    <div class="section-wrap">
      <div class="platform-split">
        <div class="platform-left reveal">
          <span class="section-eyebrow" style="color:var(--leaf)">Solusi Teknologi</span>
          <h2 class="section-title" style="color:white">Satyaniti <em>SaaS Cloud Platform</em></h2>
          <p class="section-desc" style="color:rgba(255,255,255,0.65); margin-top:16px;">
            Hilangkan kompleksitas input spreadsheet manual yang rawan kesalahan. Platform SaaS kami mengotomatiskan koleksi data keberlanjutan dan mengonversinya langsung menjadi matriks audit siap cetak.
          </p>

          <div class="pp-features">
            <div class="pp-feature" :class="{ active: ctrl.state.activePlatformFeature === 0 }" @click="ctrl.state.activePlatformFeature = 0">
              <strong>Kalkulator Jejak Karbon Otomatis</strong>
              <p>Konversi konsumsi bahan bakar, listrik, dan logistik langsung menjadi tCO₂e menggunakan faktor emisi KLHK terkini.</p>
            </div>
            <div class="pp-feature" :class="{ active: ctrl.state.activePlatformFeature === 1 }" @click="ctrl.state.activePlatformFeature = 1">
              <strong>Dasbor Multi-Site &amp; Multi-Anak Perusahaan</strong>
              <p>Konsolidasikan performa ESG dari 10+ pabrik atau kantor wilayah dalam satu tampilan matriks terpadu.</p>
            </div>
            <div class="pp-feature" :class="{ active: ctrl.state.activePlatformFeature === 2 }" @click="ctrl.state.activePlatformFeature = 2">
              <strong>Generator Laporan Standar GRI &amp; OJK</strong>
              <p>Ekspor draft bab pelaporan non-finansial instan yang kompatibel 100% dengan SEOJK 16/2021.</p>
            </div>
            <div class="pp-feature" :class="{ active: ctrl.state.activePlatformFeature === 3 }" @click="ctrl.state.activePlatformFeature = 3">
              <strong>Sistem Audit Trail Enkripsi Berbasis Log</strong>
              <p>Setiap perubahan data terekam lengkap beserta nama user dan timestamp, memastikan validitas di depan auditor eksternal.</p>
            </div>
          </div>
        </div>

        <div class="platform-right reveal">
          <div class="pp-mockup">
            <div class="pp-mock-top">
              <div class="pp-dot" style="background:#EF4444"></div>
              <div class="pp-dot" style="background:#F59E0B"></div>
              <div class="pp-dot" style="background:#10B981"></div>
              <span class="pp-mock-url">app.satyaniti.id/dashboard/emisi</span>
            </div>
            <div class="pp-mock-content">
              <h4 style="font-family:var(--display); font-weight:400; margin-bottom:14px; font-size:1.1rem">Ringkasan Emisi Korporasi Q1</h4>
              
              <div class="pp-kpi-row">
                <div class="pp-kpi">
                  <div class="pp-kpi-val">124.5</div>
                  <div class="pp-kpi-lab">Scope 1 (tCO₂e)</div>
                </div>
                <div class="pp-kpi">
                  <div class="pp-kpi-val">642.1</div>
                  <div class="pp-kpi-lab">Scope 2 (tCO₂e)</div>
                </div>
                <div class="pp-kpi">
                  <div class="pp-kpi-val" style="color:var(--leaf)">-12.4%</div>
                  <div class="pp-kpi-lab">vs Tahun Lalu</div>
                </div>
              </div>

              <div class="pp-chart-area">
                <div class="pp-bar" :style="{ height: ctrl.state.activePlatformFeature === 0 ? '75%' : '40%' }"></div>
                <div class="pp-bar" :style="{ height: ctrl.state.activePlatformFeature === 1 ? '90%' : '55%' }"></div>
                <div class="pp-bar highlight" :style="{ height: ctrl.state.activePlatformFeature === 2 ? '85%' : '70%' }"></div>
                <div class="pp-bar" :style="{ height: ctrl.state.activePlatformFeature === 3 ? '60%' : '50%' }"></div>
              </div>

              <div class="pp-tags">
                <span class="pp-tag" :class="{ active: ctrl.state.activePlatformFeature === 0 }">#Scope1</span>
                <span class="pp-tag" :class="{ active: ctrl.state.activePlatformFeature === 1 }">#MultiSite</span>
                <span class="pp-tag" :class="{ active: ctrl.state.activePlatformFeature === 2 }">#GRIReport</span>
                <span class="pp-tag" :class="{ active: ctrl.state.activePlatformFeature === 3 }">#AuditReady</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="platform-pricing">
        <div v-for="(p, index) in ctrl.state.pricing" :key="index" class="pricing-card reveal" :class="{ highlight: p.highlight }">
          <div v-if="p.highlight" class="pricing-badge">Paling Populer</div>
          <h3 class="p-name">{{ p.name }}</h3>
          <div class="p-price">{{ p.price }}</div>
          <p class="p-desc">{{ p.desc }}</p>
          <div class="p-divider"></div>
          <ul class="p-features-list">
            <li v-for="(f, fi) in p.features" :key="fi">{{ f }}</li>
          </ul>
          <button @click="ctrl.methods.scrollTo('kontak')" class="p-btn">Pilih Paket ini</button>
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
.platform-split { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 64px; align-items: center; }
.pp-features { display: flex; flex-direction: column; gap: 12px; margin-top: 32px; }
.pp-feature { padding: 14px 20px; border-left: 3px solid rgba(255,255,255,0.12); cursor: pointer; transition: all 0.25s; }
.pp-feature:hover { background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.4); }
.pp-feature.active { background: rgba(47,156,119,0.12); border-color: var(--leaf); }
.pp-feature strong { display: block; font-size: 0.92rem; font-weight: 600; color: white; margin-bottom: 2px; }
.pp-feature p { font-size: 0.82rem; color: rgba(255,255,255,0.55); line-height: 1.5; display: none; }
.pp-feature.active p { display: block; margin-top: 6px; }
.pp-mockup { background: #1C2E3D; border: 1px solid rgba(255,255,255,0.1); border-radius: var(--r-lg); overflow: hidden; box-shadow: var(--shadow-lg); }
.pp-mock-top { padding: 12px 16px; background: #0E1A24; display: flex; align-items: center; gap: 6px; border-bottom: 1px solid rgba(255,255,255,0.06); }
.pp-dot { width: 10px; height: 10px; border-radius: 50%; }
.pp-mock-url { font-family: var(--mono); font-size: 0.72rem; color: rgba(255,255,255,0.35); margin-left: 12px; }
.pp-mock-content { padding: 24px; color: white; }
.pp-kpi-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px; }
.pp-kpi { background: rgba(255,255,255,0.08); border-radius: var(--r-md); padding: 16px; }
.pp-kpi-val { font-family: var(--mono); font-size: 1.6rem; color: var(--amber); font-weight: 400; }
.pp-kpi-lab { font-size: 0.7rem; color: rgba(255,255,255,0.45); margin-top: 4px; }
.pp-chart-area { background: rgba(255,255,255,0.06); border-radius: var(--r-md); padding: 20px; height: 140px; display: flex; align-items: flex-end; gap: 8px; }
.pp-bar { flex: 1; border-radius: 3px 3px 0 0; background: rgba(72,179,138,0.25); transition: all 0.5s ease; }
.pp-bar.highlight { background: var(--leaf); }
.pp-tags { display: flex; gap: 8px; margin-top: 14px; flex-wrap: wrap; }
.pp-tag { padding: 4px 10px; border-radius: 100px; font-size: 0.7rem; background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.55); }
.pp-tag.active { background: rgba(47,156,119,0.3); color: var(--leaf); }
.platform-pricing { margin-top: 48px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; color: var(--text); }
.pricing-card { background: var(--white); border-radius: var(--r-lg); border: 1px solid var(--border); padding: 36px 32px; position: relative; transition: transform 0.25s; }
.pricing-card:hover { transform: translateY(-4px); }
.pricing-card.highlight { border: 2px solid var(--social); box-shadow: var(--shadow-lg); }
.pricing-badge { position: absolute; top: -14px; left: 32px; background: var(--social); color: white; padding: 4px 12px; border-radius: 100px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
.p-name { font-family: var(--display); font-size: 1.25rem; font-weight: 400; color: var(--forest); margin-bottom: 8px; }
.p-price { font-family: var(--mono); font-size: 1.8rem; font-weight: 600; color: var(--forest); margin-bottom: 12px; }
.p-desc { font-size: 0.84rem; color: var(--muted); min-height: 60px; line-height: 1.6; }
.p-divider { height: 1px; background: var(--border); margin: 24px 0; }
.p-features-list { list-style: none; display: flex; flex-direction: column; gap: 10px; min-height: 140px; }
.p-features-list li { font-size: 0.84rem; color: var(--text); display: flex; align-items: center; gap: 8px; }
.p-features-list li::before { content: '✓'; color: var(--moss); font-weight: bold; }
.p-btn { width: 100%; padding: 12px; border-radius: var(--r-sm); border: 1px solid var(--border); background: var(--cream); font-weight: 600; font-size: 0.85rem; cursor: pointer; transition: all 0.2s; margin-top: 12px; }
.pricing-card.highlight .p-btn { background: var(--social); color: white; border: none; }
.pricing-card.highlight .p-btn:hover { background: var(--ocean); }
.p-btn:hover { background: var(--warm); border-color: var(--subtle); }
@media (max-width: 768px) { .platform-split { grid-template-columns: 1fr; } .platform-pricing { grid-template-columns: 1fr; } }
</style>