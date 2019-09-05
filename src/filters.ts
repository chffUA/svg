import { FilterElement, safeSet, customXMLable, globalIndent } from './base';
import * as log from './logging';

export class BlendFilter extends FilterElement {

    private input: string;
    private input2: string;
    private mode: string;

    public setInput(input: FilterElement): BlendFilter {
        if (input === undefined) { log.undefinedFilterInput(this.constructor.name, "input"); return; }
        else if (input.getResultName() === undefined) log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }

    public setInput2(input: FilterElement): BlendFilter {
        if (input === undefined) { log.undefinedFilterInput(this.constructor.name, "input2"); return; }
        else if (input.getResultName() === undefined) log.noResultOnFilterInput(this.constructor.name, "input2");
        this.input2 = input.getResultName();
        return this;
    }

    public setMode(mode: "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" |
        "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity" ): BlendFilter {
        this.mode = mode;
        return this;
    }

    public setResultName(result: string): BlendFilter {
        this.result = result;
        return this;
    }

    public setX(x: number): BlendFilter {
        return safeSet<BlendFilter>(this, "x", x);
    }

    public setY(y: number): BlendFilter {
        return safeSet<BlendFilter>(this, "y", y);
    }

    public setWidth(width: number): BlendFilter {
        return safeSet<BlendFilter>(this, "width", width);
    }

    public setHeight(height: number): BlendFilter {
        return safeSet<BlendFilter>(this, "height", height);
    }

    public toXML(): string {
        return customXMLable("feBlend", [{
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            result: this.result,
            in: this.input,
            in2: this.input2,
            mode: this.mode
        }]);
    }

}

export class ColorMatrixFilter extends FilterElement {

    private input: string;
    private type: string;
    private values: number[] = [];

    public setInput(input: FilterElement): ColorMatrixFilter {
        if (input === undefined) { log.undefinedFilterInput(this.constructor.name, "input"); return; }
        else if (input.getResultName() === undefined) log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }

    public setValues(values: number[]): ColorMatrixFilter {
        this.values = values;
        return this;
    }

    public setType(type: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha"): ColorMatrixFilter {
        this.type = type;
        return this;
    }

    public setResultName(result: string): ColorMatrixFilter {
        this.result = result;
        return this;
    }

    public setX(x: number): ColorMatrixFilter {
        return safeSet<ColorMatrixFilter>(this, "x", x);
    }

    public setY(y: number): ColorMatrixFilter {
        return safeSet<ColorMatrixFilter>(this, "y", y);
    }

    public setWidth(width: number): ColorMatrixFilter {
        return safeSet<ColorMatrixFilter>(this, "width", width);
    }

    public setHeight(height: number): ColorMatrixFilter {
        return safeSet<ColorMatrixFilter>(this, "height", height);
    }

    public toXML(): string {
        return customXMLable("feColorMatrix", [{
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            result: this.result,
            in: this.input,
            type: this.type,
            values: this.values.length > 0 ? this.values.join(" ") : undefined
        }]);
    }

}

export class CompositeFilter extends FilterElement {

    private input: string;
    private input2: string;
    private operator: string;
    private k1: number;
    private k2: number;
    private k3: number;
    private k4: number;

    public setInput(input: FilterElement): CompositeFilter {
        if (input === undefined) { log.undefinedFilterInput(this.constructor.name, "input"); return; }
        else if (input.getResultName() === undefined) log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }

    public setInput2(input: FilterElement): CompositeFilter {
        if (input === undefined) { log.undefinedFilterInput(this.constructor.name, "input2"); return; }
        else if (input.getResultName() === undefined) log.noResultOnFilterInput(this.constructor.name, "input2");
        this.input2 = input.getResultName();
        return this;
    }

    public setKs(k1: number, k2: number, k3: number, k4: number): CompositeFilter {
        this.k1 = k1;
        this.k2 = k2;
        this.k3 = k3;
        this.k4 = k4;
        return this;
    }

    public setOperator(operator: "over" | "in" | "out" | "atop" | "xor" | "lighter" | "arithmetic"): CompositeFilter {
        this.operator = operator;
        return this;
    }

