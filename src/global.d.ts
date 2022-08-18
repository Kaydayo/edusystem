declare module "*.module.css";
declare module "*.png" {
    const value: any;
    export = value;
}
declare module "*.svg" {
    const value: any;
    export = value;
}

declare module '*.mp4' {
    const src: string;
    export default src;
}