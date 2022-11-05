// TODO: https://docs.lens.xyz/docs/get-default-profile

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export const IdentityLens = () => {
  const { address } = useAccount();
  const [lensHandle, setLensHandle] = useState();

  useEffect(() => {
    if (address) {
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
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          setLensHandle(result?.data?.defaultProfile?.handle);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [address]);
  return <div className="bg-green-300 font-light">{lensHandle}</div>;
};
