import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import style from "./layout.module.scss"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Francisco | Fullstack Developer'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const combinedClasses = `${inter.className} ${style.all}`;

  return (
    <html>
      <body className={combinedClasses}>{children}</body>
    </html>
  );
}
