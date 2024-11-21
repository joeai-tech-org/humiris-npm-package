interface useMixtuningPayload {
    mixTuningId: string;
    prompt: string;
    systemInstruction: string;
    mixInstruction: string;
    temperature: number;
    maxTokens: number;
}
declare class MoAi {
    private apiUrl;
    private apiKey;
    constructor(apiKey: string);
    useMixtuning(payload: useMixtuningPayload): Promise<any>;
}
export default MoAi;
