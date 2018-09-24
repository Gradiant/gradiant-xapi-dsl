import { Activity } from '../../object/activity';

export interface ContextActivities {
  parent?: Activity | Activity[];
  grouping?: Activity | Activity[];
  category?: Activity | Activity[];
  other?: Activity | Activity[];
}
