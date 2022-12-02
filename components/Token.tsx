import type { FC } from "react";
import { NextImage } from "./NextImage";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

export const separateFloat = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const shortenName = (name: string) => {
  return name.match(/\b\w/g)?.join("").substring(0, 3);
};

export type ProfileBoardItemTokenProps = {
  asset: {
    name?: string;
    token?: string;
    icon_url?: string;
    symbol?: string;
    amount?: number;
    type?: string;
    value?: number;
  };
  setDialogue: ({ open, name }: { open: boolean; name: string }) => void;
};

export const Token: FC<ProfileBoardItemTokenProps> = ({
  asset: { name, amount, symbol, value, icon_url },
  setDialogue,
}) => {
  return (
    <tr className="flex w-full">
      <td className="border-contrast-lower flex grow items-center border-b py-3 pl-4">
        {icon_url && name ? (
          <NextImage
            width={32}
            height={32}
            useBlur={false}
            src={icon_url}
            className="border-contrast-lower h-8 w-8 rounded-full border"
            alt={name}
          />
        ) : (
          <span className="border-contrast-lower bg-bg-light inline-flex h-8 w-8 items-center justify-center rounded-full border">
            <span className="text-contrast-low overflow-hidden text-ellipsis text-xs leading-none">
              {name && shortenName(name)}
            </span>
          </span>
        )}
        <p className="text-contrast-medium pl-4 font-medium">
          {name}{" "}
          <span className="text-contrast-low font-normal">({symbol})</span>
        </p>
      </td>
      <td className="border-contrast-lower text-contrast-medium flex shrink-0 items-center border-b py-3">
        <p className="overflow-hidden text-ellipsis ">
          <span className="font-semibold">
            {amount && separateFloat(Number(amount.toFixed(2)))}
          </span>{" "}
          {symbol}
        </p>
      </td>
      <td className="border-contrast-lower text-contrast-medium flex w-1/4 flex-initial shrink-0 items-center justify-end border-b py-3 pr-4 sm:w-1/5 md:w-1/6">
        <p className="overflow-hidden text-ellipsis">
          ${value && separateFloat(Number(value.toFixed(2)))}
        </p>
      </td>
      <td className="border-contrast-lower text-contrast-medium flex w-1/4 flex-initial shrink-0 items-center justify-end border-b py-3 pr-4 sm:w-1/5 md:w-1/6">
        <button
          onClick={() => {
            setDialogue({ open: true, name: name ?? "asd" });
          }}
          type="button"
          className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <EnvelopeIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
          Send
        </button>
      </td>
    </tr>
  );
};
