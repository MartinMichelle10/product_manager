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
exports.AddonItem = void 0;
var typeorm_1 = require("typeorm");
var addon_entity_1 = require("./addon.entity");
var AddonItem = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _itemName_decorators;
    var _itemName_initializers = [];
    var _itemDescription_decorators;
    var _itemDescription_initializers = [];
    var _itemCost_decorators;
    var _itemCost_initializers = [];
    var _itemPrice_decorators;
    var _itemPrice_initializers = [];
    var _isValid_decorators;
    var _isValid_initializers = [];
    var _addon_decorators;
    var _addon_initializers = [];
    var AddonItem = _classThis = /** @class */ (function () {
        function AddonItem_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.itemName = __runInitializers(this, _itemName_initializers, void 0);
            this.itemDescription = __runInitializers(this, _itemDescription_initializers, void 0);
            this.itemCost = __runInitializers(this, _itemCost_initializers, void 0);
            this.itemPrice = __runInitializers(this, _itemPrice_initializers, void 0);
            this.isValid = __runInitializers(this, _isValid_initializers, void 0);
            this.addon = __runInitializers(this, _addon_initializers, void 0);
        }
        return AddonItem_1;
    }());
    __setFunctionName(_classThis, "AddonItem");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _itemName_decorators = [(0, typeorm_1.Column)()];
        _itemDescription_decorators = [(0, typeorm_1.Column)()];
        _itemCost_decorators = [(0, typeorm_1.Column)()];
        _itemPrice_decorators = [(0, typeorm_1.Column)()];
        _isValid_decorators = [(0, typeorm_1.Column)()];
        _addon_decorators = [(0, typeorm_1.ManyToOne)(function () { return addon_entity_1.Addon; }, function (addon) { return addon.addonItems; }, { onDelete: 'CASCADE' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _itemName_decorators, { kind: "field", name: "itemName", static: false, private: false, access: { has: function (obj) { return "itemName" in obj; }, get: function (obj) { return obj.itemName; }, set: function (obj, value) { obj.itemName = value; } }, metadata: _metadata }, _itemName_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _itemDescription_decorators, { kind: "field", name: "itemDescription", static: false, private: false, access: { has: function (obj) { return "itemDescription" in obj; }, get: function (obj) { return obj.itemDescription; }, set: function (obj, value) { obj.itemDescription = value; } }, metadata: _metadata }, _itemDescription_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _itemCost_decorators, { kind: "field", name: "itemCost", static: false, private: false, access: { has: function (obj) { return "itemCost" in obj; }, get: function (obj) { return obj.itemCost; }, set: function (obj, value) { obj.itemCost = value; } }, metadata: _metadata }, _itemCost_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _itemPrice_decorators, { kind: "field", name: "itemPrice", static: false, private: false, access: { has: function (obj) { return "itemPrice" in obj; }, get: function (obj) { return obj.itemPrice; }, set: function (obj, value) { obj.itemPrice = value; } }, metadata: _metadata }, _itemPrice_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _isValid_decorators, { kind: "field", name: "isValid", static: false, private: false, access: { has: function (obj) { return "isValid" in obj; }, get: function (obj) { return obj.isValid; }, set: function (obj, value) { obj.isValid = value; } }, metadata: _metadata }, _isValid_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _addon_decorators, { kind: "field", name: "addon", static: false, private: false, access: { has: function (obj) { return "addon" in obj; }, get: function (obj) { return obj.addon; }, set: function (obj, value) { obj.addon = value; } }, metadata: _metadata }, _addon_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AddonItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AddonItem = _classThis;
}();
exports.AddonItem = AddonItem;
