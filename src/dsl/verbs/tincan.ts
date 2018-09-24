import { Verb } from '../../types/verb';
import { ids } from './ids';

export namespace tincan {
  export const enabled: Verb = {
    display: {
      und: 'enabled',
      'es-ES': 'activó',
      'en-US': 'enabled'
    },
    id: ids.tincan.enabled
  };

  export const disabled: Verb = {
    display: {
      und: 'disabled',
      'es-ES': 'desactivó',
      'en-US': 'disabled'
    },
    id: ids.tincan.disabled
  };

  export const paused: Verb = {
    display: {
      und: 'paused',
      'es-ES': 'pausó',
      'en-US': 'paused'
    },
    id: ids.tincan.paused
  };

  export const replied: Verb = {
    display: {
      und: 'replied',
      'es-ES': 'replicó',
      'en-US': 'replied'
    },
    id: ids.tincan.replied
  };

  export const skipped: Verb = {
    display: {
      und: 'skipped',
      'es-ES': 'saltó',
      'en-US': 'skipped'
    },
    id: ids.tincan.skipped
  };

  export const votedUp: Verb = {
    display: {
      und: 'voted up',
      'es-ES': 'votó en positivo',
      'en-US': 'voted up'
    },
    id: ids.tincan.votedUp
  };

  export const votedDown: Verb = {
    display: {
      und: 'voted down',
      'es-ES': 'votó en negativo',
      'en-US': 'voted down'
    },
    id: ids.tincan.votedDown
  };
}
