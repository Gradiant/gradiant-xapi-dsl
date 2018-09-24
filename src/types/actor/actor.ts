import { Agent } from './agent';
import { Group } from './group';

/**
 * The Actor defines who performed the action. The Actor of a Statement can be an Agent or a Group.
 */
export type Actor = Agent | Group;
