import { AnonymousGroup } from './anonymous-group';
import { IdentifiedGroup } from './identified-group';

/**
 * A Group represents a collection of Agents and can be used in most of the same situations an Agent can be used.
 * There are two types of Groups: Anonymous Groups and Identified Groups.
 *
 * - A Learning Record Consumer MUST consider each Anonymous Group distinct even if it has an identical set of members.
 * - Learning Record Providers SHOULD use an Identified Group when they wish to issue multiple Statements, aggregate data or store and
 *   retrieve documents relating to a group.
 * - A Learning Record Provider MAY include a complete or partial list of Agents in the "member" property of a given Anonymous or
 *   Identified Group.
 * - An LRS returning a Statement MAY return the list of Group members in any order.
 *
 */
export type Group = AnonymousGroup | IdentifiedGroup;
