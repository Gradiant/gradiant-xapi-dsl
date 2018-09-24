import { AccountIdentifier } from './account-identifier';
import { MboxIdentifier } from './mbox-identifier';
import { MboxSha1SumIdentifier } from './mbox-sha1-sum-identifier';
import { OpenIdIdentifier } from './openid-identifier';

/**
 * An Inverse Functional Identifier (IFI) is a value of an Agent or Identified Group that is guaranteed to only ever refer to that Agent
 * or Identified Group
 *
 * Agents and Groups need to be uniquely identifiable in order for data to be stored and retrieved against them. In an xAPI Statement this
 * is accomplished using Inverse Functional Identifiers which are loosely inspired by the widely accepted FOAF principle
 */
export type InverseFunctionalIdentifier = MboxIdentifier | MboxSha1SumIdentifier | OpenIdIdentifier | AccountIdentifier;
