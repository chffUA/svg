import { StrokeFillAttributes, safeSet, subattrSet, customXMLable, globalIndent, 
    GraphicalElement, GradientElement } from './base';
import { Canvas, FilterContainer } from './structures';
import * as Cmds from './pathcommands';
import * as log from './logging';

export class Rectangle extends GraphicalElement {

    private width: number;
    private height: number;
    private x: number;
    private y: number;
    private rx: number;
    private ry: number;
    private pathLength: number;
    private strokeFill: StrokeFillAttributes = new StrokeFillAttributes(this);

    public constructor(startX: number, startY: number, width: number, height: number) {
        super();
        this.setX(startX);
        this.setY(startY);
        this.setWidth(width);
        this.setHeight(height);      
    }

    public setId(id: string): Rectangle {
        this.id = id;
        return this;
    }

    public useFilter(filter: FilterContainer, canvas: Canvas): Rectangle {
        canvas.defineElement(filter);
        if (filter.href() === undefined) log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }

    public setX(x: number): Rectangle {
        return safeSet<Rectangle>(this, "x", x);
    }

    public setY(y: number): Rectangle {
        return safeSet<Rectangle>(this, "y", y);
    }

    public setWidth(width: number): Rectangle {
        return safeSet<Rectangle>(this, "width", width);
    }

    public setHeight(height: number): Rectangle {
        return safeSet<Rectangle>(this, "height", height);
    }

    public setRadiusX(rx: number): Rectangle {
        return safeSet<Rectangle>(this, "rx", rx);
    }
    
    public setRadiusY(ry: number): Rectangle {
        return safeSet<Rectangle>(this, "ry", ry);
    }

    public setPathLength(pathLength: number): Rectangle {
        return safeSet<Rectangle>(this, "pathLength", pathLength);
    }

    public setBorder(color: string | GradientElement, width?: number, opacity?: number, 
                     linecap?: "butt" | "round" | "square", linejoin?: "miter" | "round" | "bevel"): Rectangle {
        if (typeof color === "string") {
            this.strokeFill.stroke = color;
            subattrSet(this.strokeFill, "stroke_width", width);
            subattrSet(this.strokeFill, "stroke_opacity", opacity);
            this.strokeFill.stroke_linecap = linecap;
            this.strokeFill.stroke_linejoin = linejoin;
        } else {
            if (color.href() === undefined) log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.stroke = `url(${color.href()})`;
        }
        return this;
    }

    public setBorderDashing(...values: number[]): Rectangle {
        if (values.length > 0) this.strokeFill.stroke_dasharray = values;
        return this;
    }

    public setFill(color: string | GradientElement, opacity?: number, 
                   fillrule?: "nonzero" | "evenodd"): Rectangle {
        if (typeof color === "string") {
            this.strokeFill.fill = color;
            subattrSet(this.strokeFill, "fill_opacity", opacity);
            this.strokeFill.fill_rule = fillrule;
        } else {
            if (color.href() === undefined) log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.fill = `url(${color.href()})`;
        }
        return this;
    }

    public highestHeight(): number {
        return this.y + this.height;
    }

    public highestWidth(): number {
        return this.x + this.width;
    }

    public toXML(): string {
        return customXMLable("rect", [{
            id: this.id,
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            rx: this.rx,
            ry: this.ry,
            pathLength: this.pathLength,
            filter: this.filter
        }, this.strokeFill.getConfiguration()]);
    }
    
}

export class Circle extends GraphicalElement {

    private cx: number;
    private cy: number;
    private r: number;
    private pathLength: number;
    private strokeFill: StrokeFillAttributes = new StrokeFillAttributes(this);

    public constructor(centerX: number, centerY: number, radius: number) {
        super();
        this.setX(centerX);
        this.setY(centerY);
        this.setRadius(radius);
    }

    public setId(id: string): Circle {
        this.id = id;
        return this;
    }

