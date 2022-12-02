"use client";

import Head from "next/head";
import { useTokens } from "../src/hooks/useTokens";
import { Identity } from "../components/Identity";
import { Token } from "../components/Token";
import { TokenDialog } from "../components/TokenDialogue";
import { useState } from "react";

const Home = () => {
  const { tokens } = useTokens();
  const [dialogue, setDialogue] = useState({ open: false, name: "" });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container flex w-full flex-1 flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-6xl font-bold text-blue-300">Sender</h1>
        <Identity />
        <div className="my-4 w-full">
          {tokens &&
            tokens.map((asset, index) => {
              return (
                <Token key={index} asset={asset} setDialogue={setDialogue} />
              );
            })}
        </div>
        <TokenDialog
          open={dialogue.open}
          dialogue={dialogue}
          setDialogue={setDialogue}
        />
      </main>
    </div>
  );
};

export default Home;
