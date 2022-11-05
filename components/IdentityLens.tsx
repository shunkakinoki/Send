// TODO: https://docs.lens.xyz/docs/get-default-profile

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export const IdentityLens = () => {
  const { address } = useAccount();
  const [lensHandle, setLensHandle] = useState();

  useEffect(() => {
    if (address) {
      console.log(address);
      fetch("https://api.lens.dev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query DefaultProfile {
              defaultProfile(request: { ethereumAddress: "${address}"}) {
                handle
              }
            }
          `,
          variables: {
            now: new Date().toISOString(),
          },
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          setLensHandle(result?.data?.defaultProfile?.handle);
        });
    }
  }, [address]);
  return <div className="bg-green-300 font-light">{lensHandle}</div>;
};
