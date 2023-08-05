import { LucideIcon } from "lucide-react";
import React, { FC } from "react";

type SocialLinkProps = {
  className?: string;
  icon: LucideIcon;
  href: string;
};

const SocialLink: FC<SocialLinkProps> = ({ className, icon: Icon, href }) => {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-5 h-5 hover:scale-105 transition-transform" />
    </a>
  );
};

export default SocialLink;
