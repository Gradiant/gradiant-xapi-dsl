import { BaseActivity } from './base-activity';
import { InteractionType } from './interaction';
import { OtherDefinition } from './interaction/definitions';

export interface OtherActivity extends BaseActivity<OtherDefinition> {
  interactionType: InteractionType.Other | 'other';

  /**
   * Any format is valid within this string as appropriate for the type of interaction
   */
  correctResponsesPattern: string[];
}
