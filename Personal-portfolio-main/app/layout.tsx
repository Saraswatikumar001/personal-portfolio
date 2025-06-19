import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/ui/navbar";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Personal portfolio - Jit Nath",
  description: "Full Stack Web Developer specializing in Core PHP, Laravel, jQuery, and modern frontend technologies. Crafting responsive, scalable, and dynamic web solutions with a focus on performance and user experience.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.css"
          integrity="sha512-kJlvECunwXftkPwyvHbclArO8wszgBGisiLeuDFwNM8ws+wKIw0sv1os3ClWZOcrEB2eRXULYUsm8OVRGJKwGA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <style>{`
        * {
          font-family: "Figtree", sans-serif;
          font-optical-sizing: auto;
        }
      `}</style>
      </head>
      <body
        className={`${figtree.variable} antialiased`}
      >
        <Navbar />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" 
          enableSystem={false}  
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
