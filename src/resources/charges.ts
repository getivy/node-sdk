// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Charges extends APIResource {
  /**
   * Creates a Direct Debit Charge with a valid mandate.
   */
  create(body: ChargeCreateParams, options?: Core.RequestOptions): Core.APIPromise<Charge> {
    return this._client.post('/api/service/charge/create', { body, ...options });
  }
}

export interface Charge {
  id: string;

  mandateId: string;

  orderId?: string;

  subaccountId?: string;
}

export interface ChargeCreateParams {
  /**
   * A unique key to ensure the charge is not processed twice.
   */
  idempotencyKey: string;

  /**
   * A valid mandate id of the customer's bank account. This can be retrieved from
   * the `mandate_setup_succeeded` event.
   */
  mandateId: string;

  /**
   * The price to be charged.
   */
  price: ChargeCreateParams.Price;

  /**
   * An internal reference id which will be stored with the charge & corresponding
   * order. Needs to be unique per merchant per order and can be up to 200
   * characters. We recommend to use your internal order id here.
   */
  referenceId: string;

  /**
   * Additional data to be stored with the charge.
   */
  metadata?: ChargeCreateParams.Metadata;

  /**
   * The subaccount id to be used for the charge.
   */
  subaccountId?: string;
}

export namespace ChargeCreateParams {
  /**
   * The price to be charged.
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
   * Additional data to be stored with the charge.
   */
  export interface Metadata {
    /**
     * A token to verify incoming webhooks. Used in the shopware plugin. Limited to 200
     * characters.
     */
    verificationToken?: string;
  }
}

export declare namespace Charges {
  export { type Charge as Charge, type ChargeCreateParams as ChargeCreateParams };
}
