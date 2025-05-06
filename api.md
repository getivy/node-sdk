# Banks

Types:

- <code><a href="./src/resources/banks.ts">BankRetrieveResponse</a></code>
- <code><a href="./src/resources/banks.ts">BankListResponse</a></code>
- <code><a href="./src/resources/banks.ts">BankSearchResponse</a></code>

Methods:

- <code title="post /api/service/banks/details">client.banks.<a href="./src/resources/banks.ts">retrieve</a>({ ...params }) -> BankRetrieveResponse</code>
- <code title="post /api/service/banks/list">client.banks.<a href="./src/resources/banks.ts">list</a>({ ...params }) -> BankListResponse</code>
- <code title="post /api/service/banks/search">client.banks.<a href="./src/resources/banks.ts">search</a>({ ...params }) -> BankSearchResponse</code>

# Checkoutsession

Types:

- <code><a href="./src/resources/checkoutsession.ts">CheckoutsessionCreateResponse</a></code>
- <code><a href="./src/resources/checkoutsession.ts">CheckoutsessionRetrieveResponse</a></code>
- <code><a href="./src/resources/checkoutsession.ts">CheckoutsessionExpireResponse</a></code>

Methods:

- <code title="post /api/service/checkout/session/create">client.checkoutsession.<a href="./src/resources/checkoutsession.ts">create</a>({ ...params }) -> CheckoutsessionCreateResponse</code>
- <code title="post /api/service/checkout/session/details">client.checkoutsession.<a href="./src/resources/checkoutsession.ts">retrieve</a>({ ...params }) -> CheckoutsessionRetrieveResponse</code>
- <code title="post /api/service/checkout/session/expire">client.checkoutsession.<a href="./src/resources/checkoutsession.ts">expire</a>({ ...params }) -> CheckoutsessionExpireResponse</code>

# Data

## Session

Types:

- <code><a href="./src/resources/data/session.ts">SessionCreateResponse</a></code>
- <code><a href="./src/resources/data/session.ts">SessionRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/data/session/create">client.data.session.<a href="./src/resources/data/session.ts">create</a>({ ...params }) -> SessionCreateResponse</code>
- <code title="post /api/service/data/session/details">client.data.session.<a href="./src/resources/data/session.ts">retrieve</a>({ ...params }) -> SessionRetrieveResponse</code>

## Consent

Types:

- <code><a href="./src/resources/data/consent.ts">ConsentRetrieveResponse</a></code>
- <code><a href="./src/resources/data/consent.ts">ConsentRevokeResponse</a></code>

Methods:

- <code title="post /api/service/data/consent/details">client.data.consent.<a href="./src/resources/data/consent.ts">retrieve</a>({ ...params }) -> ConsentRetrieveResponse</code>
- <code title="post /api/service/data/consent/revoke">client.data.consent.<a href="./src/resources/data/consent.ts">revoke</a>({ ...params }) -> ConsentRevokeResponse</code>

## Accounts

Types:

- <code><a href="./src/resources/data/accounts.ts">AccountListResponse</a></code>

Methods:

- <code title="post /api/service/data/accounts/list">client.data.accounts.<a href="./src/resources/data/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>

## Transactions

Types:

- <code><a href="./src/resources/data/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="post /api/service/data/transactions/list">client.data.transactions.<a href="./src/resources/data/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>

## Balances

Types:

- <code><a href="./src/resources/data/balances.ts">BalanceListResponse</a></code>

Methods:

- <code title="post /api/service/data/account-balances/list">client.data.balances.<a href="./src/resources/data/balances.ts">list</a>({ ...params }) -> BalanceListResponse</code>

# Customers

Types:

- <code><a href="./src/resources/customers.ts">CustomerCreateResponse</a></code>
- <code><a href="./src/resources/customers.ts">CustomerRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/customer/create">client.customers.<a href="./src/resources/customers.ts">create</a>({ ...params }) -> CustomerCreateResponse</code>
- <code title="post /api/service/customer/retrieve">client.customers.<a href="./src/resources/customers.ts">retrieve</a>({ ...params }) -> CustomerRetrieveResponse</code>

# Orders

Types:

- <code><a href="./src/resources/orders.ts">OrderCreateResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/order/create">client.orders.<a href="./src/resources/orders.ts">create</a>({ ...params }) -> OrderCreateResponse</code>
- <code title="post /api/service/order/details">client.orders.<a href="./src/resources/orders.ts">retrieve</a>({ ...params }) -> OrderRetrieveResponse</code>

# Charges

Types:

- <code><a href="./src/resources/charges.ts">Charge</a></code>

Methods:

- <code title="post /api/service/charge/create">client.charges.<a href="./src/resources/charges.ts">create</a>({ ...params }) -> Charge</code>

# Mandates

Types:

- <code><a href="./src/resources/mandates.ts">MandateResponse</a></code>
- <code><a href="./src/resources/mandates.ts">MandateRevokeResponse</a></code>

Methods:

