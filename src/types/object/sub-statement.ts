import { BaseStatement } from '../statement';
import { Activity } from './activity';
import { ActorObject } from './actor-object';
import { StatementRef } from './statement-ref';

/**
 * A SubStatement is like a StatementRef in that it is included as part of a containing Statement, but unlike a StatementRef,
 * it does not represent an event that has occurred. It can be used to describe, for example, a predication of a potential future Statement
 * or the behavior a teacher looked for when evaluating a student (without representing the student actually doing that behavior)
 */
export interface SubStatement extends BaseStatement {
  objectType: 'SubStatement';
  object: ActorObject | Activity | StatementRef;
}
