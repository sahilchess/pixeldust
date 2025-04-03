import { ComponentProps } from "react";

export default function ALink(props: ComponentProps<"a">) {
  return (
    <a className={`text-blue-500 hover:underline ${props.className}`} target="_blank" rel="noopener noreferrer" {...props}>
      {props.children}
    </a>
  );
}
