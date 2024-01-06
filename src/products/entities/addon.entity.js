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
exports.Addon = void 0;
var typeorm_1 = require("typeorm");
var uom_entity_1 = require("./uom.entity");
var addon_item_entity_1 = require("./addon-item.entity");
var Addon = function () {
    var _classDecorators = [(0, typeorm_1.Entity)(), (0, typeorm_1.Index)('idx_addon', ['name'])];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _isValid_decorators;
    var _isValid_initializers = [];
    var _uoms_decorators;
    var _uoms_initializers = [];
    var _addonItems_decorators;
    var _addonItems_initializers = [];
    var Addon = _classThis = /** @class */ (function () {
        function Addon_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.description = __runInitializers(this, _description_initializers, void 0);
            this.isValid = __runInitializers(this, _isValid_initializers, void 0);
            this.uoms = __runInitializers(this, _uoms_initializers, void 0);
            this.addonItems = __runInitializers(this, _addonItems_initializers, void 0);
        }
        return Addon_1;
    }());
    __setFunctionName(_classThis, "Addon");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)()];
        _description_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _isValid_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _uoms_decorators = [(0, typeorm_1.OneToMany)(function () { return uom_entity_1.UOM; }, function (uom) { return uom.addon; })];
        _addonItems_decorators = [(0, typeorm_1.OneToMany)(function () { return addon_item_entity_1.AddonItem; }, function (addonItem) { return addonItem.addon; }, {
                onDelete: 'CASCADE',
            })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _isValid_decorators, { kind: "field", name: "isValid", static: false, private: false, access: { has: function (obj) { return "isValid" in obj; }, get: function (obj) { return obj.isValid; }, set: function (obj, value) { obj.isValid = value; } }, metadata: _metadata }, _isValid_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _uoms_decorators, { kind: "field", name: "uoms", static: false, private: false, access: { has: function (obj) { return "uoms" in obj; }, get: function (obj) { return obj.uoms; }, set: function (obj, value) { obj.uoms = value; } }, metadata: _metadata }, _uoms_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _addonItems_decorators, { kind: "field", name: "addonItems", static: false, private: false, access: { has: function (obj) { return "addonItems" in obj; }, get: function (obj) { return obj.addonItems; }, set: function (obj, value) { obj.addonItems = value; } }, metadata: _metadata }, _addonItems_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Addon = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Addon = _classThis;
}();
exports.Addon = Addon;
