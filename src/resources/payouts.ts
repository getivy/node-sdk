// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Payouts extends APIResource {
  /**
   * Create a payout for a merchant.
   */
  create(body: PayoutCreateParams, options?: Core.RequestOptions): Core.APIPromise<Payout> {
    return this._client.post('/api/service/payout/create', { body, ...options });
  }

  /**
   * Retrieve a payout object by id.
   */
  retrieve(
    body: PayoutRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PayoutRetrieveResponse> {
    return this._client.post('/api/service/payout/retrieve', { body, ...options });
  }

  /**
   * List payouts for a merchant.
   */
  list(body: PayoutListParams, options?: Core.RequestOptions): Core.APIPromise<PayoutListResponse> {
    return this._client.post('/api/service/payout/list', { body, ...options });
  }
}

export interface Payout {
  /**
   * The payout ID
   */
  id: string;

  /**
   * The payout amount
   */
  amount: number;

  /**
   * The payout created at
   */
  createdAt: unknown;

  /**
   * The payout currency
   */
  currency: 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

  /**
   * The payout destination
   */
  destination: Payout.Destination;

  /**
   * The payout status
   */
  status: 'paid' | 'pending' | 'in_transit' | 'failed' | 'canceled';

  /**
   * The payout type
   */
  type: 'beneficiary' | 'customer';

  /**
   * The payout updated at
   */
  updatedAt: unknown;

  /**
   * The payout metadata
   */
  metadata?: { [key: string]: unknown };

  /**
   * The payout payment reference
   */
  paymentReference?: string;

  /**
   * The payout transaction ID
   */
  transactionId?: string;
}

export namespace Payout {
  /**
   * The payout destination
   */
  export interface Destination {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet';

    bankCode?: Destination.BankCode;

    bban?: Destination.Bban;

    iban?: Destination.Iban;

    sortCode?: Destination.SortCode;

    wallet?: Destination.Wallet;
  }

  export namespace Destination {
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

export interface PayoutRetrieveResponse {
  /**
   * The payout ID
   */
  id: string;

  /**
   * The payout amount
   */
  amount: number;

  /**
   * The payout created at
   */
  createdAt: unknown;

  /**
   * The payout currency
   */
  currency: 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

  /**
   * The payout destination
   */
  destination: PayoutRetrieveResponse.Destination;

  /**
   * The payout status
   */
  status: 'paid' | 'pending' | 'in_transit' | 'failed' | 'canceled';

  /**
   * The payout type
   */
  type: 'beneficiary' | 'customer';

  /**
   * The payout updated at
   */
  updatedAt: unknown;

  /**
   * The payout metadata
   */
  metadata?: { [key: string]: unknown };

  /**
   * The payout payment reference
   */
  paymentReference?: string;

  /**
   * The payout transaction ID
   */
  transactionId?: string;
}

export namespace PayoutRetrieveResponse {
  /**
   * The payout destination
   */
  export interface Destination {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet';

    bankCode?: Destination.BankCode;

    bban?: Destination.Bban;

    iban?: Destination.Iban;

    sortCode?: Destination.SortCode;

    wallet?: Destination.Wallet;
  }

  export namespace Destination {
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

export interface PayoutListResponse {
  count: number;

  hasNext: boolean;

  items: Array<PayoutListResponse.Item>;

  skip: number;
}

export namespace PayoutListResponse {
  export interface Item {
    /**
     * The payout ID
     */
    id: string;

    /**
     * The payout amount
     */
    amount: number;

    /**
     * The payout created at
     */
    createdAt: unknown;

    /**
     * The payout currency
     */
    currency: 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

    /**
     * The payout destination
     */
    destination: Item.Destination;

    /**
     * The payout status
     */
    status: 'paid' | 'pending' | 'in_transit' | 'failed' | 'canceled';

    /**
     * The payout type
     */
    type: 'beneficiary' | 'customer';

    /**
     * The payout updated at
     */
    updatedAt: unknown;

    /**
     * The payout metadata
     */
    metadata?: { [key: string]: unknown };

    /**
     * The payout payment reference
     */
    paymentReference?: string;

    /**
     * The payout transaction ID
     */
    transactionId?: string;
  }

  export namespace Item {
    /**
     * The payout destination
     */
    export interface Destination {
      type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet';

      bankCode?: Destination.BankCode;

      bban?: Destination.Bban;

      iban?: Destination.Iban;

      sortCode?: Destination.SortCode;

      wallet?: Destination.Wallet;
    }

    export namespace Destination {
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
}

export interface PayoutCreateParams {
  /**
   * The payout amount in decimal format. The minimum amount is 0.01.
   */
  amount: number;

  /**
   * The payout currency
   */
  currency: 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

  /**
   * The payout destination
   */
  destination: PayoutCreateParams.Destination;

  /**
   * This can be used to store any additional information you need to associate with
   * this payout.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The payout payment reference. This is visible to the receiving party, if
   * possible.
   */
  paymentReference?: string;
}

export namespace PayoutCreateParams {
  /**
   * The payout destination
   */
  export interface Destination {
    financialAddress?: Destination.FinancialAddress | null;

    orderId?: string;

    type?: 'beneficiary';
  }

  export namespace Destination {
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
}

export interface PayoutRetrieveParams {
  /**
   * The payout ID
   */
  id: string;
}

export interface PayoutListParams {
  limit?: number;

  skip?: number;

  type?: 'customer-payout' | 'beneficiary-payout';
}

export declare namespace Payouts {
  export {
    type Payout as Payout,
    type PayoutRetrieveResponse as PayoutRetrieveResponse,
    type PayoutListResponse as PayoutListResponse,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutRetrieveParams as PayoutRetrieveParams,
    type PayoutListParams as PayoutListParams,
  };
}
