/* eslint-disable import/no-unresolved */
import { TypedMessage } from 'leancloud-realtime';

if (!TypedMessage) {
  throw new Error('LeanCloud Realtime SDK not installed');
}

export {
  TypedMessage,
  messageType,
  messageField,
  IE10Compatible,
} from 'leancloud-realtime';
