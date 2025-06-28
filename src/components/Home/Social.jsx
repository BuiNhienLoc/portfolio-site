import React from 'react';

const socials = [
  {
    href: "https://www.facebook.com/nhien.loc.bui",
    icon: "uil uil-facebook-f",
    label: "Facebook",
    hover: "hover:text-[#3975ea]",
  },
  {
    href: "https://www.instagram.com/nhienloc/",
    icon: "uil uil-instagram",
    label: "Instagram",
    hover: "hover:bg-gradient-to-br hover:from-[#fdf497] hover:via-[#fd5949] hover:to-[#285AEB] hover:text-transparent hover:bg-clip-text",
  },
  {
    href: "https://www.linkedin.com/in/loc-bui-nhien/",
    icon: "uil uil-linkedin",
    label: "LinkedIn",
    hover: "hover:text-[#2d64bc]",
  },
  {
    href: "https://github.com/BuiNhienLoc",
    icon: "uil uil-github",
    label: "GitHub",
    hover: "hover:text-gray-900",
  },
];

const Social = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      {socials.map((s, i) => (
        <a
          key={s.href}
          href={s.href}
          className={`text-[1.25rem] text-gray-600 transition-colors duration-200 ${s.hover}`}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
        >
          <i className={s.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;