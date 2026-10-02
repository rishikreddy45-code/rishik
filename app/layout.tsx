import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Super AI | Learn AI & AI-Powered Digital Marketing", description: "Super AI teaches practical AI skills and AI-powered digital marketing for individuals and small businesses ready to grow smarter and faster." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
