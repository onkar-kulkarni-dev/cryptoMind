//to remove error while importing scss file
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

//to remove error while importing svgs
declare module '*.svg' {
  const content: string;
  export default content;
}

//to remove error while importing svgs like react component
declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
