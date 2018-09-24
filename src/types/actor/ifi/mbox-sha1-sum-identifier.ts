import { Sha1Sum } from '../../utils/types';

export interface MboxSha1SumIdentifier {
  /**
   * The hex-encoded SHA1 hash of a mailto IRI (i.e. the value of an mbox property). An LRS MAY include Agents with a matching hash when a
   * request is based on an mbox.
   */
  mbox_sha1sum: Sha1Sum;
}
