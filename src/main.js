import { createApp } from 'vue';
import App from './App.vue';

// Mengimpor Font Lokal dari Node Modules (Zero CDN)
import '@fontsource/plus-jakarta-sans/300.css';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/literata/300.css';
import '@fontsource/literata/400.css';
import '@fontsource/literata/500.css';
import '@fontsource/literata/600.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/jetbrains-mono/600.css';

// Global Token CSS
import '@/assets/css/tokens.css';

createApp(App).mount('#app');