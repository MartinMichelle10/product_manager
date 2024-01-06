"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UOM = void 0;
var typeorm_1 = require("typeorm");
var product_entity_1 = require("./product.entity");
var uom_image_entity_1 = require("./uom-image.entity");
var uom_barcode_entity_1 = require("./uom-barcode.entity");
var addon_entity_1 = require("./addon.entity");
var UOM = function () {
    var _classDecorators = [(0, typeorm_1.Entity)(), (0, typeorm_1.Index)('idx_product_addon', ['product', 'addon'])];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _product_decorators;
    var _product_initializers = [];
    var _images_decorators;
    var _images_initializers = [];
    var _barcodes_decorators;
    var _barcodes_initializers = [];
    var _addon_decorators;
    var _addon_initializers = [];
    var UOM = _classThis = /** @class */ (function () {
        function UOM_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.price = __runInitializers(this, _price_initializers, void 0);
            this.product = __runInitializers(this, _product_initializers, void 0);
            this.images = __runInitializers(this, _images_initializers, void 0);
            this.barcodes = __runInitializers(this, _barcodes_initializers, void 0);
            this.addon = __runInitializers(this, _addon_initializers, void 0);
        }
        return UOM_1;
    }());
    __setFunctionName(_classThis, "UOM");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)()];
        _price_decorators = [(0, typeorm_1.Column)()];
        _product_decorators = [(0, typeorm_1.ManyToOne)(function () { return product_entity_1.Product; }, function (product) { return product.uoms; }, { onDelete: 'CASCADE' })];
        _images_decorators = [(0, typeorm_1.OneToMany)(function () { return uom_image_entity_1.UOMImage; }, function (image) { return image.uom; }, { onDelete: 'CASCADE' })];
        _barcodes_decorators = [(0, typeorm_1.OneToMany)(function () { return uom_barcode_entity_1.UOMBarcode; }, function (barcode) { return barcode.uom; }, {
                onDelete: 'CASCADE',
            })];
        _addon_decorators = [(0, typeorm_1.ManyToOne)(function () { return addon_entity_1.Addon; }, function (addon) { return addon.uoms; }, { onDelete: 'CASCADE' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } }, metadata: _metadata }, _price_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _product_decorators, { kind: "field", name: "product", static: false, private: false, access: { has: function (obj) { return "product" in obj; }, get: function (obj) { return obj.product; }, set: function (obj, value) { obj.product = value; } }, metadata: _metadata }, _product_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _images_decorators, { kind: "field", name: "images", static: false, private: false, access: { has: function (obj) { return "images" in obj; }, get: function (obj) { return obj.images; }, set: function (obj, value) { obj.images = value; } }, metadata: _metadata }, _images_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _barcodes_decorators, { kind: "field", name: "barcodes", static: false, private: false, access: { has: function (obj) { return "barcodes" in obj; }, get: function (obj) { return obj.barcodes; }, set: function (obj, value) { obj.barcodes = value; } }, metadata: _metadata }, _barcodes_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _addon_decorators, { kind: "field", name: "addon", static: false, private: false, access: { has: function (obj) { return "addon" in obj; }, get: function (obj) { return obj.addon; }, set: function (obj, value) { obj.addon = value; } }, metadata: _metadata }, _addon_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UOM = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UOM = _classThis;
}();
exports.UOM = UOM;
