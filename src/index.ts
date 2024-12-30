type Role = "user" | "assistant" | "system";

type BasicChatOutput = {
  content: string;
  metadata?: {
    usage: {
      input_tokens: number;
      output_tokens: number;
      total_tokens: number;
    };
    llm: {
      name: string;
      version: string;
    };
  };
};

type AdvancedChatOutput = {
  content: string;
  metadata?: {
    usage: {
      input_tokens: number;
      output_tokens: number;
      total_tokens: number;
    };
  };
};

interface MessageType {
  role: Role;
  content: string;
}

interface basicPayload {
  mixTuningId: string;
  messages: MessageType[];
  temperature: number;
  maxTokens: number;
  stream?: boolean;
}

interface advancedPayload {
  advancedMixTuningId: string;
  messages: MessageType[];
  temperature: number;
  maxTokens: number;
}

class BasicMoAi {
  private apiUrl: string;
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiUrl =
      "https://moai-service-app.humiris.ai/api/api-key-operators/use-basic-mixtuning";
    this.apiKey = apiKey;
  }

  public async useBasicMixtuning(
    payload: basicPayload
  ): Promise<BasicChatOutput> {
    try {
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "moai-api-key": this.apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      let responseData;

      if (payload.stream == true) {
        responseData = response;
      } else {
        responseData = await response.json();
      }

      return responseData;
    } catch (error) {
      throw new Error(`Failed to send request: ${error}`);
    }
  }
}

class AdvancedMoAi {
  private apiUrl: string;
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiUrl =
      "https://moai-service-app.humiris.ai/api/api-key-operators/use-advanced-mixtuning";
    this.apiKey = apiKey;
  }

  public async useAdvancedMixtuning(
    payload: advancedPayload
  ): Promise<AdvancedChatOutput> {
    try {
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "moai-api-key": this.apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw new Error(`Failed to send request: ${error}`);
    }
  }
}

export { BasicMoAi, AdvancedMoAi, BasicChatOutput, AdvancedChatOutput };
