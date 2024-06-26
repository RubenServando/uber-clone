import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Header from "@/components/Header"

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={font.className}>
        <Header />
        <SignedOut>
          <SignInButton />
        </SignedOut>
        {/* <SignedIn>
          <UserButton />
        </SignedIn> */}
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
