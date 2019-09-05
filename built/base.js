"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log = require("./logging");
class Element {
    equals(object) {
        return equalObjects(this, object);
    }
    toString() {
        return `${this.constructor.name} ${JSON.stringify(this, null, 2)}`;
    }
    href() {
        return (this.id === undefined || this.id === null) ? undefined : `#${this.id}`;
    }
}
exports.Element = Element;
class DefOnlyElement extends Element {
}
exports.DefOnlyElement = DefOnlyElement;
class GradientElement extends DefOnlyElement {
    getId() {
        return this.id;
    }
}
exports.GradientElement = GradientElement;
class SimpleElement extends Element {
}
exports.SimpleElement = SimpleElement;
class StructuralElement extends SimpleElement {
}
exports.StructuralElement = StructuralElement;
class GraphicalElement extends SimpleElement {
}
exports.GraphicalElement = GraphicalElement;
class EmptyElement extends SimpleElement {
    highestWidth() {
        return 0;
    }
    highestHeight() {
        return 0;
    }
    toXML() {
        return "";
    }
    useFilter(filter, canvas) {
        return this;
    }
}
exports.EmptyElement = EmptyElement;
class FilterElement {
    getResultName() {
        return this.result;
    }
}
exports.FilterElement = FilterElement;
class StrokeFillAttributes {
    constructor(parent) {
        this.stroke_dasharray = [];
        this.logName = parent.constructor.name;
    }
    getConfiguration() {
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
exports.StrokeFillAttributes = StrokeFillAttributes;
function customXMLable(objectType, objects, content, noclose) {
    let str = `<${objectType}`;
    for (let obj of objects) {
        for (let f in obj) {
            if (obj[f] === undefined || obj[f] === null)
                continue;
            else
                str += ` ${f.replace(/_/g, "-")}="${obj[f]}"`;
        }
    }
    str += content === undefined ? `/>` : `>${content}`;
    if (content !== undefined && (noclose === undefined || !noclose))
        str += `</${objectType}>`;
    return str;
}
exports.customXMLable = customXMLable;
function safeSet(object, property, value) {
    //will search for a logName property in the object, used for logging errors
    if (value === undefined || value === null || isNaN(value) || value < 0)
        log.invalidValue(object["logName"] === undefined ? object.constructor.name : object["logName"], property, value);
    object[property] = value;
    return object;
}
exports.safeSet = safeSet;
function subattrSet(object, property, value) {
    //does not warn of undefined/null, unlike safeSet
    //will search for a logName property in the object, used for logging errors
    if (value !== undefined && value !== null && (isNaN(value) || value < 0))
        log.invalidValue(object["logName"] === undefined ? object.constructor.name : object["logName"], property, value);
    object[property] = value;
}
exports.subattrSet = subattrSet;
function equalObjects(object1, object2) {
    if (object1.constructor.name !== object2.constructor.name)
        return false;
    let self = Object.keys(object1), other = Object.keys(object2);
    if (self.length !== other.length)
        return false;
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
function equalArrays(array1, array2) {
    if (!Array.isArray(array2) || array1.length !== array2.length)
        return false;
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
exports.globalIndent = "  ";
