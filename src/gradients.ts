import { GradientElement, safeSet, customXMLable, globalIndent } from './base';
import * as log from './logging';

export class LinearGradient extends GradientElement {

    private gradientUnits: string;
    private xlink_href: string;
    private spreadMethod: string;
    private x1: string;
    private x2: string;
    private y1: string;
    private y2: string;
    private commands: StopCommand[] = [];
    
    public setId(id: string): LinearGradient {
        this.id = id;
        return this;
    }

    public addStopCommand(stop: StopCommand): LinearGradient {
        this.commands.push(stop);
        return this;
    }

    public setGradientUnits(gradientUnits: "userSpaceOnUse" | "objectBoundingBox"): LinearGradient {
        this.gradientUnits = gradientUnits;
        return this;
    }

    public linkToGradient(gradient: GradientElement): LinearGradient {
        if (gradient.getId() === undefined) log.noIdOnGradientInput(this.constructor.name);
        this.xlink_href = gradient.getId();
        return this;
    }

    public setSpreadMethod(spreadMethod: "pad" | "reflect" | "repeat"): LinearGradient {
        this.spreadMethod = spreadMethod;
        return this;
    }

    public setVectorStartPoint(x: number, y: number,
        unit: "em" | "ex" | "px" | "in" | "cm" | "mm" | "pt" | "pc" | "%"): LinearGradient {
        this.x1 = `${x}${unit}`;
        this.y1 = `${y}${unit}`;
        return this;
    }

    public setVectorEndPoint(x: number, y: number,
        unit: "em" | "ex" | "px" | "in" | "cm" | "mm" | "pt" | "pc" | "%"): LinearGradient {
        this.x2 = `${x}${unit}`;
        this.y2 = `${y}${unit}`;
        return this;
    }

    public toXML(): string[] {
        let xml = [customXMLable("linearGradient", [{
            id: this.id,
            gradientUnits: this.gradientUnits,
            href: this.xlink_href,
            spreadMethod: this.spreadMethod,
            x1: this.x1,
            x2: this.x2,
            y1: this.y1,
            y2: this.y2
        }], "", true)];
        for (let m of this.commands)
            xml.push(`${globalIndent}${m.toXML()}`);
        xml.push("</linearGradient>");
        return xml;
    }

}

export class RadialGradient extends GradientElement {

    public id: string;
    private gradientUnits: string;
    private xlink_href: string;
    private spreadMethod: string;
    private cx: string;
    private cy: string;
    private fr: string;
    private fx: string;
    private fy: string;
    private r: string;
    private commands: StopCommand[] = [];

    public setId(id: string): RadialGradient {
        this.id = id;
        return this;
    }

    public addStopCommand(stop: StopCommand): RadialGradient {
        this.commands.push(stop);
        return this;
    }

    public setGradientUnits(gradientUnits: "userSpaceOnUse" | "objectBoundingBox"): RadialGradient {
        this.gradientUnits = gradientUnits;
        return this;
    }

    public linkToGradient(gradient: GradientElement): RadialGradient {
        if (gradient.getId() === undefined) log.noIdOnGradientInput(this.constructor.name);
        this.xlink_href = gradient.getId();
        return this;
    }

    public setSpreadMethod(spreadMethod: "pad" | "reflect" | "repeat"): RadialGradient {
        this.spreadMethod = spreadMethod;
        return this;
    }

    public setCircleStart(x: number, y: number, radius: number,
        unit: "em" | "ex" | "px" | "in" | "cm" | "mm" | "pt" | "pc" | "%"): RadialGradient {
        this.fx = `${x}${unit}`;
        this.fy = `${y}${unit}`;
        this.fr = `${radius}${unit}`;
        return this;
    }

    public setCircleEnd(x: number, y: number, radius: number,
        unit: "em" | "ex" | "px" | "in" | "cm" | "mm" | "pt" | "pc" | "%"): RadialGradient {
        this.cx = `${x}${unit}`;
        this.cy = `${y}${unit}`;
        this.r = `${radius}${unit}`;
        return this;
    }

    public toXML(): string[] {
        let xml = [customXMLable("radialGradient", [{
            id: this.id,
            gradientUnits: this.gradientUnits,
            href: this.xlink_href,
            spreadMethod: this.spreadMethod,
            cx: this.cx,
            cy: this.cy,
            r: this.r,
            fx: this.fx,
            fy: this.fy,
            fr: this.fr
        }], "", true)];
        for (let m of this.commands)
            xml.push(`${globalIndent}${m.toXML()}`);
        xml.push("</radialGradient>");
        return xml;
    }

}

export class StopCommand { 
    
    private offset: number;
    private stop_color: string;
    private stop_opacity: number;

    public constructor(offset?: number, stopColor?: string, stopOpacity?: number) {
        this.setOffset(offset);
        this.setStopColor(stopColor);
        this.setStopOpacity(stopOpacity);
    }

    public setOffset(offset: number): StopCommand {
        this.offset = offset;
        return this;
    }

    public setStopColor(stopColor: string): StopCommand {
        this.stop_color = stopColor;
        return this;
    }

    public setStopOpacity(opacity: number): StopCommand {
        return safeSet<StopCommand>(this, "opacity", opacity);
    }

    public toXML(): string {
        return customXMLable("stop", [{
            offset: this.offset,
            stop_color: this.stop_color,
            stop_opacity: this.stop_opacity
        }]);
    }
}