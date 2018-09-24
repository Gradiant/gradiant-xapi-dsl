import { Actor } from '../actor';
import { Timestamp, UUID, Version } from '../utils/types';
import { BaseStatement } from './base-statement';

export interface Statement extends BaseStatement {
  /**
   * A UUID (all versions of variant 2 in RFC 4122 are valid, and the UUID MUST be in standard string form).
   */
  id?: UUID;

  /**
   * Timestamp of when this Statement was recorded. Set by LRS.
   *
   * In ISO-8601 format. Set by the LRS.
   */
  stored?: Timestamp;

  /**
   * Agent or Group who is asserting this Statement is true. Verified by the LRS based on authentication. Set by LRS if not provided or
   * if a strong trust relationship between the Learning Record Provider and LRS has not been established.
   */
  authority?: Actor;

  /**
   * The Statement’s associated xAPI version, formatted according to Semantic Versioning 1.0.0.
   */
  version?: Version;
}
