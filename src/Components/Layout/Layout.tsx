import React from 'react';

const Layout: React.FC = (Props) => {
  return (
    <>
      <div>
        Toolbar, Side drawer, Backdrop
      </div>
      <main>
        {Props.children}
      </main>
    </>
  );
};

export default Layout;
