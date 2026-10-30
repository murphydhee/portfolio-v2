import "./globals.css";
import { Inter } from "next/font/google";
import MotionProvider from "./components/MotionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://murphydhee.vercel.app"),
  title: {
    default: "Mfon Ekwere (Murphy Ekwere) — Senior Software Engineer & Founder of Subby",
    template: "%s | Mfon Ekwere",
  },
  description:
    "Mfon Ekwere, also known as Murphy Ekwere, is a Senior Software Engineer and the founder of Subby. Explore his projects, experience, and work as a frontend engineer in an interactive desktop-style portfolio.",
  keywords: [
    "Mfon Ekwere",
    "Murphy Ekwere",
    "murphydhee",
    "Subby",
    "Senior Software Engineer",
    "Frontend Developer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Mfon Ekwere (Murphy Ekwere)" }],
  creator: "Mfon Ekwere (Murphy Ekwere)",
  openGraph: {
    title: "Mfon Ekwere (Murphy Ekwere) — Senior Software Engineer & Founder of Subby",
    description:
      "An interactive, desktop-style portfolio showcasing Mfon (Murphy) Ekwere's projects and experience as a Senior Software Engineer and founder of Subby.",
    url: "https://murphydhee.vercel.app",
    siteName: "Mfon Ekwere Portfolio",
    images: ["/head.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mfon Ekwere (Murphy Ekwere) — Senior Software Engineer & Founder of Subby",
    description:
      "An interactive, desktop-style portfolio showcasing Mfon (Murphy) Ekwere's projects and experience as a Senior Software Engineer and founder of Subby.",
    images: ["/head.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
