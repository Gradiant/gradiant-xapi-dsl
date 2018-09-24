import { OpenIdIdentifier } from '../ifi';
import { BaseAgent } from './base-agent';

export interface OpenIdAgent extends BaseAgent, OpenIdIdentifier {}