    public useFilter(filter: FilterContainer, canvas: Canvas): Circle {
        canvas.defineElement(filter);
        if (filter.href() === undefined) log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }

    public setX(x: number): Circle {
        return safeSet<Circle>(this, "cx", x);
    }

    public setY(y: number): Circle {
        return safeSet<Circle>(this, "cy", y);
    }

    public setRadius(r: number): Circle {
        return safeSet<Circle>(this, "r", r);
    }

    public setPathLength(pathLength: number): Circle {
        return safeSet<Circle>(this, "pathLength", pathLength);
    }

    public setBorder(color: string | GradientElement, width?: number, opacity?: number,
        linecap?: "butt" | "round" | "square", linejoin?: "miter" | "round" | "bevel"): Circle {
        if (typeof color === "string") {
            this.strokeFill.stroke = color;
            subattrSet(this.strokeFill, "stroke_width", width);
            subattrSet(this.strokeFill, "stroke_opacity", opacity);
            this.strokeFill.stroke_linecap = linecap;
            this.strokeFill.stroke_linejoin = linejoin;
        } else {
            if (color.href() === undefined) log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.stroke = `url(${color.href()})`;
        }
        return this;
    }

    public setBorderDashing(...values: number[]): Circle {
        if (values.length > 0) this.strokeFill.stroke_dasharray = values;
        return this;
    }

    public setFill(color: string | GradientElement, opacity?: number,
        fillrule?: "nonzero" | "evenodd"): Circle {
        if (typeof color === "string") {
            this.strokeFill.fill = color;
            subattrSet(this.strokeFill, "fill_opacity", opacity);
            this.strokeFill.fill_rule = fillrule;
        } else {
            if (color.href() === undefined) log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.fill = `url(${color.href()})`;
        }
        return this;
    }

    public highestHeight(): number {
        return this.cy + this.r;
    }

    public highestWidth(): number {
        return this.cx + this.r;
    }

    public toXML(): string {
        return customXMLable("circle", [{
            id: this.id,
            cx: this.cx,
            cy: this.cy,
            r: this.r,
            pathLength: this.pathLength,
            filter: this.filter
        }, this.strokeFill.getConfiguration()]);
    }

}

export class Ellipse extends GraphicalElement {

    private cx: number;
    private cy: number;
    private rx: number;
    private ry: number;
    private pathLength: number;
    private strokeFill: StrokeFillAttributes = new StrokeFillAttributes(this);

    public constructor(centerX: number, centerY: number, radiusX: number, radiusY: number) {
        super();
        this.setX(centerX);
        this.setY(centerY);
        this.setRadiusX(radiusX);
        this.setRadiusY(radiusY);
    }

    public useFilter(filter: FilterContainer, canvas: Canvas): Ellipse {
        canvas.defineElement(filter);
        if (filter.href() === undefined) log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }

    public setId(id: string): Ellipse {
        this.id = id;
        return this;
    }

    public setX(x: number): Ellipse {
        return safeSet<Ellipse>(this, "cx", x);
    }

    public setY(y: number): Ellipse {
        return safeSet<Ellipse>(this, "cy", y);
    }

    public setRadiusX(rx: number): Ellipse {
        return safeSet<Ellipse>(this, "rx", rx);
    }

    public setRadiusY(ry: number): Ellipse {
        return safeSet<Ellipse>(this, "ry", ry);
    }

    public setPathLength(pathLength: number): Ellipse {
        return safeSet<Ellipse>(this, "pathLength", pathLength);
    }

    public setBorder(color: string | GradientElement, width?: number, opacity?: number,
        linecap?: "butt" | "round" | "square", linejoin?: "miter" | "round" | "bevel"): Ellipse {
        if (typeof color === "string") {
            this.strokeFill.stroke = color;
            subattrSet(this.strokeFill, "stroke_width", width);
            subattrSet(this.strokeFill, "stroke_opacity", opacity);
            this.strokeFill.stroke_linecap = linecap;
            this.strokeFill.stroke_linejoin = linejoin;
        } else {
            if (color.href() === undefined) log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.stroke = `url(${color.href()})`;
        }
        return this;
    }

