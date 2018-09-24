import { Actor, Group } from '../actor';
import { StatementRef } from '../object';
import { Extensions } from '../utils';
import { UUID } from '../utils/types';
import { ContextActivities } from './activities';

/**
 * An optional property that provides a place to add contextual information to a Statement. All "context" properties are optional.
 *
 * The "context" property provides a place to add some contextual information to a Statement.
 * It can store information such as the instructor for an experience, if this experience happened as part of a team-based Activity,
 * or how an experience fits into some broader activity.
 */
export interface Context {
  /**
   * The registration that the Statement is associated with.
   */
  registration?: UUID;

  /**
   *  Instructor that the Statement relates to, if not included as the Actor of the Statement
   */
  instructor?: Actor;

  /**
   * Team that this Statement relates to, if not included as the Actor of the Statement
   */
  team?: Group;

  /**
   * A map of the types of learning activity context that this Statement is related to. Valid context types are:
   * - `parent`
   * - `grouping`
   * - `category`
   * - `other`
   */
  contextActivities?: ContextActivities;

  /**
   * Revision of the learning activity associated with this Statement. Format is free
   */
  revision?: string;

  /**
   * Platform used in the experience of this learning activity
   */
  platform?: string;

  /**
   * Code representing the language in which the experience being recorded in this Statement (mainly) occurred in, if applicable and known
   *
   * It must be formatted according RFC-5646
   */
  language?: string;

  /**
   * Another Statement to be considered as context for this Statement
   */
  statement?: StatementRef;

  /**
   * A map of any other domain-specific context relevant to this Statement. For example, in a flight simulator altitude, airspeed, wind,
   * attitude, GPS coordinates might all be relevant
   */
  extensions?: Extensions;
}
