import { randomSchemaGenerators } from '@/utils/random-schema-generators';

export type RandomSchemaType = keyof typeof randomSchemaGenerators;
