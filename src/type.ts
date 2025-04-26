export interface ResponseData {
  imageBase64Url: string;
}

export interface RequestPayload {
  prompt: string;
  quality: 'auto' | 'high' | 'medium' | 'low' | 'hd' | 'standard';
  size:
    | 'auto'
    | '256x256'
    | '512x512'
    | '1024x1024'
    | '1536x1024'
    | '1024x1536'
    | '1792x1024'
    | '1024x1792';
  style: 'vivid' | 'natural';
  background: 'auto' | 'transparent' | 'opaque';
  outputFormat: 'png' | 'jpeg' | 'webp';
}
