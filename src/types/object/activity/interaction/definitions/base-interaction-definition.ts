import { ActivityDefinition } from '../../activity-definition';
import { InteractionType } from '../interaction-type';

export interface BaseInteractionDefinition extends ActivityDefinition {
  /**
   * The type of interaction. Possible values are:
   * - `true-false`
   * - `choice`
   * - `fill-in`
   * - `long-fill-in`
   * - `matching`
   * - `performance`
   * - `sequencing`
   * - `likert`
   * - `numeric`
   * - `other`
   */
  interactionType:
    | InteractionType
    | 'true-false'
    | 'choice'
    | 'fill-in'
    | 'long-fill-in'
    | 'matching'
    | 'performance'
    | 'sequencing'
    | 'likert'
    | 'numeric'
    | 'other';

  /**
   * A pattern representing the correct response to the interaction. The structure of this pattern varies depending on the interactionType.
   */
  correctResponsesPattern?: string[];
}
