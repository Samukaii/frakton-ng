export const deepEqual = (a: any, b: any): boolean => {
	if (a===b) return true;

	if (a===null || b===null || typeof a!=='object' || typeof b!=='object') {
		return false;
	}

	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length!==b.length) return false;
		for (let i = 0; i < a.length; i++) {
			if (!deepEqual(a[i], b[i])) return false;
		}
		return true;
	}

	if (Array.isArray(a)!==Array.isArray(b)) {
		return false;
	}

	const keysA = Object.keys(a);
	const keysB = Object.keys(b);

	if (keysA.length!==keysB.length) return false;

	for (const key of keysA) {
		if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
		if (!deepEqual(a[key], b[key])) return false;
	}

	return true;
}
