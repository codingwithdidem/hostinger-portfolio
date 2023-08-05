import Link from "next/link";

export default function CustomLink(props: any){
    const href = props.href;

  
    if (href.startsWith('/')) {
      return (
        <Link href={href} {...props}>
          {props.children}
        </Link>
      );
    }
  
    if (href.startsWith('#')) {
      return <a {...props} />;
    }
  
    return <a target="_blank" rel="noopener noreferrer" {...props} />;
  };
  