import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import LoadingProvider from "./components/LoadingProvider";
import SuccessModalProvider from "./components/SuccessModalProvider";
import ErrorModalProvider from "./components/ErrorModalProvider";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CNPF - Controle de Finanças Pessoais",
  description:
    "Gerencie suas finanças pessoais, defina objetivos e acompanhe seu progresso financeiro de forma simples, visual e segura.",
  keywords: [
    "finanças pessoais",
    "controle financeiro",
    "gestão financeira",
    "objetivos financeiros",
    "renda mensal",
    "dashboard financeiro",
    "Next.js",
    "Supabase",
    "CNPF",
  ],
  authors: [{ name: "Thiago Costa" }],
  creator: "Thiago Costa",
  openGraph: {
    title: "CNPF - Controle de Finanças Pessoais",
    description:
      "Gerencie suas finanças pessoais, defina objetivos e acompanhe seu progresso financeiro de forma simples, visual e segura.",
    siteName: "CNPF",

    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingProvider>
          <ErrorModalProvider>
            <SuccessModalProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              >
                {children}
              </ThemeProvider>
            </SuccessModalProvider>
          </ErrorModalProvider>
        </LoadingProvider>

        <Analytics />
      </body>
    </html>
  );
}
