// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Orders extends APIResource {
  /**
   * Retrieve details of an order. You can retrieve the order by passing either the
   * internal Ivy order id or the `referenceId` you specified when creating a
   * Checkout Session to the `id` field.
   */
  retrieve(body: OrderRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<OrderRetrieveResponse> {
    return this._client.post('/api/service/order/details', { body, ...options });
  }

  /**
   * Update certain fields of the specified order.
   */
  update(body: OrderUpdateParams, options?: Core.RequestOptions): Core.APIPromise<OrderUpdateResponse> {
    return this._client.post('/api/service/order/update', { body, ...options });
  }
}

export interface OrderRetrieveResponse {
  /**
   * The Ivy unique identifier for the order.
   */
  id: string;

  /**
   * @deprecated The unique identifier for the merchantApp which initiated the order
   * / payment attempt.
   */
  appId: string;

  /**
   * The Ivy fee for the payment.
   */
  applicationFeeAmount: number;

  createdAt: string;

  instantPaymentScheme: boolean;

  /**
   * @deprecated Deprecated in favor of `appId`.
   */
  merchantAppId: string;

  /**
   * The unique identifier for the merchant which initiated the order / payment
   * attempt.
   */
  merchantId: string;

  /**
   * The amount to be paid by the user. The amounts is in decimals, i.e. 10.23
   * represents EUR 10.23. Any amount of decimal places can be provided on
   * initialization, but the actual transfer amount is rounded to 2 decimal places,
   * as this is the format accepted by most banks.
   */
  price: OrderRetrieveResponse.Price;

  /**
   * An internal reference id which will be stored with the checkout & corresponding
   * order. Needs to be unique per shop per order and can be up to 200 characters.
   */
  referenceId: string;

  /**
   * The name of the merchant which initiated the order.
   */
  shopName: string;

  /**
   * The order status. This status symbolises the state of the user's payment
   * attempt. See [the guide](https://docs.getivy.de/docs/payment-status) for more
   * information.
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

  updatedAt: string;

  /**
   * The unique identifier of Ivy of the chosen bank to make the payment. Not there,
   * if no payment was made.
   */
  bankId?: string;

  /**
   * The bank statement reference of the payment for the order. This is the reference
   * that will be visible on the bank statement.
   */
  bankStatementReference?: string;

  /**
   * The billing address of the user. Required when handshake=true.
   */
  billingAddress?: OrderRetrieveResponse.BillingAddress;

  /**
   * The merchant category code or
   * [MCC](https://en.wikipedia.org/wiki/Merchant_category_code).
   */
  category?: string;

  /**
   * @deprecated
   */
  climateActionMode?: OrderRetrieveResponse.ClimateActionMode;

  /**
   * @deprecated
   */
  co2Grams?: number;

  /**
   * The unique identifier of the customer who placed the order.
   */
  customerId?: string;

  /**
   * The customer facing id. This id is displayed to the user during the checkout and
   * in the merchant dashboard.
   */
  displayId?: string;

  /**
   * False by default. If set to true, customers skip email input and jump directly
   * to their bank login. For express Checkout Sessions this is always false.
   */
  guest?: boolean;

  /**
   * Only valid for sustainable incentive mode. The social / sustainable projects
   * available to the user during Checkout.
   */
  impactOffsetProjects?: Array<string>;

  /**
   * The incentive mode of the checkout session. For any use-case apart from
   * e-commerce, please use `white_label` as the value. If set to `white_label`, the
   * checkout session will be white labeled. If set to `sustainable`, the checkout
   * session will contain sustainable incentives for users.
   */
  incentiveMode?: 'white_label' | 'sustainable';

  /**
   * The line items of the Checkout.
   */
  lineItems?: Array<OrderRetrieveResponse.LineItem>;

  mandate?: OrderRetrieveResponse.Mandate;

  /**
   * The destination bank account where the money will be sent to.
   */
  merchantFinancialAddress?: OrderRetrieveResponse.MerchantFinancialAddress;

  /**
   * Any data which will be stored and returned for this checkout session and
   * corresponding order. See [here](https://docs.getivy.de/reference/metadata) for
   * more info.
   */
  metadata?: Record<string, unknown>;

  /**
   * Only valid for sustainable incentive mode. The social / sustainability project
   * chosen by the user during Checkout.
   */
  offsetProject?: string;

