import { FilterContainer } from './structures';
import { Canvas } from './structures';
export declare abstract class Element {
    protected id: string;
    equals(object: object): boolean;
    toString(): string;
    href(): string;
    abstract toXML(): string | string[];
}
export declare abstract class DefOnlyElement extends Element {
}
export declare abstract class GradientElement extends DefOnlyElement {
    getId(): string;
}
export declare abstract class SimpleElement extends Element {
    protected filter: string;
    abstract highestWidth(): number;
    abstract highestHeight(): number;
    abstract useFilter(filter: FilterContainer, canvas: Canvas): SimpleElement;
}
export declare abstract class StructuralElement extends SimpleElement {
}
export declare abstract class GraphicalElement extends SimpleElement {
}
export declare class EmptyElement extends SimpleElement {
    highestWidth(): number;
    highestHeight(): number;
    toXML(): string | string[];
    useFilter(filter: FilterContainer, canvas: Canvas): SimpleElement;
}
export declare abstract class FilterElement {
    protected x: number;
    protected y: number;
    protected width: number;
    protected height: number;
    protected result: string;
    abstract toXML(): string | string[];
    getResultName(): string;
}
export declare class StrokeFillAttributes {
    logName: string;
    stroke: string;
    stroke_width: number;
    stroke_linecap: "butt" | "round" | "square";
    stroke_linejoin: "miter" | "round" | "bevel";
    stroke_opacity: number;
    stroke_dasharray: number[];
    fill: string;
    fill_opacity: number;
    fill_rule: "nonzero" | "evenodd";
    constructor(parent: SimpleElement);
    getConfiguration(): object;
}
export declare function customXMLable(objectType: string, objects: object[], content?: string, noclose?: boolean): string;
export declare function safeSet<T>(object: T, property: string, value: number): T;
export declare function subattrSet(object: any, property: string, value: number): void;
export declare const globalIndent = "  ";
