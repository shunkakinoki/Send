import { ConnectKitButton } from "connectkit";
import { IdentityWorldCoin } from "./IdentityWorldCoin";

import dynamic from "next/dynamic";

const IdentityLens = dynamic(
  () => import("./IdentityLens").then((mod) => mod.IdentityLens),
  { ssr: false }
);

export const Identity = () => {
  return (
    <div className="flex items-center">
      <ConnectKitButton></ConnectKitButton>
      <IdentityWorldCoin></IdentityWorldCoin>
      <IdentityLens></IdentityLens>
    </div>
  );
};