  /**
   * The source bank account where the money is send from.
   */
  payerFinancialAddress?: OrderRetrieveResponse.PayerFinancialAddress;

  paymentMethodType?: 'sepa_debit' | 'customer_balance';

  /**
   * The payment mode of the order. Can be either 'settlement' or 'direct'.
   */
  paymentMode?: 'settlement' | 'direct';

  /**
   * @deprecated Deprecated in favor of `status`. Do not use this field to trigger
   * actions in your system.
   */
  paymentStatus?:
    | 'failed'
    | 'canceled'
    | 'processing'
    | 'requires_action'
    | 'succeeded'
    | 'in_refund'
    | 'refunded'
    | 'refund_failed'
    | 'partially_refunded'
    | 'not_settled'
    | 'disputed';

  /**
   * The total amount in the currency of all successful refunds for this order
   */
  refundAmount?: number;

  /**
   * The list of refunds connected to this order.
   */
  refunds?: Array<OrderRetrieveResponse.Refund>;

  /**
   * The shipping address of the user. This is only collected in express Checkouts.
   */
  shippingAddress?: OrderRetrieveResponse.ShippingAddress;

  /**
   * The selected shipping method by the user. Can either be selected during an
   * express Checkout Session or passed during Checkout Session creation.
   */
  shippingMethod?: OrderRetrieveResponse.ShippingMethod;

  /**
   * The logo of the shop provided as a URL.
   */
  shopLogo?: string;

  /**
   * The shopper object. Contains information collected from the user during the
   * Checkout.
   */
  shopper?: OrderRetrieveResponse.Shopper;

  /**
   * @deprecated Deprecated in favor of `shopper.email`. The email of the user if
   * collected in the Checkout.
   */
  shopperEmail?: string;

  statusClassification?: OrderRetrieveResponse.StatusClassification;

  /**
   * List of status history items for the order, used for logging every update on
   * status.
   */
  statusHistoryList?: Array<OrderRetrieveResponse.StatusHistoryList>;

  /**
   * The subaccount id of the order.
   */
  subaccountId?: string;

  /**
   * The legal name of the subaccount
   */
  subaccountLegalName?: string;

  /**
   * @deprecated
   */
  trees?: number;
}

export namespace OrderRetrieveResponse {
  /**
   * The amount to be paid by the user. The amounts is in decimals, i.e. 10.23
   * represents EUR 10.23. Any amount of decimal places can be provided on
   * initialization, but the actual transfer amount is rounded to 2 decimal places,
   * as this is the format accepted by most banks.
   */
  export interface Price {
    currency: 'EUR' | 'GBP' | 'PLN';

    /**
     * The total amount to be paid.
     */
    total: number;

    shipping?: number;

    subTotal?: number;

    totalNet?: number;

    vat?: number;
  }

  /**
   * The billing address of the user. Required when handshake=true.
   */
  export interface BillingAddress {
    city: string;

    /**
     * The country code in
     * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
     */
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

    line1: string;

    zipCode: string;

    firstName?: string;

    lastName?: string;

    line2?: string;

    region?: string;
  }

  /**
   * @deprecated
   */
  export interface ClimateActionMode {
    amount: number;

    type: 'transaction' | 'amount';
  }

  export interface LineItem {
    /**
     * The total amount of all line items, i.e. single amount \* quantity. Given in
     * decimals, i.e. 10.23 represents EUR 10.23.
     */
    amount: number;

    /**
     * The name of the line item.
     */
    name: string;

    /**
     * The quantity of the line item.
     */
    quantity: number;

    /**
     * The net amount of a single item.
     */
    singleNet: number;

    /**
     * The VAT amount of a single item.
     */
    singleVat: number;

    /**
     * The category as [MCC](https://en.wikipedia.org/wiki/Merchant_category_code) of
     * the line item.
     */
    category?: string;

    /**
     * The
     * [EAN](https://en.wikipedia.org/wiki/International_Article_Number#:~:text=The%20International%20Article%20Number%20(also,configuration%2C%20from%20a%20specific%20manufacturer.)
     * of the line item.
     */
    EAN?: string;

    /**
     * The image of the line item as a URL.
     */
    image?: string;

    /**
     * The internal unique identifier of the line item.
     */
    referenceId?: string;
  }

