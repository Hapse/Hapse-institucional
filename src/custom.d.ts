declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module "swiper/css";
declare module "swiper/css/bundle";
declare module "swiper/css/pagination";
declare module "swiper/css/navigation";