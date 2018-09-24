import { InteractionComponent } from '../interaction-component';
import { InteractionType } from '../interaction-type';
import { BaseInteractionDefinition } from './base-interaction-definition';

/**
 * An interaction with a number of possible choices from which the learner can select. This includes interactions in which the learner can
 * select only one answer from the list and those where the learner can select multiple items.
 */
export interface ChoiceDefinition extends BaseInteractionDefinition {
  interactionType: InteractionType.Choice | 'choice';

  /**
   * A list of the options available in the interaction for selection or ordering
   */
  choices?: InteractionComponent[];

  /**
   * A list of item ids delimited by [,]. If the response contains only one item, the delimiter MUST not be used
   */
  correctResponsesPattern?: string[];
}
