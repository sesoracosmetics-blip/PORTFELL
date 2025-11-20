import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Sesora Cosmetics — 30s Instagram Ad",
      desc: "Qadın auditoriyası üçün sakit və məhsula yönəlik 30s reklam videosu.",
      tags: ["Video reklam", "Instagram", "Ssenari"],
      link: "#",
    },
    {
      title: "Karvan MMC — Mağaza Təqdimatı",
      desc: "Məhsul təqdimatı və topdan satış dialoqu. Video və səs dizaynı.",
      tags: ["Video", "Ssenari", "Montaj"],
      link: "#",
    },
    {
      title: "Pakpak.az — Sosial Media Kampaniyaları",
      desc: "Yerli mağazalar üçün sosial media kampaniyaları (Facebook/Instagram/TikTok).",
      tags: ["Reklamlar", "Analitika", "İnkişaf"],
      link: "#",
    },
  ];

  const year = new Date().getFullYear();

  const IconMail = ({ size = 16 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5L12 13.5L21 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" /></svg>);
  const IconPhone = ({ size = 16 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92V20a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3.09a1 1 0 0 1 1 .75c.12.62.3 1.23.54 1.8a1 1 0 0 1-.24 1L8.21 8.79a16 16 0 0 0 7 7l1.24-1.2a1 1 0 0 1 1-.24c.57.24 1.18.42 1.8.54a1 1 0 0 1 .75 1V16.92z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>);
  const IconDownload = ({ size = 16 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 15V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>);
  const IconLinkedin = ({ size = 16 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.5" /><path d="M7 10v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M7 7v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M12 17v-4a2 2 0 0 1 4 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="bg-white/60 backdrop-blur sticky top-0 z-40 border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Elmir Qasımov — Portfolio</h1>
          <nav className="hidden md:flex gap-4 items-center">
            <a href="#projects" className="text-sm hover:underline">Layihələr</a>
            <a href="#about" className="text-sm hover:underline">Haqqımda</a>
            <a href="#cv" className="text-sm hover:underline">CV</a>
            <a href="#contact" className="text-sm hover:underline">Əlaqə</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm text-indigo-600 font-medium">Salam — Mən Elmir Qasımovam</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-2">Rəqəmsal Marketoloq və Video Kontent Yaradıcısı</h2>
            <p className="mt-4 text-lg text-gray-700">
              Mən 2 ildir marketinq sahəsində təcrübə qazanmışam və Bakı Avrasiya Universitetində marketinq ixtisası üzrə 2-ci kurs tələbəsiyəm. Reklam videoları, sosial media kontenti və çevrilmə gətirən marketinq materialları hazırlayıram. Kreativ istiqamət, montaj və performans marketinqi üzrə çalışıram.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium">Layihələrə Bax</a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm">Əlaqə</a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="p-3 bg-white rounded-lg shadow-sm"><p className="text-xs text-gray-500">Təcrübə</p><p className="font-semibold">2 il</p></div>
              <div className="p-3 bg-white rounded-lg shadow-sm"><p className="text-xs text-gray-500">Ən Güclü Bacarıq</p><p className="font-semibold">Video Reklamlar & Sosial Media</p></div>
              <div className="p-3 bg-white rounded-lg shadow-sm"><p className="text-xs text-gray-500">Məkan</p><p className="font-semibold">Bakı, AZ</p></div>
              <div className="p-3 bg-white rounded-lg shadow-sm"><p className="text-xs text-gray-500">Məşğulluq</p><p className="font-semibold">Freelance</p></div>
            </div>
          </motion.div>

          <motion.div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6 shadow-lg" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className="h-64 flex items-center justify-center rounded-lg bg-white border-dashed border-2 border-gray-200">
              <div className="text-center px-6"><p className="text-sm text-gray-500">Video önbaxış</p><h3 className="mt-2 font-semibold">30s məhsul reklamı</h3></div>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="mt-16">
          <h3 className="text-2xl font-bold">Seçilmiş Layihələr</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div key={i} className="block p-5 bg-white rounded-2xl shadow hover:shadow-md transition" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                <a href={p.link} className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-lg">{p.title}</h4>
                    <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                    <div className="mt-3 flex gap-2 flex-wrap">{p.tags.map((t,j)=>(<span key={j} className="text-xs px-2 py-1 bg-indigo-50 rounded">{t}</span>))}</div>
                  </div>
                  <div className="text-xs text-gray-400">▶</div>
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold">Haqqımda</h3>
            <p className="mt-4 text-gray-700">
              Mən Elmir Qasımov, Bakı Avrasiya Universitetində marketinq ixtisası üzrə 2-ci kurs tələbəsiyəm. 2 illik praktik təcrübəyə sahibəm, həm sosial media kampaniyaları, həm reklam videoları, həm də kontent istehsalı sahəsində çalışıram. Kreativ yönləndirmə və strateji planlama bacarıqlarım sayəsində layihələri effektiv və nəticəyə yönəlik həyata keçirirəm.
            </p>
          </div>

          <aside className="p-6 bg-white rounded-2xl shadow">
            <h4 className="font-semibold">CV Yüklə</h4>
            <a href="/cv.pdf" download className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-md border"><IconDownload size={16} /> CV Yüklə</a>
            <div className="mt-6">
              <h5 className="font-medium">Əlaqə</h5>
              <div className="mt-4 flex flex-col gap-3">
                <a href="mailto:gasimove013@gmail.com" className="inline-flex items-center gap-2"><IconMail size={16} /> gasimove013@gmail.com</a>
                <a href="tel:+994518292974" className="inline-flex items-center gap-2"><IconPhone size={16} /> +994 51 829 2974</a>
                <a href="https://www.linkedin.com/in/elmir-qasimov-359643342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="inline-flex items-center gap-2"><IconLinkedin size={16} /> LinkedIn</a>
              </div>
            </div>
          </aside>
        </section>

        <section id="contact" className="mt-16">
          <h3 className="text-2xl font-bold">Əlaqə Saxlayın</h3>
          <p className="mt-2 text-gray-600">Qısa bir mesaj göndərin — və ya birbaşa WhatsApp / Email vasitəsilə əlaqə saxlayın.</p>
        </section>

        <footer className="mt-20 py-8 text-center text-sm text-gray-500">© {year} Elmir Qasımov — Created with ♥</footer>
      </main>
    </div>
  );
}
