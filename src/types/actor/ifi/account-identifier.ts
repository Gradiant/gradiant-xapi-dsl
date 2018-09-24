import { Account as AccountId } from '../account';

export interface AccountIdentifier {
  /**
   * A user account on an existing system e.g. an LMS or intranet.
   */
  account: AccountId;
}
