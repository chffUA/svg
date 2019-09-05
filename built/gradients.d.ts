import { GradientElement } from './base';
export declare class LinearGradient extends GradientElement {
    private gradientUnits;
    private xlink_href;
    private spreadMethod;
    private x1;
    private x2;
    private y1;
    private y2;
    private commands;
    setId(id: string): LinearGradient;
    addStopCommand(stop: StopCommand): LinearGradient;
    setGradientUnits(gradientUnits: "userSpaceOnUse" | "objectBoundingBox"): LinearGradient;
    linkToGradient(gradient: GradientElement): LinearGradient;
    setSpreadMethod(spreadMethod: "pad" | "reflect" | "repeat"): LinearGradient;
    setVectorStartPoint(x: number, y: number, unit: "em" | "ex" | "px" | "in" | "cm" | "mm" | "pt" | "pc" | "%"): LinearGradient;
    setVectorEndPoint(x: number, y: number, unit: "em" | "ex" | "px" | "in" | "cm" | "mm" | "pt" | "pc" | "%"): LinearGradient;
    toXML(): string[];
}
export declare class RadialGradient extends GradientElement {
    id: string;
    private gradientUnits;
    private xlink_href;
    private spreadMethod;
    private cx;
    private cy;
    private fr;
    private fx;
    private fy;
    private r;
    private commands;
    setId(id: string): RadialGradient;
    addStopCommand(stop: StopCommand): RadialGradient;
    setGradientUnits(gradientUnits: "userSpaceOnUse" | "objectBoundingBox"): RadialGradient;
    linkToGradient(gradient: GradientElement): RadialGradient;
    setSpreadMethod(spreadMethod: "pad" | "reflect" | "repeat"): RadialGradient;
    setCircleStart(x: number, y: number, radius: number, unit: "em" | "ex" | "px" | "in" | "cm" | "mm" | "pt" | "pc" | "%"): RadialGradient;
    setCircleEnd(x: number, y: number, radius: number, unit: "em" | "ex" | "px" | "in" | "cm" | "mm" | "pt" | "pc" | "%"): RadialGradient;
    toXML(): string[];
}
export declare class StopCommand {
    private offset;
    private stop_color;
    private stop_opacity;
    constructor(offset?: number, stopColor?: string, stopOpacity?: number);
    setOffset(offset: number): StopCommand;
    setStopColor(stopColor: string): StopCommand;
    setStopOpacity(opacity: number): StopCommand;
    toXML(): string;
}