    public setResultName(result: string): CompositeFilter {
        this.result = result;
        return this;
    }

    public setX(x: number): CompositeFilter {
        return safeSet<CompositeFilter>(this, "x", x);
    }

    public setY(y: number): CompositeFilter {
        return safeSet<CompositeFilter>(this, "y", y);
    }

    public setWidth(width: number): CompositeFilter {
        return safeSet<CompositeFilter>(this, "width", width);
    }

    public setHeight(height: number): CompositeFilter {
        return safeSet<CompositeFilter>(this, "height", height);
    }

    public toXML(): string {
        return customXMLable("feComposite", [{
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            result: this.result,
            in: this.input,
            in2: this.input2,
            operator: this.operator,
            k1: this.k1,
            k2: this.k2,
            k3: this.k3,
            k4: this.k4
        }]);
    }

}

export class ConvolveMatrixFilter extends FilterElement {

    private input: string;
    private order: number;
    private kernelMatrix: number[];
    private divisor: number;
    private bias: number;
    private targetX: number;
    private targetY: number;
    private edgeMode: string;
    private preserveAlpha: boolean;

    public setInput(input: FilterElement): ConvolveMatrixFilter {
        if (input === undefined) { log.undefinedFilterInput(this.constructor.name, "input"); return; }
        else if (input.getResultName() === undefined) log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }

    public setOrder(order: number): ConvolveMatrixFilter {
        return safeSet<ConvolveMatrixFilter>(this, "order", order);
    }

    public setKernelMatrix(matrix: number[]): ConvolveMatrixFilter {
        this.kernelMatrix = matrix;
        return this;
    }

    public setDivisor(divisor: number): ConvolveMatrixFilter {
        this.divisor = divisor;
        return this;
    }

    public setBias(bias: number): ConvolveMatrixFilter {
        this.bias = bias;
        return this;
    }

    public setTargetX(targetX: number): ConvolveMatrixFilter {
        this.targetX = targetX;
        return this;
    }

    public setTargetY(targetY: number): ConvolveMatrixFilter {
        this.targetY = targetY;
        return this;
    }

    public setEdgeMode(mode: "duplicate" | "wrap" | "none"): ConvolveMatrixFilter {
        this.edgeMode = mode;
        return this;
    }

    public setAlphaPreservation(preserveAlpha: boolean): ConvolveMatrixFilter {
        this.preserveAlpha = preserveAlpha;
        return this;
    }

    public setResultName(result: string): ConvolveMatrixFilter {
        this.result = result;
        return this;
    }

    public setX(x: number): ConvolveMatrixFilter {
        return safeSet<ConvolveMatrixFilter>(this, "x", x);
    }

    public setY(y: number): ConvolveMatrixFilter {
        return safeSet<ConvolveMatrixFilter>(this, "y", y);
    }

    public setWidth(width: number): ConvolveMatrixFilter {
        return safeSet<ConvolveMatrixFilter>(this, "width", width);
    }

    public setHeight(height: number): ConvolveMatrixFilter {
        return safeSet<ConvolveMatrixFilter>(this, "height", height);
    }

    public toXML(): string {
        return customXMLable("feConvolveMatrix", [{
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            result: this.result,
            in: this.input,
            order: this.order,
            kernelMatrix: this.kernelMatrix.length > 0 ? this.kernelMatrix.join(" ") : undefined,
            divisor: this.divisor,
            bias: this.bias,
            targetX: this.targetX,
            targetY: this.targetY,
            edgeMode: this.edgeMode,
            preserveAlpha: this.preserveAlpha
        }]);
    }

}

export class DiffuseLightingFilter extends FilterElement {

    private input: string;
    private surfaceScale: number;
    private diffuseConstant: number;

    public setInput(input: FilterElement): DiffuseLightingFilter {
        if (input === undefined) { log.undefinedFilterInput(this.constructor.name, "input"); return; }
        else if (input.getResultName() === undefined) log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }

    public setSurfaceScale(surfaceScale: number): DiffuseLightingFilter {
        this.surfaceScale = surfaceScale;
        return this;
    }

