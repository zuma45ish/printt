import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontDisplay = localFont({
  src: [
    {
      path: "../public/fonts/Merriweather/Merriweather-VariableFont_opsz,wdth,wght.ttf",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../public/fonts/Merriweather/Merriweather-Italic-VariableFont_opsz,wdth,wght.ttf",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-display",
});
