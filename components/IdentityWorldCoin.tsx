"use client";

import { useEffect, useState } from "react";
import { WorldIDWidget } from "@worldcoin/id";

export const IdentityWorldCoin = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  if (isRendered) {
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
  }
  return null;
};
