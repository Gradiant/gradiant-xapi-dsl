import { InteractionType } from '../interaction-type';
import { BaseInteractionDefinition } from './base-interaction-definition';

/**
 * Another type of interaction that does not fit into those defined above.
 */
export interface OtherDefinition extends BaseInteractionDefinition {
  interactionType: InteractionType.Other | 'other';

  /**
   * Any format is valid within this string as appropriate for the type of interaction
   */
  correctResponsesPattern?: string[];
}
