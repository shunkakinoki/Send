"use client";

import Head from "next/head";
import { useTokens } from "../src/hooks/useTokens";
import { Identity } from "../components/Identity";
import { Token } from "../components/Token";
import { TokenDialog } from "../components/TokenDialogue";
import { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
const Home = () => {
  const { tokens } = useTokens();
  const [dialogue, setDialogue] = useState({
    address: "",
    icon_url: "",
    open: false,
    name: "",
    symbol: "",
    price: 0,
    amount: 0,
    decimals: 0,
    value: 0,
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Send</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container flex w-full flex-1 flex-col items-center justify-center text-center">
        <div className="mx-auto my-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
          <EnvelopeIcon
            className="h-10 w-10 text-blue-600"
            aria-hidden="true"
          />
        </div>
        <h1 className="mb-4 text-6xl font-bold text-blue-300">Send</h1>
        <p className="mt-2 mb-8 text-lg leading-8 text-gray-600 sm:text-center">
          Send ERC20s or ETH to a wallet address or ENS. That&apos;s it.
        </p>
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
