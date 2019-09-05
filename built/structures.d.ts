import { SimpleElement, GraphicalElement, StructuralElement, DefOnlyElement, FilterElement, GradientElement } from './base';
export declare class Canvas extends StructuralElement {
    private x;
    private y;
    private width;
    private height;
    private viewbox;
    private preserveAspectRatio;
    private content;
    private readonly xmlns;
    private strokeFill;
    private definitions;
    constructor(width?: number, height?: number);
    exportToFile(filename: string): void;
    useFilter(filter: FilterContainer, canvas: Canvas): Canvas;
    setId(id: string): Canvas;
    setX(x: number): Canvas;
    setY(y: number): Canvas;
    setWidth(width: number): Canvas;
    setHeight(height: number): Canvas;
    setViewBox(...values: number[]): Canvas;
    setAspectRatioPreservation(alignment: "none" | "xMinYMin" | "xMidYMin" | "xMaxYMin" | "xMinYMid" | "xMidYMid" | "xMaxYMid" | "xMinYMax" | "xMidYMax" | "xMaxYMax", strategy?: "meet" | "slice"): Canvas;
    setBorder(color: string | GradientElement, width?: number, opacity?: number, linecap?: "butt" | "round" | "square", linejoin?: "miter" | "round" | "bevel"): Canvas;
    setBorderDashing(...values: number[]): Canvas;
    setFill(color: string | GradientElement, opacity?: number, fillrule?: "nonzero" | "evenodd"): Canvas;
    private shouldDrawElement;
    drawElement(element: SimpleElement): Canvas;
    private shouldDefineElement;
    defineElement(element: GraphicalElement | DefOnlyElement): Canvas;
    highestWidth(): number;
    highestHeight(): number;
    toXML(): string;
    private contentArrayToXMLString;
    private indentContentXML;
}
export declare class Group extends StructuralElement {
    private members;
    private strokeFill;
    constructor(...members: SimpleElement[]);
    useFilter(filter: FilterContainer, canvas: Canvas): Group;
    setId(id: string): Group;
    addMembers(...members: SimpleElement[]): Group;
    setBorder(color: string | GradientElement, width?: number, opacity?: number, linecap?: "butt" | "round" | "square", linejoin?: "miter" | "round" | "bevel"): Group;
    setBorderDashing(...values: number[]): Group;
    setFill(color: string | GradientElement, opacity?: number, fillrule?: "nonzero" | "evenodd"): Group;
    highestHeight(): number;
    highestWidth(): number;
    toXML(): string[];
}
export declare class Use extends SimpleElement {
    private x;
    private y;
    private width;
    private height;
    private target;
    constructor(objectOrObjectId: SimpleElement | string);
    useFilter(filter: FilterContainer, canvas: Canvas): Use;
    setId(id: string): Use;
    setX(x: number): Use;
    setY(y: number): Use;
    setWidth(width: number): Use;
    setHeight(height: number): Use;
    highestHeight(): number;
    highestWidth(): number;
    toXML(): string;
}
export declare class FilterContainer extends DefOnlyElement {
    private x;
    private y;
    private width;
    private height;
    private filterUnits;
    private primitiveUnits;
    private members;
    constructor(name: string);
    setId(id: string): FilterContainer;
    setX(x: number): FilterContainer;
    setY(y: number): FilterContainer;
    setWidth(width: number): FilterContainer;
    setHeight(height: number): FilterContainer;
    setFilterUnits(filterUnits: "userSpaceOnUse" | "objectBoundingBox"): FilterContainer;
    setPrimitiveUnits(primitiveUnits: "userSpaceOnUse" | "objectBoundingBox"): FilterContainer;
    addFilter(filter: FilterElement): FilterContainer;
    useOnElement(element: SimpleElement, canvas: Canvas): FilterContainer;
    toXML(): string[];
}
