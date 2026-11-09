"use client"; // usePathname works only in client component

import Link from "next/link";
import { usePathname } from "next/navigation";

// list of links: same list can be used later in the sidebar
const links = [
  { href: "/calendar", label: "Kalenteri" },
  { href: "/shopping", label: "Ostoslista" },
  { href: "/maintenance", label: "Huolto" },
  { href: "/guides", label: "Ohjeet" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Päävalikko"
      className="fixed inset-x-0 bottom-0 flex justify-around border-t p-3"
    >
      {links.map(({ href, label }) => {
        const active = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={active ? "font-bold" : ""}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
