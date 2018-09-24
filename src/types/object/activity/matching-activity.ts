import { BaseActivity } from './base-activity';
import { InteractionComponent, InteractionType } from './interaction';
import { MatchingDefinition } from './interaction/definitions';

export interface MatchingActivity extends BaseActivity<MatchingDefinition> {
  interactionType: InteractionType.Matching | 'matching';

  /**
   * Lists of sources to be matched
   */
  source?: InteractionComponent[];

  /**
   * Lists of targets to be matched
   */
  target?: InteractionComponent[];

  /**
   * A list of matching pairs, where each pair consists of a source item id followed by a target item id. Items can appear in multiple
   * (or zero) pairs. Items within a pair are delimited by [.]. Pairs are delimited by [,]
   */
  correctResponsesPattern: string[];
}
