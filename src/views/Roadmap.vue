<template>
  <section id="roadmap" style="padding:120px 0; background: rgba(255,255,255,0.90); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);">
    <div class="section-wrap">
      <div class="reveal">
        <span class="section-eyebrow">Rencana Strategis</span>
        <h2 class="section-title">Milestones <em>Aksi Korporasi</em> 2026/2027</h2>
        <p class="section-desc" style="margin-top:14px">Peta jalan taktis implementasi operasional ekspansi bisnis dan komersialisasi produk Satyaniti secara transparan.</p>
      </div>

      <div class="roadmap-timeline">
        <div v-for="(rm, index) in ctrl.state.roadmap" :key="index" class="roadmap-node reveal">
          <div class="roadmap-meta">
            <div class="rp-quarter">{{ rm.q }}</div>
            <div class="rp-theme">{{ rm.theme }}</div>
            <div class="rp-tagline">“{{ rm.tagline }}”</div>
          </div>
          <div class="roadmap-line-node">
            <div class="rp-dot-marker"></div>
          </div>
          <div class="roadmap-items-card">
            <div class="rp-items">
              <div v-for="(item, idx) in rm.items" :key="idx" class="rp-item">{{ item }}</div>
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
.roadmap-timeline { position: relative; margin-top: 64px; display: flex; flex-direction: column; gap: 32px; }
.roadmap-timeline::before { content: ''; position: absolute; left: 240px; top: 12px; bottom: 12px; width: 1px; background: var(--border); }
.roadmap-node { display: grid; grid-template-columns: 210px 60px 1fr; align-items: start; }
.roadmap-meta { text-align: right; padding-top: 4px; }
.roadmap-line-node { display: flex; justify-content: center; padding-top: 8px; position: relative; }
.rp-dot-marker { width: 16px; height: 16px; border-radius: 50%; background: var(--sage); border: 3px solid var(--white); box-shadow: 0 0 0 2px var(--sage); position: relative; z-index: 1; }
.roadmap-items-card { background: var(--white); border: 1px solid var(--border); padding: 24px; border-radius: var(--r-lg); }
.rp-quarter { font-family: var(--mono); font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--sage); margin-bottom: 6px; }
.rp-theme { font-family: var(--display); font-size: 1.05rem; color: var(--forest); font-weight: 400; margin-bottom: 6px; }
.rp-tagline { font-size: 0.8rem; font-style: italic; color: var(--gold); margin-bottom: 14px; }
.rp-items { display: flex; flex-direction: column; gap: 6px; }
.rp-item { font-size: 0.8rem; color: var(--muted); display: flex; gap: 8px; align-items: flex-start; text-align: left; }
.rp-item::before { content: '→'; color: var(--sage); flex-shrink: 0; }
.team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.team-card { background: var(--white); border-radius: var(--r-lg); overflow: hidden; border: 1px solid var(--border); text-align: center; transition: transform 0.2s; }
.team-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
.team-avatar-wrap { padding: 32px 0 16px; display: flex; justify-content: center; background: var(--cream); }
.team-avatar-placeholder { width: 84px; height: 84px; border-radius: 50%; background: var(--warm); display: flex; align-items: center; justify-content: center; color: var(--sage); }
.team-avatar-placeholder svg { width: 36px; height: 36px; }
.team-card-body { padding: 20px; }
.team-name { font-family: var(--display); font-size: 1.05rem; color: var(--forest); font-weight: 500; margin-bottom: 4px; }
.team-role { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--gold); }
.team-card-divider { height: 1px; background: var(--border); margin: 14px 0; }
.team-desc { font-size: 0.78rem; color: var(--muted); line-height: 1.5; }
@media (max-width: 1024px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) { .roadmap-timeline::before { left: 16px; } .roadmap-node { grid-template-columns: 1fr; gap: 8px; } .roadmap-meta { text-align: left; padding-left: 40px; } .roadmap-line-node { display: none; } .roadmap-items-card { margin-left: 40px; } .team-grid { grid-template-columns: 1fr; } }
</style>