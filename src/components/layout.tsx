import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  id: string;
}

const Layout: React.FC<LayoutProps> = ({ children, id }) => {
  return (
    <div className="min-h-screen w-full flex justify-center">
      <main id={id} className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
