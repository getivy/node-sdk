// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Orders extends APIResource {
  /**
   * Create a new order. By creating a new order, you will create a new settlement
   * destination which you can use to settle expected incoming payments efficiently.
   * After creating the order, Ivy provides you with a destination for the expected
   * incoming payment. As soon as a payment with the same details arrives, Ivy will
   * update the status of the order.
   */
  create(body: OrderCreateParams, options?: Core.RequestOptions): Core.APIPromise<OrderCreateResponse> {
    return this._client.post('/api/service/order/create', { body, ...options });
  }

  /**
   * Retrieve details of an order. You can retrieve the order by passing either the
   * internal Ivy order id or the `referenceId` you specified when creating a
   * Checkout Session to the `id` field.
   */
  retrieve(body: OrderRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<OrderRetrieveResponse> {
    return this._client.post('/api/service/order/details', { body, ...options });
  }
}

export interface OrderCreateResponse {
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
  destination: OrderCreateResponse.Destination;

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
  metadata?: Record<string, unknown>;

  /**
   * The payout payment reference
   */
  paymentReference?: string;
}

export namespace OrderCreateResponse {
  /**
   * The payout destination
   */
  export interface Destination {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban';

    bankCode?: Destination.BankCode;

    bban?: Destination.Bban;

    iban?: Destination.Iban;

    sortCode?: Destination.SortCode;
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
  }
}

export interface OrderRetrieveResponse {
  /**
   * The unique id for the order.
   */
  id: string;

  /**
   * The unique id for the merchantApp which initiated the order.
   */
  appId: string;

  /**
   * The amount of application fee collected with the order.
   */
  applicationFeeAmount: number;

  createdAt: unknown;

  instantPaymentScheme: boolean;

  /**
   * Same as appId
   */
  merchantAppId: string;

  merchantId: string;

  /**
   * The price object. All values in decimals, e.g. 0.13 for 13 cents.
   */
  price: OrderRetrieveResponse.Price;

  /**
   * A unique id for the order which can be set when creating the checkoutSession.
   */
  referenceId: string;

  /**
   * The legal name of the merchant which initiated the order.
   */
  shopName: string;

  /**
   * The status of the order. As soon as this value is 'paid', you can ship the
   * order.
   */
  status:
    | 'failed'
    | 'canceled'
    | 'processing'
    | 'waiting_for_payment'
    | 'paid'
    | 'in_refund'
    | 'refunded'
    | 'refund_failed'
    | 'partially_refunded'
    | 'in_dispute'
    | 'disputed'
    | 'refused';

  updatedAt: unknown;

  /**
   * The unique identifier of the customer's bank.
   */
  bankId?: string;

  /**
   * The reference that will be shown on the bank statement of the customer. Only
   * available after a successful DirectDebit initiation.
   */
  bankStatementReference?: string;

  billingAddress?: OrderRetrieveResponse.BillingAddress;

  /**
   * The merchant category code for the account. MCCs are used to classify businesses
   * based on the goods or services they provide.
   */
  category?: string;

  climateActionMode?: OrderRetrieveResponse.ClimateActionMode;

  co2Grams?: number;

  /**
   * The unique identifier of the customer who placed the order.
   */
  customerId?: string;

  /**
   * The destination bank account and statement reference for the order.
   */
  destination?: OrderRetrieveResponse.Destination;

  /**
   * The customer-facing id of the order.
   */
  displayId?: string;

  guest?: boolean;

  impactOffsetProjects?: Array<unknown>;

  /**
   * The list of line items sold with the order.
   */
  lineItems?: Array<OrderRetrieveResponse.LineItem>;

  mandate?: OrderRetrieveResponse.Mandate;

  /**
   * The financial address of the merchant associated with the order. Only available
   * when requested via order/details and therefore requires authentication.
   */
  merchantFinancialAddress?: OrderRetrieveResponse.MerchantFinancialAddress;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for
   * storing additional information about the object in a structured format.
   */
  metadata?: Record<string, unknown>;

  /**
   * The project related to the order.
   */
  offsetProject?: string;

  /**
   * The financial address of the payer associated with the order. Only available
   * after successful PIS flow.
   */
  payerFinancialAddress?: OrderRetrieveResponse.PayerFinancialAddress;

  paymentMethodType?: 'sepa_debit' | 'customer_balance' | 'manual_bank_transfer';

  /**
   * The payment mode of the order. Can be either settlement or direct.
   */
  paymentMode?: 'direct' | 'settlement';

  /**
   * Deprecated. The status of the payment.
   */
  paymentStatus?:
    | 'not_settled'
    | 'failed'
    | 'canceled'
    | 'processing'
    | 'requires_action'
    | 'succeeded'
    | 'in_refund'
    | 'refunded'
    | 'refund_failed'
    | 'partially_refunded'
    | 'disputed';

