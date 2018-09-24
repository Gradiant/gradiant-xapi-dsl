import { BaseActivity } from './base-activity';
import { InteractionComponent, InteractionType } from './interaction';
import { SequenceDefinition } from './interaction/definitions';

export interface SequenceActivity extends BaseActivity<SequenceDefinition> {
  interactionType: InteractionType.Sequencing | 'sequencing';

  /**
   * A list of the options available in the interaction for selection or ordering
   */
  choices?: InteractionComponent[];

  /**
   * An ordered list of item ids delimited by [,]
   */
  correctResponsesPattern: string[];
}