    public setBorderDashing(...values: number[]): Ellipse {
        if (values.length > 0) this.strokeFill.stroke_dasharray = values;
        return this;
    }

    public setFill(color: string | GradientElement, opacity?: number,
        fillrule?: "nonzero" | "evenodd"): Ellipse {
        if (typeof color === "string") {
            this.strokeFill.fill = color;
            subattrSet(this.strokeFill, "fill_opacity", opacity);
            this.strokeFill.fill_rule = fillrule;
        } else {
            if (color.href() === undefined) log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.fill = `url(${color.href()})`;
        }
        return this;
    }

    public highestHeight(): number {
        return this.cy + this.ry;
    }

    public highestWidth(): number {
        return this.cx + this.rx;
    }

    public toXML(): string {
        return customXMLable("ellipse", [{
            id: this.id,
            cx: this.cx,
            cy: this.cy,
            rx: this.rx,
            ry: this.ry,
            pathLength: this.pathLength,
            filter: this.filter
        }, this.strokeFill.getConfiguration()]);
    }

}

export class Line extends GraphicalElement {

    private x1: number;
    private y1: number;
    private x2: number;
    private y2: number;
    private pathLength: number;
    private strokeFill: StrokeFillAttributes = new StrokeFillAttributes(this);

    public constructor(startX: number, startY: number, endX: number, endY: number) {
        super();
        this.setStartX(startX);
        this.setStartY(startY);
        this.setEndX(endX);
        this.setEndY(endY);
        this.strokeFill.stroke = "black";
    }

    public useFilter(filter: FilterContainer, canvas: Canvas): Line {
        canvas.defineElement(filter);
        if (filter.href() === undefined) log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }

    public setId(id: string): Line {
        this.id = id;
        return this;
    }

    public setStartX(x1: number): Line {
        return safeSet<Line>(this, "x1", x1);
    }

    public setStartY(y1: number): Line {
        return safeSet<Line>(this, "y1", y1);
    }

    public setEndX(x2: number): Line {
        return safeSet<Line>(this, "x2", x2);
    }

    public setEndY(y2: number): Line {
        return safeSet<Line>(this, "y2", y2);
    }

    public setPathLength(pathLength: number): Line {
        return safeSet<Line>(this, "pathLength", pathLength);
    }

    public setBorder(color: string | GradientElement, width?: number, opacity?: number,
        linecap?: "butt" | "round" | "square", linejoin?: "miter" | "round" | "bevel"): Line {
        if (typeof color === "string") {
            this.strokeFill.stroke = color;
            subattrSet(this.strokeFill, "stroke_width", width);
            subattrSet(this.strokeFill, "stroke_opacity", opacity);
            this.strokeFill.stroke_linecap = linecap;
            this.strokeFill.stroke_linejoin = linejoin;
        } else {
            if (color.href() === undefined) log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.stroke = `url(${color.href()})`;
        }
        return this;
    }

    public setBorderDashing(...values: number[]): Line {
        if (values.length > 0) this.strokeFill.stroke_dasharray = values;
        return this;
    }

    public highestHeight(): number {
        return Math.max(this.y1, this.y2);
    }

    public highestWidth(): number {
        return Math.max(this.x1, this.x2);
    }

    public toXML(): string {
        return customXMLable("line", [{
            id: this.id,
            x1: this.x1,
            y1: this.y1,
            x2: this.x2,
            y2: this.y2,
            pathLength: this.pathLength,
            filter: this.filter
        }, this.strokeFill.getConfiguration()]);
    }

}

export class Polygon extends GraphicalElement {

    private points: {x: number, y: number}[] = [];
    private pathLength: number;
    private strokeFill: StrokeFillAttributes = new StrokeFillAttributes(this);

    public constructor(x1: number, y1: number, x2: number, y2: number) {
        super();
        this.addPoint(x1, y1);
        this.addPoint(x2, y2);
    }

