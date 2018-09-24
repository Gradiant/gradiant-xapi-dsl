import { BaseActivity } from './base-activity';
import { InteractionComponent, InteractionType } from './interaction';
import { LikertDefinition } from './interaction/definitions';

export interface LikertActivity extends BaseActivity<LikertDefinition> {
  interactionType: InteractionType.Likert | 'likert';

  /**
   * A list of the options on the likert scale
   */
  scale?: InteractionComponent[];

  /**
   * A single item id
   */
  correctResponsesPattern: string[];
}
