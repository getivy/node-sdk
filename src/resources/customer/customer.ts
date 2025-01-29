// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PayoutsAPI from './payouts';
import {
  PayoutCreateParams,
  PayoutListParams,
  PayoutListResponse,
  PayoutRetrieveParams,
  Payouts,
  PublicUserPayout,
} from './payouts';

export class Customer extends APIResource {
  payouts: PayoutsAPI.Payouts = new PayoutsAPI.Payouts(this._client);
}

Customer.Payouts = Payouts;

export declare namespace Customer {
  export {
    Payouts as Payouts,
    type PublicUserPayout as PublicUserPayout,
    type PayoutListResponse as PayoutListResponse,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutRetrieveParams as PayoutRetrieveParams,
    type PayoutListParams as PayoutListParams,
  };
}
