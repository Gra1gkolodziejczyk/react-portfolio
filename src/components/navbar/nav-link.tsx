import * as React from "react";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="transition-colors hover:text-primary"
    >
      {children}
    </a>
  )
}

export default NavLink;