    public setDiffuseConstant(diffuseConstant: number): DiffuseLightingFilter {
        this.diffuseConstant = diffuseConstant;
        return this;
    }

    public setResultName(result: string): DiffuseLightingFilter {
        this.result = result;
        return this;
    }

    public setX(x: number): DiffuseLightingFilter {
        return safeSet<DiffuseLightingFilter>(this, "x", x);
    }

    public setY(y: number): DiffuseLightingFilter {
        return safeSet<DiffuseLightingFilter>(this, "y", y);
    }

    public setWidth(width: number): DiffuseLightingFilter {
        return safeSet<DiffuseLightingFilter>(this, "width", width);
    }

    public setHeight(height: number): DiffuseLightingFilter {
        return safeSet<DiffuseLightingFilter>(this, "height", height);
    }

    public toXML(): string {
        return customXMLable("feDiffuseLighting", [{
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            result: this.result,
            in: this.input,
            surfaceScale: this.surfaceScale,
            diffuseConstant: this.diffuseConstant
        }]);
    }

}

export class DisplacementMapFilter extends FilterElement {

    private input: string;
    private input2: string;
    private scale: number;
    private xChannelSelector: string;
    private yChannelSelector: string;

    public setInput(input: FilterElement): DisplacementMapFilter {
        if (input === undefined) { log.undefinedFilterInput(this.constructor.name, "input"); return; }
        else if (input.getResultName() === undefined) log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }

    public setInput2(input: FilterElement): DisplacementMapFilter {
        if (input === undefined) { log.undefinedFilterInput(this.constructor.name, "input2"); return; }
        else if (input.getResultName() === undefined) log.noResultOnFilterInput(this.constructor.name, "input2");
        this.input2 = input.getResultName();
        return this;
    }

    public setScale(scale: number): DisplacementMapFilter {
        this.scale = scale;
        return this;
    }

    public setXChannelSelector(selector: "R" | "G" | "B" | "A"): DisplacementMapFilter {
        this.xChannelSelector = selector;
        return this;
    }

    public setYChannelSelector(selector: "R" | "G" | "B" | "A"): DisplacementMapFilter {
        this.yChannelSelector = selector;
        return this;
    }

    public setResultName(result: string): DisplacementMapFilter {
        this.result = result;
        return this;
    }

    public setX(x: number): DisplacementMapFilter {
        return safeSet<DisplacementMapFilter>(this, "x", x);
    }

    public setY(y: number): DisplacementMapFilter {
        return safeSet<DisplacementMapFilter>(this, "y", y);
    }

    public setWidth(width: number): DisplacementMapFilter {
        return safeSet<DisplacementMapFilter>(this, "width", width);
    }

    public setHeight(height: number): DisplacementMapFilter {
        return safeSet<DisplacementMapFilter>(this, "height", height);
    }

    public toXML(): string {
        return customXMLable("feDisplacementMap", [{
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            result: this.result,
            in: this.input,
            in2: this.input2,
            scale: this.scale,
            xChannelSelector: this.xChannelSelector,
            yChannelSelector: this.yChannelSelector
        }]);
    }

}

export class DropShadowFilter extends FilterElement {

    private dx: number;
    private dy: number;
    private stdDeviation: number;

    public setOffsetX(dx: number): DropShadowFilter {
        this.dx = dx;
        return this;
    }

    public setOffsetY(dy: number): DropShadowFilter {
        this.dy = dy;
        return this;
    }

    public setStandardDeviation(std: number): DropShadowFilter {
        this.stdDeviation = std;
        return this;
    }

    public setResultName(result: string): DropShadowFilter {
        this.result = result;
        return this;
    }

    public setX(x: number): DropShadowFilter {
        return safeSet<DropShadowFilter>(this, "x", x);
    }

    public setY(y: number): DropShadowFilter {
        return safeSet<DropShadowFilter>(this, "y", y);
    }

    public setWidth(width: number): DropShadowFilter {
        return safeSet<DropShadowFilter>(this, "width", width);
    }