  export interface Mandate {
    /**
     * The name of the account holder who signs the mandate.
     */
    accountHolderName?: string;

    /**
     * Additional information to display to the user during the mandate setup. This
     * information is not used to setup any recurrence on the mandate. It is only
     * displayed to the user during checkout.
     */
    additionalDisplayInformation?: Mandate.AdditionalDisplayInformation;

    /**
     * Mandate creditor data
     */
    creditor?: Mandate.Creditor;

    /**
     * The reference of the mandate going to be setup
     */
    reference?: string;

    /**
     * The mandate referenceId. Set this to match incoming `mandate_setup_started`,
     * `mandate_setup_succeeded` or `mandate_setup_failed` webhook events to your
     * mandate setup request.
     */
    referenceId?: string;

    /**
     * If true, a ready to use mandate will be set up after the payment flow.
     */
    setup?: boolean;

    /**
     * The email of the user who signs the mandate.
     */
    userNotificationEmail?: string;
  }

  export namespace Mandate {
    /**
     * Additional information to display to the user during the mandate setup. This
     * information is not used to setup any recurrence on the mandate. It is only
     * displayed to the user during checkout.
     */
    export interface AdditionalDisplayInformation {
      /**
       * The intended cadence of charges used for displaying purpose only. On demand
       * would be used for unscheduled charges.
       */
      cadence?: 'BI_WEEKLY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL' | 'ON_DEMAND';

      price?: AdditionalDisplayInformation.Price;
    }

    export namespace AdditionalDisplayInformation {
      export interface Price {
        /**
         * The amount displayed to the user as decimal e.g. 10.23 would be displayed as
         * 10.23 EUR.
         */
        amount?: number;

        currency?: 'EUR' | 'GBP' | 'PLN';
      }
    }

    /**
     * Mandate creditor data
     */
    export interface Creditor {
      id?: string;

      name?: string;
    }
  }

  /**
   * The destination bank account where the money will be sent to.
   */
  export interface MerchantFinancialAddress {
    bankCode?: MerchantFinancialAddress.BankCode;

    bban?: MerchantFinancialAddress.Bban;

    iban?: MerchantFinancialAddress.Iban;

    /**
     * The payment reference for the order. This is the reference that will be visible
     * on the bank statement.
     */
    paymentReference?: string;

    sortCode?: MerchantFinancialAddress.SortCode;

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
    type?: string;
  }

  export namespace MerchantFinancialAddress {
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

  /**
   * The source bank account where the money is send from.
   */
  export interface PayerFinancialAddress {
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

    bankCode?: PayerFinancialAddress.BankCode;

    bban?: PayerFinancialAddress.Bban;

    iban?: PayerFinancialAddress.Iban;

    sortCode?: PayerFinancialAddress.SortCode;
  }

  export namespace PayerFinancialAddress {
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

  /**
   * A Refund object. This corresponds to one Refund request.
   */
  export interface Refund {
    id: string;

    amount: number;

    createdAt: string;

    referenceId: string;

    /**
     * The status of the refund. Always use the status of the order as your source of
     * truth to trigger actions in your dashboard.
     */
    status: 'pending' | 'succeeded' | 'failed' | 'requires_action' | 'partially_refunded';

    updatedAt: string;

    description?: string;
  }

  /**
   * The shipping address of the user. This is only collected in express Checkouts.
   */
  export interface ShippingAddress {
    city: string;

    /**
     * The country code in
     * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
     */
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

    line1: string;

    zipCode: string;

    firstName?: string;

    lastName?: string;

    line2?: string;

    region?: string;
  }

  /**
   * The selected shipping method by the user. Can either be selected during an
   * express Checkout Session or passed during Checkout Session creation.
   */
  export interface ShippingMethod {
    /**
     * The customer-facing name of the shipping method.
     */
    name: string;

    /**
     * The price of the shipping method in decimals, i.e. 10.23 represents EUR 10.23.
     */
    price: number;

    /**
     * The unique identifier of the shipping method within Ivy.
     */
    id?: string;

    /**
     * The list of countries where the shipping method is available.
     */
    countries?: Array<
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
      | 'XK'
    >;

    /**
     * The delivery estimate of the shipping method.
     */
    deliveryEstimate?: ShippingMethod.DeliveryEstimate;

