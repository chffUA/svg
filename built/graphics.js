"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const Cmds = require("./pathcommands");
const log = require("./logging");
class Rectangle extends base_1.GraphicalElement {
    constructor(startX, startY, width, height) {
        super();
        this.strokeFill = new base_1.StrokeFillAttributes(this);
        this.setX(startX);
        this.setY(startY);
        this.setWidth(width);
        this.setHeight(height);
    }
    setId(id) {
        this.id = id;
        return this;
    }
    useFilter(filter, canvas) {
        canvas.defineElement(filter);
        if (filter.href() === undefined)
            log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }
    setX(x) {
        return base_1.safeSet(this, "x", x);
    }
    setY(y) {
        return base_1.safeSet(this, "y", y);
    }
    setWidth(width) {
        return base_1.safeSet(this, "width", width);
    }
    setHeight(height) {
        return base_1.safeSet(this, "height", height);
    }
    setRadiusX(rx) {
        return base_1.safeSet(this, "rx", rx);
    }
    setRadiusY(ry) {
        return base_1.safeSet(this, "ry", ry);
    }
    setPathLength(pathLength) {
        return base_1.safeSet(this, "pathLength", pathLength);
    }
    setBorder(color, width, opacity, linecap, linejoin) {
        if (typeof color === "string") {
            this.strokeFill.stroke = color;
            base_1.subattrSet(this.strokeFill, "stroke_width", width);
            base_1.subattrSet(this.strokeFill, "stroke_opacity", opacity);
            this.strokeFill.stroke_linecap = linecap;
            this.strokeFill.stroke_linejoin = linejoin;
        }
        else {
            if (color.href() === undefined)
                log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.stroke = `url(${color.href()})`;
        }
        return this;
    }
    setBorderDashing(...values) {
        if (values.length > 0)
            this.strokeFill.stroke_dasharray = values;
        return this;
    }
    setFill(color, opacity, fillrule) {
        if (typeof color === "string") {
            this.strokeFill.fill = color;
            base_1.subattrSet(this.strokeFill, "fill_opacity", opacity);
            this.strokeFill.fill_rule = fillrule;
        }
        else {
            if (color.href() === undefined)
                log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.fill = `url(${color.href()})`;
        }
        return this;
    }
    highestHeight() {
        return this.y + this.height;
    }
    highestWidth() {
        return this.x + this.width;
    }
    toXML() {
        return base_1.customXMLable("rect", [{
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
exports.Rectangle = Rectangle;
class Circle extends base_1.GraphicalElement {
    constructor(centerX, centerY, radius) {
        super();
        this.strokeFill = new base_1.StrokeFillAttributes(this);
        this.setX(centerX);
        this.setY(centerY);
        this.setRadius(radius);
    }
    setId(id) {
        this.id = id;
        return this;
    }
    useFilter(filter, canvas) {
        canvas.defineElement(filter);
        if (filter.href() === undefined)
            log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }
    setX(x) {
        return base_1.safeSet(this, "cx", x);
    }
    setY(y) {
        return base_1.safeSet(this, "cy", y);
    }
    setRadius(r) {
        return base_1.safeSet(this, "r", r);
    }
    setPathLength(pathLength) {
        return base_1.safeSet(this, "pathLength", pathLength);
    }
    setBorder(color, width, opacity, linecap, linejoin) {
        if (typeof color === "string") {
            this.strokeFill.stroke = color;
            base_1.subattrSet(this.strokeFill, "stroke_width", width);
            base_1.subattrSet(this.strokeFill, "stroke_opacity", opacity);
            this.strokeFill.stroke_linecap = linecap;
            this.strokeFill.stroke_linejoin = linejoin;
        }
        else {
            if (color.href() === undefined)
                log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.stroke = `url(${color.href()})`;
        }
        return this;
    }
    setBorderDashing(...values) {
        if (values.length > 0)
            this.strokeFill.stroke_dasharray = values;
        return this;
    }
    setFill(color, opacity, fillrule) {
        if (typeof color === "string") {
            this.strokeFill.fill = color;
            base_1.subattrSet(this.strokeFill, "fill_opacity", opacity);
            this.strokeFill.fill_rule = fillrule;
        }
        else {
            if (color.href() === undefined)
                log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.fill = `url(${color.href()})`;
        }
        return this;
    }
    highestHeight() {
        return this.cy + this.r;
    }
    highestWidth() {
        return this.cx + this.r;
    }
    toXML() {
        return base_1.customXMLable("circle", [{
                id: this.id,
                cx: this.cx,
                cy: this.cy,
                r: this.r,
                pathLength: this.pathLength,
                filter: this.filter
            }, this.strokeFill.getConfiguration()]);
    }
}
exports.Circle = Circle;
class Ellipse extends base_1.GraphicalElement {
    constructor(centerX, centerY, radiusX, radiusY) {
        super();
        this.strokeFill = new base_1.StrokeFillAttributes(this);
        this.setX(centerX);
        this.setY(centerY);
        this.setRadiusX(radiusX);
        this.setRadiusY(radiusY);
    }
    useFilter(filter, canvas) {
        canvas.defineElement(filter);
        if (filter.href() === undefined)
            log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }
    setId(id) {
        this.id = id;
        return this;
    }
    setX(x) {
        return base_1.safeSet(this, "cx", x);
    }
    setY(y) {
        return base_1.safeSet(this, "cy", y);
    }
    setRadiusX(rx) {
        return base_1.safeSet(this, "rx", rx);
    }
    setRadiusY(ry) {
        return base_1.safeSet(this, "ry", ry);
    }
    setPathLength(pathLength) {
        return base_1.safeSet(this, "pathLength", pathLength);
    }
    setBorder(color, width, opacity, linecap, linejoin) {
        if (typeof color === "string") {
            this.strokeFill.stroke = color;
            base_1.subattrSet(this.strokeFill, "stroke_width", width);
            base_1.subattrSet(this.strokeFill, "stroke_opacity", opacity);
            this.strokeFill.stroke_linecap = linecap;
            this.strokeFill.stroke_linejoin = linejoin;
        }
        else {
            if (color.href() === undefined)
                log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.stroke = `url(${color.href()})`;
        }
        return this;
    }
    setBorderDashing(...values) {
        if (values.length > 0)
            this.strokeFill.stroke_dasharray = values;
        return this;
    }
    setFill(color, opacity, fillrule) {
        if (typeof color === "string") {
            this.strokeFill.fill = color;
            base_1.subattrSet(this.strokeFill, "fill_opacity", opacity);
            this.strokeFill.fill_rule = fillrule;
        }
        else {
            if (color.href() === undefined)
                log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.fill = `url(${color.href()})`;
        }
        return this;
    }
    highestHeight() {
        return this.cy + this.ry;
    }
    highestWidth() {
        return this.cx + this.rx;
    }
    toXML() {
        return base_1.customXMLable("ellipse", [{
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
exports.Ellipse = Ellipse;
class Line extends base_1.GraphicalElement {
    constructor(startX, startY, endX, endY) {
        super();
        this.strokeFill = new base_1.StrokeFillAttributes(this);
        this.setStartX(startX);
        this.setStartY(startY);
        this.setEndX(endX);
        this.setEndY(endY);
        this.strokeFill.stroke = "black";
    }
    useFilter(filter, canvas) {
        canvas.defineElement(filter);
        if (filter.href() === undefined)
            log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }
    setId(id) {
        this.id = id;
        return this;
    }
    setStartX(x1) {
        return base_1.safeSet(this, "x1", x1);
    }
    setStartY(y1) {
        return base_1.safeSet(this, "y1", y1);
    }
    setEndX(x2) {
        return base_1.safeSet(this, "x2", x2);
    }
    setEndY(y2) {
        return base_1.safeSet(this, "y2", y2);
    }
    setPathLength(pathLength) {
        return base_1.safeSet(this, "pathLength", pathLength);
    }
    setBorder(color, width, opacity, linecap, linejoin) {
        if (typeof color === "string") {
            this.strokeFill.stroke = color;
            base_1.subattrSet(this.strokeFill, "stroke_width", width);
            base_1.subattrSet(this.strokeFill, "stroke_opacity", opacity);
            this.strokeFill.stroke_linecap = linecap;
            this.strokeFill.stroke_linejoin = linejoin;
        }
        else {
            if (color.href() === undefined)
                log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.stroke = `url(${color.href()})`;
        }
        return this;
    }
    setBorderDashing(...values) {
        if (values.length > 0)
            this.strokeFill.stroke_dasharray = values;
        return this;
    }
    highestHeight() {
        return Math.max(this.y1, this.y2);
    }
    highestWidth() {
        return Math.max(this.x1, this.x2);
    }
    toXML() {
        return base_1.customXMLable("line", [{
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
exports.Line = Line;
class Polygon extends base_1.GraphicalElement {
    constructor(x1, y1, x2, y2) {
        super();
        this.points = [];
        this.strokeFill = new base_1.StrokeFillAttributes(this);
        this.addPoint(x1, y1);
        this.addPoint(x2, y2);
    }
    useFilter(filter, canvas) {
        canvas.defineElement(filter);
        if (filter.href() === undefined)
            log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }
    setId(id) {
        this.id = id;
        return this;
    }
    addPoint(x, y) {
        let _x, _y;
        if (x === undefined || x < 0) {
            log.invalidPolyValue("Polygon", "x", x);
            _x = 0;
        }
        else
            _x = x;
        if (y === undefined || y < 0) {
            log.invalidPolyValue("Polygon", "y", y);
            _y = 0;
        }
        else
            _y = y;
        this.points.push({ x: _x, y: _y });
        return this;
    }
    setPathLength(pathLength) {
        return base_1.safeSet(this, "pathLength", pathLength);
    }
    setBorder(color, width, opacity, linecap, linejoin) {
        if (typeof color === "string") {
            this.strokeFill.stroke = color;
            base_1.subattrSet(this.strokeFill, "stroke_width", width);
            base_1.subattrSet(this.strokeFill, "stroke_opacity", opacity);
            this.strokeFill.stroke_linecap = linecap;
            this.strokeFill.stroke_linejoin = linejoin;
        }
        else {
            if (color.href() === undefined)
                log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.stroke = `url(${color.href()})`;
        }
        return this;
    }
    setBorderDashing(...values) {
        if (values.length > 0)
            this.strokeFill.stroke_dasharray = values;
        return this;
    }
    setFill(color, opacity, fillrule) {
        if (typeof color === "string") {
            this.strokeFill.fill = color;
            base_1.subattrSet(this.strokeFill, "fill_opacity", opacity);
            this.strokeFill.fill_rule = fillrule;
        }
        else {
            if (color.href() === undefined)
                log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.fill = `url(${color.href()})`;
        }
        return this;
    }
    highestHeight() {
        return Math.max(...this.points.map((point) => point.y));
    }
    highestWidth() {
        return Math.max(...this.points.map((point) => point.x));
    }
    toXML() {
        return base_1.customXMLable("polygon", [{
                id: this.id,
                points: this.points.map((point) => point.x + "," + point.y).join(" "),
                pathLength: this.pathLength,
                filter: this.filter
            }, this.strokeFill.getConfiguration()]);
    }
}
exports.Polygon = Polygon;
class Polyline extends base_1.GraphicalElement {
    constructor(x1, y1, x2, y2) {
        super();
        this.points = [];
        this.strokeFill = new base_1.StrokeFillAttributes(this);
        this.addPoint(x1, y1);
        this.addPoint(x2, y2);
    }
    useFilter(filter, canvas) {
        canvas.defineElement(filter);
        if (filter.href() === undefined)
            log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }
    setId(id) {
        this.id = id;
        return this;
    }
    addPoint(x, y) {
        let _x, _y;
        if (x === undefined || x < 0) {
            log.invalidPolyValue("Polyline", "x", x);
            _x = 0;
        }
        else
            _x = x;
        if (y === undefined || y < 0) {
            log.invalidPolyValue("Polyline", "y", y);
            _y = 0;
        }
        else
            _y = y;
        this.points.push({ x: _x, y: _y });
        return this;
    }
    setPathLength(pathLength) {
        return base_1.safeSet(this, "pathLength", pathLength);
    }
    setBorder(color, width, opacity, linecap, linejoin) {
        if (typeof color === "string") {
            this.strokeFill.stroke = color;
            base_1.subattrSet(this.strokeFill, "stroke_width", width);
            base_1.subattrSet(this.strokeFill, "stroke_opacity", opacity);
            this.strokeFill.stroke_linecap = linecap;
            this.strokeFill.stroke_linejoin = linejoin;
        }
        else {
            if (color.href() === undefined)
                log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.stroke = `url(${color.href()})`;
        }
        return this;
    }
    setBorderDashing(...values) {
        if (values.length > 0)
            this.strokeFill.stroke_dasharray = values;
        return this;
    }
    setFill(color, opacity, fillrule) {
        if (typeof color === "string") {
            this.strokeFill.fill = color;
            base_1.subattrSet(this.strokeFill, "fill_opacity", opacity);
            this.strokeFill.fill_rule = fillrule;
        }
        else {
            if (color.href() === undefined)
                log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.fill = `url(${color.href()})`;
        }
        return this;
    }
    highestHeight() {
        return Math.max(...this.points.map((point) => point.y));
    }
    highestWidth() {
        return Math.max(...this.points.map((point) => point.x));
    }
    toXML() {
        return base_1.customXMLable("polyline", [{
                id: this.id,
                points: this.points.map((point) => point.x + "," + point.y).join(" "),
                pathLength: this.pathLength,
                filter: this.filter
            }, this.strokeFill.getConfiguration()]);
    }
}
exports.Polyline = Polyline;
class Path extends base_1.GraphicalElement {
    constructor(startX, startY) {
        super();
        this.d = [];
        this.strokeFill = new base_1.StrokeFillAttributes(this);
        this.moveTo(startX, startY);
    }
    useFilter(filter, canvas) {
        canvas.defineElement(filter);
        if (filter.href() === undefined)
            log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }
    setId(id) {
        this.id = id;
        return this;
    }
    moveTo(x, y, relative) {
        this.d.push(new Cmds.MoveTo(x, y, relative));
        return this;
    }
    lineTo(x, y, relative) {
        this.d.push(new Cmds.LineTo(x, y, relative));
        return this;
    }
    horizontalLineTo(x, relative) {
        this.d.push(new Cmds.HorizontalLineTo(x, relative));
        return this;
    }
    verticalLineTo(y, relative) {
        this.d.push(new Cmds.VerticalLineTo(y, relative));
        return this;
    }
    closePath() {
        this.d.push(new Cmds.ClosePath());
        return this;
    }
    cubicCurve(ctrlStartX, ctrlStartY, ctrlEndX1, ctrlEndY1, ctrlEndX2, ctrlEndY2, relative) {
        this.d.push(new Cmds.CubicCurve(ctrlStartX, ctrlStartY, ctrlEndX1, ctrlEndY1, ctrlEndX2, ctrlEndY2, relative));
        return this;
    }
    shortcutCubicCurve(ctrlEndX1, ctrlEndY1, ctrlEndX2, ctrlEndY2, relative) {
        this.d.push(new Cmds.ShortcutCubicCurve(ctrlEndX1, ctrlEndY1, ctrlEndX2, ctrlEndY2, relative));
        return this;
    }
    quadraticCurve(ctrlEndX1, ctrlEndY1, ctrlEndX2, ctrlEndY2, relative) {
        this.d.push(new Cmds.QuadraticCurve(ctrlEndX1, ctrlEndY1, ctrlEndX2, ctrlEndY2, relative));
        return this;
    }
    shortcutQuadraticCurve(ctrlEndX2, ctrlEndY2, relative) {
        this.d.push(new Cmds.ShortcutQuadraticCurve(ctrlEndX2, ctrlEndY2, relative));
        return this;
    }
    arc(radiusX, radiusY, rotationX, ctrlEndX, ctrlEndY, largeArcFlag, sweepFlag, relative) {
        this.d.push(new Cmds.Arc(radiusX, radiusY, rotationX, ctrlEndX, ctrlEndY, largeArcFlag, sweepFlag, relative));
        return this;
    }
    setBorder(color, width, opacity, linecap, linejoin) {
        if (typeof color === "string") {
            this.strokeFill.stroke = color;
            base_1.subattrSet(this.strokeFill, "stroke_width", width);
            base_1.subattrSet(this.strokeFill, "stroke_opacity", opacity);
            this.strokeFill.stroke_linecap = linecap;
            this.strokeFill.stroke_linejoin = linejoin;
        }
        else {
            if (color.href() === undefined)
                log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.stroke = `url(${color.href()})`;
        }
        return this;
    }
    setBorderDashing(...values) {
        if (values.length > 0)
            this.strokeFill.stroke_dasharray = values;
        return this;
    }
    setFill(color, opacity, fillrule) {
        if (typeof color === "string") {
            this.strokeFill.fill = color;
            base_1.subattrSet(this.strokeFill, "fill_opacity", opacity);
            this.strokeFill.fill_rule = fillrule;
        }
        else {
            if (color.href() === undefined)
                log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.fill = `url(${color.href()})`;
        }
        return this;
    }
    highestHeight() {
        return Math.max(...this.d.map((cmd) => cmd.highestHeight()));
    }
    highestWidth() {
        return Math.max(...this.d.map((cmd) => cmd.highestWidth()));
    }
    toXML() {
        return base_1.customXMLable("path", [{
                id: this.id,
                d: this.d.map((cmd) => cmd.toXML()).join(" "),
                pathLength: this.pathLength,
                filter: this.filter
            }, this.strokeFill.getConfiguration()]);
    }
}
exports.Path = Path;
class Text extends base_1.GraphicalElement {
    constructor(startX, startY, text) {
        super();
        this.rotate = [];
        this.sublines = [];
        this.strokeFill = new base_1.StrokeFillAttributes(this);
        this.setStartX(startX);
        this.setStartY(startY);
        this.mainline = text === undefined || text === null ? "" : text;
    }
    useFilter(filter, canvas) {
        canvas.defineElement(filter);
        if (filter.href() === undefined)
            log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }
    setId(id) {
        this.id = id;
        return this;
    }
    addTextLine(text) {
        this.sublines.push(text);
        return this;
    }
    setStartX(x) {
        return base_1.safeSet(this, "x", x);
    }
    setStartY(y) {
        return base_1.safeSet(this, "y", y);
    }
    setRelativeX(dx) {
        this.dx = dx === undefined ? 0 : dx;
        return this;
    }
    setRelativeY(dy) {
        this.dy = dy === undefined ? 0 : dy;
        return this;
    }
    setRotation(...values) {
        if (values.length > 0)
            this.rotate = values;
        return this;
    }
    setLengthAdjustment(lengthAdjust) {
        this.lengthAdjust = lengthAdjust;
        return this;
    }
    setBorder(color, width, opacity, linecap, linejoin) {
        if (typeof color === "string") {
            this.strokeFill.stroke = color;
            base_1.subattrSet(this.strokeFill, "stroke_width", width);
            base_1.subattrSet(this.strokeFill, "stroke_opacity", opacity);
            this.strokeFill.stroke_linecap = linecap;
            this.strokeFill.stroke_linejoin = linejoin;
        }
        else {
            if (color.href() === undefined)
                log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.stroke = `url(${color.href()})`;
        }
        return this;
    }
    setBorderDashing(...values) {
        if (values.length > 0)
            this.strokeFill.stroke_dasharray = values;
        return this;
    }
    setFill(color, opacity, fillrule) {
        if (typeof color === "string") {
            this.strokeFill.fill = color;
            base_1.subattrSet(this.strokeFill, "fill_opacity", opacity);
            this.strokeFill.fill_rule = fillrule;
        }
        else {
            if (color.href() === undefined)
                log.usingUnnamedGradient(this.constructor.name);
            this.strokeFill.fill = `url(${color.href()})`;
        }
        return this;
    }
    setTextLength(textLength) {
        return base_1.safeSet(this, "textLength", textLength);
    }
    highestHeight() {
        return 0; //can't really estimate
    }
    highestWidth() {
        return 0; //can't really estimate
    }
    metaXML(text, header, content) {
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
        };
        return base_1.customXMLable(header ? "text" : "tspan", [fields, this.strokeFill.getConfiguration()], ` ${content} `, header);
    }
    toXML() {
        let xml = [this.metaXML(this, true, this.mainline)];
        for (let line of this.sublines)
            xml.push(`${base_1.globalIndent}${this.metaXML(line, false, line.mainline)}`);
        xml.push("</text>");
        return xml;
    }
}
exports.Text = Text;
class Image extends base_1.GraphicalElement {
    constructor(url, width, height) {
        super();
        this.setWidth(width);
        this.setHeight(height);
        this.xlink_href = url;
    }
    useFilter(filter, canvas) {
        canvas.defineElement(filter);
        if (filter.href() === undefined)
            log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }
    setId(id) {
        this.id = id;
        return this;
    }
    setX(x) {
        return base_1.safeSet(this, "x", x);
    }
    setY(y) {
        return base_1.safeSet(this, "y", y);
    }
    setWidth(width) {
        return base_1.safeSet(this, "width", width);
    }
    setHeight(height) {
        return base_1.safeSet(this, "height", height);
    }
    setAspectRatioPreservation(alignment, strategy) {
        this.preserveAspectRatio = `${alignment}${strategy === undefined ? "" : " " + strategy}`;
        return this;
    }
    highestHeight() {
        return (this.y === undefined ? 0 : this.y) + this.height;
    }
    highestWidth() {
        return (this.x === undefined ? 0 : this.x) + this.width;
    }
    toXML() {
        return base_1.customXMLable("image", [{
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
exports.Image = Image;
