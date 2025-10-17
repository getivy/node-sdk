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
  /**
   * Array of bank accounts for the given data session
   */
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
    currency: string;

    /**
     * Financial address details of the account
     */
    financialAddress: Array<Account.FinancialAddress>;

    /**
     * The name of the account.
     */
    accountName?: string;
  }

  export namespace Account {
    export interface FinancialAddress {
      type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet';

      bankCode?: FinancialAddress.BankCode;

      bban?: FinancialAddress.Bban;

      iban?: FinancialAddress.Iban;

      sortCode?: FinancialAddress.SortCode;

      wallet?: FinancialAddress.Wallet;
    }

    export namespace FinancialAddress {
      export interface BankCode {
        accountNumber: string;

        code: string;

        accountHolderName?: string;
      }

      export interface Bban {
        bban: string;

        accountHolderName?: string;

        bic?: string;
      }

      export interface Iban {
        iban: string;

        accountHolderName?: string;

        bic?: string;
      }

      export interface SortCode {
        accountNumber: string;

        sortCode: string;

        accountHolderName?: string;
      }

      export interface Wallet {
        /**
         * The blockchain wallet address
         */
        address: string;
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
