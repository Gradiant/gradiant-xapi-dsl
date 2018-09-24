import { Actor } from '../actor';
import { Attachment } from '../attachment';
import { Context } from '../context';
import { Object as ObjectProperty } from '../object';
import { Result } from '../result';
import { Timestamp } from '../utils/types';
import { Verb } from '../verb';

export interface BaseStatement {
  /**
   * The Actor defines who performed the action. The Actor of a Statement can be an Agent or a Group
   */
  actor: Actor;

  /**
   * The Verb defines the action between an Actor and an Activity
   */
  verb: Verb;

  /**
   * The Object defines the thing that was acted on. The Object of a Statement can be an Activity, Agent/Group, SubStatement,
   * or Statement Reference
   */
  object: ObjectProperty;

  /**
   * An optional property that represents a measured outcome related to the Statement in which it is included
   */
  result?: Result;

  /**
   * Context that gives the Statement more meaning. Examples: a team the Actor is working with,
   * altitude at which a scenario was attempted in a flight simulator.
   */
  context?: Context;

  /**
   * Timestamp of when the events described within this Statement occurred. Set by the LRS if not provided.
   */
  timestamp?: Timestamp;

  /**
   * Headers for Attachments to the Statement
   */
  attachments?: Attachment[];
}
