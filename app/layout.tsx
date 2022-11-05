"use client";

import "../styles/globals.css";
import { ReactQueryWrapper } from "../components/ReactQueryWrapper";
import { Identity } from "../components/Identity";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <head />
      <body>
        <ReactQueryWrapper>
          <Identity></Identity>
          {children}
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
