// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Reports extends APIResource {
  /**
   * Create a Payout Report for a given timerange. A Payout Report is generated
   * async. Please follow [this guide](https://docs.getivy.de/docs/payout-report-1)
   * to learn more in detail.
   *
   * @deprecated
   */
  create(body: ReportCreateParams, options?: Core.RequestOptions): Core.APIPromise<ReportCreateResponse> {
    return this._client.post('/api/service/merchant/payout/export/create', { body, ...options });
  }

  /**
   * Retrieve the status of an existing Payout Report. Use this endpoint to poll for
   * the status before downloading a Payout Report.
   */
  retrieve(
    body: ReportRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportRetrieveResponse> {
    return this._client.post('/api/service/merchant/payout/export/retrieve', { body, ...options });
  }

  /**
   * Download the actual Payout Report once the creation succeeded with this
   * endpoint.
   *
   * @deprecated
   */
  download(body: ReportDownloadParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/api/service/merchant/payout/export/download', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ReportCreateResponse {
  id: string;

  status: 'pending' | 'succeeded' | 'failed';

  fileUrl?: string;
}

export interface ReportRetrieveResponse {
  status: 'pending' | 'succeeded' | 'failed';

  fileUrl?: string;
}

export interface ReportCreateParams {
  intervalEnd: number;

  intervalStart: number;

  currency?: 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

  webhookUrl?: string;
}

export interface ReportRetrieveParams {
  reportId: string;
}

export interface ReportDownloadParams {
  reportId: string;

  format?: 'csv' | 'json' | 'datev';
}

export declare namespace Reports {
  export {
    type ReportCreateResponse as ReportCreateResponse,
    type ReportRetrieveResponse as ReportRetrieveResponse,
    type ReportCreateParams as ReportCreateParams,
    type ReportRetrieveParams as ReportRetrieveParams,
    type ReportDownloadParams as ReportDownloadParams,
  };
}
