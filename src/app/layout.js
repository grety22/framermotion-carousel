import './globals.css'

export const metadata = {
  title: 'Framer Motion Carousel',
  description: 'Framer Motion, Tailwind CSS, and Next.js Carousel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-indigo-500 to-90% overflow-hidden">{children}</body>
    </html>
  )
}
