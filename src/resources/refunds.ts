// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Refunds extends APIResource {
  /**
   * Initiates a refund for the specified order. The order can be specified either by
   * Ivy's internal `orderId` or by the `referenceId` provided by the merchant during
   * checkout creation. If the refund should only be partial, you can specifiy this
   * with the `amount` parameter.
   *
   * @deprecated
   */
  create(body: RefundCreateParams, options?: Core.RequestOptions): Core.APIPromise<RefundCreateResponse> {
    return this._client.post('/api/service/merchant/payment/refund', { body, ...options });
  }

  /**
   * Initiates a batch refund for all provided orders. The orders can be specified
   * either by Ivy's internal id ("orderId") or by id provided by the merchant
   * ("referenceId"). If only a partial amount should be refunded the desired amount
   * can be set with the "amount" parameter. Additional information regarding the
   * refund can be provided through the "description" parameter.
   *
   * @deprecated
   */
  batch(body: RefundBatchParams, options?: Core.RequestOptions): Core.APIPromise<RefundBatchResponse> {
    return this._client.post('/api/service/merchant/payment/refund/batch', { body, ...options });
  }
}

export interface RefundCreateResponse {
  orderId: string;

  orderStatus:
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

  referenceId: string;

  refundStatus: 'pending' | 'succeeded' | 'failed' | 'requires_action' | 'partially_refunded';
}

export interface RefundBatchResponse {
  requestedRefunds: Array<RefundBatchResponse.RequestedRefund>;
}

export namespace RefundBatchResponse {
  export interface RequestedRefund {
    orderId: unknown;

    error?: string;

    orderStatus?:
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

    referenceId?: string;

    refundStatus?: 'pending' | 'succeeded' | 'failed' | 'requires_action' | 'partially_refunded';
  }
}

export interface RefundCreateParams {
  amount: number;

  description?: string;

  displayedPaymentReference?: string;

  email?: string;

  orderId?: unknown;

  referenceId?: string;
}

export interface RefundBatchParams {
  requestedRefunds: Array<RefundBatchParams.RequestedRefund>;
}

export namespace RefundBatchParams {
  export interface RequestedRefund {
    amount: number;

    description?: string;

    displayedPaymentReference?: string;

    email?: string;

    orderId?: unknown;

    referenceId?: string;
  }
}

export declare namespace Refunds {
  export {
    type RefundCreateResponse as RefundCreateResponse,
    type RefundBatchResponse as RefundBatchResponse,
    type RefundCreateParams as RefundCreateParams,
    type RefundBatchParams as RefundBatchParams,
  };
}
