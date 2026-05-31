import { INDEXER_CONFIG, IndexerConfig } from '../config/indexer-config';

export interface IndexerContext {
    config: IndexerConfig;
}

export const createIndexerContext = (
    config: IndexerConfig = INDEXER_CONFIG
): IndexerContext => {
    return { config };
};
