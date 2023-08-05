"use client";

import { useState } from "react";

export const CopyButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <button
      disabled={isCopied}
      onClick={copy}
      className="bg-black/20 border border-white/10 text-white px-3 py-1 rounded-md ml-auto flex"
    >
      {isCopied ? "Copied!" : "Copy"}
    </button>
  );
};
