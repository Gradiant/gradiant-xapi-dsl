import { BaseActivity } from './base-activity';
import { InteractionComponent, InteractionType } from './interaction';
import { PerformanceDefinition } from './interaction/definitions';

export interface PerformanceActivity extends BaseActivity<PerformanceDefinition> {
  interactionType: InteractionType.Performance | 'performance';

  /**
   * A list of the elements making up the performance interaction
   */
  steps?: InteractionComponent[];

  /**
   * A list of steps containing a step ids and the response to that step. Step ids are separated from responses by [.]. Steps are
   * delimited by [,]. The response can be a String as in a fill-in interaction or a number range as in a numeric interaction
   */
  correctResponsesPattern: string[];
}
