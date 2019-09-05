import { SimpleElement, EmptyElement, StrokeFillAttributes, safeSet, GraphicalElement, StructuralElement,
     subattrSet, customXMLable, globalIndent, DefOnlyElement, FilterElement, GradientElement, Element } from './base';
import * as fs from 'fs';
import * as log from './logging';

export class Canvas extends StructuralElement {

    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private viewbox: number[] = [];
    private preserveAspectRatio: string;
    private content: SimpleElement[] = [];
    private readonly xmlns: string = "http://www.w3.org/2000/svg";
    private strokeFill: StrokeFillAttributes = new StrokeFillAttributes(this);
    private definitions: Defs = new Defs();

    public constructor(width?: number, height?: number) {
        super();
        if (width === undefined || width === null || height === undefined || height === null)
            log.noCanvasDims();

        if (width === undefined) this.width = -1;
        else this.setWidth(width);
        if (height === undefined) this.height = -1;
        else this.setHeight(height);
    }

    public exportToFile(filename: string): void {
        fs.writeFile(filename, this.toXML(), (err) => {
            if (err) log.exportError(err);
        });
    }

    public useFilter(filter: FilterContainer, canvas: Canvas): Canvas {
        canvas.defineElement(filter);
        if (filter.href() === undefined) log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }

    public setId(id: string): Canvas {
        this.id = id;
        return this;
    }

    public setX(x: number): Canvas {
        return safeSet<Canvas>(this, "x", x);
    }

    public setY(y: number): Canvas {
        return safeSet<Canvas>(this, "y", y);
    }

    public setWidth(width: number): Canvas {
        return safeSet<Canvas>(this, "width", width);
    }

    public setHeight(height: number): Canvas {
        return safeSet<Canvas>(this, "height", height);
    }

    public setViewBox(...values: number[]): Canvas {
        if (values.length > 0) this.viewbox = values;
        return this;
    }

    public setAspectRatioPreservation(alignment: "none" | "xMinYMin" | "xMidYMin" | "xMaxYMin" | "xMinYMid" |
        "xMidYMid" | "xMaxYMid" | "xMinYMax" | "xMidYMax" | "xMaxYMax", strategy?: "meet" | "slice"): Canvas {
        this.preserveAspectRatio = `${alignment}${strategy === undefined ? "" : " " + strategy}`;
        return this;
    }

