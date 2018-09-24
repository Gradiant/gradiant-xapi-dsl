import { BaseActivity } from './base-activity';
import { InteractionActivity } from './interaction-activity';

/**
 * If it were possible to use the same id for two different Activities, the validity of Statements about these Activities could be
 * questioned. This means an LRS can't ever treat (references to) the same Activity id as belonging to two different Activities,
 * even if it thinks this was intended. Namely, when a conflict with another system occurs, it’s not possible to determine
 * which Activity is intended.
 */
export type Activity = BaseActivity | InteractionActivity;