    public useFilter(filter: FilterContainer, canvas: Canvas): Polygon {
        canvas.defineElement(filter);
        if (filter.href() === undefined) log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }

    public setId(id: string): Polygon {
        this.id = id;
        return this;
    }

    public addPoint(x: number, y: number): Polygon {
        let _x: number, _y: number;
        if (x === undefined || x < 0) { log.invalidPolyValue("Polygon", "x", x); _x = 0; }
        else _x = x;
        if (y === undefined || y < 0) { log.invalidPolyValue("Polygon", "y", y); _y = 0; }
        else _y = y;
        this.points.push({ x: _x, y: _y });
        return this;
    }

    public setPathLength(pathLength: number): Polygon {
        return safeSet<Polygon>(this, "pathLength", pathLength);
    }

    public setBorder(color: string | GradientElement, width?: number, opacity?: number,
        linecap?: "butt" | "round" | "square", linejoin?: "miter" | "round" | "bevel"): Polygon {
        if (typeof color === "string") {
            this.strokeFill.stroke = color;
            subattrSet(this.strokeFill, "stroke_width", width);
            subattrSet(this.strokeFill, "stroke_opacity", opacity);
            this.strokeFill.stroke_linecap = linecap;
            this.strokeFill.stroke_linejoin = linejoin;
        } else {
            if (color.href() === undefined) log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.stroke = `url(${color.href()})`;
        }
        return this;
    }

    public setBorderDashing(...values: number[]): Polygon {
        if (values.length > 0) this.strokeFill.stroke_dasharray = values;
        return this;
    }

    public setFill(color: string | GradientElement, opacity?: number,
        fillrule?: "nonzero" | "evenodd"): Polygon {
        if (typeof color === "string") {
            this.strokeFill.fill = color;
            subattrSet(this.strokeFill, "fill_opacity", opacity);
            this.strokeFill.fill_rule = fillrule;
        } else {
            if (color.href() === undefined) log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.fill = `url(${color.href()})`;
        }
        return this;
    }

    public highestHeight(): number {
        return Math.max(...this.points.map((point) => point.y));
    }

    public highestWidth(): number {
        return Math.max(...this.points.map((point) => point.x));
    }

    public toXML(): string {
        return customXMLable("polygon", [{
            id: this.id,
            points: this.points.map((point) => point.x+","+point.y).join(" "),
            pathLength: this.pathLength,
            filter: this.filter
        }, this.strokeFill.getConfiguration()]);
    }

}

export class Polyline extends GraphicalElement {

    private points: { x: number, y: number }[] = [];
    private pathLength: number;
    private strokeFill: StrokeFillAttributes = new StrokeFillAttributes(this);

    public constructor(x1: number, y1: number, x2: number, y2: number) {
        super();
        this.addPoint(x1, y1);
        this.addPoint(x2, y2);
    }

    public useFilter(filter: FilterContainer, canvas: Canvas): Polyline {
        canvas.defineElement(filter);
        if (filter.href() === undefined) log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }

    public setId(id: string): Polyline {
        this.id = id;
        return this;
    }

    public addPoint(x: number, y: number): Polyline {
        let _x: number, _y: number;
        if (x === undefined || x < 0) { log.invalidPolyValue("Polyline", "x", x); _x = 0; } 
        else _x = x;
        if (y === undefined || y < 0) { log.invalidPolyValue("Polyline", "y", y); _y = 0; } 
        else _y = y;
        this.points.push({ x: _x, y: _y });
        return this;
    }

    public setPathLength(pathLength: number): Polyline {
        return safeSet<Polyline>(this, "pathLength", pathLength);
    }

