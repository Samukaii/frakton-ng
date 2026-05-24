import { RandomGenerator } from "./random-generator";
import { RandomSchemaType } from '@/models/random-schema-type';
import { RandomSchema } from '@/models/random-schema';


export const randomSchemaGenerators = {
    id: (random: typeof RandomGenerator) => random.integer(1000, 9999),
    'numeric:integer': (random: typeof RandomGenerator) => random.integer(0),
    'numeric:float': (random: typeof RandomGenerator) => random.float(0),
    "word:short": (random: typeof RandomGenerator) => random.word(6),
    "word:medium": (random: typeof RandomGenerator) => random.word(9),
    "word:long": (random: typeof RandomGenerator) => random.word(12),
    phrase: (random: typeof RandomGenerator) => random.phrase(7),
    "text:short": (random: typeof RandomGenerator) => random.paragraphs(2),
    "text:medium": (random: typeof RandomGenerator) => random.paragraphs(4),
    "text:long": (random: typeof RandomGenerator) => random.paragraphs(7),
    date: (random: typeof RandomGenerator) => random.date().toISOString(),
    avatar: (random: typeof RandomGenerator) => `https://picsum.photos/200/300?id=${random.integer()}`,
    image: (random: typeof RandomGenerator) => `https://picsum.photos/seed/${random.integer(1, 500)}/80/80`,
    "person:fullName": (random: typeof RandomGenerator) => random.personFullName(),
    "person:age": (random: typeof RandomGenerator) => random.integer(18, 60),
    "person:firstName": (random: typeof RandomGenerator) => random.personFirstName(),
    "person:lastName": (random: typeof RandomGenerator) => random.personLastName(),
    "product:name": (random: typeof RandomGenerator) => random.productName(),
    email: (random: typeof RandomGenerator) => random.email(),
    cpf: (random: typeof RandomGenerator) => random.templateText("000.000.000-00"),
    baseSelects: (random: typeof RandomGenerator) => random.array({
        id: "id",
        name: "word:short"
    }, 5),
    hour: (random: typeof RandomGenerator) => random.randomHour(),
    trueFalse: (random: typeof RandomGenerator) => random.trueFalse(),
} as const;


export const generateSchema = (type: RandomSchemaType, generator: typeof RandomGenerator) => randomSchemaGenerators[type](generator);

export const isSchemaType = (value: unknown): value is RandomSchemaType =>
    !!randomSchemaGenerators[value as RandomSchemaType];
export const isSchema = (value: unknown): value is RandomSchema => typeof value === "object";
