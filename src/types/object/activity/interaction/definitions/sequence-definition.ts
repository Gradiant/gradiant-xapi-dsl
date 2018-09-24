import { InteractionComponent } from '../interaction-component';
import { InteractionType } from '../interaction-type';
import { BaseInteractionDefinition } from './base-interaction-definition';

/**
 * An interaction where the learner is asked to order items in a set
 */
export interface SequenceDefinition extends BaseInteractionDefinition {
  interactionType: InteractionType.Sequencing | 'sequencing';

  /**
   * A list of the options available in the interaction for selection or ordering
   */
  choices?: InteractionComponent[];

  /**
   * An ordered list of item ids delimited by [,]
   */
  correctResponsesPattern?: string[];
}
