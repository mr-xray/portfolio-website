/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CDN_CLOUD_NAME: string;
  readonly CDN_API_KEY: string;
  readonly CDN_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
