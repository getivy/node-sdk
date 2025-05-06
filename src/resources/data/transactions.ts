// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Transactions extends APIResource {
  /**
   * Retrieves the list of transactions for a given data session. Returns
   * transactions from the last 3 months.
   */
  list(body: TransactionListParams, options?: Core.RequestOptions): Core.APIPromise<TransactionListResponse> {
    return this._client.post('/api/service/data/transactions/list', { body, ...options });
  }
}

export interface TransactionListResponse {
  transactions: Array<TransactionListResponse.Transaction>;
}

export namespace TransactionListResponse {
  export interface Transaction {
    /**
     * The ID of the transaction.
     */
    id: string;

    /**
     * The ID of the account the transaction belongs to.
     */
    accountId: string;

    /**
     * The amount of the transaction.
     */
    amount: string;

    /**
     * The currency of the transaction.
     */
    currency: 'EUR' | 'GBP' | 'PLN' | 'USD' | 'CHF' | 'SEK' | 'DKK' | 'NOK' | 'HUF' | 'CZK' | 'BGN';

    /**
     * The date and time when the transaction occurred.
     */
    timestamp: string;

    /**
     * The type of transaction (debit or credit).
     */
    type: 'debit' | 'credit';

    /**
     * The description of the transaction.
     */
    description?: string;
  }
}

export interface TransactionListParams {
  /**
   * The ID of the data session to retrieve transactions for.
   */
  sessionId: string;
}

export declare namespace Transactions {
  export {
    type TransactionListResponse as TransactionListResponse,
    type TransactionListParams as TransactionListParams,
  };
}
