"use client";

import "../styles/globals.css";
import { Identity } from "../components/Identity";
import { ReactQueryWrapper } from "../components/ReactQueryWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryWrapper>
          <Identity></Identity>
          {children}
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
