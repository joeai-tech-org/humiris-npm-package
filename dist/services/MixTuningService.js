"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixTuningService = void 0;
// src/services/MixTuningService.ts
const axios_1 = __importDefault(require("axios"));
class MixTuningService {
    constructor(apiKey, baseUrl = 'http://localhost:2500/api/api-key-operators/use-mixtuning') {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }
    useMixTuning(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.post(`${this.baseUrl}/use-mixtuning`, payload, {
                    headers: {
                        'moai-api-key': this.apiKey,
                    },
                });
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error)) {
                    // This is an AxiosError
                    throw new Error(`Failed to use Mix Tuning: ${error.message}`);
                }
                else {
                    // Handle unexpected errors
                    throw new Error(`Failed to use Mix Tuning: ${error}`);
                }
            }
        });
    }
}
exports.MixTuningService = MixTuningService;
