// components/navbar/NavigationLinks.tsx
"use client"
import React from 'react';
import { useRouter } from 'next/navigation'; // Corrected from 'next/navigation' to 'next/router'

const NavigationLinks: React.FC = () => {
  const router = useRouter();

  const buttonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'darkslategray' // This sets the font color to a dark shade
  };

  return (
    <div style={{ display: 'flex', gap: '1rem' }}> {/* Adjust gap as needed */}
      <button onClick={() => router.push('/')} style={buttonStyle}>Home</button>
      <button onClick={() => router.push('/galery')} style={buttonStyle}>Shirts</button>
      <button onClick={() => router.push('/kontakt')} style={buttonStyle}>Stickers</button>
    </div>
  );
};

export default NavigationLinks;