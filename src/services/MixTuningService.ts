// src/services/MixTuningService.ts
import axios from 'axios';

export class MixTuningService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'http://localhost:2500/api/api-key-operators/use-mixtuning') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async useMixTuning(payload: any): Promise<any> {
    try {
      const response = await axios.post(
        `${this.baseUrl}/use-mixtuning`,
        payload,
        {
          headers: {
            'moai-api-key': this.apiKey,
          },
        },
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
      // This is an AxiosError
      throw new Error(`Failed to use Mix Tuning: ${error.message}`);
    } else {
      // Handle unexpected errors
      throw new Error(`Failed to use Mix Tuning: ${error}`);
    }
    }
  }
}
