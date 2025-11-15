import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SwipeSound – Social Music Intelligence Platform",
  description: "The social way to clean up your music. Swipe through songs, build playlists instantly, share stats with the community, and discover what others keep or remove. Join thousands of listeners shaping the future of music discovery.",
  openGraph: {
    title: "SwipeSound – Social Music Intelligence Platform",
    description: "The social way to clean up your music. Swipe through songs, build playlists instantly, share stats with the community, and discover what others keep or remove.",
    siteName: "SwipeSound",
    type: "website",
    url: "https://swipesound.co.uk",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwipeSound – Social Music Intelligence Platform",
    description: "The social way to clean up your music. Join thousands of listeners shaping the future of music discovery.",
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
