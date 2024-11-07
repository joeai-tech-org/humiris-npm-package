"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoAi = void 0;
// src/moai.ts
const MixTuningService_1 = require("./services/MixTuningService");
class MoAi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.mixTuningService = new MixTuningService_1.MixTuningService(this.apiKey);
    }
}
exports.MoAi = MoAi;
