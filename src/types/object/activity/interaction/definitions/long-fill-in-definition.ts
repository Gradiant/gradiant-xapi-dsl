import { InteractionType } from '../interaction-type';
import { BaseInteractionDefinition } from './base-interaction-definition';

/**
 * An interaction which requires the learner to supply a response in the form of a long string of characters. "Long" means that the correct
 * responses pattern and learner response strings will normally be more than 250 characters
 */
export interface LongFillInDefinition extends BaseInteractionDefinition {
  interactionType: InteractionType.LongFillIn | 'long-fill-in';

  /**
   * A list of responses delimited by [,]. If the response contains only one item, the delimiter MUST not be used
   */
  correctResponsesPattern?: string[];
}
