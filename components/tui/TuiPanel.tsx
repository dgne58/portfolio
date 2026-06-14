import React from 'react';
import './tui.css';

interface TuiPanelProps {
  children: React.ReactNode;
  title: string;
  rightTag?: string;
  className?: string;
  contentClassName?: string;
}

const corners = [
  ['top-left', '┌'],
  ['top-right', '┐'],
  ['bottom-left', '└'],
  ['bottom-right', '┘'],
] as const;

const TuiPanel: React.FC<TuiPanelProps> = ({
  children,
  title,
  rightTag,
  className = '',
  contentClassName = '',
}) => (
  <div className={`tui-panel ${className}`} role="region" aria-label={title}>
    {corners.map(([position, glyph]) => (
      <span
        key={position}
        aria-hidden="true"
        className={`tui-panel__corner tui-panel__corner--${position}`}
      >
        {glyph}
      </span>
    ))}

    <div className="tui-panel__title" aria-hidden="true">
      <span className="text-white/40">─[</span>
      <span className="text-gray-200">{title}</span>
      <span className="text-white/40">]─</span>
    </div>

    {rightTag && (
      <div className="tui-panel__tag" aria-hidden="true">
        [{rightTag}]
      </div>
    )}

    <div className={`tui-panel__content ${contentClassName}`}>{children}</div>
  </div>
);

export default TuiPanel;
