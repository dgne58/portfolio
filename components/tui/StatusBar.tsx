import React from 'react';
import './tui.css';

interface StatusBarProps {
  children: React.ReactNode;
  className?: string;
  position?: 'top' | 'bottom';
}

const StatusBar: React.FC<StatusBarProps> = ({
  children,
  className = '',
  position = 'bottom',
}) => (
  <div className={`tui-status-bar tui-status-bar--${position} ${className}`}>
    {children}
  </div>
);

export default StatusBar;
