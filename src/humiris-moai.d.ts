declare module 'humiris-moai' {
  export class MoAi {
    constructor(apiKey: string);
    useMixTuning(payload: any): Promise<any>;
  }
}
