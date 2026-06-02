import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  {
    title: 'Signature Cakes',
    desc: 'Layered cakes with rich cream, soft sponge, and elegant handcrafted finishes.',
    price: 'From $18',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Chocolate Desserts',
    desc: 'Deep cocoa flavors, silky textures, and indulgent premium chocolate creations.',
    price: 'From $7',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Eastern Sweets',
    desc: 'Traditional sweets made with nuts, syrup, butter, and authentic recipes.',
    price: 'From $12',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Fresh Pastries',
    desc: 'Golden, flaky pastries baked fresh daily for a light and memorable taste.',
    price: 'From $5',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Cookies & Bites',
    desc: 'Small sweet bites with buttery textures, soft centers, and playful flavors.',
    price: 'From $4',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Cold Desserts',
    desc: 'Refreshing dessert cups, creamy layers, fruit notes, and smooth chilled textures.',
    price: 'From $6',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80',
  },
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About Us', href: '#about' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

const heroSlides = [
  {
    name: 'Blueberry Donut',
    price: '$8.40',
    accent: '#A56F69',
    bubble: 'rgba(235,198,194,0.72)',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=90',
  },
  {
    name: 'Strawberry Donut',
    price: '$6.00',
    accent: '#A56F69',
    bubble: 'rgba(235,198,194,0.78)',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=90',
  },
  {
    name: 'Sugar Glazed Donut',
    price: '$7.90',
    accent: '#A56F69',
    bubble: 'rgba(235,198,194,0.82)',
    image: 'https://images.unsplash.com/photo-1556913396-7a3c459ef68e?auto=format&fit=crop&w=1200&q=90',
  },
  {
    name: 'Chocolate Donut',
    price: '$7.90',
    accent: '#A56F69',
    bubble: 'rgba(235,198,194,0.84)',
    image: 'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=1200&q=90',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function Icon({ name, size = 20, className = '' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': 'true',
  };

  const paths = {
    sparkles: (
      <>
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
        <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
        <path d="M5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15z" />
      </>
    ),
    arrowRight: (
      <>
        <path d="M5 12h14" />
        <path d="M13 5l7 7-7 7" />
      </>
    ),
    mapPin: (
      <>
        <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    messageCircle: (
      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.5 8.5 0 0 1 21 11.5z" />
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="M18 6L6 18" />
        <path d="M6 6l12 12" />
      </>
    ),
  };

  return <svg {...common}>{paths[name] || paths.sparkles}</svg>;
}

const selfCheck = {
  hasSixMenuItems: menuItems.length === 6,
  hasNoOrderingLabels: !JSON.stringify({ menuItems, navLinks }).toLowerCase().match(/cart|checkout|order now|add to cart|payment|delivery/),
  hasRequiredSections: ['#home', '#menu', '#about', '#location', '#contact'].every((href) => navLinks.some((link) => link.href === href)),
  hasHeroSlides: heroSlides.length === 4,
  hasHeroSlideImages: heroSlides.every((slide) => Boolean(slide.image && slide.name && slide.price)),
  hasUniqueHeroSlideNames: new Set(heroSlides.map((slide) => slide.name)).size === heroSlides.length,
  hasNoDuplicateNavHrefs: new Set(navLinks.map((link) => link.href)).size === navLinks.length,
  hasValidHeroColors: heroSlides.every((slide) => slide.accent.startsWith('#') && slide.bubble.includes('rgba')),
  usesBrandAccent: heroSlides.every((slide) => slide.accent === '#A56F69'),
};

if (typeof console !== 'undefined') {
  console.assert(selfCheck.hasSixMenuItems, 'Expected exactly six menu categories.');
  console.assert(selfCheck.hasNoOrderingLabels, 'Landing page should not include ordering or ecommerce labels.');
  console.assert(selfCheck.hasRequiredSections, 'Expected all required sitemap links to exist.');
  console.assert(selfCheck.hasHeroSlides, 'Expected four animated hero donut slides.');
  console.assert(selfCheck.hasHeroSlideImages, 'Expected every hero slide to include image, name, and price.');
  console.assert(selfCheck.hasUniqueHeroSlideNames, 'Expected hero slide names to be unique.');
  console.assert(selfCheck.hasNoDuplicateNavHrefs, 'Expected navigation links to be unique.');
  console.assert(selfCheck.hasValidHeroColors, 'Expected every hero slide to include valid color values.');
  console.assert(selfCheck.usesBrandAccent, 'Expected hero slides to use the deeper brand accent color.');
}

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentSlide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((index) => (index + 1) % heroSlides.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F2E8] text-[#3A2522]">
      <style>{`
        html { scroll-behavior: smooth; }
        .hero-sweet {
          background:
            radial-gradient(circle at 12% 12%, rgba(235, 198, 194, 0.72), transparent 26%),
            radial-gradient(circle at 88% 14%, rgba(247, 242, 232, 0.95), transparent 24%),
            linear-gradient(180deg, #F7F2E8 0%, #FFF9F2 48%, #FFFFFF 100%);
        }
        .section-pastel {
          background:
            radial-gradient(circle at 12% 15%, rgba(235,198,194,0.24), transparent 24%),
            radial-gradient(circle at 86% 25%, rgba(247,242,232,0.78), transparent 24%),
            linear-gradient(180deg, #FFFFFF 0%, #F7F2E8 100%);
        }
        .section-dark {
          background:
            radial-gradient(circle at 15% 15%, rgba(235,198,194,0.22), transparent 25%),
            radial-gradient(circle at 88% 20%, rgba(247,242,232,0.12), transparent 25%),
            linear-gradient(135deg, #3A2522 0%, #5A3935 100%);
        }
        .hero-product-shadow { filter: drop-shadow(0 34px 34px rgba(58, 37, 34, 0.18)); }
      `}</style>

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#EBC6C2]/60 bg-[#FFF9F2]/95 px-4 py-3 shadow-[0_10px_35px_rgba(58,37,34,0.08)] backdrop-blur-xl sm:px-6 lg:px-10">
        <div className="mx-auto flex h-14 w-full max-w-[1600px] items-center justify-between">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 text-[#A56F69]">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[#EBC6C2] text-[#3A2522] shadow-sm">
              <svg width="34" height="34" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <circle cx="24" cy="24" r="18" fill="currentColor" />
                <circle cx="24" cy="24" r="7" fill="#FFF9F2" />
                <path d="M8 25.5c5.8 2.6 7.6-5.2 12.2-1.6 3.2 2.5 1 8.8 5.5 8.8 4.8 0 2.8-8.1 7.7-8.8 3.7-.5 4.8 4.1 8.6 2" stroke="#FFF9F2" strokeWidth="4" strokeLinecap="round" />
                <path d="M15 15l3-1.6M27 12l3-1.6M35 17l2.5 2" stroke="#FFF9F2" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </span>
            <span className="font-serif text-xl font-black leading-[0.95] tracking-tight text-[#3A2522] sm:text-2xl">
              Maken<br />Sweet
            </span>
          </a>

          <div className="hidden items-center gap-2 text-sm font-semibold text-[#5A3935] md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative rounded-full px-4 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EBC6C2] hover:text-[#3A2522] hover:shadow-[0_12px_26px_rgba(235,198,194,0.55)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden rounded-full bg-[#EBC6C2] px-5 py-2.5 text-sm font-semibold text-[#3A2522] shadow-[0_12px_30px_rgba(235,198,194,0.55)] transition hover:-translate-y-0.5 hover:bg-[#DFAEAA] sm:inline-flex">
              Contact Us
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-full border border-[#EBC6C2] bg-white text-[#A56F69] shadow-sm transition hover:bg-[#F7F2E8] md:hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={20} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mx-auto mt-3 max-w-[1600px] rounded-[1.5rem] border border-[#EBC6C2]/70 bg-[#FFF9F2]/95 p-4 shadow-[0_20px_60px_rgba(58,37,34,0.12)] backdrop-blur-xl md:hidden"
          >
            <div className="grid gap-2 text-sm font-semibold text-[#5A3935]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 transition hover:bg-[#F7F2E8] hover:text-[#A56F69]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <section id="home" className="hero-sweet relative min-h-screen overflow-hidden px-4 pt-[96px] sm:px-6 lg:px-10">
        <motion.div
          animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[#EBC6C2]/70 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 14, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[-120px] top-[100px] h-[520px] w-[520px] rounded-full bg-[#F7F2E8] blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-140px] left-1/2 h-[320px] w-[900px] -translate-x-1/2 rounded-full bg-[#EBC6C2]/45 blur-3xl"
        />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            key={`shape-left-${activeSlide}`}
            initial={{ opacity: 0, x: -80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute left-[-10%] top-[10%] h-[380px] w-[760px] rounded-[50%]"
            style={{ background: currentSlide.bubble }}
          />
          <motion.div
            key={`shape-right-${activeSlide}`}
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 0.95, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute right-[-12%] top-[18%] h-[620px] w-[620px] rounded-full"
            style={{ background: 'rgba(235, 198, 194, 0.32)' }}
          />
          <motion.div
            key={`shape-bottom-${activeSlide}`}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="absolute bottom-[-120px] left-[-5%] h-[220px] w-[120%] rounded-[50%]"
            style={{ background: 'rgba(255,255,255,0.55)' }}
          />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] w-full max-w-[1650px] items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] xl:gap-14">
          <div className="max-w-[620px] pb-10 lg:pb-0">
            <motion.h1
              key={`hero-title-${currentSlide.name}`}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-serif text-5xl font-black leading-[0.94] tracking-tight text-[#A56F69] sm:text-6xl md:text-7xl xl:text-[7rem]"
            >
              {currentSlide.name}
            </motion.h1>

            <motion.div
              key={`rating-${activeSlide}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-6 flex items-center gap-3"
            >
              <div className="flex items-center gap-1 text-[#F6C446]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="text-[#D9C9C0]">★</span>
              </div>
              <span className="text-sm font-medium text-[#6C514D]">4.2 (128 reviews)</span>
            </motion.div>

            <motion.p
              key={`desc-${activeSlide}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.14 }}
              className="mt-6 max-w-[520px] text-lg leading-8 text-[#5A3935]"
            >
              A soft, fluffy donut with a smooth glaze, playful toppings, and a clean warm presentation made for sweet everyday moments.
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mt-8 flex flex-wrap gap-4">
              <a href="#menu" className="group rounded-full bg-[#EBC6C2] px-8 py-4 text-sm font-semibold text-[#3A2522] shadow-[0_18px_40px_rgba(235,198,194,0.55)] transition hover:-translate-y-1 hover:bg-[#DFAEAA]">
                View Menu <Icon name="arrowRight" size={17} className="ml-2 inline transition group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="rounded-full border border-[#EBC6C2] bg-white/45 px-8 py-4 text-sm font-semibold text-[#A56F69] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/70">
                Contact Us
              </a>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mt-12 flex items-center gap-4">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.name}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`relative h-16 w-16 overflow-hidden rounded-full bg-white p-1.5 shadow-[0_14px_30px_rgba(58,37,34,0.12)] transition ${activeSlide === index ? 'scale-110 ring-2 ring-[#EBC6C2]' : 'opacity-90 hover:scale-105'}`}
                  aria-label={`Show ${slide.name}`}
                >
                  <img src={slide.image} alt="" className="h-full w-full rounded-full object-cover" />
                  {activeSlide === index && <span className="absolute -bottom-3 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-[#A56F69]" />}
                </button>
              ))}
            </motion.div>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[calc(100vh-140px)]">
            <motion.div
              key={`product-halo-${activeSlide}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute h-[320px] w-[320px] rounded-full bg-white/55 blur-2xl sm:h-[470px] sm:w-[470px] xl:h-[620px] xl:w-[620px]"
            />

            <motion.img
              key={`hero-product-${currentSlide.name}`}
              src={currentSlide.image}
              alt={currentSlide.name}
              initial={{ x: 180, opacity: 0, rotate: -12, scale: 0.78 }}
              animate={{ x: 0, opacity: 1, rotate: [0, 2.5, -1.5, 0], y: [0, -14, 0], scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut', y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
              className="hero-product-shadow relative z-10 aspect-square w-[300px] rounded-full object-cover shadow-[0_40px_90px_rgba(58,37,34,0.18)] sm:w-[460px] md:w-[560px] lg:w-[640px] xl:w-[720px]"
            />
          </div>
        </div>
      </section>

      <section id="menu" className="section-pastel px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#A56F69]">Our Menu</p>
            <h2 className="font-serif text-4xl font-bold text-[#3A2522] md:text-5xl">A curated world of sweetness</h2>
            <p className="mt-5 leading-7 text-[#6C514D]">
              Explore our signature categories, crafted for cafe moments, celebrations, and everyday cravings.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {menuItems.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.015 }}
                className="group overflow-hidden rounded-[1.75rem] border border-[#EBC6C2]/60 bg-white/80 shadow-[0_24px_60px_rgba(58,37,34,0.10)] backdrop-blur-xl"
              >
                <div className="h-60 overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl font-bold text-[#3A2522]">{item.title}</h3>
                    <span className="rounded-full bg-[#F7F2E8] px-3 py-1 text-sm font-semibold text-[#A56F69]">{item.price}</span>
                  </div>
                  <p className="mt-3 leading-7 text-[#6C514D]">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="about" className="section-dark px-6 py-24 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#EBC6C2]">About Us</p>
            <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">Made by hand, remembered by heart.</h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              Maken Sweet was created for people who believe dessert is more than a final course. Every cake, pastry, and sweet bite is prepared with carefully selected ingredients, balanced flavors, and a refined presentation that turns simple moments into lasting memories.
            </p>
            <p className="mt-5 leading-8 text-white/68">
              From classic recipes to modern dessert creations, our kitchen focuses on freshness, texture, and detail because the smallest touches are what make sweetness feel truly premium.
            </p>
            <div className="mt-9 grid grid-cols-3 gap-4">
              {[
                ['Fresh', 'Daily baked'],
                ['Premium', 'Ingredients'],
                ['Handmade', 'With care'],
              ].map(([headline, label]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center">
                  <p className="font-serif text-2xl font-bold text-[#EBC6C2]">{headline}</p>
                  <p className="mt-1 text-sm text-white/60">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#EBC6C2]/25 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1100&q=90"
              alt="Handmade dessert preparation"
              className="relative h-[560px] w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <section id="location" className="section-pastel px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="mb-12 max-w-2xl"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#A56F69]">Our Branch</p>
            <h2 className="font-serif text-4xl font-bold text-[#3A2522] md:text-5xl">Visit our sweet corner</h2>
          </motion.div>

          <div className="grid overflow-hidden rounded-[2rem] border border-[#EBC6C2]/60 bg-white/80 shadow-[0_28px_80px_rgba(58,37,34,0.12)] backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12"
            >
              <h3 className="font-serif text-3xl font-bold text-[#3A2522]">Maken Sweet - Main Branch</h3>
              <div className="mt-7 space-y-5 text-[#6C514D]">
                <p className="flex gap-3"><Icon name="mapPin" className="mt-1 shrink-0 text-[#A56F69]" /> 24 Sweet Avenue, Downtown District</p>
                <p className="flex gap-3"><Icon name="clock" className="mt-1 shrink-0 text-[#A56F69]" /> Open daily: 10:00 AM - 11:00 PM</p>
                <p className="flex gap-3"><Icon name="phone" className="mt-1 shrink-0 text-[#A56F69]" /> +1 234 567 890</p>
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center rounded-full bg-[#EBC6C2] px-7 py-4 font-semibold text-[#3A2522] transition hover:-translate-y-1 hover:bg-[#DFAEAA]">
                Get Directions <Icon name="arrowRight" className="ml-2" size={18} />
              </a>
            </motion.div>

            <div className="relative min-h-[360px] bg-[#F7F2E8]">
              <div className="absolute inset-6 rounded-[1.5rem] border border-[#EBC6C2]/60 bg-[linear-gradient(135deg,#FFF9F2,#F7F2E8)] p-8">
                <div className="grid h-full place-items-center rounded-[1.2rem] border-2 border-dashed border-[#EBC6C2] text-center">
                  <div>
                    <Icon name="mapPin" className="mx-auto mb-4 text-[#A56F69]" size={44} />
                    <p className="font-serif text-3xl font-bold text-[#3A2522]">Map Placeholder</p>
                    <p className="mt-2 text-[#6C514D]">Embed your Google Map here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-pastel px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#A56F69]">Contact Us</p>
            <h2 className="font-serif text-4xl font-bold leading-tight text-[#3A2522] md:text-5xl">Have a question? We would love to hear from you.</h2>
            <p className="mt-5 leading-8 text-[#6C514D]">
              Reach us for branch information, menu details, collaborations, or general inquiries.
            </p>
            <div className="mt-9 space-y-4">
              <p className="flex items-center gap-3 text-[#3A2522]"><Icon name="phone" className="text-[#A56F69]" /> +1 234 567 890</p>
              <p className="flex items-center gap-3 text-[#3A2522]"><Icon name="messageCircle" className="text-[#A56F69]" /> WhatsApp available</p>
              <p className="flex items-center gap-3 text-[#3A2522]"><Icon name="instagram" className="text-[#A56F69]" /> @makensweet</p>
              <p className="flex items-center gap-3 text-[#3A2522]"><Icon name="mail" className="text-[#A56F69]" /> hello@makensweet.com</p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[2rem] border border-[#EBC6C2]/60 bg-white/80 p-6 shadow-[0_28px_80px_rgba(58,37,34,0.12)] backdrop-blur-xl md:p-9"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#6C514D]">Name</span>
                <input className="w-full rounded-2xl border border-[#EBC6C2]/70 bg-[#FFF9F2] px-4 py-4 outline-none transition focus:border-[#EBC6C2] focus:ring-4 focus:ring-[#EBC6C2]/35" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#6C514D]">Phone</span>
                <input className="w-full rounded-2xl border border-[#EBC6C2]/70 bg-[#FFF9F2] px-4 py-4 outline-none transition focus:border-[#EBC6C2] focus:ring-4 focus:ring-[#EBC6C2]/35" placeholder="Your phone" />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-semibold text-[#6C514D]">Message</span>
              <textarea className="min-h-40 w-full rounded-2xl border border-[#EBC6C2]/70 bg-[#FFF9F2] px-4 py-4 outline-none transition focus:border-[#EBC6C2] focus:ring-4 focus:ring-[#EBC6C2]/35" placeholder="Write your message" />
            </label>
            <button type="button" className="mt-6 w-full rounded-full bg-[#EBC6C2] px-7 py-4 font-semibold text-[#3A2522] transition hover:-translate-y-1 hover:bg-[#DFAEAA]">
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      <footer className="section-dark px-6 py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <div className="flex items-center gap-2 font-serif text-2xl font-semibold">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EBC6C2] text-[#3A2522]"><Icon name="sparkles" size={18} /></span>
              Maken Sweet
            </div>
            <p className="mt-4 max-w-sm leading-7 text-white/60">
              Premium desserts, warm details, and handmade sweetness for moments worth remembering.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#EBC6C2]">Quick Links</h4>
            <div className="mt-4 space-y-2 text-white/60">
              {navLinks.slice(0, 4).map((link) => (
                <p key={link.href}><a href={link.href} className="hover:text-[#EBC6C2]">{link.label}</a></p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#EBC6C2]">Contact</h4>
            <div className="mt-4 space-y-2 text-white/60">
              <p>+1 234 567 890</p>
              <p>hello@makensweet.com</p>
              <p>@makensweet</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#EBC6C2]">Social</h4>
            <div className="mt-4 flex gap-3">
              {['instagram', 'messageCircle', 'mail'].map((iconName) => (
                <a key={iconName} href="#contact" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-[#EBC6C2] hover:text-[#3A2522]">
                  <Icon name={iconName} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-sm text-white/45">
          © 2026 Maken Sweet. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
