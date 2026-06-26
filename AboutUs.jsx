import React from 'react';

function AboutUs() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', color: '#333' }}>
      <h1 style={{ color: '#2d6a4f', fontSize: '2.5rem', marginBottom: '20px' }}>
        🌿 About Paradise Nursery
      </h1>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
        Welcome to <strong>Paradise Nursery</strong> — your one-stop destination for beautiful,
        healthy houseplants. Founded in 2020, we are passionate about bringing the beauty of
        nature indoors and helping people create their own green paradise at home.
      </p>

      <h2 style={{ color: '#40916c', marginBottom: '12px' }}>Our Mission</h2>
      <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
        We believe that everyone deserves a little greenery in their life. Our mission is to
        make plant ownership accessible, enjoyable, and rewarding. We carefully source and
        cultivate each plant to ensure it arrives at your door healthy and thriving.
      </p>

      <h2 style={{ color: '#40916c', marginBottom: '12px' }}>Why Choose Us?</h2>
      <ul style={{ lineHeight: '2', paddingLeft: '20px', marginBottom: '20px' }}>
        <li>🌱 Over 50 varieties of houseplants</li>
        <li>📦 Carefully packaged for safe delivery</li>
        <li>💚 Expert care guides with every purchase</li>
        <li>♻️ Eco-friendly packaging materials</li>
        <li>⭐ 5-star customer satisfaction rating</li>
      </ul>

      <h2 style={{ color: '#40916c', marginBottom: '12px' }}>Our Story</h2>
      <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
        Paradise Nursery started as a small backyard greenhouse and has grown into a thriving
        online plant shop serving thousands of happy plant parents across the country. Every
        plant we sell is grown with love and care, ensuring you receive only the best.
      </p>

      <p style={{ lineHeight: '1.8', fontStyle: 'italic', color: '#555' }}>
        "A home filled with plants is a home filled with life." — The Paradise Nursery Team
      </p>
    </div>
  );
}

export default AboutUs;
