// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SessionAPI from './session';
import {
  Session,
  SessionCreateParams,
  SessionCreateResponse,
  SessionExpireParams,
  SessionExpireResponse,
  SessionRetrieveParams,
  SessionRetrieveResponse,
} from './session';

export class Checkout extends APIResource {
  session: SessionAPI.Session = new SessionAPI.Session(this._client);
}

Checkout.Session = Session;

export declare namespace Checkout {
  export {
    Session as Session,
    type SessionCreateResponse as SessionCreateResponse,
    type SessionRetrieveResponse as SessionRetrieveResponse,
    type SessionExpireResponse as SessionExpireResponse,
    type SessionCreateParams as SessionCreateParams,
    type SessionRetrieveParams as SessionRetrieveParams,
    type SessionExpireParams as SessionExpireParams,
  };
}
