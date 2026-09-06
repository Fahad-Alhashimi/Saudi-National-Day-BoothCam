export type GenerationRequest={image:string;styleId:string;prompt:string}; export type GenerationResult={image:string;provider:string;model:string};
export interface ImageProvider { generate(input:GenerationRequest):Promise<GenerationResult> }