    /**
     * The unique identifier within your system of the shipping method.
     */
    reference?: string;

    /**
     * @deprecated Deprecated in favor of deliveryEstimate
     */
    timeFrame?: string;
  }

  export namespace ShippingMethod {
    /**
     * The delivery estimate of the shipping method.
     */
    export interface DeliveryEstimate {
      /**
       * The maximum delivery time.
       */
      maximum?: DeliveryEstimate.Maximum;

      /**
       * The minimum delivery time.
       */
      minimum?: DeliveryEstimate.Minimum;
    }

    export namespace DeliveryEstimate {
      /**
       * The maximum delivery time.
       */
      export interface Maximum {
        /**
         * The unit of the time duration.
         */
        unit: 'hour' | 'day' | 'business_day' | 'week' | 'month';

        /**
         * The value of the time duration.
         */
        value: number;
      }

      /**
       * The minimum delivery time.
       */
      export interface Minimum {
        /**
         * The unit of the time duration.
         */
        unit: 'hour' | 'day' | 'business_day' | 'week' | 'month';

        /**
         * The value of the time duration.
         */
        value: number;
      }
    }
  }

  /**
   * The shopper object. Contains information collected from the user during the
   * Checkout.
   */
  export interface Shopper {
    email?: string;

    phoneNumber?: string;
  }

  export interface StatusClassification {
    /**
     * Populated with the primary payment initiation failure classsification if
     * available.
     */
    primary?: string;

    /**
     * Populated with the secondary payment initiation failure classsification if
     * available.
     */
    secondary?: string;
  }

  export interface StatusHistoryList {
    /**
     * The order status. This status symbolises the state of the user's payment
     * attempt. See [the guide](https://docs.getivy.de/docs/payment-status) for more
     * information.
     */
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

    reason: string;

    updatedAt: string;

    /**
     * The order status. This status symbolises the state of the user's payment
     * attempt. See [the guide](https://docs.getivy.de/docs/payment-status) for more
     * information.
     */
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

export interface OrderUpdateResponse {
  /**
   * The Ivy unique identifier for the order.
   */
  id: string;

  /**
   * @deprecated The unique identifier for the merchantApp which initiated the order
   * / payment attempt.
   */
  appId: string;

  /**
   * The Ivy fee for the payment.
   */
  applicationFeeAmount: number;

  createdAt: string;

  instantPaymentScheme: boolean;

  /**
   * @deprecated Deprecated in favor of `appId`.
   */
  merchantAppId: string;

  /**
   * The unique identifier for the merchant which initiated the order / payment
   * attempt.
   */
  merchantId: string;

  /**
   * The amount to be paid by the user. The amounts is in decimals, i.e. 10.23
   * represents EUR 10.23. Any amount of decimal places can be provided on
   * initialization, but the actual transfer amount is rounded to 2 decimal places,
   * as this is the format accepted by most banks.
   */
  price: OrderUpdateResponse.Price;

  /**
   * An internal reference id which will be stored with the checkout & corresponding
   * order. Needs to be unique per shop per order and can be up to 200 characters.
   */
  referenceId: string;

  /**
   * The name of the merchant which initiated the order.
   */
  shopName: string;

  /**
   * The order status. This status symbolises the state of the user's payment
   * attempt. See [the guide](https://docs.getivy.de/docs/payment-status) for more
   * information.
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

  updatedAt: string;

  /**
   * The unique identifier of Ivy of the chosen bank to make the payment. Not there,
   * if no payment was made.
   */
  bankId?: string;

  /**
   * The bank statement reference of the payment for the order. This is the reference
   * that will be visible on the bank statement.
   */
  bankStatementReference?: string;

  /**
   * The billing address of the user. Required when handshake=true.
   */
  billingAddress?: OrderUpdateResponse.BillingAddress;

  /**
   * The merchant category code or
   * [MCC](https://en.wikipedia.org/wiki/Merchant_category_code).
   */
  category?: string;

  /**
   * @deprecated
   */
  climateActionMode?: OrderUpdateResponse.ClimateActionMode;

  /**
   * @deprecated
   */
  co2Grams?: number;

  /**
   * The unique identifier of the customer who placed the order.
   */
  customerId?: string;

  /**
   * The customer facing id. This id is displayed to the user during the checkout and
   * in the merchant dashboard.
   */
  displayId?: string;

