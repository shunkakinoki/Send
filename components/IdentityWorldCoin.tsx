import { WidgetProps } from "@worldcoin/id";
import dynamic from "next/dynamic";

const WorldIDWidget = dynamic<WidgetProps>(
  () => import("@worldcoin/id").then((mod) => mod.WorldIDWidget),
  { ssr: false }
);

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
