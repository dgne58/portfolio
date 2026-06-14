import React from 'react';
import { SHIVAM_MAJI_BANNER } from '../../data/ascii';
import './tui.css';

interface AsciiBannerProps {
  className?: string;
  ariaHidden?: boolean;
}

const AsciiBanner: React.FC<AsciiBannerProps> = ({ className = '', ariaHidden = false }) => (
  <pre
    aria-label={ariaHidden ? undefined : 'Shivam Maji'}
    aria-hidden={ariaHidden || undefined}
    className={`ascii-banner ${className}`}
  >
    {SHIVAM_MAJI_BANNER}
  </pre>
);

export default AsciiBanner;
