/// <reference types="node" />
export declare function exportError(err: NodeJS.ErrnoException): void;
export declare function noCanvasDims(): void;
export declare function noIdOnGradientInput(objectType: string): void;
export declare function noResultOnFilterInput(objectType: string, input: string): void;
export declare function undefinedFilterInput(objectType: string, input: string): void;
export declare function usingUnnamedGradient(objectType: string): void;
export declare function usingUnnamedFilter(objectType: string): void;
export declare function noFilterName(): void;
export declare function noHrefDef(objectType: string): void;
export declare function repeatedHrefs(objectType1: string, objectType2: string, value: string): void;
export declare function invalidValue(objectType: string, property: string, value: any): void;
export declare function invalidAbsPathValue(objectType: string, property: string, value: any): void;
export declare function invalidPathValue(objectType: string, property: string, value: any): void;
export declare function invalidPolyValue(objectType: string, property: string, value: any): void;
export declare function invalidGroupConstructor(value: any): void;
export declare function invalidGroupMember(value: any): void;
export declare function badUseID(value: any): void;
