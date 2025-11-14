import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SwipeSound – Smart Playlist Builder",
  description: "Turn messy likes into clean playlists with a swipe. Organize your music library and build curated playlists effortlessly.",
  openGraph: {
    title: "SwipeSound – Smart Playlist Builder",
    description: "Turn messy likes into clean playlists with a swipe. Organize your music library and build curated playlists effortlessly.",
    siteName: "SwipeSound",
    type: "website",
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
        {/* Block Vercel toolbar script from loading */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Prevent Vercel toolbar script
                const originalAppendChild = Node.prototype.appendChild;
                Node.prototype.appendChild = function(child) {
                  if (child && child.src && (child.src.includes('vercel.live') || child.src.includes('vercel.com'))) {
                    return child;
                  }
                  return originalAppendChild.call(this, child);
                };
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
