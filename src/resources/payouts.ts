// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Payouts extends APIResource {
  /**
   * Create a Customer Payout to a customer's bank account for withdrawals or similar
   * purposes.
   */
  create(body: PayoutCreateParams, options?: Core.RequestOptions): Core.APIPromise<PublicUserPayout> {
    return this._client.post('/api/service/payout/create', { body, ...options });
  }

  /**
   * Retrieve a Customer Payout by id
   */
  retrieve(body: PayoutRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<PublicUserPayout> {
    return this._client.post('/api/service/payout/retrieve', { body, ...options });
  }

  /**
   * List all Customer Payouts made by this merchant account.
   */
  list(body: PayoutListParams, options?: Core.RequestOptions): Core.APIPromise<PayoutListResponse> {
    return this._client.post('/api/service/payout/list', { body, ...options });
  }
}

export interface PublicUserPayout {
  id: string;

  amount: number;

  currency: 'EUR' | 'GBP' | 'PLN';

  /**
   * The validation logic is based on the "type" field. For example, if "type" is set
   * to "iban", the "iban" object must be filled out.
   */
  destination: PublicUserPayout.Destination;

  status: 'paid' | 'pending' | 'failed';

  createdAt?: string;

  /**
   * Any key-value pairs, which will be stored to the object. See
   * [here](https://docs.getivy.de/reference/metadata) for more info.
   */
  metadata?: Record<string, unknown>;

  updatedAt?: string;
}

export namespace PublicUserPayout {
  /**
   * The validation logic is based on the "type" field. For example, if "type" is set
   * to "iban", the "iban" object must be filled out.
   */
  export interface Destination {
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

    bankCode?: Destination.BankCode;

    bban?: Destination.Bban;

    iban?: Destination.Iban;

    sortCode?: Destination.SortCode;
  }

  export namespace Destination {
    export interface BankCode {
      /**
       * The name of the account holder.
       */
      accountHolderName: string;

      accountNumber: string;

      code: string;
    }

    export interface Bban {
      /**
       * The name of the account holder.
       */
      accountHolderName: string;

      bban: string;

      bic?: string;
    }

    export interface Iban {
      /**
       * The name of the account holder.
       */
      accountHolderName: string;

      iban: string;

      bic?: string;
    }

    export interface SortCode {
      /**
       * The name of the account holder.
       */
      accountHolderName: string;

      accountNumber: string;

      sortCode: string;
    }
  }
}

export interface PayoutListResponse {
  /**
   * The total number of items
   */
  count: number;

  /**
   * Whether there are more items to retrieve
   */
  hasNext: boolean;

  items: Array<PublicUserPayout>;

  /**
   * The number of items skipped
   */
  skip: number;
}

export interface PayoutCreateParams {
  /**
   * The amount of the customer payout
   */
  amount: number;

  /**
   * The currency of the customer payout
   */
  currency: 'EUR' | 'GBP' | 'PLN';

  /**
   * The destination of the customer payout.
   */
  destination: PayoutCreateParams.Destination;

  /**
   * The metadata of the customer payout
   */
  metadata?: Record<string, unknown>;

  /**
   * The payment reference of the customer payout. The customer will see this
   * reference in their bank statement.
   */
  paymentReference?: string;
}

export namespace PayoutCreateParams {
  /**
   * The destination of the customer payout.
   */
  export interface Destination {
    /**
     * Used for open-loop customer payouts. Disabled by default for merchants.
     */
    financialAddress?: Destination.FinancialAddress;

    /**
     * For closed-loop customer payouts. The destination account will be taken from the
     * payer of this order.
     */
    orderId?: string;
  }

  export namespace Destination {
    /**
     * Used for open-loop customer payouts. Disabled by default for merchants.
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
        /**
         * The name of the account holder.
         */
        accountHolderName: string;

        accountNumber: string;

        code: string;
      }

      export interface Bban {
        /**
         * The name of the account holder.
         */
        accountHolderName: string;

        bban: string;

        bic?: string;
      }

      export interface Iban {
        /**
         * The name of the account holder.
         */
        accountHolderName: string;

        iban: string;

        bic?: string;
      }

      export interface SortCode {
        /**
         * The name of the account holder.
         */
        accountHolderName: string;

        accountNumber: string;

        sortCode: string;
      }
    }
  }
}

export interface PayoutRetrieveParams {
  /**
   * The unique identifier of the Customer Payout
   */
  id: string;
}

export interface PayoutListParams {
  /**
   * The number of items to retrieve
   */
  limit?: number;

  /**
   * The number of items to skip
   */
  skip?: number;
}

export declare namespace Payouts {
  export {
    type PublicUserPayout as PublicUserPayout,
    type PayoutListResponse as PayoutListResponse,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutRetrieveParams as PayoutRetrieveParams,
    type PayoutListParams as PayoutListParams,
  };
}
