declare module "*.module.css";
declare module 'react-slick'
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

declare module 'react-step-progress' {
    interface ProgressBarProps {
        percent?: number;
        filledBackground?: any;
        height?: string | number;
        stepPositions?: number;
    }

    interface StepProps {
        transition?: any;
        position?: any;
    }
    class ProgressBar extends React.Component<ProgressBarProps, any> { }
    class Step extends React.Component<StepProps, any> { }
}  