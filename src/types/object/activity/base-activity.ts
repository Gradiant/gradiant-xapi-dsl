import { IRI } from '../../utils/types';
import { ActivityDefinition } from './activity-definition';

export interface BaseActivity<T = ActivityDefinition> {
  /**
   * MUST be Activity when present
   */
  objectType?: 'Activity';

  /**
   * An identifier for a single unique Activity.
   *
   */
  id: IRI;

  /**
   * Metadata
   */
  definition?: T;
}
