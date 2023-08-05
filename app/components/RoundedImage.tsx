import Image from "next/image";

export default function RoundedImage(
  props: React.ComponentProps<typeof Image>
) {
  return <Image className="rounded-lg" {...props} alt={props.alt || "Image"} />;
}