    public setHeight(height: number): DropShadowFilter {
        return safeSet<DropShadowFilter>(this, "height", height);
    }

    public toXML(): string {
        return customXMLable("feDropShadow", [{
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            result: this.result,
            dx: this.dx,
            dy: this.dy,
            stdDeviation: this.stdDeviation
        }]);
    }

}

export class FloodFilter extends FilterElement {

    private flood_color: string;
    private flood_opacity: string;

    public setFloodColor(color: string): FloodFilter {
        this.flood_color = color;
        return this;
    }

    public setFloodOpacity(opacity: number): FloodFilter {
        return safeSet<FloodFilter>(this, "flood_opacity", opacity);
    }

    public setResultName(result: string): FloodFilter {
        this.result = result;
        return this;
    }

    public setX(x: number): FloodFilter {
        return safeSet<FloodFilter>(this, "x", x);
    }

    public setY(y: number): FloodFilter {
        return safeSet<FloodFilter>(this, "y", y);
    }

    public setWidth(width: number): FloodFilter {
        return safeSet<FloodFilter>(this, "width", width);
    }

    public setHeight(height: number): FloodFilter {
        return safeSet<FloodFilter>(this, "height", height);
    }

    public toXML(): string {
        return customXMLable("feFlood", [{
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            result: this.result,
            flood_color: this.flood_color,
            flood_opacity: this.flood_opacity
        }]);
    }

}

export class GaussianBlurFilter extends FilterElement {

    private input: string;
    private stdDeviation: number;
    private edgeMode: string;

    public setInput(input: FilterElement): GaussianBlurFilter {
        if (input === undefined) { log.undefinedFilterInput(this.constructor.name, "input"); return; }
        else if (input.getResultName() === undefined) log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }

    public setStandardDeviation(std: number): GaussianBlurFilter {
        this.stdDeviation = std;
        return this;
    }

    public setEdgeMode(mode: "duplicate" | "wrap" | "none"): GaussianBlurFilter {
        this.edgeMode = mode;
        return this;
    }

    public setResultName(result: string): GaussianBlurFilter {
        this.result = result;
        return this;
    }

    public setX(x: number): GaussianBlurFilter {
        return safeSet<GaussianBlurFilter>(this, "x", x);
    }

    public setY(y: number): GaussianBlurFilter {
        return safeSet<GaussianBlurFilter>(this, "y", y);
    }

    public setWidth(width: number): GaussianBlurFilter {
        return safeSet<GaussianBlurFilter>(this, "width", width);
    }

    public setHeight(height: number): GaussianBlurFilter {
        return safeSet<GaussianBlurFilter>(this, "height", height);
    }

    public toXML(): string {
        return customXMLable("feGaussianBlur", [{
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            result: this.result,
            in: this.input,
            stdDeviation: this.stdDeviation,
            edgeMode: this.edgeMode
        }]);
    }

}

export class ImageFilter extends FilterElement {

    private input: string;
    private xlink_href: string;
    private preserveAspectRatio: string;

    public setInput(input: FilterElement): ImageFilter {
        if (input === undefined) { log.undefinedFilterInput(this.constructor.name, "input"); return; }
        else if (input.getResultName() === undefined) log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }

    public setURL(url: string): ImageFilter {
        this.xlink_href = url;
        return this;
    }

    public setAspectRatioPreservation(alignment: "none" | "xMinYMin" | "xMidYMin" | "xMaxYMin" | "xMinYMid" |
        "xMidYMid" | "xMaxYMid" | "xMinYMax" | "xMidYMax" | "xMaxYMax", strategy?: "meet" | "slice"): ImageFilter {
        this.preserveAspectRatio = `${alignment}${strategy === undefined ? "" : " " + strategy}`;
        return this;
    }

    public setResultName(result: string): ImageFilter {
        this.result = result;
        return this;
    }

    public setX(x: number): ImageFilter {
        return safeSet<ImageFilter>(this, "x", x);
    }

    public setY(y: number): ImageFilter {
        return safeSet<ImageFilter>(this, "y", y);
    }

    public setWidth(width: number): ImageFilter {
        return safeSet<ImageFilter>(this, "width", width);
    }

