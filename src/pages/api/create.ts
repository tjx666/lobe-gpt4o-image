import {
  PluginErrorType,
  createErrorResponse,
  getPluginSettingsFromRequest,
} from '@lobehub/chat-plugin-sdk';

import { createImage } from '@/services/create';
import { RequestPayload } from '@/type';

export const config = {
  runtime: 'edge',
};

export default async function create(request: Request) {
  if (request.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const payload = (await request.json()) as RequestPayload;
  const settings = getPluginSettingsFromRequest(request);

  const imageBase64Url = await createImage(
    payload,
    settings.OPENAI_API_KEY,
    settings.OPENAI_API_PROXY,
  );
  return new Response(
    JSON.stringify({
      imageBase64Url,
    }),
  );
}
