import { LanguageMap } from '../utils';
import { Integer, InternetMediaType, IRI, IRL, Sha2Sum } from '../utils/types';

export interface Attachment {
  /**
   * Identifies the usage of this Attachment. For example: one expected use case for Attachments is to include a "completion certificate".
   * An IRI corresponding to this usage MUST be coined, and used with completion certificate attachments
   */
  usageType: IRI;

  /**
   * Display name (title) of this Attachment
   */
  display: LanguageMap;

  /**
   * A description of the Attachment
   */
  description?: LanguageMap;

  /**
   * The content type of the Attachment
   */
  contentType: InternetMediaType;

  /**
   * The length of the Attachment data in octets.
   */
  length: Integer;

  /**
   * The SHA-2 hash of the Attachment data. This property is always required, even if fileURL is also specified
   */
  sha2: Sha2Sum;

  /**
   * An IRL at which the Attachment data can be retrieved, or from which it used to be retrievable
   */
  fileUrl?: IRL;
}
