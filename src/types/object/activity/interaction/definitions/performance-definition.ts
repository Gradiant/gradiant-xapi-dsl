import { InteractionComponent } from '../interaction-component';
import { InteractionType } from '../interaction-type';
import { BaseInteractionDefinition } from './base-interaction-definition';

/**
 * An interaction that requires the learner to perform a task that requires multiple steps
 */
export interface PerformanceDefinition extends BaseInteractionDefinition {
  interactionType: InteractionType.Performance | 'performance';

  /**
   * A list of the elements making up the performance interaction
   */
  steps?: InteractionComponent[];

  /**
   * A list of steps containing a step ids and the response to that step. Step ids are separated from responses by [.]. Steps are
   * delimited by [,]. The response can be a String as in a fill-in interaction or a number range as in a numeric interaction
   */
  correctResponsesPattern?: string[];
}
