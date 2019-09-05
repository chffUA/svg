export declare abstract class PathCommand {
    abstract highestWidth(): number;
    abstract highestHeight(): number;
    abstract toXML(): string;
}
export declare class MoveTo extends PathCommand {
    private x;
    private y;
    private relative;
    constructor(x: number, y: number, relative?: boolean);
    highestHeight(): number;
    highestWidth(): number;
    toXML(): string;
}
export declare class LineTo extends PathCommand {
    private x;
    private y;
    private relative;
    constructor(x: number, y: number, relative?: boolean);
    highestHeight(): number;
    highestWidth(): number;
    toXML(): string;
}
export declare class HorizontalLineTo extends PathCommand {
    private x;
    private relative;
    constructor(x: number, relative?: boolean);
    highestHeight(): number;
    highestWidth(): number;
    toXML(): string;
}
export declare class VerticalLineTo extends PathCommand {
    private y;
    private relative;
    constructor(y: number, relative?: boolean);
    highestHeight(): number;
    highestWidth(): number;
    toXML(): string;
}
export declare class ClosePath extends PathCommand {
    constructor();
    highestHeight(): number;
    highestWidth(): number;
    toXML(): string;
}
export declare class CubicCurve extends PathCommand {
    private x1;
    private y1;
    private x2;
    private y2;
    private x;
    private y;
    private relative;
    constructor(x1: number, y1: number, x2: number, y2: number, x: number, y: number, relative?: boolean);
    highestHeight(): number;
    highestWidth(): number;
    toXML(): string;
}
export declare class ShortcutCubicCurve extends PathCommand {
    private x2;
    private y2;
    private x;
    private y;
    private relative;
    constructor(x2: number, y2: number, x: number, y: number, relative?: boolean);
    highestHeight(): number;
    highestWidth(): number;
    toXML(): string;
}
export declare class QuadraticCurve extends PathCommand {
    private x1;
    private y1;
    private x;
    private y;
    private relative;
    constructor(x1: number, y1: number, x: number, y: number, relative?: boolean);
    highestHeight(): number;
    highestWidth(): number;
    toXML(): string;
}
export declare class ShortcutQuadraticCurve extends PathCommand {
    private x;
    private y;
    private relative;
    constructor(x: number, y: number, relative?: boolean);
    highestHeight(): number;
    highestWidth(): number;
    toXML(): string;
}
export declare class Arc extends PathCommand {
    private rx;
    private ry;
    private x_axis_rotation;
    private large_arc_flag;
    private sweep_flag;
    private x;
    private y;
    private relative;
    constructor(rx: number, ry: number, x_axis_rotation: number, x: number, y: number, large_arc_flag?: boolean, sweep_flag?: boolean, relative?: boolean);
    highestHeight(): number;
    highestWidth(): number;
    toXML(): string;
}
