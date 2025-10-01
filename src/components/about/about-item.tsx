import * as React from "react";

type AboutItemProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  children: React.ReactNode;
};

function AboutItem({ src, alt, className = "", imgClassName = "", children }: AboutItemProps) {
  return (
    <li className={`flex items-start gap-4 ${className}`}>
      <span className="inline-flex items-center justify-center">
        <img src={src} alt={alt} className={`h-10 w-10 ${imgClassName}`} loading="lazy" />
      </span>
      <p className="text-base leading-relaxed text-black dark:text-white">{children}</p>
    </li>
  );
}

export default AboutItem;
