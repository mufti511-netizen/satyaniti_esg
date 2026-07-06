import { reactive, onMounted, onBeforeUnmount } from 'vue';

export function useAppController() {
  const state = reactive({
    isHero: true,
    activeSection: 'hero',
    mobileOpen: false,
    activePlatformFeature: 0,
    statsAnimated: false,
    toastMessage: '',
    showToastState: false,
    isLoading: true,
    formSubmitted: false,
    form: { name: '', email: '', company: '', needs: '', message: '' },
    pricing: [
      { name: 'Starter Dashboard', price: 'Rp 2,5 jt / bln', desc: 'SaaS kalkulator emisi GHG dasar (Scope 1 & 2) serta visualisasi grafik ringkas untuk UKM.', features: ['Kalkulasi Emisi Otomatis', 'Template OJK Dasar', '1 Akun Pengguna', 'Export PDF Ringkas'] },
      { name: 'Corporate Pro', price: 'Rp 7,5 jt / bln', desc: 'Akses penuh modul komprehensif Scope 1, 2, & 3, audit-ready data trail, dan multi-user.', features: ['Full Scope 1, 2, 3 Tracker', 'Audit Trail & Log Enkripsi', 'Unlimited Users & Subs', 'GRI / OJK Framework Ready', 'Integrasi API Sensor'], highlight: true },
      { name: 'Enterprise Custom', price: 'Hubungi Kami', desc: 'Kustomisasi penuh framework internal, integrasi ERP berskala besar, serta pendampingan langsung.', features: ['Arsitektur On-Premise / Cloud', 'Kustom KPI Industri Spesifik', 'Dedicated Account Executive', 'Integrasi SAP/Oracle ERP'] }
    ],
    roadmap: [
      { q: 'Q1 — Juni – Agustus 2026', theme: 'Pondasi & Legalitas', tagline: 'Build the Foundation Right', items: ['PT resmi berdiri dengan akta notaris', 'Brand identity & website live', 'MVP SaaS sprint pertama dimulai', 'Pemetaan 50 calon klien potensial'] },
      { q: 'Q2 — September – Oktober 2026', theme: 'Produk & Pasar', tagline: 'Validate the Solution, Build the Pipeline', items: ['MVP SaaS demo-ready', 'PSE Kominfo terdaftar', 'ESG Academy perdana ≥ 15 peserta', 'Minimal 2 Letter of Intent (LOI)'] },
      { q: 'Q3 — November – Desember 2026', theme: 'Revenue Pertama', tagline: 'First Client. First Revenue. First Proof.', items: ['Closing kontrak konsultasi ≥ Rp 100 jt', 'Beta launch SaaS (3–5 pilot users)', '2–3 sesi ESG Academy', 'Rekrutmen konsultan & developer junior'] },
      { q: 'Q4 — Januari – Maret 2027', theme: 'Tumbuh & Skalasi', tagline: 'Build the Machine. Prove the Model.', items: ['SaaS V1.0 public launch', '≥ 3 klien konsultasi aktif', '≥ 3 klien SaaS berbayar', 'MRR SaaS ≥ Rp 15 juta — Break-even tercapai'] }
    ],
    team: [
      {
        name: 'Lutfi Hadi',
        role: 'CEO / Direktur Utama',
        photo: 'team/hadi.jpeg', // Pastikan fotonya ada di folder public/assets/img/team/hadi.jpeg
        desc: 'Memimpin strategi bisnis, visi keberlanjutan, dan arah pertumbuhan korporasi Satyaniti.',
        linkedin: 'https://linkedin.com/in/lutfihadi',
        email: 'hello@satyaniti.id'
      },
      {
        name: 'Dian Anggraeni',
        role: 'COO / Direktur Operasional',
        photo: 'team/dian.jpeg',
        desc: 'Mengawasi eksekusi operasional harian, kepatuhan regulasi OJK/KLHK, dan manajemen kemitraan.',
        linkedin: 'https://linkedin.com/in/dian',
        email: 'dian@satyaniti.id'
      },
      {
        name: 'Ade Priyatna',
        role: 'Chief Sustainability Officer',
        photo: 'team/abah_udu.jpeg',
        desc: 'Pakar sertifikasi ESG dan GRI Standards yang mengawal akurasi framework konsultasi dan validasi data.',
        linkedin: 'https://linkedin.com/in/arismunandar',
        email: 'aris@satyaniti.id'
      },
      {
        name: 'Mufti Adiyatma',
        role: 'Head of Technology',
        photo: 'team/mufti.jpg',
        desc: 'Arsitek utama platform SaaS pelaporan keberlanjutan terpadu dan sistem otomasi metrik emisi karbon.',
        linkedin: 'https://linkedin.com/in/budisantoso',
        email: 'budi@satyaniti.id'
      }
    ]
  });

  const methods = {
    showToast(msg) {
      state.toastMessage = msg;
      state.showToastState = true;
      setTimeout(() => { state.showToastState = false; }, 4000);
    },
    scrollTo(id) {
      state.mobileOpen = false;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
    copyText(text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => this.showToast('Disalin ke clipboard: ' + text));
      } else {
        this.showToast('Salin manual: ' + text);
      }
    },
    submitForm() {
      if (!state.form.name || !state.form.email) {
        this.showToast('Mohon isi nama dan email Anda.');
        return;
      }
      state.formSubmitted = true;
      this.showToast('Pesan berhasil dikirim! Tim kami akan segera menghubungi Anda.');
    },
    animateStats() {
      const targets = [
        { selector: '.hero-stat:nth-child(1) .hero-stat-num', end: 900, suffix: '+' },
        { selector: '.hero-stat:nth-child(2) .hero-stat-num', end: 800, suffix: '+' }
      ];
      targets.forEach(t => {
        const el = document.querySelector(t.selector);
        if (!el) return;
        const duration = 1400;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * t.end) + t.suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }
  };

  let scrollHandler, revealObserver, featureInterval, contextMenuHandler, keyDownHandler;

  onMounted(() => {
    // Hide Loader
    setTimeout(() => { state.isLoading = false; }, 600);

    // Scroll Logic (Navbar background & progress bar)
    scrollHandler = () => {
      const scrollY = window.scrollY;
      state.isHero = scrollY < 80;

      const progressFill = document.querySelector('.scroll-progress-fill');
      if (progressFill) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
        progressFill.style.width = progress + '%';
      }

      // Track Active Section
      const sections = ['hero', 'tentang', 'layanan', 'platform', 'academy', 'mengapa', 'kontak'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            state.activeSection = section;
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', scrollHandler);

    // Intersection Observer untuk Reveal Animation & Hero Stats Counter
    const elementsToReveal = document.querySelectorAll('.reveal');
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.classList.contains('hero-stats') && !state.statsAnimated) {
            state.statsAnimated = true;
            methods.animateStats();
          }
        }
      });
    }, { threshold: 0.15 });
    elementsToReveal.forEach(el => revealObserver.observe(el));

    // Observe Hero Stats Khusus jika tidak kena di `.reveal` umum
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) revealObserver.observe(heroStats);

    // Platform Feature Auto-cycle
    featureInterval = setInterval(() => {
      state.activePlatformFeature = (state.activePlatformFeature + 1) % 4;
    }, 3000);

    // Proteksi Hak Cipta Ringan
    contextMenuHandler = (e) => {
      const tag = e.target.tagName;
      if (tag !== 'INPUT' && tag !== 'TEXTAREA') e.preventDefault();
    };
    document.addEventListener('contextmenu', contextMenuHandler);

    keyDownHandler = (e) => {
      const k = e.key;
      if (k === 'F12' || (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(k.toUpperCase())) || (e.ctrlKey && k.toUpperCase() === 'U')) {
        // Blok pintasan DevTools dasar
      }
    };
    document.addEventListener('keydown', keyDownHandler);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', scrollHandler);
    if (revealObserver) revealObserver.disconnect();
    clearInterval(featureInterval);
    document.removeEventListener('contextmenu', contextMenuHandler);
    document.removeEventListener('keydown', keyDownHandler);
  });

  return { state, methods };
}