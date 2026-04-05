import type { Metadata } from "next";
import { LoadingProvider } from "@/context/LoadingProvider";
import "@/index.css";

export const metadata: Metadata = {
  title: "Kunal Hedaoo - DevOps Engineer",
  description: "Portfolio of Kunal Hedaoo, a DevOps Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
