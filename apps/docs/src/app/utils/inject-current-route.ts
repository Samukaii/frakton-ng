import { computed, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { findActiveChildRoute } from "@/utils/find-active-child-route";

export const injectCurrentRoute = () => {
	const router = inject(Router);
	const route = inject(ActivatedRoute);

	return computed(() => {
        router.currentNavigation()

        return findActiveChildRoute(route)
    }, {equal: () => false});
}
