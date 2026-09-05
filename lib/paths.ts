/** Supports both user.github.io and user.github.io/repository deployments. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export function asset(path: string) {
  return path.startsWith('/') ? `${basePath}${path}` : path;
}
