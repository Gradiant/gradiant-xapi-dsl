import { BaseActivity } from './base-activity';
import { InteractionComponent, InteractionType } from './interaction';
import { ChoiceDefinition } from './interaction/definitions';

export interface ChoiceActivity extends BaseActivity<ChoiceDefinition> {
  interactionType: InteractionType.Choice | 'choice';

  /**
   * A list of the options available in the interaction for selection or ordering
   */
  choices?: InteractionComponent[];

  /**
   * A list of item ids delimited by [,]. If the response contains only one item, the delimiter MUST not be used
   */
  correctResponsesPattern: string[];
}
