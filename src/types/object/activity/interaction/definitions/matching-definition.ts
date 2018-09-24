import { InteractionComponent } from '../interaction-component';
import { InteractionType } from '../interaction-type';
import { BaseInteractionDefinition } from './base-interaction-definition';

/**
 * An interaction where the learner is asked to match items in one set (the source set) to items in another set (the target set).
 * Items do not have to pair off exactly and it is possible for multiple or zero source items to be matched to a given target and vice versa
 */
export interface MatchingDefinition extends BaseInteractionDefinition {
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
  correctResponsesPattern?: string[];
}
