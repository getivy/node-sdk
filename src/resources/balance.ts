// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Balance extends APIResource {
  /**
   * Retrieve the balance of your Ivy account. The balance is the money currently
   * available on your Ivy account. It is broken down by currency.
   */
  retrieve(
    body: BalanceRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BalanceRetrieveResponse> {
    return this._client.post('/api/service/balance/retrieve', { body, ...options });
  }
}

export interface BalanceRetrieveResponse {
  /**
   * Array of balance information for different currencies
   */
  balances: Array<BalanceRetrieveResponse.Balance>;
}

export namespace BalanceRetrieveResponse {
  export interface Balance {
    /**
     * The amount of money available on your Ivy account for this currency
     */
    available: number;

    /**
     * The currency of the balance
     */
    currency: 'USD' | 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK' | 'USDC';
  }
}

export interface BalanceRetrieveParams {
  /**
   * The account id to retrieve the balance for. You can find it in the Merchant
   * Dashboard -> Accounts -> Details. If `currency` is provided it will be ignored.
   */
  accountId?: string;

  /**
   * The currency to retrieve the balance for. Default account balance for that
   * currency will be retrieved
   */
  currency?: 'USD' | 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK' | 'USDC';
}

export declare namespace Balance {
  export {
    type BalanceRetrieveResponse as BalanceRetrieveResponse,
    type BalanceRetrieveParams as BalanceRetrieveParams,
  };
}
