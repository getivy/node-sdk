// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as RefundsAPI from './refunds';

export class Refunds extends APIResource {
  /**
   * Initiates a refund for the specified order. The order can be specified either by
   * Ivy\'s internal `orderId` or by the `referenceId` provided by the merchant
   * during checkout creation. If the refund should only be partial, you can specifiy
   * this with the `amount` parameter.
   */
  create(body: RefundCreateParams, options?: Core.RequestOptions): Core.APIPromise<RefundResponse> {
    return this._client.post('/api/service/merchant/payment/refund', { body, ...options });
  }

  /**
   * Initiates a batch refund for all provided orders. The orders can be specified
   * either by Ivy\'s internal id ("orderId") or by id provided by the merchant
   * ("referenceId"). If only a partial amount should be refunded the desired amount
   * can be set with the "amount" parameter. Additional information regarding the
   * refund can be provided through the "description" parameter.
   */
  batch(body: RefundBatchParams, options?: Core.RequestOptions): Core.APIPromise<RefundBatchResponse> {
    return this._client.post('/api/service/merchant/payment/refund/batch', { body, ...options });
  }
}

export interface RefundResponse {
  /**
   * The internal Ivy id of the order.
   */
  orderId: string;

  /**
   * The order status. This status symbolises the state of the user's payment
   * attempt. See [the guide](https://docs.getivy.de/docs/payment-status) for more
   * information.
   */
  orderStatus:
    | 'failed'
    | 'canceled'
    | 'processing'
    | 'in_handshake'
    | 'waiting_for_payment'
    | 'paid'
    | 'in_refund'
    | 'refunded'
    | 'refund_failed'
    | 'partially_refunded'
    | 'in_dispute'
    | 'disputed'
    | 'refused';

  /**
   * A unique identifier for the newly created refund. You can use this id to
   * retrieve the refund from the order object.
   */
  referenceId: string;

  /**
   * The status of the refund. Always use the status of the order as your source of
   * truth to trigger actions in your dashboard.
   */
  refundStatus: 'pending' | 'succeeded' | 'failed' | 'requires_action' | 'partially_refunded';
}

export interface RefundBatchResponse {
  /**
   * An array of refund responses.
   */
  requestedRefunds: Array<RefundBatchResponse.RequestedRefund>;
}

export namespace RefundBatchResponse {
  export interface RequestedRefund extends RefundsAPI.RefundResponse {
    /**
     * The Ivy id of the corresponding order.
     */
    orderId: string;

    /**
     * The error message why the refund failed.
     */
    error?: string;
  }
}

export interface RefundCreateParams {
  /**
   * The amount to refund in decimals, e.g. 10.23 for EUR 10.23. If not specified,
   * the full order amount will be refunded.
   */
  amount?: number;

  /**
   * A description for the refund. This will be retrievable in the API and in the Ivy
   * dashboard.
   */
  description?: string;

  /**
   * An optional custom text that will be shown on the customer's payment reference.
   * Input has to be maximum 16 alpha-numeric characters. If not provided, a default
   * Ivy refund referenceId will be shown.
   */
  displayedPaymentReference?: string;

  /**
   * The email of the customer. If provided, Ivy may use this email to contact the
   * customer directly in case of issues or need for clarification regarding the
   * refund. If not provided, Ivy will contact the merchant in such cases. However,
   * this is a rare occurrence.
   */
  email?: string;

  /**
   * The internal Ivy id of the order.
   */
  orderId?: string;

  /**
   * The external id set by the merchant during checkout creation.
   */
  referenceId?: string;
}

export interface RefundBatchParams {
  /**
   * An array of refunds to be triggered.
   */
  requestedRefunds: Array<RefundBatchParams.RequestedRefund>;
}

export namespace RefundBatchParams {
  export interface RequestedRefund {
    /**
     * The amount to refund in decimals, e.g. 10.23 for EUR 10.23. If not specified,
     * the full order amount will be refunded.
     */
    amount?: number;

    /**
     * A description for the refund. This will be retrievable in the API and in the Ivy
     * dashboard.
     */
    description?: string;

    /**
     * An optional custom text that will be shown on the customer's payment reference.
     * Input has to be maximum 16 alpha-numeric characters. If not provided, a default
     * Ivy refund referenceId will be shown.
     */
    displayedPaymentReference?: string;

    /**
     * The email of the customer. If provided, Ivy may use this email to contact the
     * customer directly in case of issues or need for clarification regarding the
     * refund. If not provided, Ivy will contact the merchant in such cases. However,
     * this is a rare occurrence.
     */
    email?: string;

    /**
     * The internal Ivy id of the order.
     */
    orderId?: string;

    /**
     * The external id set by the merchant during checkout creation.
     */
    referenceId?: string;
  }
}

export declare namespace Refunds {
  export {
    type RefundResponse as RefundResponse,
    type RefundBatchResponse as RefundBatchResponse,
    type RefundCreateParams as RefundCreateParams,
    type RefundBatchParams as RefundBatchParams,
  };
}