  /**
   * False by default. If set to true, customers skip email input and jump directly
   * to their bank login. For express Checkout Sessions this is always false.
   */
  guest?: boolean;

  /**
   * Only valid for sustainable incentive mode. The social / sustainable projects
   * available to the user during Checkout.
   */
  impactOffsetProjects?: Array<string>;

  /**
   * The incentive mode of the checkout session. For any use-case apart from
   * e-commerce, please use `white_label` as the value. If set to `white_label`, the
   * checkout session will be white labeled. If set to `sustainable`, the checkout
   * session will contain sustainable incentives for users.
   */
  incentiveMode?: 'white_label' | 'sustainable';

  /**
   * The line items of the Checkout.
   */
  lineItems?: Array<OrderUpdateResponse.LineItem>;

  mandate?: OrderUpdateResponse.Mandate;

  /**
   * The destination bank account where the money will be sent to.
   */
  merchantFinancialAddress?: OrderUpdateResponse.MerchantFinancialAddress;

  /**
   * Any data which will be stored and returned for this checkout session and
   * corresponding order. See [here](https://docs.getivy.de/reference/metadata) for
   * more info.
   */
  metadata?: Record<string, unknown>;

  /**
   * Only valid for sustainable incentive mode. The social / sustainability project
   * chosen by the user during Checkout.
   */
  offsetProject?: string;

  /**
   * The source bank account where the money is send from.
   */
  payerFinancialAddress?: OrderUpdateResponse.PayerFinancialAddress;

  paymentMethodType?: 'sepa_debit' | 'customer_balance';

  /**
   * The payment mode of the order. Can be either 'settlement' or 'direct'.
   */
  paymentMode?: 'settlement' | 'direct';

  /**
   * @deprecated Deprecated in favor of `status`. Do not use this field to trigger
   * actions in your system.
   */
  paymentStatus?:
    | 'failed'
    | 'canceled'
    | 'processing'
    | 'requires_action'
    | 'succeeded'
    | 'in_refund'
    | 'refunded'
    | 'refund_failed'
    | 'partially_refunded'
    | 'not_settled'
    | 'disputed';

  /**
   * The total amount in the currency of all successful refunds for this order
   */
  refundAmount?: number;

  /**
   * The list of refunds connected to this order.
   */
  refunds?: Array<OrderUpdateResponse.Refund>;

  /**
   * The shipping address of the user. This is only collected in express Checkouts.
   */
  shippingAddress?: OrderUpdateResponse.ShippingAddress;

  /**
   * The selected shipping method by the user. Can either be selected during an
   * express Checkout Session or passed during Checkout Session creation.
   */
  shippingMethod?: OrderUpdateResponse.ShippingMethod;

  /**
   * The logo of the shop provided as a URL.
   */
  shopLogo?: string;

  /**
   * The shopper object. Contains information collected from the user during the
   * Checkout.
   */
  shopper?: OrderUpdateResponse.Shopper;

  /**
   * @deprecated Deprecated in favor of `shopper.email`. The email of the user if
   * collected in the Checkout.
   */
  shopperEmail?: string;

  statusClassification?: OrderUpdateResponse.StatusClassification;

  /**
   * List of status history items for the order, used for logging every update on
   * status.
   */
  statusHistoryList?: Array<OrderUpdateResponse.StatusHistoryList>;

  /**
   * The subaccount id of the order.
   */
  subaccountId?: string;

  /**
   * The legal name of the subaccount
   */
  subaccountLegalName?: string;

  /**
   * @deprecated
   */
  trees?: number;
}

export namespace OrderUpdateResponse {
  /**
   * The amount to be paid by the user. The amounts is in decimals, i.e. 10.23
   * represents EUR 10.23. Any amount of decimal places can be provided on
   * initialization, but the actual transfer amount is rounded to 2 decimal places,
   * as this is the format accepted by most banks.
   */
  export interface Price {
    currency: 'EUR' | 'GBP' | 'PLN';

    /**
     * The total amount to be paid.
     */
    total: number;

    shipping?: number;

    subTotal?: number;

    totalNet?: number;

    vat?: number;
  }

  /**
   * The billing address of the user. Required when handshake=true.
   */
  export interface BillingAddress {
    city: string;

