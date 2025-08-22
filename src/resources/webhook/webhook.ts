// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SubscriptionAPI from './subscription';
import {
  Subscription,
  SubscriptionCreateParams,
  SubscriptionCreateResponse,
  SubscriptionDeleteParams,
  SubscriptionDeleteResponse,
  SubscriptionListParams,
  SubscriptionListResponse,
  SubscriptionPingParams,
  SubscriptionPingResponse,
  SubscriptionUpdateParams,
  SubscriptionUpdateResponse,
} from './subscription';

export class Webhook extends APIResource {
  subscription: SubscriptionAPI.Subscription = new SubscriptionAPI.Subscription(this._client);

  /**
   * This endpoint allows you to trigger a specific webhook by its ID.
   */
  trigger(
    body: WebhookTriggerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookTriggerResponse> {
    return this._client.post('/api/service/webhook/trigger', { body, ...options });
  }
}

export interface WebhookTriggerResponse {
  /**
   * Indicates whether the webhook was successfully triggered
   */
  success: boolean;
}

export interface WebhookTriggerParams {
  /**
   * The unique identifier for the webhook to trigger.
   */
  id: unknown;
}

Webhook.Subscription = Subscription;

export declare namespace Webhook {
  export {
    type WebhookTriggerResponse as WebhookTriggerResponse,
    type WebhookTriggerParams as WebhookTriggerParams,
  };

  export {
    Subscription as Subscription,
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionUpdateResponse as SubscriptionUpdateResponse,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionPingResponse as SubscriptionPingResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
    type SubscriptionPingParams as SubscriptionPingParams,
  };
}
