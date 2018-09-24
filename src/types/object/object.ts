import { Activity } from './activity';
import { ActorObject } from './actor-object';
import { StatementRef } from './statement-ref';
import { SubStatement } from './sub-statement';

/**
 * Objects which are provided as a value for this property SHOULD include an "objectType" property. If not specified, the objectType is
 * assumed to be Activity. Other valid values are: Agent, Group, SubStatement or StatementRef. The properties of an Object change
 * according to the objectType.
 */
export type Object = Activity | StatementRef | SubStatement | ActorObject;
