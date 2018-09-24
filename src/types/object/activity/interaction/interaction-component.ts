import { LanguageMap } from '../../../utils';

/**
 * - Within an array of interaction components, all id values MUST be distinct
 * - An interaction component's id value SHOULD NOT have whitespace
 */
export interface InteractionComponent {
  /**
   * Identifies the interaction component within the list
   */
  id: string;

  /**
   * A description of the interaction component (for example, the text for a given choice in a multiple-choice interaction)
   */
  description?: LanguageMap;
}
