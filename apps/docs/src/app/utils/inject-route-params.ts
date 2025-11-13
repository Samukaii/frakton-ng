import { injectCurrentRoute } from "@/utils/inject-current-route";
import { computed } from "@angular/core";

export const injectRouteParams = () => {
	const currentRoute = injectCurrentRoute();

	return computed(() => {
		return currentRoute().snapshot.params as Record<string, string>;
	});
}