    public setHeight(height: number): ImageFilter {
        return safeSet<ImageFilter>(this, "height", height);
    }

    public toXML(): string {
        return customXMLable("feImage", [{
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            result: this.result,
            in: this.input,
            href: this.xlink_href,
            preserveAspectRatio: this.preserveAspectRatio
        }]);
    }

}

export class MorphologyFilter extends FilterElement {

    private input: string;
    private operator: string;
    private radius: number;

    public setInput(input: FilterElement): MorphologyFilter {
        if (input === undefined) { log.undefinedFilterInput(this.constructor.name, "input"); return; }
        else if (input.getResultName() === undefined) log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }

    public setOperator(operator: "over" | "in" | "out" | "atop" | "xor" | "lighter" | "arithmetic"): MorphologyFilter {
        this.operator = operator;
        return this;
    }

    public setRadius(radius: number): MorphologyFilter {
        this.radius = radius;
        return this;
    }

    public setResultName(result: string): MorphologyFilter {
        this.result = result;
        return this;
    }

    public setX(x: number): MorphologyFilter {
        return safeSet<MorphologyFilter>(this, "x", x);
    }

    public setY(y: number): MorphologyFilter {
        return safeSet<MorphologyFilter>(this, "y", y);
    }

    public setWidth(width: number): MorphologyFilter {
        return safeSet<MorphologyFilter>(this, "width", width);
    }

    public setHeight(height: number): MorphologyFilter {
        return safeSet<MorphologyFilter>(this, "height", height);
    }

    public toXML(): string {
        return customXMLable("feMorphology", [{
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            result: this.result,
            in: this.input,
            operator: this.operator,
            radius: this.radius
        }]);
    }

}

export class OffsetFilter extends FilterElement {

    private input: string;
    private dx: number;
    private dy: number;

    public setInput(input: FilterElement): OffsetFilter {
        if (input === undefined) { log.undefinedFilterInput(this.constructor.name, "input"); return; }
        else if (input.getResultName() === undefined) log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }

    public setOffsetX(dx: number): OffsetFilter {
        this.dx = dx;
        return this;
    }

    public setOffsetY(dy: number): OffsetFilter {
        this.dy = dy;
        return this;
    }

    public setResultName(result: string): OffsetFilter {
        this.result = result;
        return this;
    }

    public setX(x: number): OffsetFilter {
        return safeSet<OffsetFilter>(this, "x", x);
    }

    public setY(y: number): OffsetFilter {
        return safeSet<OffsetFilter>(this, "y", y);
    }

    public setWidth(width: number): OffsetFilter {
        return safeSet<OffsetFilter>(this, "width", width);
    }

    public setHeight(height: number): OffsetFilter {
        return safeSet<OffsetFilter>(this, "height", height);
    }

    public toXML(): string {
        return customXMLable("feOffset", [{
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            result: this.result,
            in: this.input,
            dx: this.dx,
            dy: this.dy
        }]);
    }

}

export class TileFilter extends FilterElement {

    private input: string;

    public setInput(input: FilterElement): TileFilter {
        if (input === undefined) { log.undefinedFilterInput(this.constructor.name, "input"); return; }
        else if (input.getResultName() === undefined) log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }

    public setResultName(result: string): TileFilter {
        this.result = result;
        return this;
    }

    public setX(x: number): TileFilter {
        return safeSet<TileFilter>(this, "x", x);
    }

    public setY(y: number): TileFilter {
        return safeSet<TileFilter>(this, "y", y);
    }

    public setWidth(width: number): TileFilter {
        return safeSet<TileFilter>(this, "width", width);
    }

    public setHeight(height: number): TileFilter {
        return safeSet<TileFilter>(this, "height", height);
    }

    public toXML(): string {
        return customXMLable("feTile", [{
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            result: this.result,
            in: this.input
        }]);
    }

}

export class TurbulenceFilter extends FilterElement {

    private baseFrequency: number;
    private numOctaves: number;
    private seed: number;
    private stitchTiles: string;
    private type: string;

