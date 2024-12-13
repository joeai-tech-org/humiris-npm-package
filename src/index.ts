import axios from 'axios';


type Role = 'user' | 'assistant' | 'system';

interface MessageType {
  role: Role;
  content: string;
}


interface basicPayload {
  mixTuningId: string;
  messages: (Pick<MessageType, 'content'> & { role: Role })[];
  temperature: number;
  maxTokens: number;
}

interface advancedPayload {
  advancedMixTuningId: string;
  messages: (Pick<MessageType, 'content'> & { role: Role })[];
  temperature: number;
  maxTokens: number;
}

class BasicMoAi {
  private apiUrl: string;
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiUrl = 'https://moai-service-app.humiris.ai/api/api-key-operators/use-basic-mixtuning';
    this.apiKey = apiKey;
  }

  public async useBasicMixtuning(payload: basicPayload): Promise<any> {
    try {
      const response = await axios.post(this.apiUrl, payload, {
        headers: {
          'moai-api-key': this.apiKey,
          'Content-Type': 'application/json'
        }
      });
      return response;
    } catch (error) {
      throw new Error(`Failed to send request: ${error}`);
    }
  }
}

class AdvancedMoAi {
  private apiUrl: string;
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiUrl = 'https://moai-service-app.humiris.ai/api/api-key-operators/use-advanced-mixtuning';
    this.apiKey = apiKey;
  }

  public async useAdvancedMixtuning(payload: advancedPayload): Promise<any> {
    try {
      const response = await axios.post(this.apiUrl, payload, {
        headers: {
          'moai-api-key': this.apiKey,
          'Content-Type': 'application/json'
        }
      });
      return response;
    } catch (error) {
      throw new Error(`Failed to send request: ${error}`);
    }
  }
}

export { BasicMoAi, AdvancedMoAi };