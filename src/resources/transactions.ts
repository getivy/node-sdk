// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Transactions extends APIResource {
  /**
   * Retrieve a paginated list of transactions for the specified time period
   */
  list(body: TransactionListParams, options?: Core.RequestOptions): Core.APIPromise<TransactionListResponse> {
    return this._client.post('/api/service/transaction/list', { body, ...options });
  }
}

export interface TransactionListResponse {
  /**
   * Array of transactions for the given data session
   */
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
    currency: string;

    /**
     * The date and time when the transaction occurred.
     */
    timestamp: unknown;

    /**
     * The type of transaction (debit or credit).
     */
    type: 'credit' | 'debit';

    /**
     * The name of the counterparty (creditor or debtor) if available.
     */
    counterpartyName?: string;

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
