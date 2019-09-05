import { FilterContainer } from './structures';
import { Canvas } from './structures';
import * as log from './logging';

export abstract class Element {

    protected id: string;

    public equals(object: object): boolean {
        return equalObjects(this, object);
    }

    public toString(): string {
        return `${this.constructor.name} ${JSON.stringify(this, null, 2)}`;
    }

    public href(): string {
        return (this.id === undefined || this.id === null) ? undefined : `#${this.id}`;
    }

    public abstract toXML(): string | string[];
}

export abstract class DefOnlyElement extends Element { }

export abstract class GradientElement extends DefOnlyElement {

    public getId(): string {
        return this.id;
    }

}

export abstract class SimpleElement extends Element {

    protected filter: string;

    public abstract highestWidth(): number;
    public abstract highestHeight(): number;
    public abstract useFilter(filter: FilterContainer, canvas: Canvas): SimpleElement;
    
}

export abstract class StructuralElement extends SimpleElement { }

export abstract class GraphicalElement extends SimpleElement { }

export class EmptyElement extends SimpleElement {

    public highestWidth(): number {
        return 0;
    }

    public highestHeight(): number {
        return 0;
    }

    public toXML(): string | string[] {
        return "";
    }

    public useFilter(filter: FilterContainer, canvas: Canvas): SimpleElement {
        return this;
    }

}

export abstract class FilterElement {

    protected x: number;
    protected y: number;
    protected width: number;
    protected height: number;
    protected result: string;

    public abstract toXML(): string | string[];

    public getResultName(): string {
        return this.result;
    }
}

export class StrokeFillAttributes {

    public logName: string;
    public stroke: string;
    public stroke_width: number;
    public stroke_linecap: "butt" | "round" | "square";
    public stroke_linejoin: "miter" | "round" | "bevel";
    public stroke_opacity: number;
    public stroke_dasharray: number[] = [];
    public fill: string;
    public fill_opacity: number;
    public fill_rule: "nonzero" | "evenodd";

    public constructor(parent: SimpleElement) {
        this.logName = parent.constructor.name;
    }

    public getConfiguration(): object {
        return {
            stroke: this.stroke,
            stroke_width: this.stroke_width,
            stroke_opacity: this.stroke_opacity,
            stroke_linecap: this.stroke_linecap,
            stroke_linejoin: this.stroke_linejoin,
            stroke_dasharray: this.stroke_dasharray.length > 0 ? this.stroke_dasharray.join(",") : undefined,
            fill: this.fill,
            fill_opacity: this.fill_opacity,
            fill_rule: this.fill_rule
        };
    }
    
}

export function customXMLable(objectType: string, objects: object[], content?: string, noclose?: boolean): string {
    let str = `<${objectType}`;
    for (let obj of objects) {
        for (let f in obj) {
            if (obj[f] === undefined || obj[f] === null) continue;
            else str += ` ${f.replace(/_/g, "-")}="${obj[f]}"`;
        }
    }
    str += content === undefined ? `/>` : `>${content}`;
    if (content !== undefined && (noclose === undefined || !noclose)) str += `</${objectType}>`;
    return str;
}

export function safeSet<T>(object: T, property: string, value: number): T {
    //will search for a logName property in the object, used for logging errors
    if (value === undefined || value === null || isNaN(value) || value < 0)
        log.invalidValue(object["logName"] === undefined ? object.constructor.name : object["logName"], property, value);
    object[property] = value;
    return object;
}

export function subattrSet(object: any, property: string, value: number): void {
    //does not warn of undefined/null, unlike safeSet
    //will search for a logName property in the object, used for logging errors
    if (value !== undefined && value !== null && (isNaN(value) || value < 0))
        log.invalidValue(object["logName"] === undefined ? object.constructor.name : object["logName"], property, value);
    object[property] = value;
}

function equalObjects(object1: object, object2: object): boolean {
    if (object1.constructor.name !== object2.constructor.name) return false;

    let self = Object.keys(object1), other = Object.keys(object2);
    if (self.length !== other.length) return false;
    for (let key of self) {
        if (other.indexOf(key) === -1)
            return false; //key not found
        if (Array.isArray(object1[key]) && !equalArrays(object1[key], object2[key]))
            return false; //array comparison
        if (typeof object1[key] === "object" && !equalObjects(object1[key], object2[key]))
            return false; //recursive comparison of objects
        if (typeof object1[key] !== "object" && object1[key] !== object2[key])
            return false; //simple comparison
    }

    return true;
}

function equalArrays(array1: any[], array2: any[]): boolean {
    if (!Array.isArray(array2) || array1.length !== array2.length) return false;
    for (let entry in array1) {
        if (Array.isArray(array1[entry]) && !equalArrays(array1[entry], array2[entry]))
            return false; //recursive comparison of arrays
        if (typeof array1[entry] === "object" && !equalObjects(array1[entry], array2[entry]))
            return false; //object comparison
        if (typeof array1[entry] !== "object" && array1[entry] !== array2[entry])
            return false; //simple comparison
    }
    return true;
}

export const globalIndent = "  ";