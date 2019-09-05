"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const log = require("./logging");
class BlendFilter extends base_1.FilterElement {
    setInput(input) {
        if (input === undefined) {
            log.undefinedFilterInput(this.constructor.name, "input");
            return;
        }
        else if (input.getResultName() === undefined)
            log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }
    setInput2(input) {
        if (input === undefined) {
            log.undefinedFilterInput(this.constructor.name, "input2");
            return;
        }
        else if (input.getResultName() === undefined)
            log.noResultOnFilterInput(this.constructor.name, "input2");
        this.input2 = input.getResultName();
        return this;
    }
    setMode(mode) {
        this.mode = mode;
        return this;
    }
    setResultName(result) {
        this.result = result;
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
    toXML() {
        return base_1.customXMLable("feBlend", [{
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
exports.BlendFilter = BlendFilter;
class ColorMatrixFilter extends base_1.FilterElement {
    constructor() {
        super(...arguments);
        this.values = [];
    }
    setInput(input) {
        if (input === undefined) {
            log.undefinedFilterInput(this.constructor.name, "input");
            return;
        }
        else if (input.getResultName() === undefined)
            log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }
    setValues(values) {
        this.values = values;
        return this;
    }
    setType(type) {
        this.type = type;
        return this;
    }
    setResultName(result) {
        this.result = result;
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
    toXML() {
        return base_1.customXMLable("feColorMatrix", [{
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
exports.ColorMatrixFilter = ColorMatrixFilter;
class CompositeFilter extends base_1.FilterElement {
    setInput(input) {
        if (input === undefined) {
            log.undefinedFilterInput(this.constructor.name, "input");
            return;
        }
        else if (input.getResultName() === undefined)
            log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }
    setInput2(input) {
        if (input === undefined) {
            log.undefinedFilterInput(this.constructor.name, "input2");
            return;
        }
        else if (input.getResultName() === undefined)
            log.noResultOnFilterInput(this.constructor.name, "input2");
        this.input2 = input.getResultName();
        return this;
    }
    setKs(k1, k2, k3, k4) {
        this.k1 = k1;
        this.k2 = k2;
        this.k3 = k3;
        this.k4 = k4;
        return this;
    }
    setOperator(operator) {
        this.operator = operator;
        return this;
    }
    setResultName(result) {
        this.result = result;
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
    toXML() {
        return base_1.customXMLable("feComposite", [{
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
exports.CompositeFilter = CompositeFilter;
class ConvolveMatrixFilter extends base_1.FilterElement {
    setInput(input) {
        if (input === undefined) {
            log.undefinedFilterInput(this.constructor.name, "input");
            return;
        }
        else if (input.getResultName() === undefined)
            log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }
    setOrder(order) {
        return base_1.safeSet(this, "order", order);
    }
    setKernelMatrix(matrix) {
        this.kernelMatrix = matrix;
        return this;
    }
    setDivisor(divisor) {
        this.divisor = divisor;
        return this;
    }
    setBias(bias) {
        this.bias = bias;
        return this;
    }
    setTargetX(targetX) {
        this.targetX = targetX;
        return this;
    }
    setTargetY(targetY) {
        this.targetY = targetY;
        return this;
    }
    setEdgeMode(mode) {
        this.edgeMode = mode;
        return this;
    }
    setAlphaPreservation(preserveAlpha) {
        this.preserveAlpha = preserveAlpha;
        return this;
    }
    setResultName(result) {
        this.result = result;
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
    toXML() {
        return base_1.customXMLable("feConvolveMatrix", [{
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
exports.ConvolveMatrixFilter = ConvolveMatrixFilter;
class DiffuseLightingFilter extends base_1.FilterElement {
    setInput(input) {
        if (input === undefined) {
            log.undefinedFilterInput(this.constructor.name, "input");
            return;
        }
        else if (input.getResultName() === undefined)
            log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }
    setSurfaceScale(surfaceScale) {
        this.surfaceScale = surfaceScale;
        return this;
    }
    setDiffuseConstant(diffuseConstant) {
        this.diffuseConstant = diffuseConstant;
        return this;
    }
    setResultName(result) {
        this.result = result;
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
    toXML() {
        return base_1.customXMLable("feDiffuseLighting", [{
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
exports.DiffuseLightingFilter = DiffuseLightingFilter;
class DisplacementMapFilter extends base_1.FilterElement {
    setInput(input) {
        if (input === undefined) {
            log.undefinedFilterInput(this.constructor.name, "input");
            return;
        }
        else if (input.getResultName() === undefined)
            log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }
    setInput2(input) {
        if (input === undefined) {
            log.undefinedFilterInput(this.constructor.name, "input2");
            return;
        }
        else if (input.getResultName() === undefined)
            log.noResultOnFilterInput(this.constructor.name, "input2");
        this.input2 = input.getResultName();
        return this;
    }
    setScale(scale) {
        this.scale = scale;
        return this;
    }
    setXChannelSelector(selector) {
        this.xChannelSelector = selector;
        return this;
    }
    setYChannelSelector(selector) {
        this.yChannelSelector = selector;
        return this;
    }
    setResultName(result) {
        this.result = result;
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
    toXML() {
        return base_1.customXMLable("feDisplacementMap", [{
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
exports.DisplacementMapFilter = DisplacementMapFilter;
class DropShadowFilter extends base_1.FilterElement {
    setOffsetX(dx) {
        this.dx = dx;
        return this;
    }
    setOffsetY(dy) {
        this.dy = dy;
        return this;
    }
    setStandardDeviation(std) {
        this.stdDeviation = std;
        return this;
    }
    setResultName(result) {
        this.result = result;
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
    toXML() {
        return base_1.customXMLable("feDropShadow", [{
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
exports.DropShadowFilter = DropShadowFilter;
class FloodFilter extends base_1.FilterElement {
    setFloodColor(color) {
        this.flood_color = color;
        return this;
    }
    setFloodOpacity(opacity) {
        return base_1.safeSet(this, "flood_opacity", opacity);
    }
    setResultName(result) {
        this.result = result;
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
    toXML() {
        return base_1.customXMLable("feFlood", [{
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
exports.FloodFilter = FloodFilter;
class GaussianBlurFilter extends base_1.FilterElement {
    setInput(input) {
        if (input === undefined) {
            log.undefinedFilterInput(this.constructor.name, "input");
            return;
        }
        else if (input.getResultName() === undefined)
            log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }
    setStandardDeviation(std) {
        this.stdDeviation = std;
        return this;
    }
    setEdgeMode(mode) {
        this.edgeMode = mode;
        return this;
    }
    setResultName(result) {
        this.result = result;
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
    toXML() {
        return base_1.customXMLable("feGaussianBlur", [{
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
exports.GaussianBlurFilter = GaussianBlurFilter;
class ImageFilter extends base_1.FilterElement {
    setInput(input) {
        if (input === undefined) {
            log.undefinedFilterInput(this.constructor.name, "input");
            return;
        }
        else if (input.getResultName() === undefined)
            log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }
    setURL(url) {
        this.xlink_href = url;
        return this;
    }
    setAspectRatioPreservation(alignment, strategy) {
        this.preserveAspectRatio = `${alignment}${strategy === undefined ? "" : " " + strategy}`;
        return this;
    }
    setResultName(result) {
        this.result = result;
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
    toXML() {
        return base_1.customXMLable("feImage", [{
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
exports.ImageFilter = ImageFilter;
class MorphologyFilter extends base_1.FilterElement {
    setInput(input) {
        if (input === undefined) {
            log.undefinedFilterInput(this.constructor.name, "input");
            return;
        }
        else if (input.getResultName() === undefined)
            log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }
    setOperator(operator) {
        this.operator = operator;
        return this;
    }
    setRadius(radius) {
        this.radius = radius;
        return this;
    }
    setResultName(result) {
        this.result = result;
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
    toXML() {
        return base_1.customXMLable("feMorphology", [{
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
exports.MorphologyFilter = MorphologyFilter;
class OffsetFilter extends base_1.FilterElement {
    setInput(input) {
        if (input === undefined) {
            log.undefinedFilterInput(this.constructor.name, "input");
            return;
        }
        else if (input.getResultName() === undefined)
            log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }
    setOffsetX(dx) {
        this.dx = dx;
        return this;
    }
    setOffsetY(dy) {
        this.dy = dy;
        return this;
    }
    setResultName(result) {
        this.result = result;
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
    toXML() {
        return base_1.customXMLable("feOffset", [{
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
exports.OffsetFilter = OffsetFilter;
class TileFilter extends base_1.FilterElement {
    setInput(input) {
        if (input === undefined) {
            log.undefinedFilterInput(this.constructor.name, "input");
            return;
        }
        else if (input.getResultName() === undefined)
            log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }
    setResultName(result) {
        this.result = result;
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
    toXML() {
        return base_1.customXMLable("feTile", [{
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height,
                result: this.result,
                in: this.input
            }]);
    }
}
exports.TileFilter = TileFilter;
class TurbulenceFilter extends base_1.FilterElement {
    setBaseFrequency(baseFrequency) {
        this.baseFrequency = baseFrequency;
        return this;
    }
    setNumOctaves(numOctaves) {
        this.numOctaves = numOctaves;
        return this;
    }
    setSeed(seed) {
        this.seed = seed;
        return this;
    }
    setStitchTiles(stitchTiles) {
        this.stitchTiles = stitchTiles;
        return this;
    }
    setType(type) {
        this.type = type;
        return this;
    }
    setResultName(result) {
        this.result = result;
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
    toXML() {
        return base_1.customXMLable("feTurbulence", [{
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
exports.TurbulenceFilter = TurbulenceFilter;
class SpecularLightingFilter extends base_1.FilterElement {
    setInput(input) {
        if (input === undefined) {
            log.undefinedFilterInput(this.constructor.name, "input");
            return;
        }
        else if (input.getResultName() === undefined)
            log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }
    setSurfaceScale(surfaceScale) {
        this.surfaceScale = surfaceScale;
        return this;
    }
    setSpecularConstant(specularConstant) {
        this.specularConstant = specularConstant;
        return this;
    }
    setSpecularExponent(specularExponent) {
        this.specularExponent = specularExponent;
        return this;
    }
    setLightingSource(source) {
        this.source = source;
        return this;
    }
    setResultName(result) {
        this.result = result;
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
    toXML() {
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
        let xml = [base_1.customXMLable("feSpecularLighting", fields, "", true)];
        xml.push(`${base_1.globalIndent}${this.source.toXML()}`);
        xml.push("</feSpecularLighting>");
        return xml;
    }
}
exports.SpecularLightingFilter = SpecularLightingFilter;
class SpecularLightingSource {
}
class DistantLightSource extends SpecularLightingSource {
    setAzimuth(azimuth) {
        this.azimuth = azimuth;
        return this;
    }
    setElevation(elevation) {
        this.elevation = elevation;
        return this;
    }
    toXML() {
        return base_1.customXMLable("feDistantLight", [{
                azimuth: this.azimuth,
                elevation: this.elevation
            }]);
    }
}
exports.DistantLightSource = DistantLightSource;
class PointLightSource extends SpecularLightingSource {
    setX(x) {
        this.x = x;
        return this;
    }
    setY(y) {
        this.y = y;
        return this;
    }
    setZ(z) {
        this.z = z;
        return this;
    }
    toXML() {
        return base_1.customXMLable("fePointLight", [{
                x: this.x,
                y: this.y,
                z: this.z
            }]);
    }
}
exports.PointLightSource = PointLightSource;
class SpotLightSource extends SpecularLightingSource {
    setX(x) {
        this.x = x;
        return this;
    }
    setY(y) {
        this.y = y;
        return this;
    }
    setZ(z) {
        this.z = z;
        return this;
    }
    setPointsAtX(pointsAtX) {
        this.pointsAtX = pointsAtX;
        return this;
    }
    setPointsAtY(pointsAtY) {
        this.pointsAtY = pointsAtY;
        return this;
    }
    setPointsAtZ(pointsAtZ) {
        this.pointsAtZ = pointsAtZ;
        return this;
    }
    setSpecularExponent(specularExponent) {
        this.specularExponent = specularExponent;
        return this;
    }
    setLimitingConeAngle(limitingConeAngle) {
        this.limitingConeAngle = limitingConeAngle;
        return this;
    }
    toXML() {
        return base_1.customXMLable("feSpotLight", [{
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
exports.SpotLightSource = SpotLightSource;
class MergeFilter extends base_1.FilterElement {
    constructor() {
        super(...arguments);
        this.mergeNodes = [];
    }
    addMergeNode(mergeNode) {
        this.mergeNodes.push(mergeNode);
        return this;
    }
    setResultName(result) {
        this.result = result;
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
    toXML() {
        let xml = [base_1.customXMLable("feMerge", [], "", true)];
        for (let m of this.mergeNodes)
            xml.push(`${base_1.globalIndent}${m.toXML()}`);
        xml.push("</feMerge>");
        return xml;
    }
}
exports.MergeFilter = MergeFilter;
class MergeNode {
    constructor(input) {
        this.setInput(input);
    }
    setInput(input) {
        if (input === undefined) {
            log.undefinedFilterInput(this.constructor.name, "input");
            return;
        }
        else if (input.getResultName() === undefined)
            log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }
    toXML() {
        return base_1.customXMLable("feMergeNode", [{
                in: this.input
            }]);
    }
}
exports.MergeNode = MergeNode;
class ComponentTransferFilter extends base_1.FilterElement {
    constructor() {
        super(...arguments);
        this.functions = [];
    }
    addTransferFunction(transferFunction) {
        this.functions.push(transferFunction);
        return this;
    }
    setInput(input) {
        if (input === undefined) {
            log.undefinedFilterInput(this.constructor.name, "input");
            return;
        }
        else if (input.getResultName() === undefined)
            log.noResultOnFilterInput(this.constructor.name, "input");
        this.input = input.getResultName();
        return this;
    }
    setResultName(result) {
        this.result = result;
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
    toXML() {
        let xml = [base_1.customXMLable("feComponentTransfer", [{
                    in: this.input
                }], "", true)];
        for (let m of this.functions)
            xml.push(`${base_1.globalIndent}${m.toXML()}`);
        xml.push("</feComponentTransfer>");
        return xml;
    }
}
exports.ComponentTransferFilter = ComponentTransferFilter;
class TransferFunction {
}
class TransferFunctionA extends TransferFunction {
    setType(type) {
        this.type = type;
        return this;
    }
    setAmplitude(amplitude) {
        this.amplitude = amplitude;
        return this;
    }
    setExponent(exponent) {
        this.exponent = exponent;
        return this;
    }
    setIntercept(intercept) {
        this.intercept = intercept;
        return this;
    }
    toXML() {
        return base_1.customXMLable("feFuncA", [{
                type: this.type,
                intercept: this.intercept,
                amplitude: this.amplitude,
                exponent: this.exponent
            }]);
    }
}
exports.TransferFunctionA = TransferFunctionA;
class TransferFunctionR extends TransferFunction {
    setType(type) {
        this.type = type;
        return this;
    }
    setAmplitude(amplitude) {
        this.amplitude = amplitude;
        return this;
    }
    setExponent(exponent) {
        this.exponent = exponent;
        return this;
    }
    setIntercept(intercept) {
        this.intercept = intercept;
        return this;
    }
    toXML() {
        return base_1.customXMLable("feFuncR", [{
                type: this.type,
                intercept: this.intercept,
                amplitude: this.amplitude,
                exponent: this.exponent
            }]);
    }
}
exports.TransferFunctionR = TransferFunctionR;
class TransferFunctionG extends TransferFunction {
    setType(type) {
        this.type = type;
        return this;
    }
    setAmplitude(amplitude) {
        this.amplitude = amplitude;
        return this;
    }
    setExponent(exponent) {
        this.exponent = exponent;
        return this;
    }
    setIntercept(intercept) {
        this.intercept = intercept;
        return this;
    }
    toXML() {
        return base_1.customXMLable("feFuncG", [{
                type: this.type,
                intercept: this.intercept,
                amplitude: this.amplitude,
                exponent: this.exponent
            }]);
    }
}
exports.TransferFunctionG = TransferFunctionG;
class TransferFunctionB extends TransferFunction {
    setType(type) {
        this.type = type;
        return this;
    }
    setAmplitude(amplitude) {
        this.amplitude = amplitude;
        return this;
    }
    setExponent(exponent) {
        this.exponent = exponent;
        return this;
    }
    setIntercept(intercept) {
        this.intercept = intercept;
        return this;
    }
    toXML() {
        return base_1.customXMLable("feFuncB", [{
                type: this.type,
                intercept: this.intercept,
                amplitude: this.amplitude,
                exponent: this.exponent
            }]);
    }
}
exports.TransferFunctionB = TransferFunctionB;
