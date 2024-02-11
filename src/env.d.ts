/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CDN_CLOUD_NAME: string;
  readonly CDN_API_KEY: string;
  readonly CDN_SECRET: string;
  readonly CDN_FOLDER: string;
  readonly CDN_PERMISSION_KEY: string;
  readonly SENDGRID_API_KEY: string;
  readonly SENDGRID_VERIFIED_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
