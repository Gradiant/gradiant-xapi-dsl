import { Verb } from '../../types/verb';
import { ids } from './ids';

export namespace activityStream {
  export namespace v1 {
    export const complete: Verb = {
      display: {
        und: 'complete',
        'es-ES': 'completó',
        'en-US': 'complete'
      },
      id: ids.activityStream.v1.complete
    };

    export const play: Verb = {
      display: {
        und: 'played',
        'es-ES': 'reproduce',
        'en-US': 'played'
      },
      id: ids.activityStream.v1.play
    };

    export const watch: Verb = {
      display: {
        und: 'watched',
        'es-ES': 'vió',
        'en-US': 'watched'
      },
      id: ids.activityStream.v1.watch
    };

    export const listen: Verb = {
      display: {
        und: 'listened',
        'es-ES': 'escuchó',
        'en-US': 'listened'
      },
      id: ids.activityStream.v1.listen
    };

    export const flagAsInappropriate: Verb = {
      display: {
        und: 'flagged as inappropriate',
        'es-ES': 'marcó como inapropiado',
        'en-US': 'flagged as inappropriate'
      },
      id: ids.activityStream.v1.flagAsInappropriate
    };

    export const deleted: Verb = {
      display: {
        und: 'deleted',
        'es-ES': 'eliminó',
        'en-US': 'deleted'
      },
      id: ids.activityStream.v1.deleted
    };

    export const liked: Verb = {
      display: {
        und: 'liked',
        'es-ES': 'le gustó',
        'en-US': 'liked'
      },
      id: ids.activityStream.v1.liked
    };

    export const accessed: Verb = {
      display: {
        und: 'accessed',
        'es-ES': 'accedió',
        'en-US': 'accessed'
      },
      id: ids.activityStream.v1.accessed
    };

    export const created: Verb = {
      display: {
        und: 'created',
        'es-ES': 'creó',
        'en-US': 'created'
      },
      id: ids.activityStream.v1.created
    };
  }
}
