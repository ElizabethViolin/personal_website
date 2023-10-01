import AnalyticsWrapper from "components/analytics";
import Header from "components/Header";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import { server } from "../config";
import "../styles/globals.css";
import ClientThemeProvider from "./theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Elizabeth Taylor - Passionate builder of things",
    template: "%s - Elizabeth Taylor",
  },
  description:
    "Elizabeth Taylor is a recent college graduate with a solid foundation in computer science as well as machine learning, computer vision, and statistics.",
  generator: "Elizabeth Taylor - Personal Website",
  applicationName: "Elizabeth Taylor - Personal Website",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Elizabeth Taylor",
    "Yiqiu",
    "Chewy",
    "hyqshr",
    "Elizabeth Taylor Personal Website",
    "逸秋",
    "黄逸秋",
    "Huang Yiqiu",
    "hyq",
    "hyqshr",
    "hyq github"
  ],
  authors: [
    {
      name: "Elizabeth Taylor",
      url: `${server}`,
    },
  ],
  themeColor: "#ffffff",
  colorScheme: "light",
  creator: "Elizabeth Taylor",
  publisher: "Elizabeth Taylor",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Elizabeth Taylor",
    description:
      "Full Stack Development, Machine Learning, little bit robotics",
    url: `${server}`,
    siteName: "Elizabeth Taylor - Passionate Builder of Things",
    images: [
      {
        url: `${server}/images/user.png`,
        width: 1200,
        height: 630,
        alt: "Yiqiu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": 0,
      "max-image-preview": "large",
      "max-snippet": 0,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      new URL("/favicon.ico", server).href,
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
  manifest: `${server}/site.webmanifest`,
  twitter: {
    card: "summary_large_image",
    site: "",
    title: "Elizabeth Taylor",
    description:
      "Elizabeth Taylor",
    creator: "hyq",
    images: [
      {
        url: `${server}/images/user.png`,
        width: 1200,
        height: 630,
        alt: "Elizabeth Taylor",
      },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "google-site-verification=0",
    bing: "msvalidate.01=0",
    yandex: "yandex-verification=0",
  },

  alternates: {
    canonical: `${server}`,
    types: {
      "application/rss+xml": `${server}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full antialiased" lang="en">
      <head />
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black min-h-screen">
        <ClientThemeProvider>
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>
          <div className="relative">
            <Header />
            <main>{children}</main>
            <AnalyticsWrapper />
            <Footer />
          </div>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
