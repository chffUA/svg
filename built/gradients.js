"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const log = require("./logging");
class LinearGradient extends base_1.GradientElement {
    constructor() {
        super(...arguments);
        this.commands = [];
    }
    setId(id) {
        this.id = id;
        return this;
    }
    addStopCommand(stop) {
        this.commands.push(stop);
        return this;
    }
    setGradientUnits(gradientUnits) {
        this.gradientUnits = gradientUnits;
        return this;
    }
    linkToGradient(gradient) {
        if (gradient.getId() === undefined)
            log.noIdOnGradientInput(this.constructor.name);
        this.xlink_href = gradient.getId();
        return this;
    }
    setSpreadMethod(spreadMethod) {
        this.spreadMethod = spreadMethod;
        return this;
    }
    setVectorStartPoint(x, y, unit) {
        this.x1 = `${x}${unit}`;
        this.y1 = `${y}${unit}`;
        return this;
    }
    setVectorEndPoint(x, y, unit) {
        this.x2 = `${x}${unit}`;
        this.y2 = `${y}${unit}`;
        return this;
    }
    toXML() {
        let xml = [base_1.customXMLable("linearGradient", [{
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
            xml.push(`${base_1.globalIndent}${m.toXML()}`);
        xml.push("</linearGradient>");
        return xml;
    }
}
exports.LinearGradient = LinearGradient;
class RadialGradient extends base_1.GradientElement {
    constructor() {
        super(...arguments);
        this.commands = [];
    }
    setId(id) {
        this.id = id;
        return this;
    }
    addStopCommand(stop) {
        this.commands.push(stop);
        return this;
    }
    setGradientUnits(gradientUnits) {
        this.gradientUnits = gradientUnits;
        return this;
    }
    linkToGradient(gradient) {
        if (gradient.getId() === undefined)
            log.noIdOnGradientInput(this.constructor.name);
        this.xlink_href = gradient.getId();
        return this;
    }
    setSpreadMethod(spreadMethod) {
        this.spreadMethod = spreadMethod;
        return this;
    }
    setCircleStart(x, y, radius, unit) {
        this.fx = `${x}${unit}`;
        this.fy = `${y}${unit}`;
        this.fr = `${radius}${unit}`;
        return this;
    }
    setCircleEnd(x, y, radius, unit) {
        this.cx = `${x}${unit}`;
        this.cy = `${y}${unit}`;
        this.r = `${radius}${unit}`;
        return this;
    }
    toXML() {
        let xml = [base_1.customXMLable("radialGradient", [{
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
            xml.push(`${base_1.globalIndent}${m.toXML()}`);
        xml.push("</radialGradient>");
        return xml;
    }
}
exports.RadialGradient = RadialGradient;
class StopCommand {
    constructor(offset, stopColor, stopOpacity) {
        this.setOffset(offset);
        this.setStopColor(stopColor);
        this.setStopOpacity(stopOpacity);
    }
    setOffset(offset) {
        this.offset = offset;
        return this;
    }
    setStopColor(stopColor) {
        this.stop_color = stopColor;
        return this;
    }
    setStopOpacity(opacity) {
        return base_1.safeSet(this, "opacity", opacity);
    }
    toXML() {
        return base_1.customXMLable("stop", [{
                offset: this.offset,
                stop_color: this.stop_color,
                stop_opacity: this.stop_opacity
            }]);
    }
}
exports.StopCommand = StopCommand;
