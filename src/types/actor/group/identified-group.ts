import { AccountGroup } from './account-group';
import { MboxGroup } from './mbox-group';
import { MboxSha1SumGroup } from './mbox-sha1-sum-group';
import { OpenIdGroup } from './open-id-group';

/**
 * An Identified Group is used to uniquely identify a cluster of Agents
 *
 * - An Identified Group MUST include exactly one (1) Inverse Functional Identifier.
 * - An Identified Group MUST NOT contain Group Objects in the "member" property.
 * - An Identified Group SHOULD NOT use Inverse Functional Identifiers that are also used as Agent identifiers.
 * - An Identified Group MAY include a "member" property listing constituent Agents.
 */
export type IdentifiedGroup = AccountGroup | MboxGroup | MboxSha1SumGroup | OpenIdGroup;
