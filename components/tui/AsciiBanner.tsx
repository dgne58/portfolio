import React from 'react';
import { SHIVAM_MAJI_BANNER } from '../../data/ascii';
import './tui.css';

interface AsciiBannerProps {
  className?: string;
}

const AsciiBanner: React.FC<AsciiBannerProps> = ({ className = '' }) => (
  <pre
    aria-label="Shivam Maji"
    className={`ascii-banner ${className}`}
  >
    {SHIVAM_MAJI_BANNER}
  </pre>
);

export default AsciiBanner;
