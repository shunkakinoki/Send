"use client";

import Head from "next/head";
import { useTokens } from "../src/hooks/useTokens";
import { Identity } from "../components/Identity";
import { Token } from "../components/Token";

const Home = () => {
  const { tokens } = useTokens();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="mb-4 text-6xl font-bold text-blue-300">Sender</h1>
        <Identity />
        <div>
          {tokens &&
            tokens.map((asset, index) => {
              return <Token key={index} asset={asset} />;
            })}
        </div>
      </main>
    </div>
  );
};

export default Home;
