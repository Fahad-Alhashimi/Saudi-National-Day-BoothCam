import type { ImageProvider, GenerationRequest, GenerationResult } from "./provider";
export class OpenAIImageProvider implements ImageProvider { async generate(input:GenerationRequest):Promise<GenerationResult>{
  // The image API request belongs here. This safe MVP returns the original when credentials are absent.
  if(!process.env.OPENAI_API_KEY) return {image:input.image,provider:"mock",model:"development-fallback"};
  throw new Error("Configure the current OpenAI image-editing request for the selected model before event deployment.");
}}
