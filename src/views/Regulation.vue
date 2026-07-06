<template>
  <section id="mengapa">
    <div class="section-wrap">
      <div class="section-header reveal">
        <div>
          <span class="section-eyebrow">Urgensi Pasar &amp; Hukum</span>
          <h2 class="section-title">Mengapa Korporasi Anda <em>Wajib Patuh ESG?</em></h2>
        </div>
        <p class="section-desc">Kepatuhan bukan lagi sekadar sukarela, melainkan kewajiban yuridis formal yang krusial bagi keberlangsungan operasi entitas usaha Anda.</p>
      </div>

      <div class="why-grid">
        <div class="why-card reveal">
          <div class="why-num">01</div>
          <div class="why-title">Mandat Hukum Mutlak</div>
          <p class="why-desc">Sanksi tertulis, pembatasan izin operasional, hingga denda administratif mengintai korporasi yang mengabaikan arahan pelaporan non-finansial.</p>
        </div>
        <div class="why-card reveal">
          <div class="why-num">02</div>
          <div class="why-title">Gerbang Akses Modal Tambahan</div>
          <p class="why-desc">Perbankan nasional dan lembaga finansial global menerapkan seleksi ketat berbasis instrumen *green financing* dan pinjaman terkait ESG.</p>
        </div>
        <div class="why-card reveal">
          <div class="why-num">03</div>
          <div class="why-title">Kepercayaan Eksklusif Investor</div>
          <p class="why-desc">Investor asing menuntut *disclosure data set* yang kredibel guna meminimalisasi risiko sengketa agraria, hukum ketenagakerjaan, dan isu ekologi.</p>
        </div>
        <div class="why-card reveal">
          <div class="why-num">04</div>
          <div class="why-title">Efisiensi Rantai Pasok</div>
          <p class="why-desc">MNC dan BUMN multinasional kini mewajibkan seluruh vendor dalam ekosistem pasokan mereka lolos kualifikasi kepatuhan etika &amp; karbon.</p>
        </div>
        <div class="why-card reveal">
          <div class="why-num">05</div>
          <div class="why-title">Komitmen Net Zero 2060</div>
          <p class="why-desc">Indonesia berkomitmen net zero 2060. Perusahaan perlu roadmap dekarbonisasi yang jelas — inventarisasi GHG Scope 1, 2, 3 dan partisipasi IDXCarbon.</p>
        </div>
        <div class="why-card reveal">
          <div class="why-num">06</div>
          <div class="why-title">Keunggulan Lokal</div>
          <p class="why-desc">Pemahaman mendalam regulasi Indonesia (OJK, KLHK, BUMN) yang tidak dimiliki konsultan asing. Model pricing transparan &amp; dapat disesuaikan skala klien.</p>
        </div>
      </div>

      <div class="why-reg reveal">
        <div class="why-reg-title">Regulasi yang kami bantu penuhi</div>
        <div class="why-reg-grid">
          <div class="reg-item">
            <div class="reg-badge">POJK 51</div>
            <div class="reg-text">
              <strong>Laporan Keberlanjutan Wajib</strong>
              <span>Emiten &amp; perusahaan publik wajib menyusun Sustainability Report sesuai standar GRI. Sanksi administratif OJK bagi pelanggar.</span>
            </div>
          </div>
          <div class="reg-item">
            <div class="reg-badge">POJK 14/2023</div>
            <div class="reg-text">
              <strong>Climate-Related Disclosure</strong>
              <span>Laporan tahunan emiten kini memasukkan elemen TCFD — eskalasi nyata dari regulasi sebelumnya.</span>
            </div>
          </div>
          <div class="reg-item">
            <div class="reg-badge">PROPER KLHK</div>
            <div class="reg-text">
              <strong>Kinerja Lingkungan Publik</strong>
              <span>Reputasi lingkungan perusahaan menjadi domain publik yang berdampak langsung pada izin operasional &amp; akses pembiayaan.</span>
            </div>
          </div>
          <div class="reg-item">
            <div class="reg-badge">UU TJSL</div>
            <div class="reg-text">
              <strong>Kewajiban CSR Sumber Daya Alam</strong>
              <span>UU 40/2007 &amp; PP 47/2012 mewajibkan alokasi dan pelaporan dana TJSL bagi perusahaan di sektor sumber daya alam.</span>
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
#mengapa { padding: 120px 0; background: rgba(246,245,239,0.90); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }
.why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 64px; }
.why-card { background: var(--white); border: 1px solid var(--border); padding: 32px; border-radius: var(--r-lg); }
.why-num { font-family: var(--mono); font-size: 1.5rem; color: var(--gold); font-weight: 600; margin-bottom: 16px; }
.why-title { font-family: var(--display); font-size: 1.15rem; color: var(--forest); font-weight: 400; margin-bottom: 10px; }
.why-desc { font-size: 0.84rem; color: var(--muted); line-height: 1.6; }
.why-reg { margin-top: 80px; background: var(--forest); border-radius: var(--r-xl); padding: 48px; color: white; }
.why-reg-title { font-family: var(--display); font-size: 1.4rem; font-weight: 300; margin-bottom: 36px; text-align: center; color: var(--amber); }
.why-reg-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.reg-item { display: flex; gap: 20px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 24px; border-radius: var(--r-lg); }
.reg-badge { background: var(--gold); color: var(--forest); padding: 6px 12px; font-family: var(--mono); font-size: 0.72rem; font-weight: 600; border-radius: var(--r-sm); height: fit-content; flex-shrink: 0; }
.reg-text strong { display: block; font-size: 0.92rem; font-weight: 600; margin-bottom: 6px; color: white; }
.reg-text span { font-size: 0.8rem; color: rgba(255,255,255,0.6); line-height: 1.5; display: block; }
@media (max-width: 768px) { .why-grid { grid-template-columns: 1fr; } .why-reg-grid { grid-template-columns: 1fr; } }
</style>