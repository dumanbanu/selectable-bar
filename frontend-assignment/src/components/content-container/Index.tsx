import React from 'react';

interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
}
function Index({ children, className }: ContentContainerProps) {
  return (
    <div className={`bg-white ${className}`} style={{ position: 'relative' }}>
      {children}
    </div>
  );
}

export default Index;
