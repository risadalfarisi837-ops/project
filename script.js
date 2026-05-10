/* =============================================
   RISYADH ALFARISY - PORTOFOLIO
   script.js - OPTIMIZED VERSION
   ============================================= */

// --- PARTICLES BACKGROUND (dioptimasi) ---
// Cek apakah device HP/low-end, kalau iya kurangi partikel drastis
const isMobile = window.innerWidth < 768 || navigator.maxTouchPoints > 0;

particlesJS('particles-js', {
    particles: {
        number: {
            value: isMobile ? 15 : 35,
            density: { enable: true, value_area: 1000 }
        },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.08, random: false },
        size: { value: 1.5, random: false },
        line_linked: { enable: false },
        move: {
            enable: true,
            speed: isMobile ? 0.3 : 0.6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: false },
            onclick: { enable: false },
            resize: false
        }
    },
    retina_detect: false
});

// --- TYPING ANIMATION (hero section) ---
new Typed('#typing-text', {
    strings: [
        'pengalaman web yang keren.',
        'antarmuka interaktif.',
        'solusi digital inovatif.'
    ],
    typeSpeed: 55,
    backSpeed: 30,
    loop: true,
    backDelay: 2000,
    smartBackspace: true
});

// --- GSAP SCROLL ANIMATIONS (dioptimasi) ---
gsap.registerPlugin(ScrollTrigger);

// Set initial state
gsap.set('.bento-box', { opacity: 0, y: 25 });

// Batching: jauh lebih ringan dari forEach satu-satu
ScrollTrigger.batch('.bento-box', {
    onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        overwrite: true
    }),
    start: "top 92%",
    once: true
});

// Animasi progress bar skills
gsap.utils.toArray('.progress-fill').forEach(bar => {
    let targetWidth = bar.getAttribute('data-width');
    gsap.to(bar, {
        scrollTrigger: {
            trigger: "#skills",
            start: "top 80%",
            once: true
        },
        width: targetWidth,
        duration: 1.2,
        ease: "power2.out"
    });
});

// Refresh ScrollTrigger setelah semua konten load
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});
