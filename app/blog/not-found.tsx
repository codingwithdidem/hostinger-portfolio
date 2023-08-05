import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Error() {
  return (
    <div className="z-10 mx-auto max-w-3xl flex flex-col items-center justify-center w-full h-full flex-1 px-4">
      <h1 className="text-2xl text-slate-900">Ooops, no such post!</h1>
      <Link
        href="/blog"
        className="bg-slate-900 text-white px-4 py-2 mt-4 rounded-md"
      >
        <ArrowLeft className="inline-block mr-2" size={16} />
        Back to blog
      </Link>
    </div>
  );
}
