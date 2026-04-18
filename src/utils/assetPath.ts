/**
 * Prefixes a path with the NEXT_PUBLIC_BASE_PATH if it's set.
 * This is necessary for GitHub Pages deployments where the site is hosted in a sub-directory.
 */
export function getAssetPath(path: string): string {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    // If the path already includes the base path or is an external URL, return it as is
    if (path.startsWith(basePath) && basePath !== '') return path;
    if (path.startsWith('http')) return path;

    // Ensure the path starts with a slash if it doesn't
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    return `${basePath}${normalizedPath}`;
}
