import { FilterElement } from './base';
export declare class BlendFilter extends FilterElement {
    private input;
    private input2;
    private mode;
    setInput(input: FilterElement): BlendFilter;
    setInput2(input: FilterElement): BlendFilter;
    setMode(mode: "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity"): BlendFilter;
    setResultName(result: string): BlendFilter;
    setX(x: number): BlendFilter;
    setY(y: number): BlendFilter;
    setWidth(width: number): BlendFilter;
    setHeight(height: number): BlendFilter;
    toXML(): string;
}
export declare class ColorMatrixFilter extends FilterElement {
    private input;
    private type;
    private values;
    setInput(input: FilterElement): ColorMatrixFilter;
    setValues(values: number[]): ColorMatrixFilter;
    setType(type: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha"): ColorMatrixFilter;
    setResultName(result: string): ColorMatrixFilter;
    setX(x: number): ColorMatrixFilter;
    setY(y: number): ColorMatrixFilter;
    setWidth(width: number): ColorMatrixFilter;
    setHeight(height: number): ColorMatrixFilter;
    toXML(): string;
}
export declare class CompositeFilter extends FilterElement {
    private input;
    private input2;
    private operator;
    private k1;
    private k2;
    private k3;
    private k4;
    setInput(input: FilterElement): CompositeFilter;
    setInput2(input: FilterElement): CompositeFilter;
    setKs(k1: number, k2: number, k3: number, k4: number): CompositeFilter;
    setOperator(operator: "over" | "in" | "out" | "atop" | "xor" | "lighter" | "arithmetic"): CompositeFilter;
    setResultName(result: string): CompositeFilter;
    setX(x: number): CompositeFilter;
    setY(y: number): CompositeFilter;
    setWidth(width: number): CompositeFilter;
    setHeight(height: number): CompositeFilter;
    toXML(): string;
}
export declare class ConvolveMatrixFilter extends FilterElement {
    private input;
    private order;
    private kernelMatrix;
    private divisor;
    private bias;
    private targetX;
    private targetY;
    private edgeMode;
    private preserveAlpha;
    setInput(input: FilterElement): ConvolveMatrixFilter;
    setOrder(order: number): ConvolveMatrixFilter;
    setKernelMatrix(matrix: number[]): ConvolveMatrixFilter;
    setDivisor(divisor: number): ConvolveMatrixFilter;
    setBias(bias: number): ConvolveMatrixFilter;
    setTargetX(targetX: number): ConvolveMatrixFilter;
    setTargetY(targetY: number): ConvolveMatrixFilter;
    setEdgeMode(mode: "duplicate" | "wrap" | "none"): ConvolveMatrixFilter;
    setAlphaPreservation(preserveAlpha: boolean): ConvolveMatrixFilter;
    setResultName(result: string): ConvolveMatrixFilter;
    setX(x: number): ConvolveMatrixFilter;
    setY(y: number): ConvolveMatrixFilter;
    setWidth(width: number): ConvolveMatrixFilter;
    setHeight(height: number): ConvolveMatrixFilter;
    toXML(): string;
}
export declare class DiffuseLightingFilter extends FilterElement {
    private input;
    private surfaceScale;
    private diffuseConstant;
    setInput(input: FilterElement): DiffuseLightingFilter;
    setSurfaceScale(surfaceScale: number): DiffuseLightingFilter;
    setDiffuseConstant(diffuseConstant: number): DiffuseLightingFilter;
    setResultName(result: string): DiffuseLightingFilter;
    setX(x: number): DiffuseLightingFilter;
    setY(y: number): DiffuseLightingFilter;
    setWidth(width: number): DiffuseLightingFilter;
    setHeight(height: number): DiffuseLightingFilter;
    toXML(): string;
}
export declare class DisplacementMapFilter extends FilterElement {
    private input;
    private input2;
    private scale;
    private xChannelSelector;
    private yChannelSelector;
    setInput(input: FilterElement): DisplacementMapFilter;
    setInput2(input: FilterElement): DisplacementMapFilter;
    setScale(scale: number): DisplacementMapFilter;
    setXChannelSelector(selector: "R" | "G" | "B" | "A"): DisplacementMapFilter;
    setYChannelSelector(selector: "R" | "G" | "B" | "A"): DisplacementMapFilter;
    setResultName(result: string): DisplacementMapFilter;
    setX(x: number): DisplacementMapFilter;
    setY(y: number): DisplacementMapFilter;
    setWidth(width: number): DisplacementMapFilter;
    setHeight(height: number): DisplacementMapFilter;
    toXML(): string;
}
export declare class DropShadowFilter extends FilterElement {
    private dx;
    private dy;
    private stdDeviation;
    setOffsetX(dx: number): DropShadowFilter;
    setOffsetY(dy: number): DropShadowFilter;
    setStandardDeviation(std: number): DropShadowFilter;
    setResultName(result: string): DropShadowFilter;
    setX(x: number): DropShadowFilter;
    setY(y: number): DropShadowFilter;
    setWidth(width: number): DropShadowFilter;
    setHeight(height: number): DropShadowFilter;
    toXML(): string;
}
export declare class FloodFilter extends FilterElement {
    private flood_color;
    private flood_opacity;
    setFloodColor(color: string): FloodFilter;
    setFloodOpacity(opacity: number): FloodFilter;
    setResultName(result: string): FloodFilter;
    setX(x: number): FloodFilter;
    setY(y: number): FloodFilter;
    setWidth(width: number): FloodFilter;
    setHeight(height: number): FloodFilter;
    toXML(): string;
}
export declare class GaussianBlurFilter extends FilterElement {
    private input;
    private stdDeviation;
    private edgeMode;
    setInput(input: FilterElement): GaussianBlurFilter;
    setStandardDeviation(std: number): GaussianBlurFilter;
    setEdgeMode(mode: "duplicate" | "wrap" | "none"): GaussianBlurFilter;
    setResultName(result: string): GaussianBlurFilter;
    setX(x: number): GaussianBlurFilter;
    setY(y: number): GaussianBlurFilter;
    setWidth(width: number): GaussianBlurFilter;
    setHeight(height: number): GaussianBlurFilter;
    toXML(): string;
}
export declare class ImageFilter extends FilterElement {
    private input;
    private xlink_href;
    private preserveAspectRatio;
    setInput(input: FilterElement): ImageFilter;
    setURL(url: string): ImageFilter;
    setAspectRatioPreservation(alignment: "none" | "xMinYMin" | "xMidYMin" | "xMaxYMin" | "xMinYMid" | "xMidYMid" | "xMaxYMid" | "xMinYMax" | "xMidYMax" | "xMaxYMax", strategy?: "meet" | "slice"): ImageFilter;
    setResultName(result: string): ImageFilter;
    setX(x: number): ImageFilter;
    setY(y: number): ImageFilter;
    setWidth(width: number): ImageFilter;
    setHeight(height: number): ImageFilter;
    toXML(): string;
}
export declare class MorphologyFilter extends FilterElement {
    private input;
    private operator;
    private radius;
    setInput(input: FilterElement): MorphologyFilter;
    setOperator(operator: "over" | "in" | "out" | "atop" | "xor" | "lighter" | "arithmetic"): MorphologyFilter;
    setRadius(radius: number): MorphologyFilter;
    setResultName(result: string): MorphologyFilter;
    setX(x: number): MorphologyFilter;
    setY(y: number): MorphologyFilter;
    setWidth(width: number): MorphologyFilter;
    setHeight(height: number): MorphologyFilter;
    toXML(): string;
}
export declare class OffsetFilter extends FilterElement {
    private input;
    private dx;
    private dy;
    setInput(input: FilterElement): OffsetFilter;
    setOffsetX(dx: number): OffsetFilter;
    setOffsetY(dy: number): OffsetFilter;
    setResultName(result: string): OffsetFilter;
    setX(x: number): OffsetFilter;
    setY(y: number): OffsetFilter;
    setWidth(width: number): OffsetFilter;
    setHeight(height: number): OffsetFilter;
    toXML(): string;
}
export declare class TileFilter extends FilterElement {
    private input;
    setInput(input: FilterElement): TileFilter;
    setResultName(result: string): TileFilter;
    setX(x: number): TileFilter;
    setY(y: number): TileFilter;
    setWidth(width: number): TileFilter;
    setHeight(height: number): TileFilter;
    toXML(): string;
}
export declare class TurbulenceFilter extends FilterElement {
    private baseFrequency;
    private numOctaves;
    private seed;
    private stitchTiles;
    private type;
    setBaseFrequency(baseFrequency: number): TurbulenceFilter;
    setNumOctaves(numOctaves: number): TurbulenceFilter;
    setSeed(seed: number): TurbulenceFilter;
    setStitchTiles(stitchTiles: "noStitch" | "stitch"): TurbulenceFilter;
    setType(type: "fractalNoise" | "turbulence"): TurbulenceFilter;
    setResultName(result: string): TurbulenceFilter;
    setX(x: number): TurbulenceFilter;
    setY(y: number): TurbulenceFilter;
    setWidth(width: number): TurbulenceFilter;
    setHeight(height: number): TurbulenceFilter;
    toXML(): string;
}
export declare class SpecularLightingFilter extends FilterElement {
    private input;
    private surfaceScale;
    private specularConstant;
    private specularExponent;
    private source;
    setInput(input: FilterElement): SpecularLightingFilter;
    setSurfaceScale(surfaceScale: number): SpecularLightingFilter;
    setSpecularConstant(specularConstant: number): SpecularLightingFilter;
    setSpecularExponent(specularExponent: number): SpecularLightingFilter;
    setLightingSource(source: SpecularLightingSource): SpecularLightingFilter;
    setResultName(result: string): SpecularLightingFilter;
    setX(x: number): SpecularLightingFilter;
    setY(y: number): SpecularLightingFilter;
    setWidth(width: number): SpecularLightingFilter;
    setHeight(height: number): SpecularLightingFilter;
    toXML(): string[];
}
declare abstract class SpecularLightingSource {
    abstract toXML(): string;
}
export declare class DistantLightSource extends SpecularLightingSource {
    private azimuth;
    private elevation;
    setAzimuth(azimuth: number): DistantLightSource;
    setElevation(elevation: number): DistantLightSource;
    toXML(): string;
}
export declare class PointLightSource extends SpecularLightingSource {
    private x;
    private y;
    private z;
    setX(x: number): PointLightSource;
    setY(y: number): PointLightSource;
    setZ(z: number): PointLightSource;
    toXML(): string;
}
export declare class SpotLightSource extends SpecularLightingSource {
    private x;
    private y;
    private z;
    private pointsAtX;
    private pointsAtY;
    private pointsAtZ;
    private specularExponent;
    private limitingConeAngle;
    setX(x: number): SpotLightSource;
    setY(y: number): SpotLightSource;
    setZ(z: number): SpotLightSource;
    setPointsAtX(pointsAtX: number): SpotLightSource;
    setPointsAtY(pointsAtY: number): SpotLightSource;
    setPointsAtZ(pointsAtZ: number): SpotLightSource;
    setSpecularExponent(specularExponent: number): SpotLightSource;
    setLimitingConeAngle(limitingConeAngle: number): SpotLightSource;
    toXML(): string;
}
export declare class MergeFilter extends FilterElement {
    private mergeNodes;
    addMergeNode(mergeNode: MergeNode): MergeFilter;
    setResultName(result: string): MergeFilter;
    setX(x: number): MergeFilter;
    setY(y: number): MergeFilter;
    setWidth(width: number): MergeFilter;
    setHeight(height: number): MergeFilter;
    toXML(): string[];
}
export declare class MergeNode {
    private input;
    constructor(input: FilterElement);
    setInput(input: FilterElement): MergeNode;
    toXML(): string;
}
export declare class ComponentTransferFilter extends FilterElement {
    private input;
    private functions;
    addTransferFunction(transferFunction: TransferFunction): ComponentTransferFilter;
    setInput(input: FilterElement): ComponentTransferFilter;
    setResultName(result: string): ComponentTransferFilter;
    setX(x: number): ComponentTransferFilter;
    setY(y: number): ComponentTransferFilter;
    setWidth(width: number): ComponentTransferFilter;
    setHeight(height: number): ComponentTransferFilter;
    toXML(): string[];
}
declare abstract class TransferFunction {
    protected type: string;
    protected intercept: number;
    protected amplitude: number;
    protected exponent: number;
    abstract toXML(): string;
}
export declare class TransferFunctionA extends TransferFunction {
    setType(type: "identity" | "table" | "discrete" | "linear" | "gamma"): TransferFunctionA;
    setAmplitude(amplitude: number): TransferFunctionA;
    setExponent(exponent: number): TransferFunctionA;
    setIntercept(intercept: number): TransferFunctionA;
    toXML(): string;
}
export declare class TransferFunctionR extends TransferFunction {
    setType(type: "identity" | "table" | "discrete" | "linear" | "gamma"): TransferFunctionR;
    setAmplitude(amplitude: number): TransferFunctionR;
    setExponent(exponent: number): TransferFunctionR;
    setIntercept(intercept: number): TransferFunctionR;
    toXML(): string;
}
export declare class TransferFunctionG extends TransferFunction {
    setType(type: "identity" | "table" | "discrete" | "linear" | "gamma"): TransferFunctionG;
    setAmplitude(amplitude: number): TransferFunctionG;
    setExponent(exponent: number): TransferFunctionG;
    setIntercept(intercept: number): TransferFunctionG;
    toXML(): string;
}
export declare class TransferFunctionB extends TransferFunction {
    setType(type: "identity" | "table" | "discrete" | "linear" | "gamma"): TransferFunctionB;
    setAmplitude(amplitude: number): TransferFunctionB;
    setExponent(exponent: number): TransferFunctionB;
    setIntercept(intercept: number): TransferFunctionB;
    toXML(): string;
}
export {};
