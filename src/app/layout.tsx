import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={inter.className}>{children}</div>;
    </>
  );
}