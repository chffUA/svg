"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const fs = require("fs");
const log = require("./logging");
class Canvas extends base_1.StructuralElement {
    constructor(width, height) {
        super();
        this.viewbox = [];
        this.content = [];
        this.xmlns = "http://www.w3.org/2000/svg";
        this.strokeFill = new base_1.StrokeFillAttributes(this);
        this.definitions = new Defs();
        if (width === undefined || width === null || height === undefined || height === null)
            log.noCanvasDims();
        if (width === undefined)
            this.width = -1;
        else
            this.setWidth(width);
        if (height === undefined)
            this.height = -1;
        else
            this.setHeight(height);
    }
    exportToFile(filename) {
        fs.writeFile(filename, this.toXML(), (err) => {
            if (err)
                log.exportError(err);
        });
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
    setViewBox(...values) {
        if (values.length > 0)
            this.viewbox = values;
        return this;
    }
    setAspectRatioPreservation(alignment, strategy) {
        this.preserveAspectRatio = `${alignment}${strategy === undefined ? "" : " " + strategy}`;
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
    shouldDrawElement(element) {
        //this will not stop the element from being drawn
        if (element.href() === undefined)
            return true;
        //the only thing that stops an element from being defined
        //is it being absolutely equal to another element outside of <defs>
        for (let elem of this.content) {
            if (elem.equals(element))
                return false;
        }
        let ct = [];
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
    drawElement(element) {
        if (this.shouldDrawElement(element))
            this.content.push(element);
        return this;
    }
    shouldDefineElement(element) {
        //warn of something being defined with no id (print log message)
        //this will not stop the element from being defined
        if (element.href() === undefined) {
            log.noHrefDef(element.constructor.name);
            return true;
        }
        //the only thing that stops an element from being defined
        //is it being absolutely equal to another element in <defs>
        for (let elem of this.definitions.content) {
            if (elem.equals(element))
                return false;
        }
        let ct = [];
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
    defineElement(element) {
        if (this.shouldDefineElement(element))
            this.definitions.addElement(element);
        return this;
    }
    highestWidth() {
        if (this.content.length === 0)
            return 0;
        else
            return Math.max(...this.content.map((object) => object.highestWidth()));
    }
    highestHeight() {
        if (this.content.length === 0)
            return 0;
        else
            return Math.max(...this.content.map((object) => object.highestHeight()));
    }
    toXML() {
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
        let list;
        list = this.definitions.content.length > 0 ? [this.definitions, new base_1.EmptyElement()] : [];
        list.push(...this.content);
        return base_1.customXMLable("svg", fields, `\n${this.contentArrayToXMLString(list)}`);
    }
    contentArrayToXMLString(array) {
        return array.map((object) => this.indentContentXML(object.toXML()).join("")).join("");
    }
    indentContentXML(objectXML) {
        if (typeof objectXML === "string")
            return [`${base_1.globalIndent}${objectXML}\n`];
        else
            return objectXML.map((element) => `${base_1.globalIndent}${element}\n`);
    }
}
exports.Canvas = Canvas;
class Group extends base_1.StructuralElement {
    constructor(...members) {
        super();
        this.members = [];
        this.strokeFill = new base_1.StrokeFillAttributes(this);
        if (members === undefined || members === null)
            log.invalidGroupConstructor(members);
        this.addMembers(...members);
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
    addMembers(...members) {
        for (let m of members) {
            if (m === undefined || m === null)
                log.invalidGroupMember(m);
            this.members.push(m);
        }
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
        return Math.max(...this.members.map((m) => m.highestHeight()));
    }
    highestWidth() {
        return Math.max(...this.members.map((m) => m.highestWidth()));
    }
    toXML() {
        let fields = [{
                id: this.id,
                filter: this.filter,
            }, this.strokeFill.getConfiguration()];
        let xml = [base_1.customXMLable("g", fields, "", true)];
        for (let m of this.members) {
            let mxml = m.toXML();
            if (typeof mxml === "string")
                xml.push(`${base_1.globalIndent}${mxml}`);
            else
                xml.push(...mxml.map((line) => `${base_1.globalIndent}${line}`));
        }
        xml.push("</g>");
        return xml;
    }
}
exports.Group = Group;
class Use extends base_1.SimpleElement {
    constructor(objectOrObjectId) {
        super();
        if (objectOrObjectId === undefined || objectOrObjectId === null) {
            log.badUseID(objectOrObjectId);
            return;
        }
        if (typeof objectOrObjectId === "string")
            this.target = objectOrObjectId;
        else
            this.target = objectOrObjectId.href();
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
    highestHeight() {
        return 0; //no info if linked by id
    }
    highestWidth() {
        return 0; //no info if linked by id
    }
    toXML() {
        return base_1.customXMLable("use", [{
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
exports.Use = Use;
class Defs extends base_1.Element {
    constructor() {
        super(...arguments);
        this.content = [];
    }
    addElement(element) {
        this.content.push(element);
    }
    highestHeight() {
        return 0; //no info
    }
    highestWidth() {
        return 0; //no info
    }
    toXML() {
        let xml = [base_1.customXMLable("defs", [], "", true)];
        for (let m of this.content) {
            let mxml = m.toXML();
            if (typeof mxml === "string")
                xml.push(`${base_1.globalIndent}${mxml}`);
            else
                xml.push(...mxml.map((line) => `${base_1.globalIndent}${line}`));
        }
        xml.push("</defs>");
        return xml;
    }
}
class FilterContainer extends base_1.DefOnlyElement {
    constructor(name) {
        super();
        this.members = [];
        if (name === undefined)
            log.noFilterName();
        this.id = name;
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
    setFilterUnits(filterUnits) {
        this.filterUnits = filterUnits;
        return this;
    }
    setPrimitiveUnits(primitiveUnits) {
        this.primitiveUnits = primitiveUnits;
        return this;
    }
    addFilter(filter) {
        this.members.push(filter);
        return this;
    }
    useOnElement(element, canvas) {
        element.useFilter(this, canvas);
        return this;
    }
    toXML() {
        let xml = [base_1.customXMLable("filter", [{
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
            if (typeof mxml === "string")
                xml.push(`${base_1.globalIndent}${mxml}`);
            else
                xml.push(...mxml.map((line) => `${base_1.globalIndent}${line}`));
        }
        xml.push("</filter>");
        return xml;
    }
}
exports.FilterContainer = FilterContainer;
