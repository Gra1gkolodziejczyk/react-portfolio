"use client";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa6";


export default function ContactDock() {
  const items = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/graig-kolodziejczyk/",
      bg: "bg-[#0A66C2]",
      Icon: FaLinkedin,
      external: true,
      download: false,
    },
    {
      label: "GitHub",
      href: "https://github.com/Gra1gkolodziejczyk",
      bg: "bg-black",
      Icon: FaGithub,
      external: true,
      download: false,
    },
    {
      label: "Email",
      href: "mailto:graig.kolodziejczyk@icloud.com?subject=Contact%20depuis%20le%20site",
      bg: "bg-[#48B795]",
      Icon: MdEmail,
      download: false,
      external: false,
    },
    {
      label: "CV (PDF)",
      href: "/cv.pdf",
      bg: "bg-[#DF5E57]",
      Icon: FaFilePdf,
      download: true,
      external: false,
    },
  ] as const;

  return (
    <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <ul className="flex flex-col">
        {items.map(({ label, href, bg, Icon, external, download }) => (
          <li key={label} className="relative group">
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              {...(download ? { download: "" } : {})}
              className="block focus:outline-none"
              aria-label={label}
              title={label}
            >
              <span
                className={[
                  "grid h-14 w-14 place-items-center text-white",
                  "ring-1 ring-black/10",
                  "rounded-none",
                  bg,
                ].join(" ")}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>

              {/* Libellé qui s’ouvre à GAUCHE de l’icône */}
              <span
                className={[
                  "pointer-events-none absolute right-full mr-2",
                  "h-14 px-4 flex items-center font-medium text-white",
                  bg, "rounded-none",
                  "opacity-0 translate-x-2",
                  "transition-[opacity,transform] duration-300 ease-out",
                  "group-hover:opacity-100 group-hover:translate-x-0",
                  "group-focus-visible:opacity-100 group-focus-visible:translate-x-0",
                  "ring-1 ring-black/10",
                ].join(" ")}
                aria-hidden="true"
              >
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