    public setBaseFrequency(baseFrequency: number): TurbulenceFilter {
        this.baseFrequency = baseFrequency;
        return this;
    }

    public setNumOctaves(numOctaves: number): TurbulenceFilter {
        this.numOctaves = numOctaves;
        return this;
    }

    public setSeed(seed: number): TurbulenceFilter {
        this.seed = seed;
        return this;
    }

    public setStitchTiles(stitchTiles: "noStitch" | "stitch"): TurbulenceFilter {
        this.stitchTiles = stitchTiles;
        return this;
    }

    public setType(type: "fractalNoise" | "turbulence"): TurbulenceFilter {
        this.type = type;
        return this;
    }

    public setResultName(result: string): TurbulenceFilter {
        this.result = result;
        return this;
    }

    public setX(x: number): TurbulenceFilter {
        return safeSet<TurbulenceFilter>(this, "x", x);
    }

    public setY(y: number): TurbulenceFilter {
        return safeSet<TurbulenceFilter>(this, "y", y);
    }

    public setWidth(width: number): TurbulenceFilter {
        return safeSet<TurbulenceFilter>(this, "width", width);
    }

    public setHeight(height: number): TurbulenceFilter {
        return safeSet<TurbulenceFilter>(this, "height", height);
    }

    public toXML(): string {
        return customXMLable("feTurbulence", [{
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            result: this.result,
            baseFrequency: this.baseFrequency,
            numOctaves: this.numOctaves,
            seed: this.seed,
            stitchTiles: this.stitchTiles,
            type: this.type
        }]);
    }

}

export class SpecularLightingFilter extends FilterElement {

    private input: string;
    private surfaceScale: number;
    private specularConstant: number;
    private specularExponent: number;
    private source: SpecularLightingSource;

    public setInput(input: FilterElement): SpecularLightingFilter {
        if (input === undefined) { log.undefinedFilterInput(this.constructor.name, "input"); return; }
        else if (input.getResultName() === undefined) log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }

    public setSurfaceScale(surfaceScale: number): SpecularLightingFilter {
        this.surfaceScale = surfaceScale;
        return this;
    }

    public setSpecularConstant(specularConstant: number): SpecularLightingFilter {
        this.specularConstant = specularConstant;
        return this;
    }

    public setSpecularExponent(specularExponent: number): SpecularLightingFilter {
        this.specularExponent = specularExponent;
        return this;
    }

    public setLightingSource(source: SpecularLightingSource): SpecularLightingFilter {
        this.source = source;
        return this;
    }

    public setResultName(result: string): SpecularLightingFilter {
        this.result = result;
        return this;
    }

    public setX(x: number): SpecularLightingFilter {
        return safeSet<SpecularLightingFilter>(this, "x", x);
    }

    public setY(y: number): SpecularLightingFilter {
        return safeSet<SpecularLightingFilter>(this, "y", y);
    }

    public setWidth(width: number): SpecularLightingFilter {
        return safeSet<SpecularLightingFilter>(this, "width", width);
    }

    public setHeight(height: number): SpecularLightingFilter {
        return safeSet<SpecularLightingFilter>(this, "height", height);
    }

    public toXML(): string[] {
        let fields = [{
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            result: this.result,
            in: this.input,
            surfaceScale: this.surfaceScale,
            specularConstant: this.specularConstant,
            specularExponent: this.specularExponent
        }];
        let xml = [customXMLable("feSpecularLighting", fields, "", true)];
        xml.push(`${globalIndent}${this.source.toXML()}`);
        xml.push("</feSpecularLighting>");
        return xml;
    }

}

abstract class SpecularLightingSource {

    public abstract toXML(): string;
}

export class DistantLightSource extends SpecularLightingSource {

    private azimuth: number;
    private elevation: number;

    public setAzimuth(azimuth: number): DistantLightSource {
        this.azimuth = azimuth;
        return this;
    }

    public setElevation(elevation: number): DistantLightSource {
        this.elevation = elevation;
        return this;
    }

    public toXML(): string {
        return customXMLable("feDistantLight", [{
            azimuth: this.azimuth,
            elevation: this.elevation
        }]);
    }
}

