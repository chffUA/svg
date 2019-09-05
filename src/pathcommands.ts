import * as log from './logging';

export abstract class PathCommand {

    public abstract highestWidth(): number;
    public abstract highestHeight(): number;
    public abstract toXML(): string;
}

function safeRelativeSet(object: any, property: string, value: number): void {
    if (!object["relative"] && (value === undefined || value < 0)) {
        log.invalidAbsPathValue(object.constructor.name, property, value);
        object[property] = 0;
    } else if (value === undefined) {
        log.invalidPathValue(object.constructor.name, property, value);
        object[property] = 0;
    }
    else 
        object[property] = value;
}

export class MoveTo extends PathCommand {

    private x: number;
    private y: number;
    private relative: boolean = false;

    public constructor(x: number, y: number, relative?: boolean) {
        super();
        if (relative !== undefined) this.relative = relative;
        safeRelativeSet(this, "x", x);
        safeRelativeSet(this, "y", y);
    }

    public highestHeight(): number {
        return this.y;
    }

    public highestWidth(): number {
        return this.x;
    }

    public toXML(): string {
        return `${this.relative ? "m" : "M"}${this.x} ${this.y}`;
    }
}

export class LineTo extends PathCommand {

    private x: number;
    private y: number;
    private relative: boolean = false;

    public constructor(x: number, y: number, relative?: boolean) {
        super();
        if (relative !== undefined) this.relative = relative;
        safeRelativeSet(this, "x", x);
        safeRelativeSet(this, "y", y);
    }

    public highestHeight(): number {
        return this.y;
    }

    public highestWidth(): number {
        return this.x;
    }

    public toXML(): string {
        return `${this.relative ? "l" : "L"}${this.x} ${this.y}`;
    }
}

export class HorizontalLineTo extends PathCommand {

    private x: number;
    private relative: boolean = false;

    public constructor(x: number, relative?: boolean) {
        super();
        if (relative !== undefined) this.relative = relative;
        safeRelativeSet(this, "x", x);
    }

    public highestHeight(): number {
        return 0;
    }

    public highestWidth(): number {
        return this.x;
    }

    public toXML(): string {
        return `${this.relative ? "h" : "H"}${this.x}`;
    }
}

export class VerticalLineTo extends PathCommand {

    private y: number;
    private relative: boolean = false;

    public constructor(y: number, relative?: boolean) {
        super();
        if (relative !== undefined) this.relative = relative;
        safeRelativeSet(this, "y", y);
    }

    public highestHeight(): number {
        return this.y;
    }

    public highestWidth(): number {
        return 0;
    }

    public toXML(): string {
        return `${this.relative ? "v" : "V"}${this.y}`;
    }
}

export class ClosePath extends PathCommand {

    public constructor() {
        super();
    }

    public highestHeight(): number {
        return 0;
    }

    public highestWidth(): number {
        return 0;
    }

    public toXML(): string {
        return `Z`;
    }
}

export class CubicCurve extends PathCommand {

    private x1: number;
    private y1: number;
    private x2: number;
    private y2: number;
    private x: number;
    private y: number;
    private relative: boolean = false;

    public constructor(x1: number, y1: number, x2: number, y2: number, x: number, y: number, relative?: boolean) {
        super();
        if (relative !== undefined) this.relative = relative;
        safeRelativeSet(this, "x1", x1);
        safeRelativeSet(this, "y1", y1);
        safeRelativeSet(this, "x2", x2);
        safeRelativeSet(this, "y2", y2);
        safeRelativeSet(this, "x", x);
        safeRelativeSet(this, "y", y);
    }

    public highestHeight(): number {
        return Math.max(this.y1, this.y2, this.y);
    }

    public highestWidth(): number {
        return Math.max(this.x1, this.x2, this.x);
    }

    public toXML(): string {
        return `${this.relative ? "c" : "C"}${this.x1} ${this.y1}, ${this.x2} ${this.y2}, ` +
            `${this.x} ${this.y}`;
    }
}

export class ShortcutCubicCurve extends PathCommand {

    private x2: number;
    private y2: number;
    private x: number;
    private y: number;
    private relative: boolean = false;

    public constructor(x2: number, y2: number, x: number, y: number, relative?: boolean) {
        super();
        if (relative !== undefined) this.relative = relative;
        safeRelativeSet(this, "x2", x2);
        safeRelativeSet(this, "y2", y2);
        safeRelativeSet(this, "x", x);
        safeRelativeSet(this, "y", y);
    }

    public highestHeight(): number {
        return Math.max(this.y2, this.y);
    }

    public highestWidth(): number {
        return Math.max(this.x2, this.x);
    }

    public toXML(): string {
        return `${this.relative ? "s" : "S"}${this.x2} ${this.y2}, ` +
            `${this.x} ${this.y}`;
    }
}

export class QuadraticCurve extends PathCommand {

    private x1: number;
    private y1: number;
    private x: number;
    private y: number;
    private relative: boolean = false;

    public constructor(x1: number, y1: number, x: number, y: number, relative?: boolean) {
        super();
        if (relative !== undefined) this.relative = relative;
        safeRelativeSet(this, "x1", x1);
        safeRelativeSet(this, "y1", y1);
        safeRelativeSet(this, "x", x);
        safeRelativeSet(this, "y", y);
    }

    public highestHeight(): number {
        return Math.max(this.y1, this.y);
    }

    public highestWidth(): number {
        return Math.max(this.x1, this.x);
    }

    public toXML(): string {
        return `${this.relative ? "q" : "Q"}${this.x1} ${this.y1}, ` +
            `${this.x} ${this.y}`;
    }
}

export class ShortcutQuadraticCurve extends PathCommand {

    private x: number;
    private y: number;
    private relative: boolean = false;

    public constructor(x: number, y: number, relative?: boolean) {
        super();
        if (relative !== undefined) this.relative = relative;
        safeRelativeSet(this, "x", x);
        safeRelativeSet(this, "y", y);
    }

    public highestHeight(): number {
        return this.y;
    }

    public highestWidth(): number {
        return this.x;
    }

    public toXML(): string {
        return `${this.relative ? "t" : "T"}${this.x} ${this.y}`;
    }
}

export class Arc extends PathCommand {

    private rx: number;
    private ry: number;
    private x_axis_rotation: number;
    private large_arc_flag: number;
    private sweep_flag: number;
    private x: number;
    private y: number;
    private relative: boolean = false;

    public constructor(rx: number, ry: number, x_axis_rotation: number, 
                       x: number, y: number, large_arc_flag?: boolean,
                       sweep_flag?: boolean, relative?: boolean) {
        super();
        if (relative !== undefined) this.relative = relative;
        safeRelativeSet(this, "rx", rx);
        safeRelativeSet(this, "ry", ry);
        safeRelativeSet(this, "x_axis_rotation", x_axis_rotation);
        safeRelativeSet(this, "large_arc_flag", large_arc_flag ? 1 : 0);
        safeRelativeSet(this, "sweep_flag", sweep_flag ? 1 : 0);
        safeRelativeSet(this, "x", x);
        safeRelativeSet(this, "y", y);
    }

    public highestHeight(): number {
        return Math.max(this.x + this.rx, this.y + this.ry);
    }

    public highestWidth(): number {
        return Math.max(this.x + this.rx, this.y + this.ry);
    }

    public toXML(): string {
        return `${this.relative ? "a" : "A"}${this.rx} ${this.ry} ${this.x_axis_rotation} `+
            `${this.large_arc_flag} ${this.sweep_flag} ${this.x} ${this.y}`;
    }
}