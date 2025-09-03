import { Injectable, inject, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { isPlatformServer } from '@angular/common';

const KEY = makeStateKey<string[]>('fkt-id-sequence');

@Injectable({ providedIn: 'root' })
export class ElementIdGeneratorService {
	private platformId = inject(PLATFORM_ID);
	private transferState = inject(TransferState);

	private clientBuffer: string[] | null = null;
	private clientIdx = 0;
	private serverCounter = 0;

	next(prefix: string): string {
		const isServer = isPlatformServer(this.platformId);

		if (isServer) {
			const id = `${prefix}-${this.serverCounter++}`;
			const sequence = this.transferState.get(KEY, []);
			this.transferState.set(KEY, [...sequence, id]);
			return id;
		}

		if (!this.clientBuffer) this.clientBuffer = this.transferState.get(KEY, []);
		const fromSSR = this.clientBuffer[this.clientIdx++];
		if (fromSSR) return fromSSR;

		return `${prefix}-${Date.now()}-${this.clientIdx++}`;
	}
}
