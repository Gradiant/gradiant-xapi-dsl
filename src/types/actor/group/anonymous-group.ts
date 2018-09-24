import { Agent } from '../agent';
import { BaseGroup } from './base-group';

/**
 * An Anonymous Group is used describe a cluster of people where there is no ready identifier for this cluster, e.g. an ad hoc team
 *
 * - An Anonymous Group MUST include a "member" property listing constituent Agents.
 * - An Anonymous Group MUST NOT contain Group Objects in the "member" identifiers.
 */
export interface AnonymousGroup extends BaseGroup {
  member: Agent[];
}
