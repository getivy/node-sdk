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
   * Array of transactions
   */
  data: Array<TransactionListResponse.Data>;

  /**
   * Pagination information
   */
  paging: TransactionListResponse.Paging;
}

export namespace TransactionListResponse {
  export interface Data {
    /**
     * Transaction identifier
     */
    id: string;

    /**
     * Amount of the transaction
     */
    amount: string;

    /**
     * Balance information
     */
    balance: Data.Balance;

    /**
     * Bank statement reference
     */
    bankStatementReference: string;

    /**
     * Creditor account details
     */
    creditor: Data.Creditor;

    /**
     * ISO 4217 currency code
     */
    currency: string;

    /**
     * Debtor account details
     */
    debtor: Data.Debtor;

    /**
     * Side of the transaction
     */
    side: 'credit' | 'debit';

    /**
     * Transaction date as unix timestamp
     */
    transactionDate: number;
  }

  export namespace Data {
    /**
     * Balance information
     */
    export interface Balance {
      /**
       * Balance after the transaction
       */
      after: string;

      /**
       * Balance before the transaction
       */
      before: string;
    }

    /**
     * Creditor account details
     */
    export interface Creditor {
      /**
       * Type of financial address
       */
      type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet';

      bankCode?: Creditor.BankCode;

      bban?: Creditor.Bban;

      iban?: Creditor.Iban;

      sortCode?: Creditor.SortCode;

      wallet?: Creditor.Wallet;
    }

    export namespace Creditor {
      export interface BankCode {
        accountHolderName: string;

        accountNumber: string;

        code: string;
      }

      export interface Bban {
        accountHolderName: string;

        bban: string;

        bic?: string;
      }

      export interface Iban {
        accountHolderName: string;

        iban: string;

        bic?: string;
      }

      export interface SortCode {
        accountHolderName: string;

        accountNumber: string;

        sortCode: string;
      }

      export interface Wallet {
        /**
         * The blockchain wallet address
         */
        address: string;
      }
    }

    /**
     * Debtor account details
     */
    export interface Debtor {
      /**
       * Type of financial address
       */
      type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet';

      bankCode?: Debtor.BankCode;

      bban?: Debtor.Bban;

      iban?: Debtor.Iban;

      sortCode?: Debtor.SortCode;

      wallet?: Debtor.Wallet;
    }

    export namespace Debtor {
      export interface BankCode {
        accountHolderName: string;

        accountNumber: string;

        code: string;
      }

      export interface Bban {
        accountHolderName: string;

        bban: string;

        bic?: string;
      }

      export interface Iban {
        accountHolderName: string;

        iban: string;

        bic?: string;
      }

      export interface SortCode {
        accountHolderName: string;

        accountNumber: string;

        sortCode: string;
      }

      export interface Wallet {
        /**
         * The blockchain wallet address
         */
        address: string;
      }
    }
  }

  /**
   * Pagination information
   */
  export interface Paging {
    /**
     * Whether there are more transactions available
     */
    hasNext: boolean;

    /**
     * Cursor for the next page of results
     */
    nextCursor?: string;
  }
}

export interface TransactionListParams {
  /**
   * Start timestamp (inclusive) - unix timestamp
   */
  from: number;

  /**
   * End timestamp (exclusive) - unix timestamp
   */
  to: number;

  /**
   * Cursor for pagination
   */
  afterCursor?: string;
}

export declare namespace Transactions {
  export {
    type TransactionListResponse as TransactionListResponse,
    type TransactionListParams as TransactionListParams,
  };
}
