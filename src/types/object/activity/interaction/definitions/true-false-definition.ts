import { InteractionType } from '../interaction-type';
import { BaseInteractionDefinition } from './base-interaction-definition';

/**
 * An interaction with two possible responses: `true` or `false`
 */
export interface TrueFalseDefinition extends BaseInteractionDefinition {
  interactionType: InteractionType.TrueFalse | 'true-false';

  /**
   * Either true or false
   */
  correctResponsesPattern?: ['true'] | ['false'];
}
