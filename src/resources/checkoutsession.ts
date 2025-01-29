// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Checkoutsession extends APIResource {
  /**
   * Creates a Checkout Session for the merchant corresponding to the given API key.
   * See [the guide](https://docs.getivy.de/docs/payment-integration) for more
   * information.
   */
  create(
    body: CheckoutsessionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CheckoutsessionCreateResponse> {
    return this._client.post('/api/service/checkout/session/create', { body, ...options });
  }

  /**
   * Retrieve a Checkout Session and its details by Ivy id.
   */
  retrieve(
    body: CheckoutsessionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CheckoutsessionRetrieveResponse> {
    return this._client.post('/api/service/checkout/session/details', { body, ...options });
  }

  /**
   * Expire a Checkout Session by Ivy id. By expiring a Checkout Session, users will
   * not be able to access this Checkout Session anymore.
   */
  expire(
    body: CheckoutsessionExpireParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CheckoutsessionExpireResponse> {
    return this._client.post('/api/service/checkout/session/expire', { body, ...options });
  }
}

export interface CheckoutsessionCreateResponse {
  /**
   * The unique identifier of the Checkout within Ivy.
   */
  id: string;

  appId: string;

  /**
   * The markets where the user of the Checkout can select banks from.
   */
  availableMarkets: Array<
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

  createdAt: string;

  /**
   * The Epoch time in seconds at which the Checkout Session will expire. It can be
   * anywhere from 30 minutes to 24 hours after Checkout Session creation. By
   * default, this value is 1 hour from creation.
   */
  expiresAt: number;

  merchant: CheckoutsessionCreateResponse.Merchant;

  /**
   * @deprecated Use merchant.appId instead
   */
  merchantAppId: string;

  /**
   * - `settlement`: The payment is initially settled into a virtual account. The
   *   funds are then disbursed in batches to the merchant. Refunds are instantly
   *   processed from the virtual account.
   * - `direct`: The payment will be settled to the specified `settlementDestination`
   *   account. `settlementDestination` is required if `paymentMode` is `direct`.
   */
  paymentMode: 'settlement' | 'direct';

  /**
   * The price to be paid by the user. All amounts are in decimals, i.e. 10.23
   * represents EUR 10.23. Any amount of decimal places can be provided on
   * initialization, but the actual transfer amount is rounded to 2 decimal places,
   * as this is the format accepted by most banks.
   */
  price: CheckoutsessionCreateResponse.Price;

  /**
   * Only applicable for express Checkout Sessions. The given fields will be required
   * input within the Ivy express Checkout.
   */
  required: CheckoutsessionCreateResponse.Required;

  status: 'open' | 'closed' | 'expired';

  abortReason?: string;

  /**
   * The billing address of the customer. Required when handshake=true.
   */
  billingAddress?: CheckoutsessionCreateResponse.BillingAddress;

  /**
   * The merchant category code or
   * [MCC](https://en.wikipedia.org/wiki/Merchant_category_code).
   */
  category?: string;

  /**
   * Only applicable for express Checkouts. Complete Callback requests will be sent
   * to this URL.
   */
  completeCallbackUrl?: string;

  /**
   * The Epoch time in seconds at which the Checkout Session was created. By default,
   * time of Checkout creation at Ivy.
   */
  created?: number;

  customer?: CheckoutsessionCreateResponse.Customer;

  /**
   * False by default. If set to true, customers cannot modify the pre-selected bank
   * from `prefill.bankId`.
   */
  disableBankSelection?: boolean;

  /**
   * The customer facing id. This id is displayed to the user during the checkout and
   * in the merchant dashboard.
   */
  displayId?: string;

  /**
   * Required if not set in the dashboard. Users will be redirected here after an
   * unsuccessful Payment attempt.
   */
  errorCallbackUrl?: string;

  /**
   * False by default. If set to true, the Checkout is displayed in express mode.
   */
  express?: boolean;

  /**
   * False by default. If set to true, customers skip email input and jump directly
   * to their bank login. For express Checkout Sessions this is always false.
   */
  guest?: boolean;

  /**
   * If true, the order must be confirmed through the merchant with an additional
   * complete callback endpoint. Always true for express sessions.
   */
  handshake?: boolean;

  impactOffsetProjects?: Array<string>;

  /**
   * The incentive mode of the checkout session. For any use-case apart from
   * e-commerce, please use `white_label` as the value. If set to `white_label`, the
   * checkout session will be white labeled. If set to `sustainable`, the checkout
   * session will contain sustainable incentives for users.
   */
  incentiveMode?: 'white_label' | 'sustainable';

  lineItems?: Array<CheckoutsessionCreateResponse.LineItem>;

  /**
   * The locale of the Checkout. If provided, the Checkout will be displayed in the
   * given language. Users can change the language in the Checkout. If not provided,
   * the language of the Checkout is determined by the browser's language.
   */
  locale?: 'de' | 'nl' | 'en' | 'fr' | 'es' | 'it' | 'pt' | 'sv' | 'pl' | 'sk';

  mandate?: CheckoutsessionCreateResponse.Mandate;

  /**
   * ISO 3166-1 alpha-2 country code. The market where the user of the Checkout is
   * located. If provided, the Checkout will display the market's banks first. Not
   * relevant if `prefill.bankId` is provided.
   */
  market?:
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

  /**
   * Any data which will be stored and returned for this checkout session and
   * corresponding order. See [here](https://docs.getivy.de/reference/metadata) for
   * more info.
   */
  metadata?: Record<string, unknown>;

  offsetProject?: string;

  /**
   * The shop-plugin version.
   */
  plugin?: string;

  /**
   * Use this to prefill data of the user in the Checkout.
   */
  prefill?: CheckoutsessionCreateResponse.Prefill;

  /**
   * Only applicable for express Checkouts. Quote Callback requests will be sent to
   * this URL.
   */
  quoteCallbackUrl?: string;

  redirectUrl?: string;

  /**
   * An internal reference id which will be stored with the checkout & corresponding
   * order. Needs to be unique per shop per order and can be up to 200 characters. We
   * recommend to use your internal order id here.
   */
  referenceId?: string;

  selectedShippingMethodId?: string;

  shippingAddress?: CheckoutsessionCreateResponse.ShippingAddress;

  shippingMethods?: Array<CheckoutsessionCreateResponse.ShippingMethod>;

  /**
   * The logo of the shop provided as a URL.
   */
  shopLogo?: string;

  shopName?: string;

  /**
   * Required if not set in the dashboard. Users will be redirected here after a
   * successful Payment attempt.
   */
  successCallbackUrl?: string;

  updatedAt?: string;
}

export namespace CheckoutsessionCreateResponse {
  export interface Merchant {
    id: string;

    appId: string;

    legalName: string;

    address?: Merchant.Address;
  }

  export namespace Merchant {
    export interface Address {
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
  }

  /**
   * The price to be paid by the user. All amounts are in decimals, i.e. 10.23
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

    /**
     * The shipping amount.
     */
    shipping?: number;

    /**
     * The subtotal amount, i.e. the total amount without VAT and shipping.
     */
    subTotal?: number;

    /**
     * The total net amount, i.e. the total amount without VAT. This value is rounded
     * to 2 decimal places for the actual transfer.
     */
    totalNet?: number;

    /**
     * The VAT amount.
     */
    vat?: number;
  }

  /**
   * Only applicable for express Checkout Sessions. The given fields will be required
   * input within the Ivy express Checkout.
   */
  export interface Required {
    /**
     * If set to true, the phone number will be required input within the Ivy express
     * Checkout.
     */
    phone: boolean;
  }

  /**
   * The billing address of the customer. Required when handshake=true.
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

  export interface Customer {
    id: string;
  }

  /**
   * The line items of the Checkout.
   */
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
    setup: boolean;

    /**
     * The name of the account holder who signs the mandate
     */
    accountHolderName?: string;

    referenceId?: string;

    userNotificationEmail?: string;
  }

  /**
   * Use this to prefill data of the user in the Checkout.
   */
  export interface Prefill {
    /**
     * The id of the bank to preselect in the Checkout. Users will skip the bank
     * selection if given. Required for financial address prefill.
     */
    bankId?: string;

    email?: string;

    /**
     * The financial address prefill is used to preselect the payer account that will
     * be used to make the payment from. Use IBAN for SEPA EUR payments and Sort Code
     * for UK GBP payments. For other markets and currencies use your discretion. The
     * validation logic is based on the "type" field. For example, if "type" is set to
     * "iban", the "iban" object must be filled out.
     */
    payerFinancialAddress?: Prefill.PayerFinancialAddress;

    phone?: string;
  }

  export namespace Prefill {
    /**
     * The financial address prefill is used to preselect the payer account that will
     * be used to make the payment from. Use IBAN for SEPA EUR payments and Sort Code
     * for UK GBP payments. For other markets and currencies use your discretion. The
     * validation logic is based on the "type" field. For example, if "type" is set to
     * "iban", the "iban" object must be filled out.
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
  }

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
   * The shipping methods of the Checkout.
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
}

export type CheckoutsessionRetrieveResponse =
  | CheckoutsessionRetrieveResponse.PublicCheckoutSession
  | CheckoutsessionRetrieveResponse.CheckoutSession;

export namespace CheckoutsessionRetrieveResponse {
  export interface PublicCheckoutSession {
    /**
     * The unique identifier of the Checkout within Ivy.
     */
    id: string;

    appId: string;

    /**
     * The markets where the user of the Checkout can select banks from.
     */
    availableMarkets: Array<
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
     * The Epoch time in seconds at which the Checkout Session will expire. It can be
     * anywhere from 30 minutes to 24 hours after Checkout Session creation. By
     * default, this value is 1 hour from creation.
     */
    expiresAt: number;

    merchant: PublicCheckoutSession.Merchant;

    /**
     * @deprecated Use merchant.appId instead
     */
    merchantAppId: string;

    /**
     * - `settlement`: The payment is initially settled into a virtual account. The
     *   funds are then disbursed in batches to the merchant. Refunds are instantly
     *   processed from the virtual account.
     * - `direct`: The payment will be settled to the specified `settlementDestination`
     *   account. `settlementDestination` is required if `paymentMode` is `direct`.
     */
    paymentMode: 'settlement' | 'direct';

    /**
     * The price to be paid by the user. All amounts are in decimals, i.e. 10.23
     * represents EUR 10.23. Any amount of decimal places can be provided on
     * initialization, but the actual transfer amount is rounded to 2 decimal places,
     * as this is the format accepted by most banks.
     */
    price: PublicCheckoutSession.Price;

    /**
     * Only applicable for express Checkout Sessions. The given fields will be required
     * input within the Ivy express Checkout.
     */
    required: PublicCheckoutSession.Required;

    status: 'open' | 'closed' | 'expired';

    /**
     * The Epoch time in seconds at which the Checkout Session was created. By default,
     * time of Checkout creation at Ivy.
     */
    created?: number;

    customer?: PublicCheckoutSession.Customer;

    /**
     * False by default. If set to true, customers cannot modify the pre-selected bank
     * from `prefill.bankId`.
     */
    disableBankSelection?: boolean;

    /**
     * False by default. If set to true, the Checkout is displayed in express mode.
     */
    express?: boolean;

    /**
     * False by default. If set to true, customers skip email input and jump directly
     * to their bank login. For express Checkout Sessions this is always false.
     */
    guest?: boolean;

    /**
     * If true, the order must be confirmed through the merchant with an additional
     * complete callback endpoint. Always true for express sessions.
     */
    handshake?: boolean;

    impactOffsetProjects?: Array<string>;

    /**
     * The incentive mode of the checkout session. For any use-case apart from
     * e-commerce, please use `white_label` as the value. If set to `white_label`, the
     * checkout session will be white labeled. If set to `sustainable`, the checkout
     * session will contain sustainable incentives for users.
     */
    incentiveMode?: 'white_label' | 'sustainable';

    lineItems?: Array<PublicCheckoutSession.LineItem>;

    /**
     * The locale of the Checkout. If provided, the Checkout will be displayed in the
     * given language. Users can change the language in the Checkout. If not provided,
     * the language of the Checkout is determined by the browser's language.
     */
    locale?: 'de' | 'nl' | 'en' | 'fr' | 'es' | 'it' | 'pt' | 'sv' | 'pl' | 'sk';

    mandate?: PublicCheckoutSession.Mandate;

    /**
     * ISO 3166-1 alpha-2 country code. The market where the user of the Checkout is
     * located. Provided when creating the Checkout.
     */
    market?:
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

    offsetProject?: string;

    /**
     * The shop-plugin version.
     */
    plugin?: string;

    /**
     * Use this to prefill data of the user in the Checkout.
     */
    prefill?: PublicCheckoutSession.Prefill;

    selectedShippingMethodId?: string;

    shippingMethods?: Array<PublicCheckoutSession.ShippingMethod>;

    /**
     * The logo of the shop provided as a URL.
     */
    shopLogo?: string;

    shopName?: string;
  }

  export namespace PublicCheckoutSession {
    export interface Merchant {
      id: string;

      appId: string;

      legalName: string;

      address?: Merchant.Address;
    }

    export namespace Merchant {
      export interface Address {
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
    }

    /**
     * The price to be paid by the user. All amounts are in decimals, i.e. 10.23
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

      /**
       * The shipping amount.
       */
      shipping?: number;

      /**
       * The subtotal amount, i.e. the total amount without VAT and shipping.
       */
      subTotal?: number;

      /**
       * The total net amount, i.e. the total amount without VAT. This value is rounded
       * to 2 decimal places for the actual transfer.
       */
      totalNet?: number;

      /**
       * The VAT amount.
       */
      vat?: number;
    }

    /**
     * Only applicable for express Checkout Sessions. The given fields will be required
     * input within the Ivy express Checkout.
     */
    export interface Required {
      /**
       * If set to true, the phone number will be required input within the Ivy express
       * Checkout.
       */
      phone: boolean;
    }

    export interface Customer {
      id: string;
    }

    /**
     * The line items of the Checkout.
     */
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
      setup: boolean;

      /**
       * The name of the account holder who signs the mandate
       */
      accountHolderName?: string;

      referenceId?: string;

      userNotificationEmail?: string;
    }

    /**
     * Use this to prefill data of the user in the Checkout.
     */
    export interface Prefill {
      /**
       * The id of the bank to preselect in the Checkout. Users will skip the bank
       * selection if given. Required for financial address prefill.
       */
      bankId?: string;

      email?: string;

      /**
       * The financial address prefill is used to preselect the payer account that will
       * be used to make the payment from. Use IBAN for SEPA EUR payments and Sort Code
       * for UK GBP payments. For other markets and currencies use your discretion. The
       * validation logic is based on the "type" field. For example, if "type" is set to
       * "iban", the "iban" object must be filled out.
       */
      payerFinancialAddress?: Prefill.PayerFinancialAddress;

      phone?: string;
    }

    export namespace Prefill {
      /**
       * The financial address prefill is used to preselect the payer account that will
       * be used to make the payment from. Use IBAN for SEPA EUR payments and Sort Code
       * for UK GBP payments. For other markets and currencies use your discretion. The
       * validation logic is based on the "type" field. For example, if "type" is set to
       * "iban", the "iban" object must be filled out.
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
    }

    /**
     * The shipping methods of the Checkout.
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
  }

  export interface CheckoutSession {
    /**
     * The unique identifier of the Checkout within Ivy.
     */
    id: string;

    appId: string;

    /**
     * The markets where the user of the Checkout can select banks from.
     */
    availableMarkets: Array<
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

    createdAt: string;

    /**
     * The Epoch time in seconds at which the Checkout Session will expire. It can be
     * anywhere from 30 minutes to 24 hours after Checkout Session creation. By
     * default, this value is 1 hour from creation.
     */
    expiresAt: number;

    merchant: CheckoutSession.Merchant;

    /**
     * @deprecated Use merchant.appId instead
     */
    merchantAppId: string;

    /**
     * - `settlement`: The payment is initially settled into a virtual account. The
     *   funds are then disbursed in batches to the merchant. Refunds are instantly
     *   processed from the virtual account.
     * - `direct`: The payment will be settled to the specified `settlementDestination`
     *   account. `settlementDestination` is required if `paymentMode` is `direct`.
     */
    paymentMode: 'settlement' | 'direct';

    /**
     * The price to be paid by the user. All amounts are in decimals, i.e. 10.23
     * represents EUR 10.23. Any amount of decimal places can be provided on
     * initialization, but the actual transfer amount is rounded to 2 decimal places,
     * as this is the format accepted by most banks.
     */
    price: CheckoutSession.Price;

    /**
     * Only applicable for express Checkout Sessions. The given fields will be required
     * input within the Ivy express Checkout.
     */
    required: CheckoutSession.Required;

    status: 'open' | 'closed' | 'expired';

    abortReason?: string;

    /**
     * The billing address of the customer. Required when handshake=true.
     */
    billingAddress?: CheckoutSession.BillingAddress;

    /**
     * The merchant category code or
     * [MCC](https://en.wikipedia.org/wiki/Merchant_category_code).
     */
    category?: string;

    /**
     * Only applicable for express Checkouts. Complete Callback requests will be sent
     * to this URL.
     */
    completeCallbackUrl?: string;

    /**
     * The Epoch time in seconds at which the Checkout Session was created. By default,
     * time of Checkout creation at Ivy.
     */
    created?: number;

    customer?: CheckoutSession.Customer;

    /**
     * False by default. If set to true, customers cannot modify the pre-selected bank
     * from `prefill.bankId`.
     */
    disableBankSelection?: boolean;

    /**
     * The customer facing id. This id is displayed to the user during the checkout and
     * in the merchant dashboard.
     */
    displayId?: string;

    /**
     * Required if not set in the dashboard. Users will be redirected here after an
     * unsuccessful Payment attempt.
     */
    errorCallbackUrl?: string;

    /**
     * False by default. If set to true, the Checkout is displayed in express mode.
     */
    express?: boolean;

    /**
     * False by default. If set to true, customers skip email input and jump directly
     * to their bank login. For express Checkout Sessions this is always false.
     */
    guest?: boolean;

    /**
     * If true, the order must be confirmed through the merchant with an additional
     * complete callback endpoint. Always true for express sessions.
     */
    handshake?: boolean;

    impactOffsetProjects?: Array<string>;

    /**
     * The incentive mode of the checkout session. For any use-case apart from
     * e-commerce, please use `white_label` as the value. If set to `white_label`, the
     * checkout session will be white labeled. If set to `sustainable`, the checkout
     * session will contain sustainable incentives for users.
     */
    incentiveMode?: 'white_label' | 'sustainable';

    lineItems?: Array<CheckoutSession.LineItem>;

    /**
     * The locale of the Checkout. If provided, the Checkout will be displayed in the
     * given language. Users can change the language in the Checkout. If not provided,
     * the language of the Checkout is determined by the browser's language.
     */
    locale?: 'de' | 'nl' | 'en' | 'fr' | 'es' | 'it' | 'pt' | 'sv' | 'pl' | 'sk';

    mandate?: CheckoutSession.Mandate;

    /**
     * ISO 3166-1 alpha-2 country code. The market where the user of the Checkout is
     * located. If provided, the Checkout will display the market's banks first. Not
     * relevant if `prefill.bankId` is provided.
     */
    market?:
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

    /**
     * Any data which will be stored and returned for this checkout session and
     * corresponding order. See [here](https://docs.getivy.de/reference/metadata) for
     * more info.
     */
    metadata?: Record<string, unknown>;

    offsetProject?: string;

    /**
     * The shop-plugin version.
     */
    plugin?: string;

    /**
     * Use this to prefill data of the user in the Checkout.
     */
    prefill?: CheckoutSession.Prefill;

    /**
     * Only applicable for express Checkouts. Quote Callback requests will be sent to
     * this URL.
     */
    quoteCallbackUrl?: string;

    redirectUrl?: string;

    /**
     * An internal reference id which will be stored with the checkout & corresponding
     * order. Needs to be unique per shop per order and can be up to 200 characters. We
     * recommend to use your internal order id here.
     */
    referenceId?: string;

    selectedShippingMethodId?: string;

    shippingAddress?: CheckoutSession.ShippingAddress;

    shippingMethods?: Array<CheckoutSession.ShippingMethod>;

    /**
     * The logo of the shop provided as a URL.
     */
    shopLogo?: string;

    shopName?: string;

    /**
     * Required if not set in the dashboard. Users will be redirected here after a
     * successful Payment attempt.
     */
    successCallbackUrl?: string;

    updatedAt?: string;
  }

  export namespace CheckoutSession {
    export interface Merchant {
      id: string;

      appId: string;

      legalName: string;

      address?: Merchant.Address;
    }

    export namespace Merchant {
      export interface Address {
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
    }

    /**
     * The price to be paid by the user. All amounts are in decimals, i.e. 10.23
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

      /**
       * The shipping amount.
       */
      shipping?: number;

      /**
       * The subtotal amount, i.e. the total amount without VAT and shipping.
       */
      subTotal?: number;

      /**
       * The total net amount, i.e. the total amount without VAT. This value is rounded
       * to 2 decimal places for the actual transfer.
       */
      totalNet?: number;

      /**
       * The VAT amount.
       */
      vat?: number;
    }

    /**
     * Only applicable for express Checkout Sessions. The given fields will be required
     * input within the Ivy express Checkout.
     */
    export interface Required {
      /**
       * If set to true, the phone number will be required input within the Ivy express
       * Checkout.
       */
      phone: boolean;
    }

    /**
     * The billing address of the customer. Required when handshake=true.
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

    export interface Customer {
      id: string;
    }

    /**
     * The line items of the Checkout.
     */
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
      setup: boolean;

      /**
       * The name of the account holder who signs the mandate
       */
      accountHolderName?: string;

      referenceId?: string;

      userNotificationEmail?: string;
    }

    /**
     * Use this to prefill data of the user in the Checkout.
     */
    export interface Prefill {
      /**
       * The id of the bank to preselect in the Checkout. Users will skip the bank
       * selection if given. Required for financial address prefill.
       */
      bankId?: string;

      email?: string;

      /**
       * The financial address prefill is used to preselect the payer account that will
       * be used to make the payment from. Use IBAN for SEPA EUR payments and Sort Code
       * for UK GBP payments. For other markets and currencies use your discretion. The
       * validation logic is based on the "type" field. For example, if "type" is set to
       * "iban", the "iban" object must be filled out.
       */
      payerFinancialAddress?: Prefill.PayerFinancialAddress;

      phone?: string;
    }

    export namespace Prefill {
      /**
       * The financial address prefill is used to preselect the payer account that will
       * be used to make the payment from. Use IBAN for SEPA EUR payments and Sort Code
       * for UK GBP payments. For other markets and currencies use your discretion. The
       * validation logic is based on the "type" field. For example, if "type" is set to
       * "iban", the "iban" object must be filled out.
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
    }

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
     * The shipping methods of the Checkout.
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
  }
}

export interface CheckoutsessionExpireResponse {
  /**
   * The unique identifier of the Checkout within Ivy.
   */
  id: string;

  appId: string;

  /**
   * The markets where the user of the Checkout can select banks from.
   */
  availableMarkets: Array<
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

  createdAt: string;

  /**
   * The Epoch time in seconds at which the Checkout Session will expire. It can be
   * anywhere from 30 minutes to 24 hours after Checkout Session creation. By
   * default, this value is 1 hour from creation.
   */
  expiresAt: number;

  merchant: CheckoutsessionExpireResponse.Merchant;

  /**
   * @deprecated Use merchant.appId instead
   */
  merchantAppId: string;

  /**
   * - `settlement`: The payment is initially settled into a virtual account. The
   *   funds are then disbursed in batches to the merchant. Refunds are instantly
   *   processed from the virtual account.
   * - `direct`: The payment will be settled to the specified `settlementDestination`
   *   account. `settlementDestination` is required if `paymentMode` is `direct`.
   */
  paymentMode: 'settlement' | 'direct';

  /**
   * The price to be paid by the user. All amounts are in decimals, i.e. 10.23
   * represents EUR 10.23. Any amount of decimal places can be provided on
   * initialization, but the actual transfer amount is rounded to 2 decimal places,
   * as this is the format accepted by most banks.
   */
  price: CheckoutsessionExpireResponse.Price;

  /**
   * Only applicable for express Checkout Sessions. The given fields will be required
   * input within the Ivy express Checkout.
   */
  required: CheckoutsessionExpireResponse.Required;

  status: 'open' | 'closed' | 'expired';

  abortReason?: string;

  /**
   * The billing address of the customer. Required when handshake=true.
   */
  billingAddress?: CheckoutsessionExpireResponse.BillingAddress;

  /**
   * The merchant category code or
   * [MCC](https://en.wikipedia.org/wiki/Merchant_category_code).
   */
  category?: string;

  /**
   * Only applicable for express Checkouts. Complete Callback requests will be sent
   * to this URL.
   */
  completeCallbackUrl?: string;

  /**
   * The Epoch time in seconds at which the Checkout Session was created. By default,
   * time of Checkout creation at Ivy.
   */
  created?: number;

  customer?: CheckoutsessionExpireResponse.Customer;

  /**
   * False by default. If set to true, customers cannot modify the pre-selected bank
   * from `prefill.bankId`.
   */
  disableBankSelection?: boolean;

  /**
   * The customer facing id. This id is displayed to the user during the checkout and
   * in the merchant dashboard.
   */
  displayId?: string;

  /**
   * Required if not set in the dashboard. Users will be redirected here after an
   * unsuccessful Payment attempt.
   */
  errorCallbackUrl?: string;

  /**
   * False by default. If set to true, the Checkout is displayed in express mode.
   */
  express?: boolean;

  /**
   * False by default. If set to true, customers skip email input and jump directly
   * to their bank login. For express Checkout Sessions this is always false.
   */
  guest?: boolean;

  /**
   * If true, the order must be confirmed through the merchant with an additional
   * complete callback endpoint. Always true for express sessions.
   */
  handshake?: boolean;

  impactOffsetProjects?: Array<string>;

  /**
   * The incentive mode of the checkout session. For any use-case apart from
   * e-commerce, please use `white_label` as the value. If set to `white_label`, the
   * checkout session will be white labeled. If set to `sustainable`, the checkout
   * session will contain sustainable incentives for users.
   */
  incentiveMode?: 'white_label' | 'sustainable';

  lineItems?: Array<CheckoutsessionExpireResponse.LineItem>;

  /**
   * The locale of the Checkout. If provided, the Checkout will be displayed in the
   * given language. Users can change the language in the Checkout. If not provided,
   * the language of the Checkout is determined by the browser's language.
   */
  locale?: 'de' | 'nl' | 'en' | 'fr' | 'es' | 'it' | 'pt' | 'sv' | 'pl' | 'sk';

  mandate?: CheckoutsessionExpireResponse.Mandate;

  /**
   * ISO 3166-1 alpha-2 country code. The market where the user of the Checkout is
   * located. If provided, the Checkout will display the market's banks first. Not
   * relevant if `prefill.bankId` is provided.
   */
  market?:
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

  /**
   * Any data which will be stored and returned for this checkout session and
   * corresponding order. See [here](https://docs.getivy.de/reference/metadata) for
   * more info.
   */
  metadata?: Record<string, unknown>;

  offsetProject?: string;

  /**
   * The shop-plugin version.
   */
  plugin?: string;

  /**
   * Use this to prefill data of the user in the Checkout.
   */
  prefill?: CheckoutsessionExpireResponse.Prefill;

  /**
   * Only applicable for express Checkouts. Quote Callback requests will be sent to
   * this URL.
   */
  quoteCallbackUrl?: string;

  redirectUrl?: string;

  /**
   * An internal reference id which will be stored with the checkout & corresponding
   * order. Needs to be unique per shop per order and can be up to 200 characters. We
   * recommend to use your internal order id here.
   */
  referenceId?: string;

  selectedShippingMethodId?: string;

  shippingAddress?: CheckoutsessionExpireResponse.ShippingAddress;

  shippingMethods?: Array<CheckoutsessionExpireResponse.ShippingMethod>;

  /**
   * The logo of the shop provided as a URL.
   */
  shopLogo?: string;

  shopName?: string;

  /**
   * Required if not set in the dashboard. Users will be redirected here after a
   * successful Payment attempt.
   */
  successCallbackUrl?: string;

  updatedAt?: string;
}

export namespace CheckoutsessionExpireResponse {
  export interface Merchant {
    id: string;

    appId: string;

    legalName: string;

    address?: Merchant.Address;
  }

  export namespace Merchant {
    export interface Address {
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
  }

  /**
   * The price to be paid by the user. All amounts are in decimals, i.e. 10.23
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

    /**
     * The shipping amount.
     */
    shipping?: number;

    /**
     * The subtotal amount, i.e. the total amount without VAT and shipping.
     */
    subTotal?: number;

    /**
     * The total net amount, i.e. the total amount without VAT. This value is rounded
     * to 2 decimal places for the actual transfer.
     */
    totalNet?: number;

    /**
     * The VAT amount.
     */
    vat?: number;
  }

  /**
   * Only applicable for express Checkout Sessions. The given fields will be required
   * input within the Ivy express Checkout.
   */
  export interface Required {
    /**
     * If set to true, the phone number will be required input within the Ivy express
     * Checkout.
     */
    phone: boolean;
  }

  /**
   * The billing address of the customer. Required when handshake=true.
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

  export interface Customer {
    id: string;
  }

  /**
   * The line items of the Checkout.
   */
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
    setup: boolean;

    /**
     * The name of the account holder who signs the mandate
     */
    accountHolderName?: string;

    referenceId?: string;

    userNotificationEmail?: string;
  }

  /**
   * Use this to prefill data of the user in the Checkout.
   */
  export interface Prefill {
    /**
     * The id of the bank to preselect in the Checkout. Users will skip the bank
     * selection if given. Required for financial address prefill.
     */
    bankId?: string;

    email?: string;

    /**
     * The financial address prefill is used to preselect the payer account that will
     * be used to make the payment from. Use IBAN for SEPA EUR payments and Sort Code
     * for UK GBP payments. For other markets and currencies use your discretion. The
     * validation logic is based on the "type" field. For example, if "type" is set to
     * "iban", the "iban" object must be filled out.
     */
    payerFinancialAddress?: Prefill.PayerFinancialAddress;

    phone?: string;
  }

  export namespace Prefill {
    /**
     * The financial address prefill is used to preselect the payer account that will
     * be used to make the payment from. Use IBAN for SEPA EUR payments and Sort Code
     * for UK GBP payments. For other markets and currencies use your discretion. The
     * validation logic is based on the "type" field. For example, if "type" is set to
     * "iban", the "iban" object must be filled out.
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
  }

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
   * The shipping methods of the Checkout.
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
}

export interface CheckoutsessionCreateParams {
  /**
   * The price to be paid by the user. All amounts are in decimals, i.e. 10.23
   * represents EUR 10.23. Any amount of decimal places can be provided on
   * initialization, but the actual transfer amount is rounded to 2 decimal places,
   * as this is the format accepted by most banks.
   */
  price: CheckoutsessionCreateParams.Price;

  /**
   * An internal reference id which will be stored with the checkout & corresponding
   * order. Needs to be unique per shop per order and can be up to 200 characters. We
   * recommend to use your internal order id here.
   */
  referenceId: string;

  /**
   * The billing address of the user. Required when handshake=true.
   */
  billingAddress?: CheckoutsessionCreateParams.BillingAddress;

  /**
   * The merchant category code or
   * [MCC](https://en.wikipedia.org/wiki/Merchant_category_code).
   */
  category?: string;

  /**
   * Only applicable for express Checkouts. Complete Callback requests will be sent
   * to this URL.
   */
  completeCallbackUrl?: string;

  /**
   * The Epoch time in seconds at which the Checkout Session was created. By default,
   * time of Checkout creation at Ivy.
   */
  created?: number;

  /**
   * The customer of the merchant.
   */
  customer?: CheckoutsessionCreateParams.Email | CheckoutsessionCreateParams.ID;

  /**
   * False by default. If set to true, customers cannot modify the pre-selected bank
   * from `prefill.bankId`.
   */
  disableBankSelection?: boolean;

  /**
   * Relevant for e-commerce only. The already applied discounts of the Checkout.
   * Discounts will be shown in the lineItems after Checkout Session creation.
   */
  discounts?: Array<CheckoutsessionCreateParams.Discount>;

  /**
   * The customer facing id. This id is displayed to the user during the checkout and
   * in the merchant dashboard.
   */
  displayId?: string;

  /**
   * Required if not set in the dashboard. Users will be redirected here after an
   * unsuccessful Payment attempt.
   */
  errorCallbackUrl?: string;

  /**
   * The Epoch time in seconds at which the Checkout Session will expire. It can be
   * anywhere from 30 minutes to 24 hours after Checkout Session creation. By
   * default, this value is 1 hour from creation.
   */
  expiresAt?: number;

  /**
   * Relevant for e-commerce only. If true, the checkout session will be an express
   * checkout session.
   */
  express?: boolean;

  /**
   * False by default. Set to true to allow customers skip email input and jump
   * directly to their bank login. For express Checkout Sessions this is always
   * false.
   */
  guest?: boolean;

  /**
   * Deprecated. If true, the order must be confirmed through the merchant with an
   * additional complete callback endpoint. Always true for express sessions.
   */
  handshake?: boolean;

  /**
   * The incentive mode of the checkout session. For any use-case apart from
   * e-commerce, please use `white_label` as the value. If set to `white_label`, the
   * checkout session will be white labeled. If set to `sustainable`, the checkout
   * session will contain sustainable incentives for users.
   */
  incentiveMode?: 'white_label' | 'sustainable';

  /**
   * Relevant for e-commerce only. The line items of the Checkout.
   */
  lineItems?: Array<CheckoutsessionCreateParams.LineItem>;

  /**
   * The locale of the Checkout. If provided, the Checkout will be displayed in the
   * given language. Users can change the language in the Checkout. If not provided,
   * the language of the Checkout is determined by the browser's language.
   */
  locale?: 'de' | 'nl' | 'en' | 'fr' | 'es' | 'it' | 'pt' | 'sv' | 'pl' | 'sk';

  /**
   * The mandate setup for the payment. Relevant for
   * [Ivy on File](https://docs.getivy.de/docs/beta-ivy-on-file)
   */
  mandate?: CheckoutsessionCreateParams.Mandate;

  /**
   * ISO 3166-1 alpha-2 country code. The market where the user of the Checkout is
   * located. If provided, the Checkout will display the market's banks first. Not
   * relevant if `prefill.bankId` is provided.
   */
  market?:
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

  /**
   * Any data which will be stored and returned for this checkout session and
   * corresponding order. See [here](https://docs.getivy.de/reference/metadata) for
   * more info.
   */
  metadata?: Array<Record<string, unknown>>;

  /**
   * - `settlement`: The payment is initially settled into a virtual account. The
   *   funds are then disbursed in batches to the merchant. Refunds are instantly
   *   processed from the virtual account.
   * - `direct`: The payment will be settled to the specified `settlementDestination`
   *   account. `settlementDestination` is required if `paymentMode` is `direct`.
   */
  paymentMode?: 'settlement' | 'direct';

  /**
   * The scheme selection for the payment. `instant_only` enforces instant payments,
   * meaning no banks that do not support it can be selected. `instant_preferred`
   * means that the payment is done via instant rails. It will fallback to standard
   * rails, if not supported by the bank. Standard means that only cost-free, but
   * potentially slower bank rails are used for the transfer. Defaults to value set
   * on merchant dashboard if not provided.
   */
  paymentSchemeSelection?: 'instant_preferred' | 'standard' | 'instant_only';

  /**
   * The shop-plugin integration version e.g. `shopware-6.4.0`.
   */
  plugin?: string;

  /**
   * Use this to prefill data of the user in the Checkout.
   */
  prefill?: CheckoutsessionCreateParams.Prefill;

  /**
   * Only applicable for express Checkouts. Quote Callback requests will be sent to
   * this URL.
   */
  quoteCallbackUrl?: string;

  /**
   * Only applicable for express Checkout Sessions. The given fields will be required
   * input within the Ivy express Checkout.
   */
  required?: CheckoutsessionCreateParams.Required;

  /**
   * If set to true, a [risk check](https://docs.getivy.de/docs/froud-prevention)
   * will be performed. This is currently in beta and defaults to true.
   */
  riskCheck?: boolean;

  /**
   * The settlement destination of the payment. If not provided, the financial
   * address of the merchant's direct payout destination will be used with a randomly
   * generated payment reference.
   */
  settlementDestination?: CheckoutsessionCreateParams.SettlementDestination;

  /**
   * The shipping methods of the Checkout.
   */
  shippingMethods?: Array<CheckoutsessionCreateParams.ShippingMethod>;

  /**
   * The logo of the shop provided as a URL.
   */
  shopLogo?: string;

  /**
   * Relevant for PSPs only. The subaccount id of the relevant subaccount who owns
   * the payment. You can create new subaccounts
   * [here](https://docs.getivy.de/reference/merchantsubaccountcreate-1)
   */
  subaccountId?: string;

  /**
   * Required if not set in the dashboard. Users will be redirected here after a
   * successful Payment attempt.
   */
  successCallbackUrl?: string;

  /**
   * Deprecated in favor of metadata. A token which is returned as a query parameter
   * of the success callback url.
   */
  verificationToken?: string;
}

export namespace CheckoutsessionCreateParams {
  /**
   * The price to be paid by the user. All amounts are in decimals, i.e. 10.23
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

    /**
     * The shipping amount.
     */
    shipping?: number;

    /**
     * The subtotal amount, i.e. the total amount without VAT and shipping.
     */
    subTotal?: number;

    /**
     * The total net amount, i.e. the total amount without VAT. This value is rounded
     * to 2 decimal places for the actual transfer.
     */
    totalNet?: number;

    /**
     * The VAT amount.
     */
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

  export interface Email {
    /**
     * The email of the customer.
     */
    email: string;
  }

  export interface ID {
    /**
     * The Ivy id of the customer.
     */
    id: string;
  }

  export interface Discount {
    /**
     * The amount of the discount. The amount is in decimals, i.e. 10.23 represents EUR
     * 10.23.
     */
    amount: number;

    /**
     * The activation code of the discount. This will be displayed to the user during
     * the checkout.
     */
    code: string;
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

  /**
   * The mandate setup for the payment. Relevant for
   * [Ivy on File](https://docs.getivy.de/docs/beta-ivy-on-file)
   */
  export interface Mandate {
    setup: boolean;

    /**
     * The name of the account holder who signs the mandate
     */
    accountHolderName?: string;

    referenceId?: string;

    userNotificationEmail?: string;
  }

  /**
   * Use this to prefill data of the user in the Checkout.
   */
  export interface Prefill {
    /**
     * The id of the bank to preselect in the Checkout. Users will skip the bank
     * selection if given. Required for financial address prefill.
     */
    bankId?: string;

    email?: string;

    /**
     * The financial address prefill is used to preselect the payer account that will
     * be used to make the payment from. Use IBAN for SEPA EUR payments and Sort Code
     * for UK GBP payments. For other markets and currencies use your discretion. The
     * validation logic is based on the "type" field. For example, if "type" is set to
     * "iban", the "iban" object must be filled out.
     */
    payerFinancialAddress?: Prefill.PayerFinancialAddress;

    phone?: string;
  }

  export namespace Prefill {
    /**
     * The financial address prefill is used to preselect the payer account that will
     * be used to make the payment from. Use IBAN for SEPA EUR payments and Sort Code
     * for UK GBP payments. For other markets and currencies use your discretion. The
     * validation logic is based on the "type" field. For example, if "type" is set to
     * "iban", the "iban" object must be filled out.
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
  }

  /**
   * @deprecated Only applicable for express Checkout Sessions. The given fields will
   * be required input within the Ivy express Checkout.
   */
  export interface Required {
    /**
     * If set to true, the phone number will be required input within the Ivy express
     * Checkout.
     */
    phone?: boolean;
  }

  /**
   * The settlement destination of the payment. If not provided, the financial
   * address of the merchant's direct payout destination will be used with a randomly
   * generated payment reference.
   */
  export interface SettlementDestination {
    /**
     * The payment reference of the payment. This will be displayed in the receiving
     * bank account statement. For GBP payments the reference can be up to 18
     * characters, otherwise 35.
     */
    reference: string;

    /**
     * The validation logic is based on the "type" field. For example, if "type" is set
     * to "iban", the "iban" object must be filled out.
     */
    financialAddress?: SettlementDestination.FinancialAddress;
  }

  export namespace SettlementDestination {
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
}

export interface CheckoutsessionRetrieveParams {
  id: string;
}

export interface CheckoutsessionExpireParams {
  id: string;
}

export declare namespace Checkoutsession {
  export {
    type CheckoutsessionCreateResponse as CheckoutsessionCreateResponse,
    type CheckoutsessionRetrieveResponse as CheckoutsessionRetrieveResponse,
    type CheckoutsessionExpireResponse as CheckoutsessionExpireResponse,
    type CheckoutsessionCreateParams as CheckoutsessionCreateParams,
    type CheckoutsessionRetrieveParams as CheckoutsessionRetrieveParams,
    type CheckoutsessionExpireParams as CheckoutsessionExpireParams,
  };
}
