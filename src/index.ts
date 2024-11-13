import axios from 'axios';

interface Payload {
  name: string;
  phone: string;
  models: Record<string, any>;
}

class MoAi {
  private apiUrl: string;
  private apiKey: string;

  constructor(apiUrl: string = 'http://localhost:2500/api/api-key-operators/use-mixtuning', apiKey: string) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }

  public async useMixtuning(payload: Payload): Promise<any> {
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
