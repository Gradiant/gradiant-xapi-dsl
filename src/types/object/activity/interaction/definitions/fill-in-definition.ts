import { InteractionType } from '../interaction-type';
import { BaseInteractionDefinition } from './base-interaction-definition';

/**
 * An interaction which requires the learner to supply a short response in the form of one or more strings of characters. Typically, the
 * correct response consists of part of a word, one word or a few words. "Short" means that the correct responses pattern and learner
 * response strings will normally be 250 characters or less
 */
export interface FillInDefinition extends BaseInteractionDefinition {
  interactionType: InteractionType.FillIn | 'fill-in';

  /**
   * A list of responses delimited by [,]. If the response contains only one item, the delimiter MUST not be used
   */
  correctResponsesPattern?: string[];
}
