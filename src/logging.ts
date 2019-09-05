import * as c from '../extras/console-colors';

export function exportError(err: NodeJS.ErrnoException): void {
    error(`Exporting a ${green("Canvas")} element failed. ${err.message}`);
};

export function noCanvasDims(): void {
    log(`The ${green("Canvas")} was initialized without specifying all dimensions. ` +
        `The ${green("Canvas")} dimension estimates may be inaccurate.`);
};

export function noIdOnGradientInput(objectType: string): void {
    log(`A ${green(objectType)} element was given a gradient with an undefined ${gray("id")} as ` +
        `${gray("href")}. This may cause problems.`);
};

export function noResultOnFilterInput(objectType: string, input: string): void {
    log(`A ${green(objectType)} element was given a filter with an undefined ${gray("result")} as ` +
    `${gray(input)}. This may cause problems.`);
};

export function undefinedFilterInput(objectType: string, input: string): void {
    log(`A ${green(objectType)} element was given an undefined filter as ${gray(input)}. ` +
        `This may cause problems.`);
};

export function usingUnnamedGradient(objectType: string): void {
    log(`A ${green(objectType)} element was given a gradient with an undefined ${gray("id")}. ` +
        `This may cause problems.`);
};

export function usingUnnamedFilter(objectType: string): void {
    log(`A ${green(objectType)} element was given a filter with an undefined ${gray("id")}. ` +
        `This may cause problems.`);
};

export function noFilterName(): void {
    log(`A ${green("FilterContainer")} element was instantiated with an undefined ${gray("id")}. ` +
        `This may cause problems.`);
};

export function noHrefDef(objectType: string): void {
    log(`A ${green(objectType)} element with an undefined ${gray("id")} was added to the ${green("Canvas")} ` +
        `definitions. This means the element can't be referenced.`);
};

export function repeatedHrefs(objectType1: string, objectType2: string, value: string): void {
    log(`The ${gray("id")} of a ${green(objectType1)} element (${gray(value)}) is already being used ` +
    `by a ${green(objectType2)} element in the ${green("Canvas")}. This may cause problems.`);
};

export function invalidValue(objectType: string, property: string, value: any): void {
    log(`Property ${gray(property)} of a ${green(objectType)} element was given the invalid `+
        `value ${gray(value)}.`);
};

export function invalidAbsPathValue(objectType: string, property: string, value: any): void {
    log(`Property ${gray(property)} of an absolute ${green(objectType)} command of a `+
        `${green("Path")} element was given the invalid value ${gray(value)}.`);
};

export function invalidPathValue(objectType: string, property: string, value: any): void {
    log(`Property ${gray(property)} of a ${green(objectType)} command of a ` +
        `${green("Path")} element was given the invalid value ${gray(value)}.`);
};

export function invalidPolyValue(objectType: string, property: string, value: any): void {
    log(`Property ${gray(property)} of a ${green("Point")} of a ` +
        `${green(objectType)} element was given the invalid value ${gray(value)}.`);
};

export function invalidGroupConstructor(value: any): void {
    log(`A ${green("Group")} element was initialized with an invalid set of members: ${value}. ` +
        `This may cause problems.`);
};

export function invalidGroupMember(value: any): void {
    log(`The invalid member ${gray(value)} was added to a ${green("Group")} element. This may cause problems.`);
};

export function badUseID(value: any): void {
    log(`Invalid target ${gray(value)} selected for a ${green("Use")} element. This may cause problems.`);
};

function log(t: string): void {
    console.log(`${yellow("Warning: ")}${t}`);
}

function error(t: string): void {
    console.log(`${red("Error: ")}${t}`);
}

function gray(t: string) {
    return c.format({ text: "gray" }, t);
}

function red(t: string) {
    return c.format({ text: "ruby" }, t);
}

function green(t: string) {
    return c.format({ text: "green" }, t);
}

function yellow(t: string) {
    return c.format({ text: "yellow" }, t)
}