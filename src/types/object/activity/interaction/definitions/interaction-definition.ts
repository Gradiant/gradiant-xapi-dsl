import { ChoiceDefinition } from './choice-definition';
import { FillInDefinition } from './fill-in-definition';
import { LikertDefinition } from './likert-definition';
import { LongFillInDefinition } from './long-fill-in-definition';
import { MatchingDefinition } from './matching-definition';
import { NumericDefinition } from './numeric-definition';
import { OtherDefinition } from './other-definition';
import { PerformanceDefinition } from './performance-definition';
import { SequenceDefinition } from './sequence-definition';
import { TrueFalseDefinition } from './true-false-definition';

export type InteractionDefinition =
  | ChoiceDefinition
  | FillInDefinition
  | LikertDefinition
  | LongFillInDefinition
  | MatchingDefinition
  | NumericDefinition
  | OtherDefinition
  | PerformanceDefinition
  | SequenceDefinition
  | TrueFalseDefinition;
