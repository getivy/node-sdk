// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ReportsAPI from './reports';
import {
  PayoutReport,
  ReportCreateParams,
  ReportCreateResponse,
  ReportDownloadParams,
  ReportRetrieveParams,
  ReportRetrieveResponse,
  Reports,
} from './reports';

export class Payouts extends APIResource {
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);
}

Payouts.Reports = Reports;

export declare namespace Payouts {
  export {
    Reports as Reports,
    type PayoutReport as PayoutReport,
    type ReportCreateResponse as ReportCreateResponse,
    type ReportRetrieveResponse as ReportRetrieveResponse,
    type ReportCreateParams as ReportCreateParams,
    type ReportRetrieveParams as ReportRetrieveParams,
    type ReportDownloadParams as ReportDownloadParams,
  };
}
