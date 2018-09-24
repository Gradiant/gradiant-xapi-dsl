import { BaseActivity } from './base-activity';
import { InteractionType } from './interaction';
import { LongFillInDefinition } from './interaction/definitions';

export interface LongFillInActvity extends BaseActivity<LongFillInDefinition> {
  interactionType: InteractionType.LongFillIn | 'long-fill-in';

  /**
   * A list of responses delimited by [,]. If the response contains only one item, the delimiter MUST not be used
   */
  correctResponsesPattern: string[];
}
