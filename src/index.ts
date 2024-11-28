import axios from 'axios';

interface MessageType {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface useMixtuningPayload {
  mixTuningId: string;
  messages: MessageType[];
  temperature: number;
  maxTokens: number;
}

class MoAi {
  private apiUrl: string;
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiUrl = 'https://moai-service-app.humiris.ai/api/api-key-operators/use-mixtuning';
    this.apiKey = apiKey;
  }

  public async useBasicMixtuning(payload: useMixtuningPayload): Promise<any> {
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
