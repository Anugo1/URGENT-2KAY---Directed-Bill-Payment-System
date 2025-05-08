"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillController = void 0;
const common_1 = require("@nestjs/common");
const CreateBillDto_1 = require("../dto/CreateBillDto");
const UpdateBillDto_1 = require("../dto/UpdateBillDto");
const billService_1 = require("../service/billService");
let BillController = class BillController {
    constructor(billService) {
        this.billService = billService;
    }
    getUserId(req) {
        return 'test-user-id'; // In production, use a real user identification method (JWT, sessions, etc.)
    }
    create(req, dto) {
        const userId = this.getUserId(req);
        return this.billService.create(userId, dto);
    }
    findAll(req) {
        const userId = this.getUserId(req);
        return this.billService.findAll(userId);
    }
    findOne(req, id) {
        const userId = this.getUserId(req);
        return this.billService.findOne(userId, id);
    }
    update(req, id, dto) {
        const userId = this.getUserId(req);
        return this.billService.update(userId, id, dto);
    }
    remove(req, id) {
        const userId = this.getUserId(req);
        return this.billService.remove(userId, id);
    }
};
exports.BillController = BillController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateBillDto_1.CreateBillDto]),
    __metadata("design:returntype", void 0)
], BillController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BillController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], BillController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, UpdateBillDto_1.UpdateBillDto]),
    __metadata("design:returntype", void 0)
], BillController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], BillController.prototype, "remove", null);
exports.BillController = BillController = __decorate([
    (0, common_1.Controller)('bills'),
    __metadata("design:paramtypes", [billService_1.BillService])
], BillController);