    /**
     * The country code in
     * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
     */
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

    line1: string;

    zipCode: string;

    firstName?: string;

    lastName?: string;

    line2?: string;

    region?: string;
  }

  /**
   * @deprecated
   */
  export interface ClimateActionMode {
    amount: number;

    type: 'transaction' | 'amount';
  }

  export interface LineItem {
    /**
     * The total amount of all line items, i.e. single amount \* quantity. Given in
     * decimals, i.e. 10.23 represents EUR 10.23.
     */
    amount: number;

    /**
     * The name of the line item.
     */
    name: string;

    /**
     * The quantity of the line item.
     */
    quantity: number;

    /**
     * The net amount of a single item.
     */
    singleNet: number;

    /**
     * The VAT amount of a single item.
     */
    singleVat: number;

    /**
     * The category as [MCC](https://en.wikipedia.org/wiki/Merchant_category_code) of
     * the line item.
     */
    category?: string;

    /**
     * The
     * [EAN](https://en.wikipedia.org/wiki/International_Article_Number#:~:text=The%20International%20Article%20Number%20(also,configuration%2C%20from%20a%20specific%20manufacturer.)
     * of the line item.
     */
    EAN?: string;

    /**
     * The image of the line item as a URL.
     */
    image?: string;

    /**
     * The internal unique identifier of the line item.
     */
    referenceId?: string;
  }

  export interface Mandate {
    /**
     * The name of the account holder who signs the mandate.
     */
    accountHolderName?: string;

    /**
     * Additional information to display to the user during the mandate setup. This
     * information is not used to setup any recurrence on the mandate. It is only
     * displayed to the user during checkout.
     */
    additionalDisplayInformation?: Mandate.AdditionalDisplayInformation;

    /**
     * Mandate creditor data
     */
    creditor?: Mandate.Creditor;

    /**
     * The reference of the mandate going to be setup
     */
    reference?: string;

    /**
     * The mandate referenceId. Set this to match incoming `mandate_setup_started`,
     * `mandate_setup_succeeded` or `mandate_setup_failed` webhook events to your
     * mandate setup request.
     */
    referenceId?: string;

    /**
     * If true, a ready to use mandate will be set up after the payment flow.
     */
    setup?: boolean;

    /**
     * The email of the user who signs the mandate.
     */
    userNotificationEmail?: string;
  }

  export namespace Mandate {
    /**
     * Additional information to display to the user during the mandate setup. This
     * information is not used to setup any recurrence on the mandate. It is only
     * displayed to the user during checkout.
     */
    export interface AdditionalDisplayInformation {
      /**
       * The intended cadence of charges used for displaying purpose only. On demand
       * would be used for unscheduled charges.
       */
      cadence?: 'BI_WEEKLY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL' | 'ON_DEMAND';

      price?: AdditionalDisplayInformation.Price;
    }

    export namespace AdditionalDisplayInformation {
      export interface Price {
        /**
         * The amount displayed to the user as decimal e.g. 10.23 would be displayed as
         * 10.23 EUR.
         */
        amount?: number;

        currency?: 'EUR' | 'GBP' | 'PLN';
      }
    }

    /**
     * Mandate creditor data
     */
    export interface Creditor {
      id?: string;

      name?: string;
    }
  }

  /**
   * The destination bank account where the money will be sent to.
   */
  export interface MerchantFinancialAddress {
    bankCode?: MerchantFinancialAddress.BankCode;

    bban?: MerchantFinancialAddress.Bban;

    iban?: MerchantFinancialAddress.Iban;

    /**
     * The payment reference for the order. This is the reference that will be visible
     * on the bank statement.
     */
    paymentReference?: string;

    sortCode?: MerchantFinancialAddress.SortCode;

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
    type?: string;
  }

  export namespace MerchantFinancialAddress {
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

  /**
   * The source bank account where the money is send from.
   */
  export interface PayerFinancialAddress {
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

    bankCode?: PayerFinancialAddress.BankCode;

    bban?: PayerFinancialAddress.Bban;

    iban?: PayerFinancialAddress.Iban;

    sortCode?: PayerFinancialAddress.SortCode;
  }

  export namespace PayerFinancialAddress {
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

  /**
   * A Refund object. This corresponds to one Refund request.
   */
  export interface Refund {
    id: string;

