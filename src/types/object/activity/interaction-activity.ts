import { ChoiceActivity } from './choice-activity';
import { FillInActivity } from './fill-in-activity';
import { LikertActivity } from './likert-activity';
import { LongFillInActvity } from './long-fill-in-actvity';
import { MatchingActivity } from './matching-activity';
import { NumericActivity } from './numeric-activity';
import { OtherActivity } from './other-activity';
import { PerformanceActivity } from './performance-activity';
import { SequenceActivity } from './sequence-activity';
import { TrueFalseActivity } from './true-false-activity';

/**
 * Traditional e-learning has included structures for interactions or assessments. As a way to allow these practices and structures to
 * extend Experience API's utility, this specification includes built-in definitions for interactions, which borrows from the
 * SCORM 2004 4th Edition Data Model. These definitions are intended to provide a simple and familiar utility for recording interaction
 * data.
 *
 * Since 1.0.3, direct references to the SCORM data model have started to be removed, and any associated requirements included directly in
 * this document.
 *
 * These interaction definitions are simple to use, and consequently limited. It is expected that Communities of Practice requiring richer
 * interactions definitions will do so through the use of Activity types and Activity Definition Extensions.
 */
export type InteractionActivity =
  | TrueFalseActivity
  | ChoiceActivity
  | FillInActivity
  | LongFillInActvity
  | MatchingActivity
  | PerformanceActivity
  | SequenceActivity
  | LikertActivity
  | NumericActivity
  | OtherActivity;