    public setBorder(color: string | GradientElement, width?: number, opacity?: number,
        linecap?: "butt" | "round" | "square", linejoin?: "miter" | "round" | "bevel"):Polyline {
        if (typeof color === "string") {
            this.strokeFill.stroke = color;
            subattrSet(this.strokeFill, "stroke_width", width);
            subattrSet(this.strokeFill, "stroke_opacity", opacity);
            this.strokeFill.stroke_linecap = linecap;
            this.strokeFill.stroke_linejoin = linejoin;
        } else {
            if (color.href() === undefined) log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.stroke = `url(${color.href()})`;
        }
        return this;
    }

    public setBorderDashing(...values: number[]): Polyline {
        if (values.length > 0) this.strokeFill.stroke_dasharray = values;
        return this;
    }

    public setFill(color: string | GradientElement, opacity?: number,
        fillrule?: "nonzero" | "evenodd"): Polyline {
        if (typeof color === "string") {
            this.strokeFill.fill = color;
            subattrSet(this.strokeFill, "fill_opacity", opacity);
            this.strokeFill.fill_rule = fillrule;
        } else {
            if (color.href() === undefined) log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.fill = `url(${color.href()})`;
        }
        return this;
    }

    public highestHeight(): number {
        return Math.max(...this.points.map((point) => point.y));
    }

    public highestWidth(): number {
        return Math.max(...this.points.map((point) => point.x));
    }

    public toXML(): string {
        return customXMLable("polyline", [{
            id: this.id,
            points: this.points.map((point) => point.x + "," + point.y).join(" "),
            pathLength: this.pathLength,
            filter: this.filter
        }, this.strokeFill.getConfiguration()]);
    }

}

export class Path extends GraphicalElement {

    private d: Cmds.PathCommand[] = [];
    private pathLength: number;
    private strokeFill: StrokeFillAttributes = new StrokeFillAttributes(this);

    public constructor(startX: number, startY: number) {
        super();
        this.moveTo(startX, startY);
    }

    public useFilter(filter: FilterContainer, canvas: Canvas): Path {
        canvas.defineElement(filter);
        if (filter.href() === undefined) log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }

    public setId(id: string): Path {
        this.id = id;
        return this;
    }

    public moveTo(x: number, y: number, relative?: boolean): Path {
        this.d.push(new Cmds.MoveTo(x, y, relative));
        return this;
    }

    public lineTo(x: number, y: number, relative?: boolean): Path {
        this.d.push(new Cmds.LineTo(x, y, relative));
        return this;
    }

    public horizontalLineTo(x: number, relative?: boolean): Path {
        this.d.push(new Cmds.HorizontalLineTo(x, relative));
        return this;
    }

    public verticalLineTo(y: number, relative?: boolean): Path {
        this.d.push(new Cmds.VerticalLineTo(y, relative));
        return this;
    }

    public closePath(): Path {
        this.d.push(new Cmds.ClosePath());
        return this;
    }

    public cubicCurve(ctrlStartX: number, ctrlStartY: number, ctrlEndX1: number, ctrlEndY1: number,
        ctrlEndX2: number, ctrlEndY2: number, relative?: boolean): Path {
        this.d.push(new Cmds.CubicCurve(ctrlStartX, ctrlStartY, ctrlEndX1, ctrlEndY1, 
                                              ctrlEndX2, ctrlEndY2, relative));
        return this;
    }

    public shortcutCubicCurve(ctrlEndX1: number, ctrlEndY1: number,
        ctrlEndX2: number, ctrlEndY2: number, relative?: boolean): Path {
        this.d.push(new Cmds.ShortcutCubicCurve(ctrlEndX1, ctrlEndY1,
            ctrlEndX2, ctrlEndY2, relative));
        return this;
    }

    public quadraticCurve(ctrlEndX1: number, ctrlEndY1: number,
        ctrlEndX2: number, ctrlEndY2: number, relative?: boolean): Path {
        this.d.push(new Cmds.QuadraticCurve(ctrlEndX1, ctrlEndY1,
            ctrlEndX2, ctrlEndY2, relative));
        return this;
    }

    public shortcutQuadraticCurve(ctrlEndX2: number, ctrlEndY2: number, relative?: boolean): Path {
        this.d.push(new Cmds.ShortcutQuadraticCurve(ctrlEndX2, ctrlEndY2, relative));
        return this;
    }

