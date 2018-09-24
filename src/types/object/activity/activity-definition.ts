import { Extensions, LanguageMap } from '../../utils';
import { IRL } from '../../utils/types';

/**
 * Activity metadata
 */
export interface ActivityDefinition {
  /**
   * The human readable/visual name of the Activity
   */
  name?: LanguageMap;

  /**
   * A description of the Activity
   */
  description?: LanguageMap;

  /**
   * The type of Activity
   *
   */
  type?: IRL;

  /**
   * Resolves to a document with human-readable information about the Activity, which could include a way to launch the definitions.
   *
   * It must be an IRL
   */
  moreInfo?: IRL;

  /**
   * A map of other properties as needed
   */
  extensions?: Extensions;
}
