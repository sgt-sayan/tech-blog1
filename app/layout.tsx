import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sayan Tech Blog | Programming, AI & Tech Insights",
  description:
    "Sayan Tech Blog shares tutorials, programming guides, AI trends, and modern technology insights for developers and tech enthusiasts.",
  keywords: [
    "Tech Blog",
    "Programming Blog",
    "AI Articles",
    "Web Development",
    "Next.js Blog",
    "Coding Tutorials",
    "Software Development",
  ],
  authors: [{ name: "Sayan Sarkar" }],
  creator: "Sayan Sarkar",
  metadataBase: new URL("https://yourdomain.com"),

  openGraph: {
    title: "Sayan Tech Blog",
    description:
      "Learn programming, AI, and modern technology with practical guides and insights.",
    url: "https://yourdomain.com",
    siteName: "Sayan Tech Blog",
    images: [
      {
        url: "/og-image.png", // add later
        width: 1200,
        height: 630,
        alt: "Sayan Tech Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sayan Tech Blog",
    description: "Programming, AI & Technology Insights",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <body>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Sayan Tech Blog",
        url: "https://yourdomain.com",
      }),
    }}
  />
  {children}
</body>

    </html>
  )
}
