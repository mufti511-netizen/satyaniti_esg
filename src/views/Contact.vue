<template>
  <section id="kontak" style="background: var(--gradient-dark); padding: 120px 0; color:white;">
    <div class="section-wrap">
      <div class="contact-split">
        <div class="contact-left reveal">
          <span class="section-eyebrow" style="color:var(--leaf)">Hubungi Kami</span>
          <h2 class="section-title" style="color:white">Mari Bangun Bisnis <em>Berkelanjutan</em></h2>
          <p class="section-desc" style="color:rgba(255,255,255,0.65); margin-top:16px">
            Konsultasikan kendala kepatuhan regulasi POJK atau kebutuhan otomasi dasbor jejak karbon pabrik Anda bersama spesialis kami.
          </p>

          <div class="contact-items">
            <div class="contact-item">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <div class="contact-label">Email</div>
                <div class="contact-val copy-hint" @click="ctrl.methods.copyText('hello@satyaniti.id')" title="Salin email">
                  hello@satyaniti.id
                </div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <div>
                <div class="contact-label">WhatsApp</div>
                <div class="contact-val">+62 821-6634-7979</div>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-right reveal">
          <form @submit.prevent="ctrl.methods.submitForm" class="contact-form" v-if="!ctrl.state.formSubmitted">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Nama Lengkap *</label>
                <input type="text" v-model="ctrl.state.form.name" class="form-input" placeholder="Almira Sutanto" required />
              </div>
              <div class="form-group">
                <label class="form-label">Email Perusahaan *</label>
                <input type="email" v-model="ctrl.state.form.email" class="form-input" placeholder="almira@almitatbk" required />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Nama Instansi / Perusahaan</label>
              <input type="text" v-model="ctrl.state.form.company" class="form-input" placeholder="PT Sukses Makmur Tbk" />
            </div>
            <div class="form-group">
              <label class="form-label">Kebutuhan Layanan</label>
              <select v-model="ctrl.state.form.needs" class="form-select">
                <option value="">Pilih Kebutuhan Layanan...</option>
                <option value="konsultasi">Penyusunan Sustainability Report / Kepatuhan POJK 51</option>
                <option value="saas">Langganan Platform SaaS Cloud Dashboard</option>
                <option value="academy">Pendaftaran Instansi ke ESG Academy</option>
                <option value="partnership">Kemitraan Strategis / Lainnya</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Deskripsi Pesan Tambahan</label>
              <textarea v-model="ctrl.state.form.message" class="form-textarea" placeholder="Tuliskan detail kendala atau jadwal diskusi yang Anda harapkan..."></textarea>
            </div>
            <button type="submit" class="form-submit">Kirim Form Pengajuan →</button>
          </form>

          <div class="form-success-box" v-else>
            <div class="success-icon-circle">✓</div>
            <h3>Formulir Berhasil Terkirim</h3>
            <p>Terima kasih. Permintaan konsultasi Anda sudah masuk ke sistem kami. Koordinator spesilalis ESG kami akan merespons dalam waktu maksimal 1x24 jam kerja.</p>
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
.contact-split { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 80px; align-items: center; }
.contact-items { display: flex; flex-direction: column; gap: 24px; margin-top: 40px; }
.contact-item { display: flex; gap: 16px; align-items: center; }
.contact-icon { width: 44px; height: 44px; border-radius: var(--r-md); background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: var(--amber); flex-shrink: 0; }
.contact-icon svg { width: 20px; height: 20px; }
.contact-label { font-size: 0.72rem; text-transform: uppercase; color: rgba(255,255,255,0.45); letter-spacing: 0.05em; }
.contact-val { font-size: 1.05rem; font-weight: 500; color: white; cursor: pointer; }
.contact-form { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--r-xl); padding: 40px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-group { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; text-align: left; }
.form-label { font-size: 0.8rem; color: rgba(255,255,255,0.6); font-weight: 500; }
.form-input, .form-select, .form-textarea { padding: 12px 16px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: var(--r-sm); color: white; font-family: var(--body); font-size: 0.88rem; outline: none; transition: border-color 0.2s; width: 100%; }
.form-input::placeholder, .form-textarea::placeholder { color: rgba(255,255,255,0.3); }
.form-input:focus, .form-select:focus, .form-textarea:focus { border-color: var(--leaf); }
.form-select option { background: var(--forest); }
.form-textarea { resize: vertical; min-height: 100px; }
.form-submit { width: 100%; padding: 14px; background: var(--gold); color: var(--forest); font-weight: 600; font-size: 0.9rem; border: none; border-radius: var(--r-sm); cursor: pointer; transition: background 0.2s; }
.form-submit:hover { background: var(--amber); }
.form-success-box { text-align: center; padding: 48px; background: rgba(47,156,119,0.1); border: 1px solid var(--leaf); border-radius: var(--r-xl); }
.success-icon-circle { width: 56px; height: 56px; border-radius: 50%; background: var(--moss); color: white; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin: 0 auto 20px; }
@media (max-width: 768px) { .contact-split { grid-template-columns: 1fr; gap: 48px; } .form-row { grid-template-columns: 1fr; } }
</style>