  /**
   * The total amount in the currency of all successful refunds for this order
   */
  refundAmount?: number;

  /**
   * All partial and total refunds of this order.
   */
  refunds?: Array<OrderRetrieveResponse.Refund>;

  /**
   * If set to true, a payment mandate will be created for the user. This is
   * currently in alpha and defaults to false.
   */
  setupPaymentMandate?: boolean;

  shippingAddress?: OrderRetrieveResponse.ShippingAddress;

  shopLogo?: string;

  /**
   * Information about the customer who finished the order.
   */
  shopper?: OrderRetrieveResponse.Shopper;

  /**
   * Deprecated. The email of the customer who completed the order.
   */
  shopperEmail?: string;

  statusClassification?: OrderRetrieveResponse.StatusClassification;

  statusHistoryList?: Array<OrderRetrieveResponse.StatusHistoryList>;

  /**
   * The subaccount id of the merchant.
   */
  subaccountId?: string;

  subaccountLegalName?: string;

  trees?: number;
}

export namespace OrderRetrieveResponse {
  /**
   * The price object. All values in decimals, e.g. 0.13 for 13 cents.
   */
  export interface Price {
    currency: 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

    total: number;

    shipping?: number;

    subTotal?: number;

    totalNet?: number;

    vat?: number;
  }

  export interface BillingAddress {
    city: string;

    country:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    firstName: string;

    lastName: string;

    line1: string;

    line2: string;

    region: string;

    zipCode: string;
  }

  export interface ClimateActionMode {
    amount: number;

    type: 'transaction' | 'amount';
  }

  /**
   * The destination bank account and statement reference for the order.
   */
  export interface Destination {
    bankAccount: Destination.BankAccount;

    /**
     * The bank statement reference of the payment for the order. This is the reference
     * that will be visible on the bank statement.
     */
    bankStatementReference: string;
  }

  export namespace Destination {
    export interface BankAccount {
      type: 'iban' | 'sort_code' | 'bank_code' | 'bban';

      bankCode?: BankAccount.BankCode;

      bban?: BankAccount.Bban;

      iban?: BankAccount.Iban;

      paymentReference?: string;

      sortCode?: BankAccount.SortCode;
    }

    export namespace BankAccount {
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

  export interface LineItem {
    /**
     * Accumulated cost in decimals. For example, for a lineItem with total price 3.00
     * and quantity 4, amount would be equal to 12.00.
     */
    amount: number;

    /**
     * Customer-facing name of the line item.
     */
    name: string;

    singleNet: number;

    singleVat: number;

    category?:
      | '5045'
      | '5065'
      | '5094'
      | '5192'
      | '5193'
      | '5499'
      | '5655'
      | '5691'
      | '5712'
      | '5722'
      | '5812'
      | '5814'
      | '5912'
      | '5977'
      | '5999'
      | '7629';

    co2Grams?: number;

    EAN?: string;

    /**
     * An image of the line item. Valid URLs are accepted only.
     */
    image?: string;

    /**
     * Quantity of this lineItem.
     */
    quantity?: number;

    /**
     * An internal unique id stored to this line item.
     */
    referenceId?: string;
  }

  export interface Mandate {
    accountHolderName: string;

    additionalDisplayInformation?: Mandate.AdditionalDisplayInformation;

    creditor?: Mandate.Creditor;

    reference?: string;

    referenceId?: string;

    setup?: boolean;

    userNotificationEmail?: string;
  }

  export namespace Mandate {
    export interface AdditionalDisplayInformation {
      cadence?: 'BI_WEEKLY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL' | 'ON_DEMAND';

      price?: AdditionalDisplayInformation.Price;
    }

    export namespace AdditionalDisplayInformation {
      export interface Price {
        amount: number;

        currency: 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK';
      }
    }

    export interface Creditor {
      id?: string;

      name?: string;
    }
  }

  /**
   * The financial address of the merchant associated with the order. Only available
   * when requested via order/details and therefore requires authentication.
   */
  export interface MerchantFinancialAddress {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban';

    bankCode?: MerchantFinancialAddress.BankCode;

    bban?: MerchantFinancialAddress.Bban;

    iban?: MerchantFinancialAddress.Iban;

    paymentReference?: string;

    sortCode?: MerchantFinancialAddress.SortCode;
  }

  export namespace MerchantFinancialAddress {
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

  /**
   * The financial address of the payer associated with the order. Only available
   * after successful PIS flow.
   */
  export interface PayerFinancialAddress {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban';

    bankCode?: PayerFinancialAddress.BankCode;

    bban?: PayerFinancialAddress.Bban;

    iban?: PayerFinancialAddress.Iban;

    sortCode?: PayerFinancialAddress.SortCode;
  }

