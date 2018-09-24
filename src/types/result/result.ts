import { Extensions } from '../utils';
import { Duration } from '../utils/types';
import { Score } from './score';

/**
 * An optional property that represents a measured outcome related to the Statement in which it is included
 */
export interface Result {
  /**
   * The score of the Agent in relation to the success or quality of the experience
   */
  score?: Score;

  /**
   * Indicates whether or not the attempt on the Activity was successful
   */
  success?: boolean;

  /**
   * Indicates whether or not the Activity was completed
   */
  completion?: boolean;

  /**
   * A response appropriately formatted for the given Activity
   */
  response?: string;

  /**
   * Period of time over which the Statement occurred ins ISO-8601
   */
  duration?: Duration;

  /**
   * A map of other properties as needed
   */
  extensions?: Extensions;
}
