import { BaseActivity } from './base-activity';
import { InteractionType } from './interaction';
import { FillInDefinition } from './interaction/definitions';

export interface FillInActivity extends BaseActivity<FillInDefinition> {
  interactionType: InteractionType.FillIn | 'fill-in';

  /**
   * A list of responses delimited by [,]. If the response contains only one item, the delimiter MUST not be used
   */
  correctResponsesPattern: string[];
}
