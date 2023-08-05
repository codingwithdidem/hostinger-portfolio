import { Metadata } from "next";

const title = "Didem Küçükkaraaslan";
const description =
  "Personal portfolio website of Didem Küçükkaraaslan. Software Engineer, Frontend Developer, Content Creator and more.";

export const sharedMetadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    url: "https://codingwithdidem.xyz",
  },
  twitter: {
    title,
    description,
    creator: "@DidemKkkaraasl1",
    site: "@DidemKkkaraasl1",
    card: "summary_large_image",
  },
};
