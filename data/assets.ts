export const FALLBACK_PRODUCT_IMAGE = "/assets/placeholders/product-placeholder.svg";
export const FALLBACK_HERO_IMAGE = "/assets/placeholders/hero-placeholder.svg";

export function resolveImageAsset(path: string | undefined, fallback: string) {
  if (!path) return fallback;
  return path.startsWith("/") ? path : `/${path}`;
}
