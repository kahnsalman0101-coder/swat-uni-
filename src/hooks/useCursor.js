import { useContext } from 'react';
import CursorContext from '../context/CursorContext';

/**
 * useCursor — read/Drive the shared custom-cursor state.
 * Consumers can call `setVariant('hover' | 'text' | 'default')` on pointer
 * enter, or read `enabled` to know whether a real cursor is being rendered.
 */
export default function useCursor() {
  return useContext(CursorContext);
}
