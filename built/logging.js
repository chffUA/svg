"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const c = require("../extras/console-colors");
function exportError(err) {
    error(`Exporting a ${green("Canvas")} element failed. ${err.message}`);
}
exports.exportError = exportError;
;
function noCanvasDims() {
    log(`The ${green("Canvas")} was initialized without specifying all dimensions. ` +
        `The ${green("Canvas")} dimension estimates may be inaccurate.`);
}
exports.noCanvasDims = noCanvasDims;
;
function noIdOnGradientInput(objectType) {
    log(`A ${green(objectType)} element was given a gradient with an undefined ${gray("id")} as ` +
        `${gray("href")}. This may cause problems.`);
}
exports.noIdOnGradientInput = noIdOnGradientInput;
;
function noResultOnFilterInput(objectType, input) {
    log(`A ${green(objectType)} element was given a filter with an undefined ${gray("result")} as ` +
        `${gray(input)}. This may cause problems.`);
}
exports.noResultOnFilterInput = noResultOnFilterInput;
;
function undefinedFilterInput(objectType, input) {
    log(`A ${green(objectType)} element was given an undefined filter as ${gray(input)}. ` +
        `This may cause problems.`);
}
exports.undefinedFilterInput = undefinedFilterInput;
;
function usingUnnamedGradient(objectType) {
    log(`A ${green(objectType)} element was given a gradient with an undefined ${gray("id")}. ` +
        `This may cause problems.`);
}
exports.usingUnnamedGradient = usingUnnamedGradient;
;
function usingUnnamedFilter(objectType) {
    log(`A ${green(objectType)} element was given a filter with an undefined ${gray("id")}. ` +
        `This may cause problems.`);
}
exports.usingUnnamedFilter = usingUnnamedFilter;
;
function noFilterName() {
    log(`A ${green("FilterContainer")} element was instantiated with an undefined ${gray("id")}. ` +
        `This may cause problems.`);
}
exports.noFilterName = noFilterName;
;
function noHrefDef(objectType) {
    log(`A ${green(objectType)} element with an undefined ${gray("id")} was added to the ${green("Canvas")} ` +
        `definitions. This means the element can't be referenced.`);
}
exports.noHrefDef = noHrefDef;
;
function repeatedHrefs(objectType1, objectType2, value) {
    log(`The ${gray("id")} of a ${green(objectType1)} element (${gray(value)}) is already being used ` +
        `by a ${green(objectType2)} element in the ${green("Canvas")}. This may cause problems.`);
}
exports.repeatedHrefs = repeatedHrefs;
;
function invalidValue(objectType, property, value) {
    log(`Property ${gray(property)} of a ${green(objectType)} element was given the invalid ` +
        `value ${gray(value)}.`);
}
exports.invalidValue = invalidValue;
;
function invalidAbsPathValue(objectType, property, value) {
    log(`Property ${gray(property)} of an absolute ${green(objectType)} command of a ` +
        `${green("Path")} element was given the invalid value ${gray(value)}.`);
}
exports.invalidAbsPathValue = invalidAbsPathValue;
;
function invalidPathValue(objectType, property, value) {
    log(`Property ${gray(property)} of a ${green(objectType)} command of a ` +
        `${green("Path")} element was given the invalid value ${gray(value)}.`);
}
exports.invalidPathValue = invalidPathValue;
;
function invalidPolyValue(objectType, property, value) {
    log(`Property ${gray(property)} of a ${green("Point")} of a ` +
        `${green(objectType)} element was given the invalid value ${gray(value)}.`);
}
exports.invalidPolyValue = invalidPolyValue;
;
function invalidGroupConstructor(value) {
    log(`A ${green("Group")} element was initialized with an invalid set of members: ${value}. ` +
        `This may cause problems.`);
}
exports.invalidGroupConstructor = invalidGroupConstructor;
;
function invalidGroupMember(value) {
    log(`The invalid member ${gray(value)} was added to a ${green("Group")} element. This may cause problems.`);
}
exports.invalidGroupMember = invalidGroupMember;
;
function badUseID(value) {
    log(`Invalid target ${gray(value)} selected for a ${green("Use")} element. This may cause problems.`);
}
exports.badUseID = badUseID;
;
function log(t) {
    console.log(`${yellow("Warning: ")}${t}`);
}
function error(t) {
    console.log(`${red("Error: ")}${t}`);
}
function gray(t) {
    return c.format({ text: "gray" }, t);
}
function red(t) {
    return c.format({ text: "ruby" }, t);
}
function green(t) {
    return c.format({ text: "green" }, t);
}
function yellow(t) {
    return c.format({ text: "yellow" }, t);
}
