import { PluginErrorType, createErrorResponse } from '@lobehub/chat-plugin-sdk';
import OpenAI from 'openai';

import { RequestPayload } from '@/type';

export async function createImage(
  payload: RequestPayload,
  apiKey: string,
  baseURL: string,
): Promise<string> {
  return 'test base64 url';

  const openai = new OpenAI({
    apiKey,
    baseURL,
  });

  const result = await openai.images.generate({
    model: 'gpt-image-1',
    moderation: 'low',
    n: 1,
    output_compression: 100,
    user: 'lobe-plugin-gpt4o-image',
    ...payload,
  });

  const image_base64 = result.data?.[0]?.b64_json;
  if (!image_base64) {
    throw createErrorResponse(
      PluginErrorType.PluginServerError,
      'No image data found in the response',
    );
  }

  return image_base64;
}
