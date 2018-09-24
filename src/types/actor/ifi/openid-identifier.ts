import { URI } from '../../utils/types';

export interface OpenIdIdentifier {
  /**
   * An openID that uniquely identifies the Agent. Ir must be an URI
   */
  openid: URI;
}