export class PointLightSource extends SpecularLightingSource {

    private x: number;
    private y: number;
    private z: number;

    public setX(x: number): PointLightSource {
        this.x = x;
        return this;
    }

    public setY(y: number): PointLightSource {
        this.y = y;
        return this;
    }

    public setZ(z: number): PointLightSource {
        this.z = z;
        return this;
    }

    public toXML(): string {
        return customXMLable("fePointLight", [{
            x: this.x,
            y: this.y,
            z: this.z
        }]);
    }
}

export class SpotLightSource extends SpecularLightingSource {

    private x: number;
    private y: number;
    private z: number;
    private pointsAtX: number;
    private pointsAtY: number;
    private pointsAtZ: number;
    private specularExponent: number;
    private limitingConeAngle: number;

    public setX(x: number): SpotLightSource {
        this.x = x;
        return this;
    }

    public setY(y: number): SpotLightSource {
        this.y = y;
        return this;
    }

    public setZ(z: number): SpotLightSource {
        this.z = z;
        return this;
    }

    public setPointsAtX(pointsAtX: number): SpotLightSource {
        this.pointsAtX = pointsAtX;
        return this;
    }

    public setPointsAtY(pointsAtY: number): SpotLightSource {
        this.pointsAtY = pointsAtY;
        return this;
    }

    public setPointsAtZ(pointsAtZ: number): SpotLightSource {
        this.pointsAtZ = pointsAtZ;
        return this;
    }

    public setSpecularExponent(specularExponent: number): SpotLightSource {
        this.specularExponent = specularExponent;
        return this;
    }

    public setLimitingConeAngle(limitingConeAngle: number): SpotLightSource {
        this.limitingConeAngle = limitingConeAngle;
        return this;
    }

    public toXML(): string {
        return customXMLable("feSpotLight", [{
            x: this.x,
            y: this.y,
            z: this.z,
            pointsAtX: this.pointsAtX,
            pointsAtY: this.pointsAtY,
            pointsAtZ: this.pointsAtZ,
            specularExponent: this.specularExponent,
            limitingConeAngle: this.limitingConeAngle
        }]);
    }
}

export class MergeFilter extends FilterElement {

    private mergeNodes: MergeNode[] = [];

    public addMergeNode(mergeNode: MergeNode): MergeFilter {
        this.mergeNodes.push(mergeNode);
        return this;
    }

    public setResultName(result: string): MergeFilter {
        this.result = result;
        return this;
    }

    public setX(x: number): MergeFilter {
        return safeSet<MergeFilter>(this, "x", x);
    }

    public setY(y: number): MergeFilter {
        return safeSet<MergeFilter>(this, "y", y);
    }

    public setWidth(width: number): MergeFilter {
        return safeSet<MergeFilter>(this, "width", width);
    }

    public setHeight(height: number): MergeFilter {
        return safeSet<MergeFilter>(this, "height", height);
    }

    public toXML(): string[] {
        let xml = [customXMLable("feMerge", [], "", true)];
        for (let m of this.mergeNodes)
            xml.push(`${globalIndent}${m.toXML()}`);
        xml.push("</feMerge>");
        return xml;
    }

}

export class MergeNode {
    
    private input: string;

    public constructor(input: FilterElement) {
        this.setInput(input);
    }

    public setInput(input: FilterElement): MergeNode {
        if (input === undefined) { log.undefinedFilterInput(this.constructor.name, "input"); return; }
        else if (input.getResultName() === undefined) log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }

    public toXML(): string {
        return customXMLable("feMergeNode", [{
            in: this.input
        }]);
    }
}

export class ComponentTransferFilter extends FilterElement {

    private input: string;
    private functions: TransferFunction[] = [];

    public addTransferFunction(transferFunction: TransferFunction): ComponentTransferFilter {
        this.functions.push(transferFunction);
        return this;
    }

    public setInput(input: FilterElement): ComponentTransferFilter {
        if (input === undefined) { log.undefinedFilterInput(this.constructor.name, "input"); return; }
        else if (input.getResultName() === undefined) log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }

