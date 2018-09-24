import { AccountAgent } from './account-agent';
import { MboxAgent } from './mbox-agent';
import { MboxSha1SumAgent } from './mbox-sha1-sum-agent';
import { OpenIdAgent } from './open-id-agent';

/**
 * An Agent (an individual) is a persona or system.
 *
 * - An Agent MUST be identified by one of the four types of Inverse Functional Identifiers
 * - An Agent MUST NOT include more than one Inverse Functional Identifier
 * - An Agent SHOULD NOT use Inverse Functional Identifiers that are also used as a Group identifier
 */
export type Agent = AccountAgent | MboxAgent | OpenIdAgent | MboxSha1SumAgent;
