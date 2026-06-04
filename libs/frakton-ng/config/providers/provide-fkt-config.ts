import { Provider } from '@angular/core';

export const provideFktConfig = (...providers: Provider[][]): Provider[] => {
    return providers.flat();
};
