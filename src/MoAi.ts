// src/moai.ts
import { MixTuningService } from './services/MixTuningService';

export class MoAi {
  private apiKey: string;
  public mixTuningService: MixTuningService;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.mixTuningService = new MixTuningService(this.apiKey);
  }
}
