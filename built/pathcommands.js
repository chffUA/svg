"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log = require("./logging");
class PathCommand {
}
exports.PathCommand = PathCommand;
function safeRelativeSet(object, property, value) {
    if (!object["relative"] && (value === undefined || value < 0)) {
        log.invalidAbsPathValue(object.constructor.name, property, value);
        object[property] = 0;
    }
    else if (value === undefined) {
        log.invalidPathValue(object.constructor.name, property, value);
        object[property] = 0;
    }
    else
        object[property] = value;
}
class MoveTo extends PathCommand {
    constructor(x, y, relative) {
        super();
        this.relative = false;
        if (relative !== undefined)
            this.relative = relative;
        safeRelativeSet(this, "x", x);
        safeRelativeSet(this, "y", y);
    }
    highestHeight() {
        return this.y;
    }
    highestWidth() {
        return this.x;
    }
    toXML() {
        return `${this.relative ? "m" : "M"}${this.x} ${this.y}`;
    }
}
exports.MoveTo = MoveTo;
class LineTo extends PathCommand {
    constructor(x, y, relative) {
        super();
        this.relative = false;
        if (relative !== undefined)
            this.relative = relative;
        safeRelativeSet(this, "x", x);
        safeRelativeSet(this, "y", y);
    }
    highestHeight() {
        return this.y;
    }
    highestWidth() {
        return this.x;
    }
    toXML() {
        return `${this.relative ? "l" : "L"}${this.x} ${this.y}`;
    }
}
exports.LineTo = LineTo;
class HorizontalLineTo extends PathCommand {
    constructor(x, relative) {
        super();
        this.relative = false;
        if (relative !== undefined)
            this.relative = relative;
        safeRelativeSet(this, "x", x);
    }
    highestHeight() {
        return 0;
    }
    highestWidth() {
        return this.x;
    }
    toXML() {
        return `${this.relative ? "h" : "H"}${this.x}`;
    }
}
exports.HorizontalLineTo = HorizontalLineTo;
class VerticalLineTo extends PathCommand {
    constructor(y, relative) {
        super();
        this.relative = false;
        if (relative !== undefined)
            this.relative = relative;
        safeRelativeSet(this, "y", y);
    }
    highestHeight() {
        return this.y;
    }
    highestWidth() {
        return 0;
    }
    toXML() {
        return `${this.relative ? "v" : "V"}${this.y}`;
    }
}
exports.VerticalLineTo = VerticalLineTo;
class ClosePath extends PathCommand {
    constructor() {
        super();
    }
    highestHeight() {
        return 0;
    }
    highestWidth() {
        return 0;
    }
    toXML() {
        return `Z`;
    }
}
exports.ClosePath = ClosePath;
class CubicCurve extends PathCommand {
    constructor(x1, y1, x2, y2, x, y, relative) {
        super();
        this.relative = false;
        if (relative !== undefined)
            this.relative = relative;
        safeRelativeSet(this, "x1", x1);
        safeRelativeSet(this, "y1", y1);
        safeRelativeSet(this, "x2", x2);
        safeRelativeSet(this, "y2", y2);
        safeRelativeSet(this, "x", x);
        safeRelativeSet(this, "y", y);
    }
    highestHeight() {
        return Math.max(this.y1, this.y2, this.y);
    }
    highestWidth() {
        return Math.max(this.x1, this.x2, this.x);
    }
    toXML() {
        return `${this.relative ? "c" : "C"}${this.x1} ${this.y1}, ${this.x2} ${this.y2}, ` +
            `${this.x} ${this.y}`;
    }
}
exports.CubicCurve = CubicCurve;
class ShortcutCubicCurve extends PathCommand {
    constructor(x2, y2, x, y, relative) {
        super();
        this.relative = false;
        if (relative !== undefined)
            this.relative = relative;
        safeRelativeSet(this, "x2", x2);
        safeRelativeSet(this, "y2", y2);
        safeRelativeSet(this, "x", x);
        safeRelativeSet(this, "y", y);
    }
    highestHeight() {
        return Math.max(this.y2, this.y);
    }
    highestWidth() {
        return Math.max(this.x2, this.x);
    }
    toXML() {
        return `${this.relative ? "s" : "S"}${this.x2} ${this.y2}, ` +
            `${this.x} ${this.y}`;
    }
}
exports.ShortcutCubicCurve = ShortcutCubicCurve;
class QuadraticCurve extends PathCommand {
    constructor(x1, y1, x, y, relative) {
        super();
        this.relative = false;
        if (relative !== undefined)
            this.relative = relative;
        safeRelativeSet(this, "x1", x1);
        safeRelativeSet(this, "y1", y1);
        safeRelativeSet(this, "x", x);
        safeRelativeSet(this, "y", y);
    }
    highestHeight() {
        return Math.max(this.y1, this.y);
    }
    highestWidth() {
        return Math.max(this.x1, this.x);
    }
    toXML() {
        return `${this.relative ? "q" : "Q"}${this.x1} ${this.y1}, ` +
            `${this.x} ${this.y}`;
    }
}
exports.QuadraticCurve = QuadraticCurve;
class ShortcutQuadraticCurve extends PathCommand {
    constructor(x, y, relative) {
        super();
        this.relative = false;
        if (relative !== undefined)
            this.relative = relative;
        safeRelativeSet(this, "x", x);
        safeRelativeSet(this, "y", y);
    }
    highestHeight() {
        return this.y;
    }
    highestWidth() {
        return this.x;
    }
    toXML() {
        return `${this.relative ? "t" : "T"}${this.x} ${this.y}`;
    }
}
exports.ShortcutQuadraticCurve = ShortcutQuadraticCurve;
class Arc extends PathCommand {
    constructor(rx, ry, x_axis_rotation, x, y, large_arc_flag, sweep_flag, relative) {
        super();
        this.relative = false;
        if (relative !== undefined)
            this.relative = relative;
        safeRelativeSet(this, "rx", rx);
        safeRelativeSet(this, "ry", ry);
        safeRelativeSet(this, "x_axis_rotation", x_axis_rotation);
        safeRelativeSet(this, "large_arc_flag", large_arc_flag ? 1 : 0);
        safeRelativeSet(this, "sweep_flag", sweep_flag ? 1 : 0);
        safeRelativeSet(this, "x", x);
        safeRelativeSet(this, "y", y);
    }
    highestHeight() {
        return Math.max(this.x + this.rx, this.y + this.ry);
    }
    highestWidth() {
        return Math.max(this.x + this.rx, this.y + this.ry);
    }
    toXML() {
        return `${this.relative ? "a" : "A"}${this.rx} ${this.ry} ${this.x_axis_rotation} ` +
            `${this.large_arc_flag} ${this.sweep_flag} ${this.x} ${this.y}`;
    }
}
exports.Arc = Arc;
