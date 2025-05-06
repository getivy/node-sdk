// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Accounts extends APIResource {
  /**
   * Retrieves the list of accounts for a given data session.
   */
  list(body: AccountListParams, options?: Core.RequestOptions): Core.APIPromise<AccountListResponse> {
    return this._client.post('/api/service/data/accounts/list', { body, ...options });
  }
}

export interface AccountListResponse {
  accounts: Array<AccountListResponse.Account>;
}

export namespace AccountListResponse {
  export interface Account {
    /**
     * The ID of the account.
     */
    id: string;

    /**
     * The ID of the bank.
     */
    bankId: string;

    /**
     * The name of the bank.
     */
    bankName: string;

    /**
     * The currency of the account.
     */
    currency: 'EUR' | 'GBP' | 'PLN' | 'USD' | 'CHF' | 'SEK' | 'DKK' | 'NOK' | 'HUF' | 'CZK' | 'BGN';

    financialAddress: Array<Account.FinancialAddress>;

    /**
     * The name of the account.
     */
    accountName?: string;
  }

  export namespace Account {
    /**
     * The validation logic is based on the "type" field. For example, if "type" is set
     * to "iban", the "iban" object must be filled out.
     */
    export interface FinancialAddress {
      /**
       * The type of the financial address. The actual destination is determined by this
       * field which can be either "iban", "sortCode", "bankCode", or "bban". The
       * validation will fail if you set e.g. type="iban", but then not fill any values
       * in the "iban" object.
       *
       * - iban: The IBAN of the account
       * - sort_code: The sort code of the account
       * - bank_code: The bank code of the account
       * - bban: The BBAN of the account
       */
      type: string;

      bankCode?: FinancialAddress.BankCode;

      bban?: FinancialAddress.Bban;

      iban?: FinancialAddress.Iban;

      sortCode?: FinancialAddress.SortCode;
    }

    export namespace FinancialAddress {
      export interface BankCode {
        accountNumber: string;

        code: string;

        /**
         * The name of the account holder.
         */
        accountHolderName?: string;
      }

      export interface Bban {
        bban: string;

        /**
         * The name of the account holder.
         */
        accountHolderName?: string;

        bic?: string;
      }

      export interface Iban {
        iban: string;

        /**
         * The name of the account holder.
         */
        accountHolderName?: string;

        bic?: string;
      }

      export interface SortCode {
        accountNumber: string;

        sortCode: string;

        /**
         * The name of the account holder.
         */
        accountHolderName?: string;
      }
    }
  }
}

export interface AccountListParams {
  /**
   * The ID of the data session to retrieve accounts for.
   */
  sessionId: string;
}

export declare namespace Accounts {
  export { type AccountListResponse as AccountListResponse, type AccountListParams as AccountListParams };
}
