
var resonnseData={
  "request_date_ms": 1707243929890,
  "request_date": "2024-02-06T18:25:29Z",
  "subscriber": {
    "non_subscriptions": {
    },
    "first_seen": "2024-01-06T02:28:59Z",
    "original_application_version": "9",
    "other_purchases": {
    },
    "management_url": "https:\/\/apps.apple.com\/account\/subscriptions",
    "subscriptions": {
      "com.valo.reader.vip2.month": {
        "original_purchase_date": "2024-02-05T23:34:47Z",
        "expires_date": "2024-03-05T23:34:46Z",
        "is_sandbox": false,
        "refunded_at": null,
        "store_transaction_id": "510001474706469",
        "unsubscribe_detected_at": "2024-02-06T00:04:00Z",
        "grace_period_expires_date": null,
        "period_type": "normal",
        "purchase_date": "2024-02-05T23:34:46Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
    },
    "entitlements": {
      "com.valo.reader.vip2.month": {
        "grace_period_expires_date": null,
        "purchase_date": "2024-02-05T23:34:46Z",
        "product_identifier": "com.valo.reader.vip2.month",
        "expires_date": "2024-03-05T23:34:46Z"
      }
    },
    "original_purchase_date": "2024-01-06T02:28:16Z",
    "original_app_user_id": "$RCAnonymousID%3A3b3f1e095646489994f09c505930ac17",
    "last_seen": "2024-02-06T11:23:55Z"
  }
};

var body = JSON.stringify(resonnseData);
let headers = $response.headers;
headers['Content-Type'] = 'application/json';
$done({headers:headers,body:body});
