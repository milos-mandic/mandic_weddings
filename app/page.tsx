import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const weddings = [
    {
      title: 'Eline & Joost',
      video: 'https://www.youtube.com/embed/pZX9-Bor_k8',
    },
    {
      title: 'Valérie & Joost',
      video: 'https://www.youtube.com/embed/aT6ZQxnHud4',
    },
    {
      title: 'Wendy & Marc',
      video: 'https://www.youtube.com/embed/JskhRopaY9U',
    },
    {
      title: 'Bernard & Donna',
      video: 'https://www.youtube.com/embed/hYK7rxIoHWo',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section id="hero" className="heroSection" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '3rem', letterSpacing: '0.3em', fontWeight: 700, textAlign: 'center' }}>SOPHIE MANDIĆ</h1>
        <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 400, marginTop: '1rem', textAlign: 'center' }}>Wedding Videographer</h2>
      </section>

      {/* Wedding Timeline */}
      <section id="timeline" className="timelineSection" style={{ background: '#e7e4dd', padding: '4rem 0', minHeight: '120vh', position: 'relative' }}>
        <h3 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '2rem', marginBottom: '2rem' }}>Wedding Stories</h3>
        <div className="timelineContainer" style={{ position: 'relative', maxWidth: 1100, margin: '4rem auto 0 auto', minHeight: 700 }}>
          {/* Vertical timeline line (now 2px) */}
          <div className="timelineLine" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: '#222', transform: 'translateX(-50%)', zIndex: 0, borderRadius: 1 }}></div>
          <div className="timelineList" style={{ display: 'flex', flexDirection: 'column', gap: '6rem', position: 'relative', zIndex: 1 }}>
            {weddings.map((w, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={w.title} className={`timelineItem ${isLeft ? 'left' : 'right'}`} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', minHeight: 220, position: 'relative' }}>
                  {/* Left side: Name or Video */}
                  {isLeft ? (
                    <>
                      {/* Name + horizontal line (now 2px) */}
                      <div className="timelineNameRow" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 32 }}>
                        <span className="timelineName" style={{ fontFamily: 'Enriqueta, serif', fontSize: '1.3rem', fontWeight: 500, marginRight: 16 }}>{w.title}</span>
                        <div className="timelineHLine" style={{ width: 'calc(50% - 110px)', height: 2, background: '#222', borderRadius: 1 }}></div>
                      </div>
                      {/* Timeline dot (center) */}
                      {/* Removed the circle */}
                      {/* Video */}
                      <div className="timelineVideoWrap" style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', position: 'relative', paddingLeft: 64 }}>
                        <div className="timelineVideoBox" style={{ width: 604, height: 340, background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', overflow: 'hidden', position: 'relative' }}>
                          <iframe className="timelineIframe" width="604" height="340" src={w.video} title={w.title} frameBorder="0" allowFullScreen style={{ display: 'block' }}></iframe>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Video */}
                      <div className="timelineVideoWrap" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', position: 'relative', paddingRight: 64 }}>
                        <div className="timelineVideoBox" style={{ width: 604, height: 340, background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', overflow: 'hidden', position: 'relative' }}>
                          <iframe className="timelineIframe" width="604" height="340" src={w.video} title={w.title} frameBorder="0" allowFullScreen style={{ display: 'block' }}></iframe>
                        </div>
                      </div>
                      {/* Timeline dot (center) */}
                      {/* Removed the circle */}
                      {/* Horizontal line + Name */}
                      <div className="timelineNameRow" style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 32 }}>
                        <div className="timelineHLine" style={{ width: 'calc(50% - 110px)', height: 2, background: '#222', borderRadius: 1 }}></div>
                        <span className="timelineName" style={{ fontFamily: 'Enriqueta, serif', fontSize: '1.3rem', fontWeight: 500, marginLeft: 16 }}>{w.title}</span>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" style={{ background: '#fff', padding: '4rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>About</h2>
        <div className="aboutContent" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <img className="aboutImage" src="/bio-image.jpg" alt="About" style={{ margin: '1rem', width: '300px', height: '450px', objectFit: 'cover' }} />
          <div style={{ maxWidth: 500, margin: '1rem' }}>
            <p style={{ fontFamily: 'Avenir Light, Avenir, sans-serif', lineHeight: 1.6 }}>At Mandić Weddings, I create timeless wedding videos that capture all the love, laughter, and real moments that make your day truly yours. It's not just about the planned events. It's the small, in-between moments: a nervous smile before the ceremony, a tight hug with a parent, the way you look at each other when no one else is watching.</p>
            <p style={{ fontFamily: 'Avenir Light, Avenir, sans-serif', lineHeight: 1.6, marginTop: '1rem' }}>My approach emphasizes capturing your day as it naturally unfolds, then seamlessly editing the most meaningful moments into a cinematic highlight film. I prioritize authenticity and honesty so that your story is told just as it truly happened.</p>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" style={{ background: '#fff', padding: '4rem 0', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Contact</h2>
        <p style={{ fontFamily: 'Avenir Light, Avenir, sans-serif', lineHeight: 1.6 }}>I'd love to hear from you. Reach out to me for inquiries, bookings or questions.</p>
        <p style={{ fontFamily: 'Avenir Light, Avenir, sans-serif', lineHeight: 1.6 }}>Email: <a href="mailto:info@mandicweddings.com">info@mandicweddings.com</a></p>
      </section>
    </main>
  );
}
