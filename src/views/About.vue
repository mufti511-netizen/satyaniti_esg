<template>
  <section id="tentang">
    <div class="section-wrap">
      <div class="about-grid">
        <div class="about-left reveal">
          <span class="section-eyebrow">Definisi &amp; Filosofi</span>
          <div class="about-tagline">“Dari Anak Negeri Untuk Ibu Pertiwi”</div>
          <h2 class="section-title">Harmonisasi <em>Ekonomi, Sosial, &amp; Tata Kelola</em></h2>
          <p class="section-desc" style="margin-top:20px">
            Nama <strong>Satyaniti</strong> diambil dari sansekerta kuno: <em>Satya</em> (Kebenaran/Komitmen) dan <em>Niti</em> (Kebijakan/Tata Kelola). Kami mendedikasikan platform ini sebagai jembatan bagi ekosistem korporasi Indonesia menuju operasional yang berkelanjutan.
          </p>

          <div class="about-pillars">
            <div class="about-pillar">
              <div class="about-pillar-num">E</div>
              <div class="about-pillar-text">
                <strong>Environment (Lingkungan)</strong>
                <span>Manajemen Jejak Karbon, Inventarisasi Emisi, Keanekaragaman Hayati.</span>
              </div>
            </div>
            <div class="about-pillar">
              <div class="about-pillar-num">S</div>
              <div class="about-pillar-text">
                <strong>Social (Masyarakat)</strong>
                <span>Pengembangan Masyarakat Terukur (CSR/TJSL), Hubungan Tenaga Kerja.</span>
              </div>
            </div>
            <div class="about-pillar">
              <div class="about-pillar-num">G</div>
              <div class="about-pillar-text">
                <strong>Governance (Tata Kelola)</strong>
                <span>Etika Bisnis, Kepatuhan Regulasi OJK, Transparansi Audit Finansial &amp; Non-Finansial.</span>
              </div>
            </div>
          </div>
        </div>

        <div class="about-right reveal">
          <div class="about-card">
            <h3 class="about-card-title">Visi Utama Kami</h3>
            <p>Menjadi ekosistem solusi keberlanjutan terpadu yang paling terpercaya di Indonesia, mempercepat transisi korporasi menuju ekonomi rendah karbon dan inklusivitas sosial secara substansial pada tahun 2030.</p>
          </div>

          <div class="about-misi-list">
            <div class="about-misi-title">Misi Aksi Satyaniti</div>
            <div class="misi-item">
              <div class="misi-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <p>Menyediakan layanan advisory strategis bernilai tinggi guna mempermudah korporasi meraih pembiayaan hijau (green financing).</p>
            </div>
            <div class="misi-item">
              <div class="misi-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <p>Mendemokrasikan digitalisasi pelaporan ESG melalui platform SaaS yang terjangkau, akurat, dan audit-ready.</p>
            </div>
            <div class="misi-item">
              <div class="misi-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <p>Membangun kompetensi praktisi ESG nasional melalui kurikulum edukasi berbasis studi kasus riil di Indonesia.</p>
            </div>
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
#tentang { padding: 120px 0; background: rgba(255,255,255,0.90); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.about-tagline { font-family: var(--display); font-size: 1.15rem; font-style: italic; color: var(--gold); margin-bottom: 8px; }
.about-pillars { margin-top: 40px; display: flex; flex-direction: column; gap: 1px; background: var(--border); border-radius: var(--r-md); overflow: hidden; }
.about-pillar { background: var(--cream); padding: 20px 24px; display: flex; align-items: center; gap: 16px; transition: background 0.2s; }
.about-pillar:hover { background: var(--warm); }
.about-pillar-num { font-family: var(--mono); font-size: 1.4rem; font-weight: 600; color: var(--moss); width: 32px; flex-shrink: 0; }
.about-pillar-text strong { display: block; font-weight: 600; font-size: 0.9rem; color: var(--forest); margin-bottom: 2px; }
.about-pillar-text span { font-size: 0.82rem; color: var(--muted); }
.about-right { display: flex; flex-direction: column; gap: 24px; }
.about-card { background: var(--forest); border-radius: var(--r-lg); padding: 36px; color: var(--white); position: relative; overflow: hidden; }
.about-card::before { content: ''; position: absolute; top: -40px; right: -40px; width: 150px; height: 150px; border-radius: 50%; background: rgba(47,156,119,0.2); }
.about-card-title { font-family: var(--display); font-size: 1.1rem; font-weight: 400; color: var(--amber); margin-bottom: 12px; }
.about-card p { font-size: 0.9rem; color: rgba(255,255,255,0.7); line-height: 1.7; }
.about-misi-list { background: var(--cream); border-radius: var(--r-lg); padding: 32px; border: 1px solid var(--border); }
.about-misi-title { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--sage); margin-bottom: 20px; }
.misi-item { display: flex; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--border); align-items: flex-start; }
.misi-item:last-child { border-bottom: none; padding-bottom: 0; }
.misi-check { width: 20px; height: 20px; border-radius: 50%; background: var(--mint); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
.misi-check svg { width: 10px; height: 10px; color: var(--forest); }
@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; gap: 48px; } }
</style>