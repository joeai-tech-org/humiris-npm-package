interface Payload {
    name: string;
    phone: string;
    models: Record<string, any>;
}
declare class MoAi {
    private apiUrl;
    private apiKey;
    constructor(apiUrl: string | undefined, apiKey: string);
    useMixtuning(payload: Payload): Promise<any>;
}
export default MoAi;
