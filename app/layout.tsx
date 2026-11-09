import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "../components/BottomNav";

export const metadata: Metadata = {
  title: "Mökkipiste",
  description: "Yhteiskäyttöisen mökin hallintasovellus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi">
      <body>
        {/* pb-20: leaves 20px of padding at the bottom so the bottom navigation is not covered */}
        <main className="p-4 pb-20">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
