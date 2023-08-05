import { useMDXComponent } from "next-contentlayer/hooks";
import RoundedImage from "./RoundedImage";
import CustomLink from "./CustomLink";
import { CopyButton } from "./CopyButton";

// @ts-ignore
export const Pre = ({ children, raw, ...props }) => {
  const lang = props["data-language"] || "shell";
  return (
    <pre {...props}>
      <CopyButton text={raw} />
      {children}
    </pre>
  );
};

const components = {
  Image: RoundedImage,
  a: CustomLink,
  pre: Pre,
};

type MdxProps = {
  code: string;
};

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <div className="prose prose-pink">
      {/* @ts-ignore */}
      <Component components={components} />
    </div>
  );
}
