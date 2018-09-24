import { InteractionType } from '../interaction-type';
import { BaseInteractionDefinition } from './base-interaction-definition';

/**
 * Any interaction which requires a numeric response from the learner
 */
export interface NumericDefinition extends BaseInteractionDefinition {
  interactionType: InteractionType.Numeric | 'numeric';

  /**
   * A range of numbers represented by a minimum and a maximum delimited by [:]. Where the range does not have a maximum or
   * does not have a minimum, that number is omitted but the delimiter is still used. E.g. [:]4 indicates a maximum for 4 and no minimum.
   * Where the correct response or learner's response is a single number rather than a range, the single number with
   * no delimiter MAY be used.
   */
  correctResponsesPattern?: string[];
}
