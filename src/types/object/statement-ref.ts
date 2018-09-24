import { UUID } from '../utils/types';

/**
 * A Statement Reference is a pointer to another pre-existing Statement.
 *
 * - A Statement Reference MUST specify an "objectType" property with the value StatementRef.
 * - A Statement Reference MUST set the "id" property to the UUID of a Statement. There is no requirement for the LRS to validate that
 *   the UUID matches a Statement that exists.
 */
export interface StatementRef {
  objectType: 'StatementRef';

  /**
   * The UUID of a Statement.
   */
  id: UUID;
}
