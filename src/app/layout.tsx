import './globals.css'

export const metadata = {
  title: 'Artago - Character Sheet',
  description: 'Using React and Next.js to create a character sheet for Artago',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