    public arc(radiusX: number, radiusY: number, rotationX: number, ctrlEndX: number,
        ctrlEndY: number, largeArcFlag?: boolean, sweepFlag?: boolean, relative?: boolean): Path {
        this.d.push(new Cmds.Arc(radiusX, radiusY, rotationX, ctrlEndX, ctrlEndY,
                                      largeArcFlag, sweepFlag, relative));
        return this;
    }

    public setBorder(color: string | GradientElement, width?: number, opacity?: number,
        linecap?: "butt" | "round" | "square", linejoin?: "miter" | "round" | "bevel"): Path {
        if (typeof color === "string") {
            this.strokeFill.stroke = color;
            subattrSet(this.strokeFill, "stroke_width", width);
            subattrSet(this.strokeFill, "stroke_opacity", opacity);
            this.strokeFill.stroke_linecap = linecap;
            this.strokeFill.stroke_linejoin = linejoin;
        } else {
            if (color.href() === undefined) log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.stroke = `url(${color.href()})`;
        }
        return this;
    }

    public setBorderDashing(...values: number[]): Path {
        if (values.length > 0) this.strokeFill.stroke_dasharray = values;
        return this;
    }

    public setFill(color: string | GradientElement, opacity?: number,
        fillrule?: "nonzero" | "evenodd"): Path {
        if (typeof color === "string") {
            this.strokeFill.fill = color;
            subattrSet(this.strokeFill, "fill_opacity", opacity);
            this.strokeFill.fill_rule = fillrule;
        } else {
            if (color.href() === undefined) log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.fill = `url(${color.href()})`;
        }
        return this;
    }

    public highestHeight(): number {
        return Math.max(...this.d.map((cmd) => cmd.highestHeight()));
    }

    public highestWidth(): number {
        return Math.max(...this.d.map((cmd) => cmd.highestWidth()));
    }

    public toXML(): string {
        return customXMLable("path", [{
            id: this.id,
            d: this.d.map((cmd) => cmd.toXML()).join(" "),
            pathLength: this.pathLength,
            filter: this.filter
        }, this.strokeFill.getConfiguration()]);
    }

}

export class Text extends GraphicalElement {

    private x: number;
    private y: number;
    private dx: number;
    private dy: number;
    private rotate: number[] = [];
    private lengthAdjust: "spacing" | "spacingAndGlyphs";
    private mainline: string;
    private sublines: Text[] = [];
    private textLength: number;
    private strokeFill: StrokeFillAttributes = new StrokeFillAttributes(this);

    public constructor(startX: number, startY: number, text: string) {
        super();
        this.setStartX(startX);
        this.setStartY(startY);
        this.mainline = text === undefined || text === null ? "" : text;
    }

    public useFilter(filter: FilterContainer, canvas: Canvas): Text {
        canvas.defineElement(filter);
        if (filter.href() === undefined) log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }

    public setId(id: string): Text {
        this.id = id;
        return this;
    }

    public addTextLine(text: Text): Text {
        this.sublines.push(text);
        return this;
    }

    public setStartX(x: number): Text {
        return safeSet<Text>(this, "x", x);
    }

    public setStartY(y: number): Text {
        return safeSet<Text>(this, "y", y);
    }

    public setRelativeX(dx: number): Text {
        this.dx = dx === undefined ? 0 : dx;
        return this;
    }

    public setRelativeY(dy: number): Text {
        this.dy = dy === undefined ? 0 : dy;
        return this;
    }

    public setRotation(...values: number[]): Text {
        if (values.length>0) this.rotate = values;
        return this;
    }

    public setLengthAdjustment(lengthAdjust: "spacing" | "spacingAndGlyphs"): Text {
        this.lengthAdjust = lengthAdjust;
        return this;
    }