    public setBorder(color: string | GradientElement, width?: number, opacity?: number,
        linecap?: "butt" | "round" | "square", linejoin?: "miter" | "round" | "bevel"): Canvas {
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

    public setBorderDashing(...values: number[]): Canvas {
        if (values.length > 0) this.strokeFill.stroke_dasharray = values;
        return this;
    }

    public setFill(color: string | GradientElement, opacity?: number,
        fillrule?: "nonzero" | "evenodd"): Canvas {
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

    private shouldDrawElement(element: SimpleElement): boolean {
        //this will not stop the element from being drawn
        if (element.href() === undefined) return true;

        //the only thing that stops an element from being defined
        //is it being absolutely equal to another element outside of <defs>
        for (let elem of this.content) {
            if (elem.equals(element)) return false;
        }

        let ct: (SimpleElement | DefOnlyElement)[] = [];
        ct = ct.concat(this.content);
        ct = ct.concat(this.definitions.content);

        //warn of something having same id as something else (print log message)
        //however, it will never stop an element from being drawn
        for (let elem of ct) {
            if (elem.href() === element.href()) {
                log.repeatedHrefs(element.constructor.name, elem.constructor.name, element.href());
            }
        }
        
        return true;
    }

    public drawElement(element: SimpleElement): Canvas {
        if (this.shouldDrawElement(element)) this.content.push(element);
        return this;
    }

    private shouldDefineElement(element: SimpleElement | DefOnlyElement): boolean {
        //warn of something being defined with no id (print log message)
        //this will not stop the element from being defined
        if (element.href() === undefined) {
            log.noHrefDef(element.constructor.name);
            return true;
        }

        //the only thing that stops an element from being defined
        //is it being absolutely equal to another element in <defs>
        for (let elem of this.definitions.content) {
            if (elem.equals(element)) return false;
        }

        let ct: (SimpleElement | DefOnlyElement)[] = [];
        ct = ct.concat(this.content);
        ct = ct.concat(this.definitions.content);

        //warn of something having same id as something else (print log message)
        //however, this will not stop an element from being defined
        for (let elem of ct) {
            if (elem.href() === element.href()) {
                log.repeatedHrefs(element.constructor.name, elem.constructor.name, element.href());
                return true;
            }
        }

        return true;
    }

    public defineElement(element: GraphicalElement | DefOnlyElement): Canvas {
        if (this.shouldDefineElement(element)) this.definitions.addElement(element);    
        return this;
    }

    public highestWidth(): number {
        if (this.content.length === 0) return 0;
        else return Math.max(...this.content.map((object) => object.highestWidth()));
    }

    public highestHeight(): number {
        if (this.content.length === 0) return 0;
        else return Math.max(...this.content.map((object) => object.highestHeight()));
    }

    public toXML(): string {
        let fields = [{
            xmlns: this.xmlns,
            id: this.id,
            x: this.x,
            y: this.y,
            viewBox: this.viewbox.length > 0 ? this.viewbox.join(" ") : undefined,
            width: this.width === -1 ? this.highestWidth() : this.width,
            height: this.height === -1 ? this.highestHeight() : this.height,
            preserveAspectRatio: this.preserveAspectRatio,
            filter: this.filter
        }, this.strokeFill.getConfiguration()];

        let list: (SimpleElement | Defs)[];
        list = this.definitions.content.length > 0 ? [this.definitions, new EmptyElement()] : [];
        list.push(...this.content);

        return customXMLable("svg", fields, `\n${this.contentArrayToXMLString(list)}`);
    }

    private contentArrayToXMLString(array: (SimpleElement | Defs)[]): string {
        return array.map((object) => this.indentContentXML(object.toXML()).join("")).join("");
    }

    private indentContentXML(objectXML: string | string[]): string[] {
        if (typeof objectXML === "string")
            return [`${globalIndent}${objectXML}\n`];
        else
            return objectXML.map((element) => `${globalIndent}${element}\n`);
    }

}

export class Group extends StructuralElement {

    private members: SimpleElement[] = [];
    private strokeFill: StrokeFillAttributes = new StrokeFillAttributes(this);

    public constructor(...members: SimpleElement[]) {
        super();
        if (members === undefined || members === null) log.invalidGroupConstructor(members);
        this.addMembers(...members);
    }

    public useFilter(filter: FilterContainer, canvas: Canvas): Group {
        canvas.defineElement(filter);
        if (filter.href() === undefined) log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }

    public setId(id: string): Group {
        this.id = id;
        return this;
    }

    public addMembers(...members: SimpleElement[]): Group {
        for (let m of members) {
            if (m === undefined || m === null) log.invalidGroupMember(m);
            this.members.push(m);
        }
        return this;
    }

    public setBorder(color: string | GradientElement, width?: number, opacity?: number,
        linecap?: "butt" | "round" | "square", linejoin?: "miter" | "round" | "bevel"): Group {
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

    public setBorderDashing(...values: number[]): Group {
        if (values.length > 0) this.strokeFill.stroke_dasharray = values;
        return this;
    }

    public setFill(color: string | GradientElement, opacity?: number,
        fillrule?: "nonzero" | "evenodd"): Group {
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
        return Math.max(...this.members.map((m) => m.highestHeight()));
    }

    public highestWidth(): number {
        return Math.max(...this.members.map((m) => m.highestWidth()));
    }

    public toXML(): string[] {
        let fields = [{
            id: this.id,
            filter: this.filter,
        }, this.strokeFill.getConfiguration()];
        let xml = [customXMLable("g", fields, "", true)];
        for (let m of this.members) {
            let mxml = m.toXML();
            if (typeof mxml === "string") xml.push(`${globalIndent}${mxml}`);
            else xml.push(...mxml.map((line) => `${globalIndent}${line}`));
        }
        xml.push("</g>");
        return xml;
    }

}

export class Use extends SimpleElement {

    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private target: string;

    public constructor(objectOrObjectId: SimpleElement | string) {
        super();
        if (objectOrObjectId === undefined || objectOrObjectId === null) {
            log.badUseID(objectOrObjectId);
            return;
        }

        if (typeof objectOrObjectId === "string") this.target = objectOrObjectId;
        else this.target = objectOrObjectId.href();
    }

    public useFilter(filter: FilterContainer, canvas: Canvas): Use {
        canvas.defineElement(filter);
        if (filter.href() === undefined) log.usingUnnamedFilter(this.constructor.name);
        this.filter = `url(${filter.href()})`;
        return this;
    }

    public setId(id: string): Use {
        this.id = id;
        return this;
    }

    public setX(x: number): Use {
        return safeSet<Use>(this, "x", x);
    }

    public setY(y: number): Use {
        return safeSet<Use>(this, "y", y);
    }

    public setWidth(width: number): Use {
        return safeSet<Use>(this, "width", width);
    }

    public setHeight(height: number): Use {
        return safeSet<Use>(this, "height", height);
    }

    public highestHeight(): number {
        return 0; //no info if linked by id
    }

    public highestWidth(): number {
        return 0; //no info if linked by id
    }

    public toXML(): string {
        return customXMLable("use", [{
            id: this.id,
            href: this.target,
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            filter: this.filter
        }]);
    }
    
}

class Defs extends Element {

    public content: (GraphicalElement | DefOnlyElement)[] = [];

    public addElement(element: GraphicalElement | DefOnlyElement): void {
        this.content.push(element);
    }

    public highestHeight(): number {
        return 0; //no info
    }

    public highestWidth(): number {
        return 0; //no info
    }

    public toXML(): string[] {
        let xml = [customXMLable("defs", [], "", true)];
        for (let m of this.content) {
            let mxml = m.toXML();
            if (typeof mxml === "string") xml.push(`${globalIndent}${mxml}`);
            else xml.push(...mxml.map((line) => `${globalIndent}${line}`));
        }
        xml.push("</defs>");
        return xml;
    }

}

export class FilterContainer extends DefOnlyElement {

    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private filterUnits: "userSpaceOnUse" | "objectBoundingBox";
    private primitiveUnits: "userSpaceOnUse" | "objectBoundingBox";
    private members: FilterElement[] = [];

    public constructor(name: string) {
        super();
        if (name === undefined) log.noFilterName();
        this.id = name;
    }

    public setId(id: string): FilterContainer {
        this.id = id;
        return this;
    }

    public setX(x: number): FilterContainer {
        return safeSet<FilterContainer>(this, "x", x);
    }

    public setY(y: number): FilterContainer {
        return safeSet<FilterContainer>(this, "y", y);
    }

    public setWidth(width: number): FilterContainer {
        return safeSet<FilterContainer>(this, "width", width);
    }

    public setHeight(height: number): FilterContainer {
        return safeSet<FilterContainer>(this, "height", height);
    }

    public setFilterUnits(filterUnits: "userSpaceOnUse" | "objectBoundingBox"): FilterContainer {
        this.filterUnits = filterUnits;
        return this;
    }

    public setPrimitiveUnits(primitiveUnits: "userSpaceOnUse" | "objectBoundingBox"): FilterContainer {
        this.primitiveUnits = primitiveUnits;
        return this;
    }

    public addFilter(filter: FilterElement): FilterContainer {
        this.members.push(filter);
        return this;
    }

    public useOnElement(element: SimpleElement, canvas: Canvas): FilterContainer {
        element.useFilter(this, canvas);
        return this;
    }

    public toXML(): string[] {
        let xml = [customXMLable("filter", [{
            id: this.id,
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            filterUnits: this.filterUnits,
            primitiveUnits: this.primitiveUnits
        }], "", true)];
        for (let m of this.members) {
            let mxml = m.toXML();
            if (typeof mxml === "string") xml.push(`${globalIndent}${mxml}`);
            else xml.push(...mxml.map((line) => `${globalIndent}${line}`));
        }
        xml.push("</filter>");
        return xml;
    }

}