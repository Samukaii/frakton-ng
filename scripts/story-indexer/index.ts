import { createIndexerContext } from './pipeline/indexer-context';
import { runDocumentationIndexer } from './pipeline/run-indexer';

runDocumentationIndexer(createIndexerContext());
