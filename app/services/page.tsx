import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'The Essential Package',
    price: '899,-',
    description: 'A highlight video reel of your wedding, lasting 4-6 minutes. My services at the venue for up to 6 hours.',
    bullets: [
      'A highlight video reel of your wedding, lasting 4-6 minutes',
      'My services at the venue for up to 6 hours',
    ],
    image: '/service_1.jpeg',
  },
  {
    title: 'The Elite Package',
    price: '1299,-',
    description: 'A cinematic film of your wedding, lasting 8-12 minutes. My services at the venue for up to 10 hours.',
    bullets: [
      'A highlight video reel of your wedding, lasting 8-10 minutes',
      'A social media trailer video of your wedding, lasting 1-2 minutes minutes',
      'My services at the venue for up to 10 hours',
    ],
    image: '/service_2.jpeg',
  },
  {
    title: 'The Weekend Package',
    price: '1799,-',
    description: 'A full documentary edit of your wedding, including ceremony and speeches. My services at the venue for the entire day.',
    bullets: [
      'A highlight video reel of your wedding, lasting 10-15 minutes',
      'A social media video trailer of your wedding, lasting 1-2 minutes minutes',
      'My services at the venue for up to 16 hours spread over three days',
    ],
    image: '/service_3.jpeg',
  },
];

export default function ServicesPage() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh', padding: '0', margin: 0, fontFamily: 'Avenir Light, Avenir, Arial, sans-serif' }}>
      <section style={{ padding: '4rem 0 2rem 0', textAlign: 'center', background: '#fff' }}>
        <h1 style={{ fontFamily: 'Avenir, Avenir Next, Arial, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Services</h1>
        <p style={{ fontFamily: 'Avenir Light, Avenir, Arial, sans-serif', fontSize: '0.96rem', marginBottom: '2.5rem' }}>The perfect package tailored for you.</p>
      </section>
      <section className="servicesSection" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', background: '#fff', paddingBottom: '4rem' }}>
        {services.map((service, idx) => (
          <div key={service.title} className="serviceCard" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: idx % 2 === 0 ? 'flex-start' : 'flex-end', maxWidth: 1100, width: '100%', background: idx % 2 === 0 ? '#fff' : '#e7e4dd', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.03)', margin: '0 1rem' }}>
            <div className="serviceImageWrap" style={{ width: 400, height: 320, position: 'relative', margin: 32 }}>
              <Image src={service.image} alt={service.title} fill style={{ objectFit: 'cover', borderRadius: 0 }} />
            </div>
            <div className="serviceContent" style={{ flex: 1, minWidth: 260, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
              <h2 style={{ fontFamily: 'Avenir, Avenir Next, Arial, sans-serif', fontSize: '2.4rem', lineHeight: 1.1, fontWeight: 800, marginTop: 0, marginBottom: 8 }}>
                {service.title}
              </h2>
              <div style={{ fontSize: '1.12rem', fontStyle: 'italic', fontFamily: 'Avenir Light, Avenir, Arial, sans-serif', opacity: 0.9, marginBottom: 24 }}>
                Starting from {service.price}
              </div>
              <ul style={{ fontFamily: 'Avenir Light, Avenir, Arial, sans-serif', fontSize: '0.96rem', lineHeight: 1.8, paddingLeft: '1.6rem', margin: 0 }}>
                {service.bullets.map((item) => (
                  <li key={item} style={{ marginBottom: '1.25rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
