import { BaseActivity } from './base-activity';
import { InteractionType } from './interaction';
import { TrueFalseDefinition } from './interaction/definitions';

export interface TrueFalseActivity extends BaseActivity<TrueFalseDefinition> {
  interactionType: InteractionType.TrueFalse | 'true-false';

  /**
   * Either true or false
   */
  correctResponsesPattern: ['true'] | ['false'];
}
