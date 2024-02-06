var resonnseData={
    "request_date_ms": 1707176131404,
    "request_date": "2024-02-05T23:35:31Z",
    "subscriber": {
      "non_subscriptions": {
      },
      "first_seen": "2024-01-06T02:28:59Z",
      "original_application_version": "9",
      "other_purchases": {
      },
      "management_url": "https:\/\/apps.apple.com\/account\/subscriptions",
      "subscriptions": {
        "com.valo.reader.vip2.year": {
          "original_purchase_date": "2024-02-05T23:34:47Z",
          "expires_date": "2025-03-05T23:34:46Z",
          "is_sandbox": false,
          "refunded_at": null,
          "store_transaction_id": "5163901476322633",
          "unsubscribe_detected_at": null,
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
        "com.valo.reader.vip2.year": {
          "grace_period_expires_date": null,
          "purchase_date": "2024-02-05T23:34:46Z",
          "product_identifier": "com.valo.reader.vip2.year",
          "expires_date": "2025-03-05T23:34:46Z"
        }
      },
      "original_purchase_date": "2024-01-06T02:28:16Z",
      "original_app_user_id": "$RCAnonymousID%3A6bd9afd3d3a249c1a8a36803d688404b",
      "last_seen": "2024-02-05T02:36:01Z"
    }
  };

var body = JSON.stringify(resonnseData);
$done({body:body});
