import { ConnectKitButton } from "connectkit";
import { IdentityLens } from "./IdentityLens";
import { IdentityWorldCoin } from "./IdentityWorldCoin";

export const Identity = () => {
  return (
    <div className="flex items-center">
      <ConnectKitButton></ConnectKitButton>
      <IdentityWorldCoin></IdentityWorldCoin>
      <IdentityLens></IdentityLens>
    </div>
  );
};
