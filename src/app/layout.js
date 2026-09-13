import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = { metadataBase: new URL("https://theroyalspice.example.com"), title: "The Royal Spice | Authentic Indian Restaurant in Kanpur", description: "Authentic Indian flavours, unforgettable moments.", robots: { index: true, follow: true } };

export default function RootLayout({ children }) { return <html lang="en" className={`${sans.variable} ${serif.variable}`}><body>{children}</body></html>; }
