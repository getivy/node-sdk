// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Webhooksubscription extends APIResource {
  /**
   * Creates a webhook subscription that sends various events from Ivy to a specified
   * url. There can be multiple subscriptions per app.
   */
  create(
    body: WebhooksubscriptionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhooksubscriptionCreateResponse> {
    return this._client.post('/api/service/webhook-subscription/create', { body, ...options });
  }

  /**
   * Updates the url or subcribed to events for a webhook subscription. This can be
   * used via the app or via the API by providing an API key.
   */
  update(
    body: WebhooksubscriptionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhooksubscriptionUpdateResponse> {
    return this._client.post('/api/service/webhook-subscription/update', { body, ...options });
  }

  /**
   * Lists all webhook subscriptions that are registered for the merchant. The
   * results are paginated and provided in chronological order.
   */
  list(
    body: WebhooksubscriptionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhooksubscriptionListResponse> {
    return this._client.post('/api/service/webhook-subscription/list', { body, ...options });
  }

  /**
   * Deletes a webhook subscription.
   */
  delete(
    body: WebhooksubscriptionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhooksubscriptionDeleteResponse> {
    return this._client.post('/api/service/webhook-subscription/delete', { body, ...options });
  }

  /**
   * Trigger the webhook event "test" for the specified webhook subscription.
   */
  ping(
    body: WebhooksubscriptionPingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhooksubscriptionPingResponse> {
    return this._client.post('/api/service/webhook-subscription/ping', { body, ...options });
  }
}

export interface WebhooksubscriptionCreateResponse {
  /**
   * The unique id for the webhook subscription.
   */
  id: string;

  createdAt: string;

  events: Array<
    | 'test'
    | 'merchant_updated'
    | 'merchant_app_updated'
    | 'order_created'
    | 'order_updated'
    | 'refund_succeeded'
    | 'refund_failed'
    | 'payout_report_requested'
    | 'data_session_completed'
    | 'checkout_session_created'
    | 'checkout_session_updated'
    | 'checkout_session_expired'
    | 'checkout_session_completed'
    | 'payout_created'
    | 'payout_updated'
    | 'mandate_setup_started'
    | 'mandate_setup_succeeded'
    | 'mandate_setup_failed'
    | 'mandate_revoked'
    | 'user_payout.failed'
    | 'user_payout.paid'
    | 'user_payout.initiated'
  >;

  /**
   * The unique id for the webhook subscription.
   */
  merchant: string;

  /**
   * @deprecated The unique id for the webhook subscription.
   */
  merchantApp: string;

  updatedAt: string;

  /**
   * The url that will listen to the webhook events coming from Ivy. Must be unique
   * for the merchant app.
   */
  url: string;
}

export interface WebhooksubscriptionUpdateResponse {
  /**
   * The unique id for the webhook subscription.
   */
  id: string;

  createdAt: string;

  events: Array<
    | 'test'
    | 'merchant_updated'
    | 'merchant_app_updated'
    | 'order_created'
    | 'order_updated'
    | 'refund_succeeded'
    | 'refund_failed'
    | 'payout_report_requested'
    | 'data_session_completed'
    | 'checkout_session_created'
    | 'checkout_session_updated'
    | 'checkout_session_expired'
    | 'checkout_session_completed'
    | 'payout_created'
    | 'payout_updated'
    | 'mandate_setup_started'
    | 'mandate_setup_succeeded'
    | 'mandate_setup_failed'
    | 'mandate_revoked'
    | 'user_payout.failed'
    | 'user_payout.paid'
    | 'user_payout.initiated'
  >;

  /**
   * The unique id for the webhook subscription.
   */
  merchant: string;

  /**
   * @deprecated The unique id for the webhook subscription.
   */
  merchantApp: string;

  updatedAt: string;

  /**
   * The url that will listen to the webhook events coming from Ivy. Must be unique
   * for the merchant app.
   */
  url: string;
}

export interface WebhooksubscriptionListResponse {
  count: number;

  hasNext: boolean;

  items: Array<WebhooksubscriptionListResponse.Item>;

  skip: number;
}

export namespace WebhooksubscriptionListResponse {
  export interface Item {
    /**
     * The unique id for the webhook subscription.
     */
    id: string;

    createdAt: string;

    events: Array<
      | 'test'
      | 'merchant_updated'
      | 'merchant_app_updated'
      | 'order_created'
      | 'order_updated'
      | 'refund_succeeded'
      | 'refund_failed'
      | 'payout_report_requested'
      | 'data_session_completed'
      | 'checkout_session_created'
      | 'checkout_session_updated'
      | 'checkout_session_expired'
      | 'checkout_session_completed'
      | 'payout_created'
      | 'payout_updated'
      | 'mandate_setup_started'
      | 'mandate_setup_succeeded'
      | 'mandate_setup_failed'
      | 'mandate_revoked'
      | 'user_payout.failed'
      | 'user_payout.paid'
      | 'user_payout.initiated'
    >;

    /**
     * The unique id for the webhook subscription.
     */
    merchant: string;

    /**
     * @deprecated The unique id for the webhook subscription.
     */
    merchantApp: string;

    updatedAt: string;

    /**
     * The url that will listen to the webhook events coming from Ivy. Must be unique
     * for the merchant app.
     */
    url: string;
  }
}

export interface WebhooksubscriptionDeleteResponse {
  success: boolean;
}

export interface WebhooksubscriptionPingResponse {
  /**
   * The unique identifier of the webhook that was sent.
   */
  id: string;

  date: string;

  /**
   * The response body returned by the targeted webhook endpoint.
   */
  response: string | number | boolean | Array<unknown> | Record<string, unknown> | null;

  /**
   * The status code returned by the targeted webhook endpoint.
   */
  statusCode: number;

  /**
   * True if the targeted webhook endpoint returned status code 200. False otherwise.
   */
  success: boolean;
}

export interface WebhooksubscriptionCreateParams {
  /**
   * The events to subscribe the url to.
   */
  events: Array<
    | 'test'
    | 'merchant_updated'
    | 'merchant_app_updated'
    | 'order_created'
    | 'order_updated'
    | 'refund_succeeded'
    | 'refund_failed'
    | 'payout_report_requested'
    | 'data_session_completed'
    | 'checkout_session_created'
    | 'checkout_session_updated'
    | 'checkout_session_expired'
    | 'checkout_session_completed'
    | 'payout_created'
    | 'payout_updated'
    | 'mandate_setup_started'
    | 'mandate_setup_succeeded'
    | 'mandate_setup_failed'
    | 'mandate_revoked'
    | 'user_payout.failed'
    | 'user_payout.paid'
    | 'user_payout.initiated'
  >;

  /**
   * The endpoint where webhook events are sent.
   */
  url: string;
}

export interface WebhooksubscriptionUpdateParams {
  id: string;

  events?: Array<
    | 'test'
    | 'merchant_updated'
    | 'merchant_app_updated'
    | 'order_created'
    | 'order_updated'
    | 'refund_succeeded'
    | 'refund_failed'
    | 'payout_report_requested'
    | 'data_session_completed'
    | 'checkout_session_created'
    | 'checkout_session_updated'
    | 'checkout_session_expired'
    | 'checkout_session_completed'
    | 'payout_created'
    | 'payout_updated'
    | 'mandate_setup_started'
    | 'mandate_setup_succeeded'
    | 'mandate_setup_failed'
    | 'mandate_revoked'
    | 'user_payout.failed'
    | 'user_payout.paid'
    | 'user_payout.initiated'
  >;

  url?: string;
}

export interface WebhooksubscriptionListParams {
  limit?: number;

  skip?: number;
}

export interface WebhooksubscriptionDeleteParams {
  id: string;
}

export interface WebhooksubscriptionPingParams {
  /**
   * The unique identifier for the webhook subscription to trigger.
   */
  id: string;
}

export declare namespace Webhooksubscription {
  export {
    type WebhooksubscriptionCreateResponse as WebhooksubscriptionCreateResponse,
    type WebhooksubscriptionUpdateResponse as WebhooksubscriptionUpdateResponse,
    type WebhooksubscriptionListResponse as WebhooksubscriptionListResponse,
    type WebhooksubscriptionDeleteResponse as WebhooksubscriptionDeleteResponse,
    type WebhooksubscriptionPingResponse as WebhooksubscriptionPingResponse,
    type WebhooksubscriptionCreateParams as WebhooksubscriptionCreateParams,
    type WebhooksubscriptionUpdateParams as WebhooksubscriptionUpdateParams,
    type WebhooksubscriptionListParams as WebhooksubscriptionListParams,
    type WebhooksubscriptionDeleteParams as WebhooksubscriptionDeleteParams,
    type WebhooksubscriptionPingParams as WebhooksubscriptionPingParams,
  };
}
