import { AccountIdentifier } from '../ifi';
import { BaseAgent } from './base-agent';

export interface AccountAgent extends BaseAgent, AccountIdentifier {}
