import { isPlatformServer } from '@angular/common';
import {
  APP_ID,
  inject,
  Injectable,
  makeStateKey,
  PLATFORM_ID,
  TransferState,
} from '@angular/core';

const ID_SEQUENCE_KEY = makeStateKey<string[]>('fkt-id-sequence');

@Injectable({ providedIn: 'root' })
export class ElementIdGeneratorService {
  private readonly appId = inject(APP_ID);
  private readonly server = isPlatformServer(inject(PLATFORM_ID));
  private readonly transferState = inject(TransferState);
  private readonly counters = new Map<string, number>();
  private readonly serverSequence: string[] = [];

  private clientSequence: string[] | null = null;
  private clientSequenceIndex = 0;

  next(prefix: string): string {
    const resolvedPrefix = this.resolvePrefix(prefix);
    const index = this.getNextIndex(resolvedPrefix);

    if (this.server) {
      const id = `${resolvedPrefix}-${index}`;

      this.serverSequence.push(id);
      this.transferState.set(ID_SEQUENCE_KEY, this.serverSequence);

      return id;
    }

    return (
      this.readTransferredId(resolvedPrefix) ?? `${resolvedPrefix}-${index}`
    );
  }

  private resolvePrefix(prefix: string) {
    return this.appId === 'ng' ? prefix : `${prefix}-${this.appId}`;
  }

  private getNextIndex(prefix: string) {
    const index = this.counters.get(prefix) ?? 0;
    this.counters.set(prefix, index + 1);

    return index;
  }

  private readTransferredId(prefix: string) {
    this.clientSequence ??= this.transferState.get(ID_SEQUENCE_KEY, []);

    const id = this.clientSequence[this.clientSequenceIndex];
    if (!id || !this.matchesPrefix(id, prefix)) return null;

    this.clientSequenceIndex++;
    return id;
  }

  private matchesPrefix(id: string, prefix: string) {
    const suffix = id.slice(prefix.length + 1);

    return id.startsWith(`${prefix}-`) && /^\d+$/.test(suffix);
  }
}
