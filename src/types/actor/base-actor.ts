export interface BaseActor {
  /**
   * This property is optional except when the Agent is used as a Statement's object or when the actor is a group
   */
  objectType?: 'Agent' | 'Group';

  /**
   * Full name of the Agent
   */
  name?: string;
}
