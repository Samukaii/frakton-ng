/**
 * Deep merge two objects with configurable depth limit (immutable).
 * @param target - The target object to merge into
 * @param source - The source object to merge from
 * @param maxDepth - Maximum depth for recursive merge (default: Infinity)
 * @returns A new merged object without modifying the original
 */
export function deepMerge<T>(
    target: any,
    source: any,
    maxDepth: number = Infinity
): T {
    return deepMergeInternal(target, source, maxDepth, 0);
}

/**
 * Internal recursive function for deep merge (immutable)
 */
function deepMergeInternal<T>(
    target: any,
    source: any,
    maxDepth: number,
    currentDepth: number
): T {
    // Clone target to avoid mutations
    const result = isObject(target) ? { ...target } : target;

    if (isObject(result) && isObject(source) && currentDepth < maxDepth) {
        for (const key in source) {
            if (isObject(source[key]) && isObject(result[key])) {
                // Recursively merge nested objects
                result[key] = deepMergeInternal(result[key], source[key], maxDepth, currentDepth + 1);
            } else if (isObject(source[key])) {
                // Clone source object to avoid mutations
                result[key] = deepMergeInternal({}, source[key], maxDepth, currentDepth + 1);
            } else {
                // Copy primitive value
                result[key] = source[key];
            }
        }
    } else if (isObject(source)) {
        // If max depth reached, deep clone the source object
        return deepClone(source) as T;
    } else {
        return source as T;
    }

    return result as T;
}

/**
 * Deep clone an object
 */
function deepClone(obj: any): any {
    if (!isObject(obj)) return obj;

    const cloned: any = {};
    for (const key in obj) {
        cloned[key] = deepClone(obj[key]);
    }
    return cloned;
}

/**
 * Check if a value is a plain object
 */
function isObject(item: any): boolean {
    return item && typeof item === 'object' && !Array.isArray(item);
}
