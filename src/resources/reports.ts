// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Reports extends APIResource {
  /**
   * Create a Payout Report for a given timerange. A Payout Report is generated
   * async. Please follow [this guide](https://docs.getivy.de/docs/payout-report-1)
   * to learn more in detail.
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
   */
  download(body: ReportDownloadParams, options?: Core.RequestOptions): Core.APIPromise<PayoutReport> {
    return this._client.post('/api/service/merchant/payout/export/download', { body, ...options });
  }
}

export interface PayoutReport {
  payouts: Array<PayoutReport.Payout>;
}

export namespace PayoutReport {
  export interface Payout {
    id: string;

    amount: number;

    availableAt: string;

    merchantAppId: string;

    transactions: Array<Payout.Transaction>;
  }

  export namespace Payout {
    export interface Transaction {
      currency: 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

      fee: number;

      gross: number;

      net: number;

      reportingCategory: string;

      billingFullName?: string;

      createdAt?: string;

      description?: string;

      displayId?: string;

      orderId?: string;

      referenceId?: string;

      subaccountId?: string;

      userMail?: string;
    }
  }
}

export interface ReportCreateResponse {
  /**
   * The unique identifier of the new Payout Report Object that was created.
   */
  id: string;

  /**
   * Status of the Payout Report creation. This will be `pending` when the run is
   * initially created. As soon as the report is created, this will be set to
   * `succeeded`. Rarely, we may encounter an error, at which point this will be set
   * to `failed`. See [the guide](https://docs.getivy.de/docs/payout-report-1) to
   * learn more.
   */
  status: string;

  /**
   * @deprecated
   */
  fileUrl?: string;
}

export interface ReportRetrieveResponse {
  /**
   * Status of this Payout Report creation. This will be `pending` when the run is
   * initially created. When the run finishes, this will be set to `succeeded`.
   * Rarely, we may encounter an error, at which point this will be set to `failed`.
   */
  status: string;

  /**
   * @deprecated
   */
  fileUrl?: string;
}

export interface ReportCreateParams {
  /**
   * Unix timestamp. The end of the timerange to create a Payout Report for.
   */
  intervalEnd: number;

  /**
   * Unix timestamp. The start of the timerange to create a Payout Report for.
   */
  intervalStart: number;

  /**
   * If provided, the report will be generated for this currency only. If not
   * provided, the report will be generated for all currencies.
   */
  currency?: 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

  /**
   * Optional URL of a webhook. If provided, the report, once generated, will be sent
   * there in JSON format.
   */
  webhookUrl?: string;
}

export interface ReportRetrieveParams {
  /**
   * The unique identifier of the Payout Report to retrieve.
   */
  reportId: string;
}

export interface ReportDownloadParams {
  /**
   * The unique identifier of the report you want to download. This was returned when
   * creating a new Payout Report.
   */
  reportId: string;

  /**
   * The format in which you want to download the report. Default is csv.
   */
  format?: 'csv' | 'json' | 'datev';
}

export declare namespace Reports {
  export {
    type PayoutReport as PayoutReport,
    type ReportCreateResponse as ReportCreateResponse,
    type ReportRetrieveResponse as ReportRetrieveResponse,
    type ReportCreateParams as ReportCreateParams,
    type ReportRetrieveParams as ReportRetrieveParams,
    type ReportDownloadParams as ReportDownloadParams,
  };
}
