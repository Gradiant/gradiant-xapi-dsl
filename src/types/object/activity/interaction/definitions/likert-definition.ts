import { InteractionComponent } from '../interaction-component';
import { InteractionType } from '../interaction-type';
import { BaseInteractionDefinition } from './base-interaction-definition';

/**
 * An interaction which asks the learner to select from a discrete set of choices on a scale
 */
export interface LikertDefinition extends BaseInteractionDefinition {
  interactionType: InteractionType.Likert | 'likert';

  /**
   * A list of the options on the likert scale
   */
  scale?: InteractionComponent[];

  /**
   * A single item id
   */
  correctResponsesPattern?: string[];
}
