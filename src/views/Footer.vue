<template>
  <footer>
    <div class="section-wrap">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-brand-logo">
            <div class="nav-logo-mark">
              <img src="/assets/img/icon.png" alt="Satyaniti logo" />
            </div>
            <span class="footer-brand-name">Satyaniti</span>
          </div>
          <p>Platform solusi keberlanjutan korporasi terpadu — konsultasi ESG, SaaS pelaporan, dan edukasi korporasi untuk Indonesia.</p>
          <div class="footer-tagline">"Dari Anak Negeri Untuk Ibu Pertiwi"</div>
        </div>
        
        <div>
          <div class="footer-col-title">Layanan</div>
          <ul class="footer-links">
            <li><a @click="ctrl.methods.scrollTo('layanan')">Konsultasi ESG &amp; CSR</a></li>
            <li><a @click="ctrl.methods.scrollTo('platform')">Platform SaaS ESG</a></li>
            <li><a @click="ctrl.methods.scrollTo('academy')">ESG Academy</a></li>
            <li><a @click="ctrl.methods.scrollTo('platform')">Carbon Assessment</a></li>
          </ul>
        </div>
        
        <div>
          <div class="footer-col-title">Perusahaan</div>
          <ul class="footer-links">
            <li><a @click="ctrl.methods.scrollTo('tentang')">Tentang Kami</a></li>
            <li><a @click="ctrl.methods.scrollTo('roadmap')">Roadmap Milestones</a></li>
            <li><a @click="ctrl.methods.scrollTo('kontak')">Hubungi Hub</a></li>
          </ul>
        </div>
        
        <div>
          <div class="footer-col-title">Kontak Hub</div>
          <ul class="footer-links-static">
            <li>hello@satyaniti.id</li>
            <li>+62 821-6634-7979</li>
            <li>Cimahi, West Java, Indonesia</li>
          </ul>
        </div>
      </div>

      <div class="footer-divider"></div>
      <div class="footer-bottom">
        <div class="footer-copy">© 2026 Satyaniti. Hak Cipta Dilindungi Undang-Undang.</div>
        <div class="footer-meta-links">
          <a>Kebijakan Privasi</a>
          <a>Syarat &amp; Ketentuan</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { inject } from 'vue';
const ctrl = inject('appController');
</script>

<style scoped>
footer { background: var(--navy); padding: 80px 0 32px; color: rgba(255,255,255,0.6); border-top: 1px solid rgba(255,255,255,0.06); }
.footer-top { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 48px; }
.footer-brand { display: flex; flex-direction: column; gap: 16px; text-align: left; }
.footer-brand-logo { display: flex; align-items: center; gap: 10px; }
.nav-logo-mark { width: 34px; height: 34px; border-radius: 6px; overflow: hidden; }
.nav-logo-mark img { width: 100%; height: 100%; object-fit: contain; }
.footer-brand-name { font-family: var(--display); font-size: 1.15rem; font-weight: 600; color: white; }
.footer-brand p { font-size: 0.82rem; line-height: 1.6; color: rgba(255,255,255,0.5); }
.footer-tagline { font-family: var(--display); font-style: italic; color: var(--amber); font-size: 0.88rem; }
.footer-col-title { font-size: 0.78rem; font-weight: 600; text-transform: uppercase; color: white; letter-spacing: 0.05em; margin-bottom: 20px; text-align: left; }
.footer-links, .footer-links-static { list-style: none; display: flex; flex-direction: column; gap: 10px; text-align: left; padding: 0; }
.footer-links a { font-size: 0.84rem; color: rgba(255,255,255,0.5); text-decoration: none; cursor: pointer; transition: color 0.2s; }
.footer-links a:hover { color: var(--leaf); }
.footer-links-static li { font-size: 0.84rem; color: rgba(255,255,255,0.5); }
.footer-divider { height: 1px; background: rgba(255,255,255,0.06); margin: 48px 0 24px; }
.footer-bottom { display: flex; justify-content: space-between; font-size: 0.78rem; color: rgba(255,255,255,0.4); }
.footer-meta-links { display: flex; gap: 20px; }
@media (max-width: 768px) { .footer-top { grid-template-columns: 1fr; gap: 32px; } .footer-bottom { flex-direction: column; gap: 12px; } }
</style>