    amount: number;

    createdAt: string;

    referenceId: string;

    /**
     * The status of the refund. Always use the status of the order as your source of
     * truth to trigger actions in your dashboard.
     */
    status: 'pending' | 'succeeded' | 'failed' | 'requires_action' | 'partially_refunded';

    updatedAt: string;

    description?: string;
  }

  /**
   * The shipping address of the user. This is only collected in express Checkouts.
   */
  export interface ShippingAddress {
    city: string;

    /**
     * The country code in
     * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
     */
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

    line1: string;

    zipCode: string;

    firstName?: string;

    lastName?: string;

    line2?: string;

    region?: string;
  }

  /**
   * The selected shipping method by the user. Can either be selected during an
   * express Checkout Session or passed during Checkout Session creation.
   */
  export interface ShippingMethod {
    /**
     * The customer-facing name of the shipping method.
     */
    name: string;

    /**
     * The price of the shipping method in decimals, i.e. 10.23 represents EUR 10.23.
     */
    price: number;

    /**
     * The unique identifier of the shipping method within Ivy.
     */
    id?: string;

    /**
     * The list of countries where the shipping method is available.
     */
    countries?: Array<
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
      | 'XK'
    >;

    /**
     * The delivery estimate of the shipping method.
     */
    deliveryEstimate?: ShippingMethod.DeliveryEstimate;

    /**
     * The unique identifier within your system of the shipping method.
     */
    reference?: string;

    /**
     * @deprecated Deprecated in favor of deliveryEstimate
     */
    timeFrame?: string;
  }

  export namespace ShippingMethod {
    /**
     * The delivery estimate of the shipping method.
     */
    export interface DeliveryEstimate {
      /**
       * The maximum delivery time.
       */
      maximum?: DeliveryEstimate.Maximum;

      /**
       * The minimum delivery time.
       */
      minimum?: DeliveryEstimate.Minimum;
    }

    export namespace DeliveryEstimate {
      /**
       * The maximum delivery time.
       */
      export interface Maximum {
        /**
         * The unit of the time duration.
         */
        unit: 'hour' | 'day' | 'business_day' | 'week' | 'month';

        /**
         * The value of the time duration.
         */
        value: number;
      }

      /**
       * The minimum delivery time.
       */
      export interface Minimum {
        /**
         * The unit of the time duration.
         */
        unit: 'hour' | 'day' | 'business_day' | 'week' | 'month';

        /**
         * The value of the time duration.
         */
        value: number;
      }
    }
  }

  /**
   * The shopper object. Contains information collected from the user during the
   * Checkout.
   */
  export interface Shopper {
    email?: string;

    phoneNumber?: string;
  }

  export interface StatusClassification {
    /**
     * Populated with the primary payment initiation failure classsification if
     * available.
     */
    primary?: string;

    /**
     * Populated with the secondary payment initiation failure classsification if
     * available.
     */
    secondary?: string;
  }

  export interface StatusHistoryList {
    /**
     * The order status. This status symbolises the state of the user's payment
     * attempt. See [the guide](https://docs.getivy.de/docs/payment-status) for more
     * information.
     */
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

    reason: string;

    updatedAt: string;

    /**
     * The order status. This status symbolises the state of the user's payment
     * attempt. See [the guide](https://docs.getivy.de/docs/payment-status) for more
     * information.
     */
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

export interface OrderRetrieveParams {
  id: string;
}

export interface OrderUpdateParams {
  id: string;

  /**
   * The customer-facing id of the order. This id will also be shown next to the
   * orders in the Ivy Dashboard.
   */
  displayId?: string;

  /**
   * An internal reference id which will be stored with the checkout & corresponding
   * order. Needs to be unique per shop per order and can be up to 200 characters. We
   * recommend to use your internal order id here.
   */
  referenceId?: string;

  /**
   * The customer-facing name of the shop.
   */
  shopName?: string;

  /**
   * The order status. This status symbolises the state of the user's payment
   * attempt. See [the guide](https://docs.getivy.de/docs/payment-status) for more
   * information.
   */
  status?:
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
}

export declare namespace Orders {
  export {
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderUpdateResponse as OrderUpdateResponse,
    type OrderRetrieveParams as OrderRetrieveParams,
    type OrderUpdateParams as OrderUpdateParams,
  };
}
