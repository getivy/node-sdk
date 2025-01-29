// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Subaccounts extends APIResource {
  /**
   * Create a Subaccount which can be used to reconcile orders, refunds and payouts
   * more easily.
   */
  create(body: SubaccountCreateParams, options?: Core.RequestOptions): Core.APIPromise<Subaccount> {
    return this._client.post('/api/service/subaccount/create', { body, ...options });
  }

  /**
   * Retrieve a Subaccount by id.
   */
  retrieve(body: SubaccountRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Subaccount> {
    return this._client.post('/api/service/subaccount/retrieve', { body, ...options });
  }
}

export interface Subaccount {
  id: string;

  legalName: string;

  mcc: string;

  ownerId: string;

  status: 'active' | 'inactive';

  createdAt?: string;

  updatedAt?: string;

  websiteUrl?: string;
}

export interface SubaccountCreateParams {
  /**
   * The legal name of the Subaccount
   */
  legalName: string;

  /**
   * The merchant category code of the Subaccount. See
   * [here](https://www.citibank.com/tts/solutions/commercial-cards/assets/docs/govt/Merchant-Category-Codes.pdf)
   * for more information.
   */
  mcc: string;

  /**
   * The website url of the Subaccount
   */
  websiteUrl?: string;
}

export interface SubaccountRetrieveParams {
  /**
   * The unique identifier of the Subaccount
   */
  id: string;
}

export declare namespace Subaccounts {
  export {
    type Subaccount as Subaccount,
    type SubaccountCreateParams as SubaccountCreateParams,
    type SubaccountRetrieveParams as SubaccountRetrieveParams,
  };
}
