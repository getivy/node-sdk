// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Balances extends APIResource {
  /**
   * Retrieves the list of account balances for a given data session.
   */
  list(body: BalanceListParams, options?: RequestOptions): APIPromise<BalanceListResponse> {
    return this._client.post('/api/service/data/account-balances/list', { body, ...options });
  }
}

export interface BalanceListResponse {
  /**
   * Array of account balances for the given data session
   */
  balances: Array<BalanceListResponse.Balance>;
}

export namespace BalanceListResponse {
  export interface Balance {
    /**
     * The ID of the account.
     */
    accountId: string;

    /**
     * The available balance.
     */
    available: string;

    /**
     * The currency of the balance.
     */
    currency: string;

    /**
     * The current balance.
     */
    current: string;

    /**
     * The date and time when the balance was last updated.
     */
    timestamp: unknown;
  }
}

export interface BalanceListParams {
  /**
   * The ID of the data session to retrieve account balances for.
   */
  sessionId: string;
}

export declare namespace Balances {
  export { type BalanceListResponse as BalanceListResponse, type BalanceListParams as BalanceListParams };
}
