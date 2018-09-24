import { Actor } from '../actor';

/**
 * When the object is an actor the `objectType` property is mandatory
 */
export type ActorObject = Actor & { objectType: 'Agent' | 'Group' };
