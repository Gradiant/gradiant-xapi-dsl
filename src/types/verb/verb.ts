import { LanguageMap } from '../utils';
import { IRI } from '../utils/types';

/**
 * The Verb in an xAPI Statement describes the action performed during the learning experience. The xAPI does not specify any particular
 * Verbs. (With one exception, namely the reserved Verb http://adlnet.gov/expapi/verbs/voided). Instead, it defines how to create Verbs so
 * that communities of practice can establish Verbs meaningful to their members and make them available for use by anyone. A predefined
 * list of Verbs would be limited by definition and might not be able to effectively capture all possible future learning experiences.
 *
 * - A system reading a Statement MUST use the Verb IRI to infer meaning.
 * - The IRI contained in an id SHOULD contain a human-readable portion which SHOULD provide meaning enough for a person reviewing the
 *   raw statement to disambiguate the Verb from other similar (in syntax) Verbs.
 * - A single Verb IRI MUST NOT be used to refer to multiple meanings.
 */
export interface Verb {
  /**
   * Corresponds to a Verb definition. Each Verb definition corresponds to the meaning of a Verb, not the word.
   */
  id: IRI;

  /**
   * The human readable representation of the Verb in one or more languages. This does not have any impact on the meaning of the Statement,
   * but serves to give a human-readable display of the meaning already determined by the chosen Verb.
   */
  display?: LanguageMap;
}
