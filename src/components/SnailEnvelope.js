'use client';
import { useState } from 'react';
import S3Image from './S3Image';

export default function SnailEnvelope() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`envelope-container ${isOpen ? 'is-open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="envelope-wrapper">
        <div className="envelope-flap top"></div>
        <div className="envelope-flap left"></div>
        <div className="envelope-flap right"></div>
        <div className="envelope-flap bottom"></div>
        <div className="envelope-letter">
          <div className="letter-content">
            <h3>To the seeker...</h3>
            <p>Magic is not found, it is made. With your own hands. Step by step, letter by letter.</p>
            <div className="letter-signoff">— Chelsea</div>
          </div>
        </div>
        <div className="envelope-wax-seal">
          <S3Image src="/assets/favicon.svg" alt="Wax Seal" width={60} height={60} unoptimized />
        </div>
      </div>
      <p className="envelope-hint">Click to {isOpen ? 'close' : 'open'}</p>
    </div>
  );
}
