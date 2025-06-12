// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Payouts extends APIResource {
  /**
   * Create a Customer Payout to a customer's bank account for withdrawals or similar
   * purposes.
   */
  create(body: PayoutCreateParams, options?: Core.RequestOptions): Core.APIPromise<PayoutCreateResponse> {
    return this._client.post('/api/service/payout/create', { body, ...options });
  }

  /**
   * Retrieve a Customer Payout by id
   */
  retrieve(
    body: PayoutRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PayoutRetrieveResponse> {
    return this._client.post('/api/service/payout/retrieve', { body, ...options });
  }

  /**
   * List all Customer Payouts made by this merchant account.
   */
  list(body: PayoutListParams, options?: Core.RequestOptions): Core.APIPromise<PayoutListResponse> {
    return this._client.post('/api/service/payout/list', { body, ...options });
  }
}

export interface PayoutCreateResponse {
  id: string;

  amount: number;

  createdAt: unknown;

  currency: 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

  destination: PayoutCreateResponse.Destination;

  status: 'pending' | 'paid' | 'failed';

  updatedAt: unknown;

  metadata?: Record<string, unknown>;

  paymentReference?: string;
}

export namespace PayoutCreateResponse {
  export interface Destination {
    psuData: Destination.PsuData | null;

    type: 'iban' | 'sort_code' | 'bank_code' | 'bban';

    bankCode?: Destination.BankCode;

    bban?: Destination.Bban;

    iban?: Destination.Iban;

    paymentReference?: string;

    sortCode?: Destination.SortCode;
  }

  export namespace Destination {
    export interface PsuData {
      branchNumber?: string;

      clientId?: string;

      ipAddress?: string;

      oib?: string;

      psuId?: string;

      ssn?: string;

      username?: string;
    }

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
  }
}

export interface PayoutRetrieveResponse {
  id: string;

  amount: number;

  createdAt: unknown;

  currency: 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

  destination: PayoutRetrieveResponse.Destination;

  status: 'pending' | 'paid' | 'failed';

  updatedAt: unknown;

  metadata?: Record<string, unknown>;

  paymentReference?: string;
}

export namespace PayoutRetrieveResponse {
  export interface Destination {
    psuData: Destination.PsuData | null;

    type: 'iban' | 'sort_code' | 'bank_code' | 'bban';

    bankCode?: Destination.BankCode;

    bban?: Destination.Bban;

    iban?: Destination.Iban;

    paymentReference?: string;

    sortCode?: Destination.SortCode;
  }

  export namespace Destination {
    export interface PsuData {
      branchNumber?: string;

      clientId?: string;

      ipAddress?: string;

      oib?: string;

      psuId?: string;

      ssn?: string;

      username?: string;
    }

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

  /**
   * Array of Customer Payout objects
   */
  items: Array<PayoutListResponse.Item>;

  /**
   * The number of items skipped
   */
  skip: number;
}

export namespace PayoutListResponse {
  export interface Item {
    id: string;

    amount: number;

    createdAt: unknown;

    currency: 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

    destination: Item.Destination;

    status: 'pending' | 'paid' | 'failed';

    updatedAt: unknown;

    metadata?: Record<string, unknown>;

    paymentReference?: string;
  }

  export namespace Item {
    export interface Destination {
      psuData: Destination.PsuData | null;

      type: 'iban' | 'sort_code' | 'bank_code' | 'bban';

      bankCode?: Destination.BankCode;

      bban?: Destination.Bban;

      iban?: Destination.Iban;

      paymentReference?: string;

      sortCode?: Destination.SortCode;
    }

    export namespace Destination {
      export interface PsuData {
        branchNumber?: string;

        clientId?: string;

        ipAddress?: string;

        oib?: string;

        psuId?: string;

        ssn?: string;

        username?: string;
      }

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
    }
  }
}

export interface PayoutCreateParams {
  /**
   * The amount of the customer payout
   */
  amount: number;

  /**
   * The currency of the customer payout
   */
  currency: 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

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
      psuData: FinancialAddress.PsuData | null;

      type: 'iban' | 'sort_code' | 'bank_code' | 'bban';

      bankCode?: FinancialAddress.BankCode;

      bban?: FinancialAddress.Bban;

      iban?: FinancialAddress.Iban;

      paymentReference?: string;

      sortCode?: FinancialAddress.SortCode;
    }

    export namespace FinancialAddress {
      export interface PsuData {
        branchNumber?: string;

        clientId?: string;

        ipAddress?: string;

        oib?: string;

        psuId?: string;

        ssn?: string;

        username?: string;
      }

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
    type PayoutCreateResponse as PayoutCreateResponse,
    type PayoutRetrieveResponse as PayoutRetrieveResponse,
    type PayoutListResponse as PayoutListResponse,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutRetrieveParams as PayoutRetrieveParams,
    type PayoutListParams as PayoutListParams,
  };
}