    public setResultName(result: string): ComponentTransferFilter {
        this.result = result;
        return this;
    }

    public setX(x: number): ComponentTransferFilter {
        return safeSet<ComponentTransferFilter>(this, "x", x);
    }

    public setY(y: number): ComponentTransferFilter {
        return safeSet<ComponentTransferFilter>(this, "y", y);
    }

    public setWidth(width: number): ComponentTransferFilter {
        return safeSet<ComponentTransferFilter>(this, "width", width);
    }

    public setHeight(height: number): ComponentTransferFilter {
        return safeSet<ComponentTransferFilter>(this, "height", height);
    }

    public toXML(): string[] {
        let xml = [customXMLable("feComponentTransfer", [{
            in: this.input
        }], "", true)];
        for (let m of this.functions)
            xml.push(`${globalIndent}${m.toXML()}`);
        xml.push("</feComponentTransfer>");
        return xml;
    }

}

abstract class TransferFunction {

    protected type: string;
    protected intercept: number;
    protected amplitude: number;
    protected exponent: number;

    public abstract toXML(): string;
}

export class TransferFunctionA extends TransferFunction {

    public setType(type: "identity" | "table" | "discrete" | "linear" | "gamma"): TransferFunctionA {
        this.type = type;
        return this;
    }

    public setAmplitude(amplitude: number): TransferFunctionA {
        this.amplitude = amplitude;
        return this;
    }

    public setExponent(exponent: number): TransferFunctionA {
        this.exponent = exponent;
        return this;
    }

    public setIntercept(intercept: number): TransferFunctionA {
        this.intercept = intercept;
        return this;
    }

    public toXML(): string {
        return customXMLable("feFuncA", [{
            type: this.type,
            intercept: this.intercept,
            amplitude: this.amplitude,
            exponent: this.exponent
        }]);
    }
}

export class TransferFunctionR extends TransferFunction {

    public setType(type: "identity" | "table" | "discrete" | "linear" | "gamma"): TransferFunctionR {
        this.type = type;
        return this;
    }

    public setAmplitude(amplitude: number): TransferFunctionR {
        this.amplitude = amplitude;
        return this;
    }

    public setExponent(exponent: number): TransferFunctionR {
        this.exponent = exponent;
        return this;
    }

    public setIntercept(intercept: number): TransferFunctionR {
        this.intercept = intercept;
        return this;
    }

    public toXML(): string {
        return customXMLable("feFuncR", [{
            type: this.type,
            intercept: this.intercept,
            amplitude: this.amplitude,
            exponent: this.exponent
        }]);
    }
}

export class TransferFunctionG extends TransferFunction {

    public setType(type: "identity" | "table" | "discrete" | "linear" | "gamma"): TransferFunctionG {
        this.type = type;
        return this;
    }

    public setAmplitude(amplitude: number): TransferFunctionG {
        this.amplitude = amplitude;
        return this;
    }

    public setExponent(exponent: number): TransferFunctionG {
        this.exponent = exponent;
        return this;
    }

    public setIntercept(intercept: number): TransferFunctionG {
        this.intercept = intercept;
        return this;
    }

    public toXML(): string {
        return customXMLable("feFuncG", [{
            type: this.type,
            intercept: this.intercept,
            amplitude: this.amplitude,
            exponent: this.exponent
        }]);
    }
}

export class TransferFunctionB extends TransferFunction {

    public setType(type: "identity" | "table" | "discrete" | "linear" | "gamma"): TransferFunctionB {
        this.type = type;
        return this;
    }

    public setAmplitude(amplitude: number): TransferFunctionB {
        this.amplitude = amplitude;
        return this;
    }

    public setExponent(exponent: number): TransferFunctionB {
        this.exponent = exponent;
        return this;
    }

    public setIntercept(intercept: number): TransferFunctionB {
        this.intercept = intercept;
        return this;
    }

    public toXML(): string {
        return customXMLable("feFuncB", [{
            type: this.type,
            intercept: this.intercept,
            amplitude: this.amplitude,
            exponent: this.exponent
        }]);
    }
}