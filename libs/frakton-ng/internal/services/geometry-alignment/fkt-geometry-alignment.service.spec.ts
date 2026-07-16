import { TestBed } from '@angular/core/testing';
import { WINDOW } from 'frakton-ng/internal/di';
import { FktGeometryAlignmentService } from './fkt-geometry-alignment.service';

describe('FktGeometryAlignmentService', () => {
	let service: FktGeometryAlignmentService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{
					provide: WINDOW,
					useValue: {
						innerWidth: 800,
						innerHeight: 800,
						scrollX: 500,
						scrollY: 1000,
					} as unknown as Window,
				},
			],
		});

		service = TestBed.inject(FktGeometryAlignmentService);
	});

	it('returns viewport coordinates independently of the document scroll', () => {
		const result = service.alignTargetTo({
			anchor: { x: 300, y: 200, width: 100, height: 40 },
			targetSize: { width: 100, height: 100 },
			padding: 8,
			position: 'bottom-center',
		});

		expect(result).toEqual({ x: 300, y: 248 });
	});

	it('resolves inline-aligned positions according to LTR direction', () => {
		const options = {
			anchor: { x: 300, y: 200, width: 100, height: 40 },
			targetSize: { width: 80, height: 100 },
			padding: 8,
			direction: 'ltr' as const,
		};

		expect(
			service.alignTargetTo({...options, position: 'top-start'})
		).toEqual({ x: 300, y: 92 });
		expect(
			service.alignTargetTo({...options, position: 'top-end'})
		).toEqual({ x: 320, y: 92 });
		expect(
			service.alignTargetTo({...options, position: 'start-center'})
		).toEqual({ x: 212, y: 170 });
		expect(
			service.alignTargetTo({...options, position: 'end-center'})
		).toEqual({ x: 408, y: 170 });
	});

	it('resolves inline-aligned positions according to RTL direction', () => {
		const options = {
			anchor: { x: 300, y: 200, width: 100, height: 40 },
			targetSize: { width: 80, height: 100 },
			padding: 8,
			direction: 'rtl' as const,
		};

		expect(
			service.alignTargetTo({...options, position: 'top-start'})
		).toEqual({ x: 320, y: 92 });
		expect(
			service.alignTargetTo({...options, position: 'top-end'})
		).toEqual({ x: 300, y: 92 });
		expect(
			service.alignTargetTo({...options, position: 'start-center'})
		).toEqual({ x: 408, y: 170 });
		expect(
			service.alignTargetTo({...options, position: 'end-center'})
		).toEqual({ x: 212, y: 170 });
	});

	it('resolves logical corner positions according to direction', () => {
		const options = {
			anchor: { x: 300, y: 200, width: 100, height: 40 },
			targetSize: { width: 80, height: 100 },
			padding: 8,
		};

		expect(
			service.alignTargetTo({
				...options,
				direction: 'ltr',
				position: 'top-start-corner',
			})
		).toEqual({ x: 212, y: 92 });
		expect(
			service.alignTargetTo({
				...options,
				direction: 'rtl',
				position: 'top-start-corner',
			})
		).toEqual({ x: 408, y: 92 });
	});

	it('calculates collisions in viewport coordinates after the document scrolls', () => {
		const result = service.smartAlignTargetTo({
			anchor: { x: 300, y: 200, width: 100, height: 40 },
			targetSize: { width: 100, height: 100 },
			padding: 8,
			preferredPositions: ['bottom-center'],
		});

		expect(result).toEqual({
			position: 'bottom-center',
			result: { x: 300, y: 248 },
		});
	});

	it('uses bottom-center when automatic repositioning is disabled without a preferred position', () => {
		const result = service.smartAlignTargetTo({
			anchor: { x: 300, y: 200, width: 100, height: 40 },
			targetSize: { width: 100, height: 100 },
			disableAutoReposition: true,
		});

		expect(result.position).toBe('bottom-center');
	});

	it('keeps the first preferred position when automatic repositioning is disabled', () => {
		const result = service.smartAlignTargetTo({
			anchor: { x: 300, y: 760, width: 100, height: 40 },
			targetSize: { width: 100, height: 100 },
			padding: 8,
			preferredPositions: ['bottom-center', 'top-center'],
			disableAutoReposition: true,
		});

		expect(result.position).toBe('bottom-center');
	});
});
