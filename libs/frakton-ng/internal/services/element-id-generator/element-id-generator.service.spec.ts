import {
  APP_ID,
  makeStateKey,
  PLATFORM_ID,
  TransferState,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ElementIdGeneratorService } from './element-id-generator.service';

const ID_SEQUENCE_KEY = makeStateKey<string[]>('fkt-id-sequence');

describe('ElementIdGeneratorService', () => {
  afterEach(() => TestBed.resetTestingModule());

  it('generates independent deterministic sequences for each prefix', () => {
    configurePlatform('server');

    const service = TestBed.inject(ElementIdGeneratorService);

    expect(service.next('fkt-popover')).toBe('fkt-popover-0');
    expect(service.next('fkt-field')).toBe('fkt-field-0');
    expect(service.next('fkt-popover')).toBe('fkt-popover-1');
  });

  it('transfers the server sequence to the browser', () => {
    configurePlatform('browser');

    const transferState = TestBed.inject(TransferState);
    transferState.set(ID_SEQUENCE_KEY, [
      'fkt-popover-0',
      'fkt-field-0',
      'fkt-popover-1',
    ]);

    const service = TestBed.inject(ElementIdGeneratorService);

    expect(service.next('fkt-popover')).toBe('fkt-popover-0');
    expect(service.next('fkt-field')).toBe('fkt-field-0');
    expect(service.next('fkt-popover')).toBe('fkt-popover-1');
    expect(service.next('fkt-popover')).toBe('fkt-popover-2');
  });

  it('does not consume a transferred ID for a different prefix', () => {
    configurePlatform('browser');

    const transferState = TestBed.inject(TransferState);
    transferState.set(ID_SEQUENCE_KEY, ['fkt-popover-panel-0']);

    const service = TestBed.inject(ElementIdGeneratorService);

    expect(service.next('fkt-popover')).toBe('fkt-popover-0');
    expect(service.next('fkt-popover-panel')).toBe('fkt-popover-panel-0');
  });

  it('namespaces IDs with a custom Angular application ID', () => {
    configurePlatform('server', 'docs');

    const service = TestBed.inject(ElementIdGeneratorService);

    expect(service.next('fkt-popover')).toBe('fkt-popover-docs-0');
  });
});

function configurePlatform(platformId: 'browser' | 'server', appId = 'ng') {
  TestBed.configureTestingModule({
    providers: [
      { provide: APP_ID, useValue: appId },
      { provide: PLATFORM_ID, useValue: platformId },
    ],
  });
}