- <code title="post /api/service/mandate/retrieve">client.mandates.<a href="./src/resources/mandates.ts">retrieve</a>({ ...params }) -> MandateResponse</code>
- <code title="post /api/service/mandate/lookup">client.mandates.<a href="./src/resources/mandates.ts">lookup</a>({ ...params }) -> MandateResponse</code>
- <code title="post /api/service/mandate/revoke">client.mandates.<a href="./src/resources/mandates.ts">revoke</a>({ ...params }) -> MandateRevokeResponse</code>

# Capabilities

Types:

- <code><a href="./src/resources/capabilities.ts">CapabilityRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/merchant/capabilities/details">client.capabilities.<a href="./src/resources/capabilities.ts">retrieve</a>({ ...params }) -> CapabilityRetrieveResponse</code>

# Refunds

Types:

- <code><a href="./src/resources/refunds.ts">RefundResponse</a></code>
- <code><a href="./src/resources/refunds.ts">RefundBatchResponse</a></code>

Methods:

- <code title="post /api/service/merchant/payment/refund">client.refunds.<a href="./src/resources/refunds.ts">create</a>({ ...params }) -> RefundResponse</code>
- <code title="post /api/service/merchant/payment/refund/batch">client.refunds.<a href="./src/resources/refunds.ts">batch</a>({ ...params }) -> RefundBatchResponse</code>

# Payouts

Types:

- <code><a href="./src/resources/payouts.ts">PublicUserPayout</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutListResponse</a></code>

Methods:

- <code title="post /api/service/payout/create">client.payouts.<a href="./src/resources/payouts.ts">create</a>({ ...params }) -> PublicUserPayout</code>
- <code title="post /api/service/payout/retrieve">client.payouts.<a href="./src/resources/payouts.ts">retrieve</a>({ ...params }) -> PublicUserPayout</code>
- <code title="post /api/service/payout/list">client.payouts.<a href="./src/resources/payouts.ts">list</a>({ ...params }) -> PayoutListResponse</code>

# Reports

Types:

- <code><a href="./src/resources/reports.ts">PayoutReport</a></code>
- <code><a href="./src/resources/reports.ts">ReportCreateResponse</a></code>
- <code><a href="./src/resources/reports.ts">ReportRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/merchant/payout/export/create">client.reports.<a href="./src/resources/reports.ts">create</a>({ ...params }) -> ReportCreateResponse</code>
- <code title="post /api/service/merchant/payout/export/retrieve">client.reports.<a href="./src/resources/reports.ts">retrieve</a>({ ...params }) -> ReportRetrieveResponse</code>
- <code title="post /api/service/merchant/payout/export/download">client.reports.<a href="./src/resources/reports.ts">download</a>({ ...params }) -> PayoutReport</code>

# Subaccounts

Types:

- <code><a href="./src/resources/subaccounts.ts">Subaccount</a></code>

Methods:

- <code title="post /api/service/subaccount/create">client.subaccounts.<a href="./src/resources/subaccounts.ts">create</a>({ ...params }) -> Subaccount</code>
- <code title="post /api/service/subaccount/retrieve">client.subaccounts.<a href="./src/resources/subaccounts.ts">retrieve</a>({ ...params }) -> Subaccount</code>

# Balance

Types:

- <code><a href="./src/resources/balance.ts">BalanceRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/balance/retrieve">client.balance.<a href="./src/resources/balance.ts">retrieve</a>({ ...params }) -> BalanceRetrieveResponse</code>

# Webhooksubscription

Types:

- <code><a href="./src/resources/webhooksubscription.ts">WebhooksubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/webhooksubscription.ts">WebhooksubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/webhooksubscription.ts">WebhooksubscriptionListResponse</a></code>
- <code><a href="./src/resources/webhooksubscription.ts">WebhooksubscriptionDeleteResponse</a></code>
- <code><a href="./src/resources/webhooksubscription.ts">WebhooksubscriptionPingResponse</a></code>

Methods:

- <code title="post /api/service/webhook-subscription/create">client.webhooksubscription.<a href="./src/resources/webhooksubscription.ts">create</a>({ ...params }) -> WebhooksubscriptionCreateResponse</code>
- <code title="post /api/service/webhook-subscription/update">client.webhooksubscription.<a href="./src/resources/webhooksubscription.ts">update</a>({ ...params }) -> WebhooksubscriptionUpdateResponse</code>
- <code title="post /api/service/webhook-subscription/list">client.webhooksubscription.<a href="./src/resources/webhooksubscription.ts">list</a>({ ...params }) -> WebhooksubscriptionListResponse</code>
- <code title="post /api/service/webhook-subscription/delete">client.webhooksubscription.<a href="./src/resources/webhooksubscription.ts">delete</a>({ ...params }) -> WebhooksubscriptionDeleteResponse</code>
- <code title="post /api/service/webhook-subscription/ping">client.webhooksubscription.<a href="./src/resources/webhooksubscription.ts">ping</a>({ ...params }) -> WebhooksubscriptionPingResponse</code>
