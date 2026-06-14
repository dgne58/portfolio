import React from 'react';

interface PromptProps {
  command: string;
  user?: string;
  host?: string;
  path?: string;
  cursor?: boolean;
  className?: string;
}

const Prompt: React.FC<PromptProps> = ({
  command,
  user = 'shivam',
  host = 'scu',
  path = '~',
  cursor = true,
  className = '',
}) => (
  <div className={`tui-prompt ${className}`}>
    <span className="text-gray-400">{user}@{host}</span>
    <span className="text-gray-600">:{path}$</span>
    <span className="text-gray-200">{command}</span>
    {cursor && <span className="blink-cursor text-white" aria-hidden="true">▮</span>}
  </div>
);

export default Prompt;
