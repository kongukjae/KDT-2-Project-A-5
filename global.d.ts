declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
}

declare namespace JSX {
  interface IntrinsicElements {
    "dotlottie-player": any;
  }
}
