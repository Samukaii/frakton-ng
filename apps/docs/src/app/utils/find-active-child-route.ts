import { ActivatedRoute } from "@angular/router";

export const findActiveChildRoute = (route: ActivatedRoute): ActivatedRoute => {
	if (route.firstChild) {
		return findActiveChildRoute(route.firstChild);
	}
	return route;
};
