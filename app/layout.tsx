"use client";

import "../styles/globals.css";
import { ReactQueryWrapper } from "../components/ReactQueryWrapper";
import dynamic from "next/dynamic";

const Identity = dynamic(
  () => import("../components/Identity").then((mod) => mod.Identity),
  { ssr: false }
);

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
