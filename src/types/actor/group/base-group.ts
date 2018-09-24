import { Agent } from '../agent';
import { BaseActor } from '../base-actor';

export interface BaseGroup extends BaseActor {
  objectType: 'Group';

  /**
   * The members of this Group. This is an unordered list
   */
  member?: Agent[];

  /**
   * Name of the Group
   */
  name?: string;
}
