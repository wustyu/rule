var ResponseData={
	"request_date": "2024-02-06T13:43:37Z",
	"request_date_ms": 1707227017316,
	"subscriber": {
		"entitlements": {
			"com.valo.reader.vip2.year": {
				"expires_date": "2025-03-05T23:34:46Z",
				"grace_period_expires_date": null,
				"product_identifier": "com.valo.reader.vip2.year",
				"purchase_date": "2024-02-05T23:34:46Z"
			}
		},
		"first_seen": "2024-01-06T02:28:59Z",
		"last_seen": "2024-02-06T11:23:55Z",
		"management_url": "https://apps.apple.com/account/subscriptions",
		"non_subscriptions": {},
		"original_app_user_id": "$RCAnonymousID%3A6bd9afd3d3a249c1a8a36803d688404b",
		"original_application_version": "9",
		"original_purchase_date": "2024-01-06T05:28:16Z",
		"other_purchases": {},
		"subscriptions": {
			"com.valo.reader.vip2.year": {
				"auto_resume_date": null,
				"billing_issues_detected_at": null,
				"expires_date": "2025-03-05T23:34:46Z",
				"grace_period_expires_date": null,
				"is_sandbox": false,
				"original_purchase_date": "2024-02-05T22:34:47Z",
				"ownership_type": "PURCHASED",
				"period_type": "normal",
				"purchase_date": "2024-02-05T22:34:46Z",
				"refunded_at": null,
				"store": "app_store",
				"store_transaction_id": "5163901476322633",
				"unsubscribe_detected_at": "2024-02-06T00:04:00Z"
			}
		}
	}
};
var body1 = JSON.stringify(resonnseData);
$done({body:body1});
