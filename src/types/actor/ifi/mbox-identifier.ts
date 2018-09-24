import { MailtoIRI } from '../../utils/types/mailto-iri';

export interface MboxIdentifier {
  /**
   * The required format is "mailto:email address". Only email addresses that have only ever been and will ever be assigned to this
   * Agent, but no others, SHOULD be used for this property and mbox_sha1sum.
   */
  mbox: MailtoIRI;
}
