// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as RefundsAPI from './refunds';
import {
  RefundBatchParams,
  RefundBatchResponse,
  RefundCreateParams,
  RefundResponse,
  Refunds,
} from './refunds';

export class Payment extends APIResource {
  refunds: RefundsAPI.Refunds = new RefundsAPI.Refunds(this._client);
}

Payment.Refunds = Refunds;

export declare namespace Payment {
  export {
    Refunds as Refunds,
    type RefundResponse as RefundResponse,
    type RefundBatchResponse as RefundBatchResponse,
    type RefundCreateParams as RefundCreateParams,
    type RefundBatchParams as RefundBatchParams,
  };
}
