import { WorldIDWidget } from "@worldcoin/id";

export const IdentityWorldCoin = () => {
  return (
    <WorldIDWidget
      actionId={process.env.NEXT_PUBLIC_WORLDCOIN_ID as string}
      signal="my_signal"
      enableTelemetry
      onSuccess={(verificationResponse) => console.log(verificationResponse)}
      onError={(error) => console.error(error)}
      debug={true}
    />
  );
};
