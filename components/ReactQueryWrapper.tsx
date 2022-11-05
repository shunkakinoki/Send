// From: https://github.com/weibenfalk/nextjs-13-refactor/blob/main/app/layout.tsx
// https://github.com/weibenfalk/nextjs-13-refactor/blob/main/app/ReactQueryWrapper.tsx

"use client";

import { WagmiConfig, createClient } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "SuperDapp",
    alchemyId,
  })
);

type Props = {
  children: React.ReactNode;
};

export const ReactQueryWrapper = ({ children }: Props) => (
  <WagmiConfig client={client}>
    <ConnectKitProvider>
      <ConnectKitButton />
      {children}
    </ConnectKitProvider>
  </WagmiConfig>
);
