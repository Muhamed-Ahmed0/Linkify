import { ReactNode } from "react";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Linkify Auth",
  describtion: "Social media app similar to twitter",
};

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="overflow-x-hidden">{children}</body>
      </html>
    </ClerkProvider>
  );
};

export default AppLayout;
