import { BaseActivity } from './base-activity';
import { InteractionType } from './interaction';
import { NumericDefinition } from './interaction/definitions';

export interface NumericActivity extends BaseActivity<NumericDefinition> {
  interactionType: InteractionType.Numeric | 'numeric';

  /**
   * A range of numbers represented by a minimum and a maximum delimited by [:]. Where the range does not have a maximum or
   * does not have a minimum, that number is omitted but the delimiter is still used. E.g. [:]4 indicates a maximum for 4 and no minimum.
   * Where the correct response or learner's response is a single number rather than a range, the single number with
   * no delimiter MAY be used.
   */
  correctResponsesPattern: string[];
}
