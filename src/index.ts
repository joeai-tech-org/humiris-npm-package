import axios from 'axios';

interface useMixtuningPayload {
  mixTuningId: string;
  messages: string;
  systemInstruction: string;
  mixInstruction: string;
  temperature: number;
  maxTokens: number;
}

class MoAi {
  private apiUrl: string;
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiUrl = 'https://moai-platform-service-api-7e7d6b71bb3f.herokuapp.com/api/api-key-operators/use-mixtuning';
    this.apiKey = apiKey;
  }

  public async useMixtuning(payload: useMixtuningPayload): Promise<any> {
    try {
      const response = await axios.post(
        this.apiUrl,
        payload,
        {
          headers: {
            'moai-api-key': this.apiKey,
            'Content-Type': 'application/json'
          }
        }
      );
      return response;
    } catch (error) {
      throw new Error(`Failed to send request: ${error}`);
    }
  }
}

export default MoAi;