  export namespace PayerFinancialAddress {
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
  }

  export interface Refund {
    /**
     * The unique id of this refund request.
     */
    id: string;

    /**
     * The amount of the refund in decimals.
     */
    amount: number;

    createdAt: unknown;

    /**
     * The unique id of this refund request. This can be set when requesting the
     * refund.
     */
    referenceId: string;

    /**
     * The current status of this refund.
     */
    status: 'pending' | 'succeeded' | 'failed' | 'requires_action' | 'partially_refunded';

    updatedAt: unknown;

    /**
     * The description of the refund.
     */
    description?: string;
  }

  export interface ShippingAddress {
    city: string;

    country:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    firstName: string;

    lastName: string;

    line1: string;

    line2: string;

    region: string;

    zipCode: string;
  }

  /**
   * Information about the customer who finished the order.
   */
  export interface Shopper {
    email?: string;

    phoneNumber?: string;
  }

  export interface StatusClassification {
    primary: 'payment_authorisation_failed' | 'payment_execution_failed' | 'payment_abandoned';

    secondary?:
      | 'timeout'
      | 'wrong_credentials'
      | 'incorrect_2fa_response'
      | 'payment_rejected'
      | 'insufficient_funds'
      | 'cancelled'
      | 'connection_to_bank_failed'
      | 'international_transfer_blocked'
      | 'international_transfer_limit_exceeded'
      | 'user_blocked'
      | 'bank_error'
      | 'instant_transfers_not_enabled'
      | 'no_active_tan_methods_available'
      | 'account_limit_exceeded'
      | 'bank_under_maintenance'
      | 'pin_blocked'
      | 'payment_not_settled';
  }

  export interface StatusHistoryList {
    createdAt: unknown;

    currentStatus:
      | 'failed'
      | 'canceled'
      | 'processing'
      | 'waiting_for_payment'
      | 'paid'
      | 'in_refund'
      | 'refunded'
      | 'refund_failed'
      | 'partially_refunded'
      | 'in_dispute'
      | 'disputed'
      | 'refused';

    reason:
      | 'ORDER_CREATED'
      | 'CHECKOUT_SESSION_ABORTED'
      | 'PAYMENT_SUCCEEDED'
      | 'PAYMENT_INITIATED'
      | 'ORDER_CANCELED'
      | 'ORDER_REFUND_INITIATED'
      | 'ORDER_REFUNDED'
      | 'REFUND_CHARGE_SUCCEEDED'
      | 'REFUND_UPDATED'
      | 'CHECKOUT_COMPLETED'
      | 'PIS_PAYMENT_INITIATED'
      | 'PIS_PAYMENT_UPDATED'
      | 'PIS_PAYMENT_SUCCEEDED'
      | 'PAYMENT_NOT_SETTLED'
      | 'PAYMENT_INITIATION_FAILED'
      | 'PAYMENT_CANCELED'
      | 'PAYMENT_FAILED'
      | 'CHECKOUT_SESSION_CREATED'
      | 'EXPIRED_CHECKOUT_SESSION_ABORTED'
      | 'DISPUTE'
      | 'PENDING_PAYMENT_ATTEMPTS_FOUND'
      | 'AML_FREEZE'
      | 'MANUAL_FREEZE'
      | 'MANUAL_UNFREEZE'
      | 'ORDER_MANUALLY_REOPENED';

    updatedAt: unknown;

    previousStatus?:
      | 'failed'
      | 'canceled'
      | 'processing'
      | 'waiting_for_payment'
      | 'paid'
      | 'in_refund'
      | 'refunded'
      | 'refund_failed'
      | 'partially_refunded'
      | 'in_dispute'
      | 'disputed'
      | 'refused'
      | null;
  }
}

export interface OrderCreateParams {
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
  destination: OrderCreateParams.Destination;

  /**
   * This can be used to store any additional information you need to associate with
   * this payout.
   */
  metadata?: Record<string, unknown>;

  /**
   * The payout payment reference. This is visible to the receiving party, if
   * possible.
   */
  paymentReference?: string;
}

export namespace OrderCreateParams {
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
      type: 'iban' | 'sort_code' | 'bank_code' | 'bban';

      bankCode?: FinancialAddress.BankCode;

      bban?: FinancialAddress.Bban;

      iban?: FinancialAddress.Iban;

      sortCode?: FinancialAddress.SortCode;
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
    }
  }
}

export interface OrderRetrieveParams {
  /**
   * You can put in either the Ivy id OR the referenceId of the order
   */
  id: string;
}

export declare namespace Orders {
  export {
    type OrderCreateResponse as OrderCreateResponse,
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderCreateParams as OrderCreateParams,
    type OrderRetrieveParams as OrderRetrieveParams,
  };
}