    public setBorder(color: string | GradientElement, width?: number, opacity?: number,
        linecap?: "butt" | "round" | "square", linejoin?: "miter" | "round" | "bevel"): Text {
        if (typeof color === "string") {
            this.strokeFill.stroke = color;
            subattrSet(this.strokeFill, "stroke_width", width);
            subattrSet(this.strokeFill, "stroke_opacity", opacity);
            this.strokeFill.stroke_linecap = linecap;
            this.strokeFill.stroke_linejoin = linejoin;
        } else {
            if (color.href() === undefined) log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.stroke = `url(${color.href()})`;
        }
        return this;
    }

    public setBorderDashing(...values: number[]): Text {
        if (values.length > 0) this.strokeFill.stroke_dasharray = values;
        return this;
    }

    public setFill(color: string | GradientElement, opacity?: number,
        fillrule?: "nonzero" | "evenodd"): Text {
        if (typeof color === "string") {
            this.strokeFill.fill = color;
            subattrSet(this.strokeFill, "fill_opacity", opacity);
            this.strokeFill.fill_rule = fillrule;
        } else {
            if (color.href() === undefined) log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.fill = `url(${color.href()})`;
        }
        return this;
    }

    public setTextLength(textLength: number): Text {
        return safeSet<Text>(this, "textLength", textLength);
    }

    public highestHeight(): number {
        return 0; //can't really estimate
    }

    public highestWidth(): number {
        return 0; //can't really estimate
    }

    private metaXML(text: Text, header: boolean, content: string): string {
        let fields = {
            id: text.id,
            x: text.x,
            y: text.y,
            dx: text.dx,
            dy: text.dy,
            rotate: text.rotate.length > 0 ? text.rotate.join(",") : undefined,
            lengthAdjustment: text.lengthAdjust,
            textLength: text.textLength,
            filter: text.filter
        }
        return customXMLable(header ? "text" : "tspan", [fields, this.strokeFill.getConfiguration()], 
            ` ${content} `, header);
    }

    public toXML(): string[] {
        let xml = [this.metaXML(this, true, this.mainline)];
        for (let line of this.sublines)
            xml.push(`${globalIndent}${this.metaXML(line, false, line.mainline)}`);
        xml.push("</text>");
        return xml;
    }

}

export class Image extends GraphicalElement {

    private width: number;
    private height: number;
    private x: number;
    private y: number;
    private xlink_href: string;
    private preserveAspectRatio: string;

    public constructor(url: string, width: number, height: number) {
        super();
        this.setWidth(width);
        this.setHeight(height);
        this.xlink_href = url;
    }

    public useFilter(filter: FilterContainer, canvas: Canvas): Image {
        canvas.defineElement(filter);
        if (filter.href() === undefined) log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }

    public setId(id: string): Image {
        this.id = id;
        return this;
    }

    public setX(x: number): Image {
        return safeSet<Image>(this, "x", x);
    }

    public setY(y: number): Image {
        return safeSet<Image>(this, "y", y);
    }

    public setWidth(width: number): Image {
        return safeSet<Image>(this, "width", width);
    }

    public setHeight(height: number): Image {
        return safeSet<Image>(this, "height", height);
    }

    public setAspectRatioPreservation(alignment: "none" | "xMinYMin" | "xMidYMin" | "xMaxYMin" | "xMinYMid" |
        "xMidYMid" | "xMaxYMid" | "xMinYMax" | "xMidYMax" | "xMaxYMax", strategy?: "meet" | "slice"): Image {
        this.preserveAspectRatio = `${alignment}${strategy === undefined ? "" : " " + strategy}`;
        return this;
    }

    public highestHeight(): number {
        return (this.y === undefined ? 0 : this.y) + this.height;
    }

    public highestWidth(): number {
        return (this.x === undefined ? 0 : this.x) + this.width;
    }

    public toXML(): string {
        return customXMLable("image", [{
            id: this.id,
            href: this.xlink_href,
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            preserveAspectRatio: this.preserveAspectRatio,
            filter: this.filter
        }]);
    }

}