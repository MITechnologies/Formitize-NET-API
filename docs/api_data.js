define({ "api": [
  {
    "type": "delete",
    "url": "/asset/:schemaID/:assetID",
    "title": "Delete Asset",
    "name": "AssetDelete",
    "order": "5",
    "description": "<p>Delete an existing asset.</p>",
    "group": "Asset_Management",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n    \"payload\": {\n        \"result\": \"deleted\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/asset/_apidoc.js",
    "groupTitle": "Asset_Management"
  },
  {
    "type": "post",
    "url": "/asset/:schemaID/",
    "title": "Add Asset",
    "name": "CreateAsset",
    "order": "2",
    "description": "<p>Create an asset</p>",
    "group": "Asset_Management",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the asset.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "number",
            "description": "<p>Asset number.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>description of the asset.</p>"
          },
          {
            "group": "Body",
            "type": "decimal",
            "optional": true,
            "field": "longitude",
            "description": "<p>longitude coordinate.</p>"
          },
          {
            "group": "Body",
            "type": "decimal",
            "optional": true,
            "field": "latitude",
            "description": "<p>coordinate.</p>"
          },
          {
            "group": "Body",
            "type": "decimal",
            "optional": true,
            "field": "altitude",
            "description": "<p>altitude coordinate</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "clientID",
            "description": "<p>Client ID for existing client.</p>"
          },
          {
            "group": "Body",
            "type": "client",
            "optional": true,
            "field": "client",
            "description": "<p>Optional client body for new clients</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "locationID",
            "description": "<p>location ID for existing client location.</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "zoneID",
            "description": "<p>zone ID for existing client location zone.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "zone",
            "description": "<p>Creates a new zone and attaches it to the existing client location id. If there is no location, no zone will be created.</p>"
          },
          {
            "group": "Body",
            "type": "json",
            "optional": true,
            "field": "content",
            "description": "<p>If the column names are known before the request, you can pass a dictionary of values with the column name as the key.</p>"
          },
          {
            "group": "Body",
            "type": "string[200]",
            "optional": true,
            "field": "char1-30",
            "description": "<p>The char column of your asset schema, refer to asset schema for char-field correlation.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "int1-15",
            "description": "<p>The signed integer column of your asset schema, refer to asset schema for int-field correlation.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "dbl1-7",
            "description": "<p>The double column of your asset schema, refer to asset schema for dbl-field correlation.</p>"
          }
        ],
        "Client Fields": [
          {
            "group": "Client Fields",
            "type": "object",
            "optional": false,
            "field": "client",
            "description": "<p>The Client Object</p>"
          },
          {
            "group": "Client Fields",
            "type": "number",
            "optional": true,
            "field": "client.id",
            "description": "<p>ID of the client.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": false,
            "field": "client.billingName",
            "description": "<p>The Billing Name of the client</p>"
          },
          {
            "group": "Client Fields",
            "type": "object[]",
            "optional": true,
            "field": "client.contact",
            "description": "<p>An array of contacts</p>"
          },
          {
            "group": "Client Fields",
            "type": "number",
            "optional": true,
            "field": "client.contact.id",
            "description": "<p>The ID of the client's contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.firstName",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.lastName",
            "description": "<p>Last name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.email",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.mobile",
            "description": "<p>Mobile number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.mobileAreaCode",
            "description": "<p>Mobile number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.workPhone",
            "description": "<p>Work phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.workPhoneAreaCode",
            "description": "<p>Work phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.homePhone",
            "description": "<p>Home phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.homePhoneAreaCode",
            "description": "<p>Home phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "object",
            "optional": true,
            "field": "client.contact.custom",
            "description": "<p>Object of custom variables.</p>"
          },
          {
            "group": "Client Fields",
            "type": "object",
            "optional": true,
            "field": "client.contact.custom.OBJECT_1",
            "description": "<p>Custom variable of a client. To set values requires an Object of {&quot;value&quot;: &quot;Example&quot;, &quot;type&quot;: &quot;String&quot;}</p>"
          },
          {
            "group": "Client Fields",
            "type": "object[]",
            "optional": true,
            "field": "client.location",
            "description": "<p>An array of locations</p>"
          },
          {
            "group": "Client Fields",
            "type": "number",
            "optional": true,
            "field": "client.location.id",
            "description": "<p>The ID of the client's location.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.street1",
            "description": "<p>Street 1 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.street2",
            "description": "<p>Street 2 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.city",
            "description": "<p>City address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.state",
            "description": "<p>State address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.postcode",
            "description": "<p>Postcode address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.country",
            "description": "<p>Country address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example:",
          "content": " {\n    \"name\": \"New Asset\",\n    \"number\": \"ASSET01\",\n    \"description\": \"New Description\",\n    \"longitude\": 1,\n    \"latitude\": 5556,\n    \"altitude\": 777,\n    \"clientID\": 1,\n    \"locationID\": 1,\n    \"zoneID\": 20,\n    \"char1\": \"QR-6789\",\n    \"char2\": \"Bathroom\",\n    \"int1\": \"15\",\n    \"char3\": \"No\",\n    \"char4\": \"Quick comment.\"\n}",
          "type": "json"
        },
        {
          "title": "Request Body Example using schema-columns:",
          "content": " {\n    \"name\": \"New Asset\",\n    \"description\": \"New Description\",\n    \"longitude\": 1,\n    \"latitude\": 5556,\n    \"altitude\": 777,\n    \"clientID\": 1,\n    \"locationID\": 1,\n    \"zoneID\": 20,\n    \"content\": {\n        \"Barcode ID\": \"QR-6789\",\n        \"Area\": \"Bathroom\",\n        \"Activity Level\": \"15\",\n        \"Replenished (Yes/No)\": \"No\",\n        \"Comments\": \"Quick comment.\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Request Body Example with new client",
          "content": " {\n    \"name\": \"New Asset\",\n    \"description\": \"New Description\",\n    \"longitude\": 1,\n    \"latitude\": 5556,\n    \"altitude\": 777,\n    \"client\": {\n        \"billingName\": \"New Customer\",\n        \"contact\": [{\n            \"firstName\": \"Alex\",\n            \"lastName\": \"Jones\",\n            \"email\": \"alex.jones@company.net\",\n        }],\n        \"location\": [{\n            \"street1\": \"123 Street name\",\n            \"city\": \"Sydney\",\n            \"state\": \"NSW\",\n            \"country\": \"Australia\"\n        }]\n    },\n    \"char1\": \"QR-6789\",\n    \"char2\": \"Bathroom\",\n    \"int1\": \"15\",\n    \"char3\": \"No\",\n    \"char4\": \"Quick comment.\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": " {\n    \"payload\": {\n        \"asset\": {\n            \"id\": 520427,\n            \"name\": \"Asset Name.\",\n            \"number\": 520427,\n            \"description\": \"Description of asset.\",\n            \"longitude\": 6666,\n            \"latitude\": 5556,\n            \"altitude\": 777,\n            \"clientID\": 1,\n            \"locationID\": 1,\n            \"zoneID\": 20,\n            \"clientName\": \"Client Name\",\n            \"location\": \"123 Street Address Sydney NSW 2000\",\n            \"address1\": \"123 Street Address\",\n            \"city\": \"Sydney\",\n            \"state\": \"NSW\",\n            \"postcode\": \"2000\",\n            \"zoneValue\": \"Kitchen\",\n            \"char1\": \"QR-12345\",\n            \"char2\": \"Sink\",\n            \"int1\": \"10\",\n            \"char3\": \"Yes\",\n            \"char4\": \"The comment of this asset.\",\n            \"content\": {\n                \"ID\": \"520427\",\n                \"Barcode ID\": \"QR-12345\",\n                \"Area\": \"Sink\",\n                \"Activity Level\": \"10\",\n                \"Replenished (Yes/No)\": \"Yes\",\n                \"Comments\": \"The comment of this asset.\"\n            }\n        }\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/asset/_apidoc.js",
    "groupTitle": "Asset_Management"
  },
  {
    "type": "get",
    "url": "/asset/:schemaID/:assetID",
    "title": "Get Asset",
    "name": "GetAsset",
    "order": "3",
    "description": "<p>Get available information about the asset.</p>",
    "group": "Asset_Management",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/asset/3/520427",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n    \"payload\": {\n        \"assetID\": \"520427\",\n        \"schemaID\": \"3\",\n        \"schema\": {\n            \"id\": 3,\n            \"title\": \"Bait Station\",\n            \"columns\": [\n                {\n                    \"title\": \"Barcode ID\",\n                    \"col\": \"char1\"\n                },\n                {\n                    \"title\": \"Area\",\n                    \"col\": \"char2\"\n                },\n                {\n                    \"title\": \"Activity Level\",\n                    \"col\": \"int1\"\n                },\n                {\n                    \"title\": \"Replenished (Yes/No)\",\n                    \"col\": \"char3\"\n                },\n                {\n                    \"title\": \"Comments\",\n                    \"col\": \"char4\"\n                }\n            ],\n            \"actions\": {\n                \"list\": \"GET https://service.formitize.com/api/rest/v2/asset/3/list\",\n                \"getAsset\": \"GET https://service.formitize.com/api/rest/v2/asset/3/:assetid\",\n                \"updateAsset\": \"POST https://service.formitize.com/api/rest/v2/asset/3/:assetid\",\n                \"createAsset\": \"POST https://service.formitize.com/api/rest/v2/asset/3/\"\n            }\n        },\n        \"asset\": {\n            \"id\": 520427,\n            \"name\": \"Asset Name.\",\n            \"number\": \"520427\",\n            \"description\": \"Description of asset.\",\n            \"longitude\": 6666,\n            \"latitude\": 5556,\n            \"altitude\": 777,\n            \"clientID\": 1,\n            \"locationID\": 1,\n            \"zoneID\": 20,\n            \"clientName\": \"Client Name\",\n            \"location\": \"123 Street Address Sydney NSW 2000\",\n            \"address1\": \"123 Street Address\",\n            \"city\": \"Sydney\",\n            \"state\": \"NSW\",\n            \"postcode\": \"2000\",\n            \"zoneValue\": \"Kitchen\",\n            \"char1\": \"QR-12345\",\n            \"char2\": \"Sink\",\n            \"int1\": \"10\",\n            \"char3\": \"Yes\",\n            \"char4\": \"The comment of this asset.\",\n            \"content\": {\n                \"ID\": \"520427\",\n                \"Barcode ID\": \"QR-12345\",\n                \"Area\": \"Sink\",\n                \"Activity Level\": \"10\",\n                \"Replenished (Yes/No)\": \"Yes\",\n                \"Comments\": \"The comment of this asset.\"\n            }\n        }\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/asset/_apidoc.js",
    "groupTitle": "Asset_Management"
  },
  {
    "type": "get",
    "url": "/asset/schema/list",
    "title": "List Asset Types",
    "name": "ListAssetSchema",
    "order": "0",
    "description": "<p>Retrieve a list of asset schemas available.</p>",
    "group": "Asset_Management",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/asset/schema/list/",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n    \"payload\": [\n        {\n            \"id\": 3,\n            \"title\": \"Bait Station\",\n            \"columns\": [\n                {\n                    \"title\": \"ID\",\n                    \"col\": \"id\"\n                },\n                {\n                    \"title\": \"Barcode ID\",\n                    \"col\": \"char1\"\n                },\n                {\n                    \"title\": \"Area\",\n                    \"col\": \"char2\"\n                },\n                {\n                    \"title\": \"Activity Level\",\n                    \"col\": \"int1\"\n                },\n                {\n                    \"title\": \"Replenished (Yes/No)\",\n                    \"col\": \"char3\"\n                },\n                {\n                    \"title\": \"Comments\",\n                    \"col\": \"char4\"\n                }\n            ],\n            \"actions\": {\n                \"list\": \"GET https://service.formitize.com/api/rest/v2/asset/3/list\",\n                \"getAsset\": \"GET https://service.formitize.com/api/rest/v2/asset/3/:assetid\",\n\t\t\t\t\"updateAsset\": \"POST https://service.formitize.com/api/rest/v2/asset/3/:assetid\",\n                \"createAsset\": \"POST https://service.formitize.com/api/rest/v2/asset/3/\"\n            }\n        },\n\t\t...\n\t]\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/asset/schema/_apidoc.js",
    "groupTitle": "Asset_Management"
  },
  {
    "type": "get",
    "url": "/asset/list/:schemaID/",
    "title": "List Assets",
    "name": "ListAssets",
    "order": "1",
    "description": "<p>Retrieve a list of assets within a schema.</p>",
    "group": "Asset_Management",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/asset/schema/list/3",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n    \"payload\": {\n        \"schema\": {\n            \"id\": 3,\n            \"title\": \"Bait Station\",\n            \"columns\": [\n                {\n                    \"title\": \"Barcode ID\",\n                    \"col\": \"char1\"\n                },\n                {\n                    \"title\": \"Area\",\n                    \"col\": \"char2\"\n                },\n                {\n                    \"title\": \"Activity Level\",\n                    \"col\": \"int1\"\n                },\n                {\n                    \"title\": \"Replenished (Yes/No)\",\n                    \"col\": \"char3\"\n                },\n                {\n                    \"title\": \"Comments\",\n                    \"col\": \"char4\"\n                }\n            ],\n            \"actions\": {\n                \"list\": \"GET https://service.formitize.com/api/rest/v2/asset/3/list\",\n                \"getAsset\": \"GET https://service.formitize.com/api/rest/v2/asset/3/:assetid\",\n\t\t\t\t\"updateAsset\": \"POST https://service.formitize.com/api/rest/v2/asset/3/:assetid\",\n                \"createAsset\": \"POST https://service.formitize.com/api/rest/v2/asset/3/\"\n            }\n        },\n        \"results\": [\n            {\n                \"id\": \"520427\",\n                \"companyID\": \"1\",\n                \"name\": \"Name of asset\",\n                \"description\": \"Description of asset.\",\n                \"number\": \"520427\",\n                \"schemaID\": \"3\",\n                \"date\": \"1599094442\",\n                \"latitude\": \"5556\",\n                \"longitude\": \"6666\",\n                \"clientID\": \"1\",\n                \"locationID\": \"5\",\n                \"altitude\": \"777\",\n                \"companyName\": \"Client Name\",\n                \"siteName\": \"\",\n                \"address1\": \"123 Street Address\",\n                \"address2\": \"\",\n                \"city\": \"Sydney\",\n                \"postcode\": \"2000\",\n                \"state\": \"NSW\",\n                \"country\": \"\",\n                \"zoneValue\": \"Kitchen\",\n                \"char1\": \"QR-12345\",\n                \"char2\": \"Sink\",\n                \"int1\": \"10\",\n                \"char3\": \"Yes\",\n                \"char4\": \"The comment of this asset.\",\n                \"content\": {\n                    \"ID\": \"520427\",\n                    \"Barcode ID\": \"QR-12345\",\n                    \"Area\": \"Sink\",\n                    \"Activity Level\": \"10\",\n                    \"Replenished (Yes/No)\": \"Yes\",\n                    \"Comments\": \"The comment of this asset.\"\n                }\n            }\n        ]\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/asset/_apidoc.js",
    "groupTitle": "Asset_Management"
  },
  {
    "type": "post",
    "url": "/asset/:schemaID/:assetID",
    "title": "Edit Asset",
    "name": "UpdateAsset",
    "order": "4",
    "description": "<p>Update an existing asset.</p>",
    "group": "Asset_Management",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the asset.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "number",
            "description": "<p>Asset number.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>description of the asset.</p>"
          },
          {
            "group": "Body",
            "type": "decimal",
            "optional": true,
            "field": "longitude",
            "description": "<p>longitude coordinate.</p>"
          },
          {
            "group": "Body",
            "type": "decimal",
            "optional": true,
            "field": "latitude",
            "description": "<p>coordinate.</p>"
          },
          {
            "group": "Body",
            "type": "decimal",
            "optional": true,
            "field": "altitude",
            "description": "<p>altitude coordinate</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "clientID",
            "description": "<p>Client ID for existing client.</p>"
          },
          {
            "group": "Body",
            "type": "client",
            "optional": true,
            "field": "client",
            "description": "<p>Optional client body for new clients</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "locationID",
            "description": "<p>location ID for existing client location.</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "zoneID",
            "description": "<p>zone ID for existing client location zone.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "zone",
            "description": "<p>Creates a new zone and attaches it to the existing client location id. If there is no location, no zone will be created.</p>"
          },
          {
            "group": "Body",
            "type": "json",
            "optional": true,
            "field": "content",
            "description": "<p>If the column names are known before the request, you can pass a dictionary of values with the column name as the key.</p>"
          },
          {
            "group": "Body",
            "type": "string[200]",
            "optional": true,
            "field": "char1-30",
            "description": "<p>The char column of your asset schema, refer to asset schema for char-field correlation.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "int1-15",
            "description": "<p>The signed integer column of your asset schema, refer to asset schema for int-field correlation.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "dbl1-7",
            "description": "<p>The double column of your asset schema, refer to asset schema for dbl-field correlation.</p>"
          }
        ],
        "Client Fields": [
          {
            "group": "Client Fields",
            "type": "object",
            "optional": false,
            "field": "client",
            "description": "<p>The Client Object</p>"
          },
          {
            "group": "Client Fields",
            "type": "number",
            "optional": true,
            "field": "client.id",
            "description": "<p>ID of the client.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": false,
            "field": "client.billingName",
            "description": "<p>The Billing Name of the client</p>"
          },
          {
            "group": "Client Fields",
            "type": "object[]",
            "optional": true,
            "field": "client.contact",
            "description": "<p>An array of contacts</p>"
          },
          {
            "group": "Client Fields",
            "type": "number",
            "optional": true,
            "field": "client.contact.id",
            "description": "<p>The ID of the client's contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.firstName",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.lastName",
            "description": "<p>Last name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.email",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.mobile",
            "description": "<p>Mobile number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.mobileAreaCode",
            "description": "<p>Mobile number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.workPhone",
            "description": "<p>Work phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.workPhoneAreaCode",
            "description": "<p>Work phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.homePhone",
            "description": "<p>Home phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.homePhoneAreaCode",
            "description": "<p>Home phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "object",
            "optional": true,
            "field": "client.contact.custom",
            "description": "<p>Object of custom variables.</p>"
          },
          {
            "group": "Client Fields",
            "type": "object",
            "optional": true,
            "field": "client.contact.custom.OBJECT_1",
            "description": "<p>Custom variable of a client. To set values requires an Object of {&quot;value&quot;: &quot;Example&quot;, &quot;type&quot;: &quot;String&quot;}</p>"
          },
          {
            "group": "Client Fields",
            "type": "object[]",
            "optional": true,
            "field": "client.location",
            "description": "<p>An array of locations</p>"
          },
          {
            "group": "Client Fields",
            "type": "number",
            "optional": true,
            "field": "client.location.id",
            "description": "<p>The ID of the client's location.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.street1",
            "description": "<p>Street 1 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.street2",
            "description": "<p>Street 2 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.city",
            "description": "<p>City address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.state",
            "description": "<p>State address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.postcode",
            "description": "<p>Postcode address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.country",
            "description": "<p>Country address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example:",
          "content": "{\n    \"name\": \"Updated Asset Name\",\n    \"description\": \"New Description\",\n    \"longitude\": 1,\n    \"latitude\": 5556,\n    \"altitude\": 777,\n    \"clientID\": 1,\n    \"locationID\": 1,\n    \"zoneID\": 20,\n    \"char1\": \"QR-6789\",\n    \"char2\": \"Bathroom\",\n    \"int1\": \"15\",\n    \"char3\": \"No\",\n    \"char4\": \"Quick comment.\"\n}",
          "type": "json"
        },
        {
          "title": "Request Body Example using schema-columns:",
          "content": "{\n    \"name\": \"New Asset\",\n    \"description\": \"New Description\",\n    \"longitude\": 1,\n    \"latitude\": 5556,\n    \"altitude\": 777,\n    \"clientID\": 1,\n    \"locationID\": 1,\n    \"zoneID\": 20,\n    \"content\": {\n        \"Barcode ID\": \"QR-6789\",\n        \"Area\": \"Bathroom\",\n        \"Activity Level\": \"15\",\n        \"Replenished (Yes/No)\": \"No\",\n        \"Comments\": \"Quick comment.\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Request Body Example with new client:",
          "content": "{\n    \"name\": \"Updated Asset Name\",\n    \"description\": \"New Description\",\n    \"longitude\": 1,\n    \"latitude\": 5556,\n    \"altitude\": 777,\n    \"client\": {\n        \"billingName\": \"New Customer\",\n        \"contact\": [{\n            \"firstName\": \"Alex\",\n            \"lastName\": \"Jones\",\n            \"email\": \"alex.jones@company.net\",\n        }],\n        \"location\": [{\n            \"street1\": \"123 Street name\",\n            \"city\": \"Sydney\",\n            \"state\": \"NSW\",\n            \"country\": \"Australia\"\n        }]\n    },\n    \"char1\": \"QR-6789\",\n    \"char2\": \"Bathroom\",\n    \"int1\": \"15\",\n    \"char3\": \"No\",\n    \"char4\": \"Quick comment.\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n    \"payload\": {\n        \"status\": \"success\",\n        \"fieldsUpdated\": {\n            \"name\": \"Updated Asset Name\",\n            \"description\": \"New Description\",\n            \"longitude\": \"1\"\n        },\n        \"assetID\": \"520427\",\n        \"schemaID\": \"3\",\n        \"schema\": {\n            \"id\": 3,\n            \"title\": \"Bait Station\",\n            \"columns\": [\n                {\n                    \"title\": \"Barcode ID\",\n                    \"col\": \"char1\"\n                },\n                {\n                    \"title\": \"Area\",\n                    \"col\": \"char2\"\n                },\n                {\n                    \"title\": \"Activity Level\",\n                    \"col\": \"int1\"\n                },\n                {\n                    \"title\": \"Replenished (Yes/No)\",\n                    \"col\": \"char3\"\n                },\n                {\n                    \"title\": \"Comments\",\n                    \"col\": \"char4\"\n                }\n            ],\n            \"actions\": {\n                \"list\": \"GET https://service.formitize.com/api/rest/v2/asset/3/list\",\n                \"getAsset\": \"GET https://service.formitize.com/api/rest/v2/asset/3/:assetid\",\n                \"updateAsset\": \"POST https://service.formitize.com/api/rest/v2/asset/3/:assetid\",\n                \"createAsset\": \"POST https://service.formitize.com/api/rest/v2/asset/3/\"\n            }\n        },\n        \"asset\": {\n            \"id\": 520427,\n            \"name\": \"Updated Asset Name\",\n            \"number\": 520427,\n            \"description\": \"New Description\",\n            \"longitude\": 1,\n            \"latitude\": 5556,\n            \"altitude\": 777,\n            \"clientID\": 1,\n            \"locationID\": 1,\n            \"zoneID\": 20,\n            \"clientName\": \"Client Name\",\n            \"location\": \"123 Street Address Sydney NSW 2000\",\n            \"address1\": \"123 Street Address\",\n            \"city\": \"Sydney\",\n            \"state\": \"NSW\",\n            \"postcode\": \"2000\",\n            \"zoneValue\": \"Kitchen\",\n            \"char1\": \"QR-12345\",\n            \"char2\": \"Sink\",\n            \"int1\": \"10\",\n            \"char3\": \"Yes\",\n            \"char4\": \"The comment of this asset.\",\n            \"content\": {\n                \"ID\": \"520427\",\n                \"Barcode ID\": \"QR-12345\",\n                \"Area\": \"Sink\",\n                \"Activity Level\": \"10\",\n                \"Replenished (Yes/No)\": \"Yes\",\n                \"Comments\": \"The comment of this asset.\"\n            }\n        }\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/asset/_apidoc.js",
    "groupTitle": "Asset_Management"
  },
  {
    "type": "all",
    "url": "/",
    "title": "",
    "description": "<p>Each request needs these headers to be sent.</p>",
    "version": "1.0.0",
    "group": "Authorisation",
    "filename": "app/system/class/api/rest/_apidoc.js",
    "order": "All",
    "groupTitle": "Authorisation",
    "name": "All",
    "header": {
      "fields": {
        "CURL Authorisation": [
          {
            "group": "CURL Authorisation",
            "type": "string",
            "optional": false,
            "field": "--user-agent",
            "description": "<p>This is the company login name used on Formitize e.g. &quot;Formitize&quot;</p>"
          },
          {
            "group": "CURL Authorisation",
            "type": "string",
            "optional": false,
            "field": "--u",
            "description": "<p>This will be the user:password b64 encrypted e.g. Username123:password123</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CURL Example",
          "content": "curl -A YourCompany -u admin:password https://service.formitize.com/api/rest/v2/",
          "type": "curl"
        },
        {
          "title": "C# Example",
          "content": "using Formitize.API;\n\nvar credentials = new Credentials(\"CompanyName\", \"Username\", \"password\");\nvar client = new WebClient(credentials)",
          "type": "CSharp"
        },
        {
          "title": "PHP Example",
          "content": "require '../api/Formitize/autoload.inc.php';\n\n$cred = Formitize\\API::CreateCredentials();\n\n$client = Formitize\\API::RESTClient($cred);\n\n$cred->setCompanyName(USER_COMPANY);\n$cred->setUserName(USER_NAME);\n$cred->setPassword(USER_PW);",
          "type": "PHP"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Authorisation Errors",
          "content": "{\n    \"payload\": {\n        \"error\": {\n            \"message\": \"Invalid company/user/password.\",\n            \"timestamp\": 1679273891,\n            \"code\": 401\n        }\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "Post",
    "url": "/crm/client/:clientID/contact/",
    "title": "Add Contact",
    "name": "AddContact",
    "order": "6",
    "group": "CRM",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Contact Fields": [
          {
            "group": "Contact Fields",
            "type": "number",
            "optional": true,
            "field": "id",
            "description": "<p>The ID of the client's contact.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "string",
            "optional": true,
            "field": "firstName",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "string",
            "optional": true,
            "field": "lastName",
            "description": "<p>Last name of contact.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "string",
            "optional": true,
            "field": "mobile",
            "description": "<p>Mobile number.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "string",
            "optional": true,
            "field": "mobileAreaCode",
            "description": "<p>Mobile number area code.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "string",
            "optional": true,
            "field": "workPhone",
            "description": "<p>Work phone number.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "string",
            "optional": true,
            "field": "workPhoneAreaCode",
            "description": "<p>Work phone number area code.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "string",
            "optional": true,
            "field": "homePhone",
            "description": "<p>Home phone number.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "string",
            "optional": true,
            "field": "homePhoneAreaCode",
            "description": "<p>Home phone number area code.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "object",
            "optional": true,
            "field": "custom",
            "description": "<p>Object of custom variables.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "object",
            "optional": true,
            "field": "custom.OBJECT_1",
            "description": "<p>Custom variable of a client. To set values requires an Object of {&quot;value&quot;: &quot;Example&quot;, &quot;type&quot;: &quot;String&quot;}</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"POST\" https://service.formitize.com/api/rest/v2/crm/client/77/contact/ {POSTFIELDS}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": "{\n    \"payload\": [\n        {\n            \"id\": \"78\",\n            \"firstName\": \"John\",\n            \"lastName\": \"Doe\",\n            \"homePhone\": \"\",\n            \"homePhoneAreaCode\": \"\",\n            \"mobile\": \"\",\n            \"mobileAreaCode\": \"\",\n            \"workPhone\": \"\",\n            \"workPhoneAreaCode\": \"\",\n            \"email\": \"john.doe@example.com\",\n            \"custom\": [\n                {\n                    \"id\": \"24\",\n                    \"type\": \"Mobile\",\n                    \"value\": \"0000 000 000\",\n                    \"extra\": \"+61\",\n                    \"datatype\": \"\"\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/crm/client/_apidoc.js",
    "groupTitle": "CRM"
  },
  {
    "type": "Delete",
    "url": "/crm/client/:clientID",
    "title": "Delete Client",
    "name": "DeleteClient",
    "order": "4",
    "group": "CRM",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"DELETE\" https://service.formitize.com/api/rest/v2/crm/client/77",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": "{\n    \"payload\": {\n        \"id\": \"77\",\n        \"billingName\": \"Business Name\",\n        \"status\": \"Inactive\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/crm/client/_apidoc.js",
    "groupTitle": "CRM"
  },
  {
    "type": "Delete",
    "url": "/crm/client/:id/contact/:contactID",
    "title": "Delete Contact",
    "name": "DeleteContact",
    "order": "9",
    "group": "CRM",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"DELETE\" https://service.formitize.com/api/rest/v2/crm/client/77/contact/78",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": "{\n    \"payload\": [\n        \"id\": \"78\",\n        \"firstName\": \"John\",\n        \"lastName\": \"Doe\",\n        \"status\": \"Deleted\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/crm/client/_apidoc.js",
    "groupTitle": "CRM"
  },
  {
    "type": "Post",
    "url": "/crm/client/:id/contact/:contactID",
    "title": "Edit Contact",
    "name": "EditContact",
    "order": "8",
    "group": "CRM",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Contact Fields": [
          {
            "group": "Contact Fields",
            "type": "string",
            "optional": true,
            "field": "firstName",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "string",
            "optional": true,
            "field": "lastName",
            "description": "<p>Last name of contact.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>Email address of contact.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "string",
            "optional": true,
            "field": "mobile",
            "description": "<p>Mobile number.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "string",
            "optional": true,
            "field": "mobileAreaCode",
            "description": "<p>Mobile number area code.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "string",
            "optional": true,
            "field": "workPhone",
            "description": "<p>Work phone number.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "string",
            "optional": true,
            "field": "workPhoneAreaCode",
            "description": "<p>Work phone number area code.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "string",
            "optional": true,
            "field": "homePhone",
            "description": "<p>Home phone number.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "string",
            "optional": true,
            "field": "homePhoneAreaCode",
            "description": "<p>Home phone number area code.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "object",
            "optional": true,
            "field": "custom",
            "description": "<p>Object of custom variables.</p>"
          },
          {
            "group": "Contact Fields",
            "type": "object",
            "optional": true,
            "field": "custom.OBJECT_1",
            "description": "<p>Custom variable of a client. To set values requires an Object of {&quot;value&quot;: &quot;Example&quot;, &quot;type&quot;: &quot;String&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example:",
          "content": " {\n    \"firstName\": \"John\",\n    \"lastName\": \"Doe\",\n    \"mobile\": \"0123 456 789\",\n    \"mobileAreaCode\": \"+61\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"POST\" https://service.formitize.com/api/rest/v2/crm/client/77/contact/78 {POSTFIELDS}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": "{\n    \"payload\": {\n        \"id\": \"78\",\n        \"firstName\": \"John\",\n        \"lastName\": \"Doe\",\n        \"homePhone\": \"\",\n        \"homePhoneAreaCode\": \"\",\n        \"mobile\": \"0123 456 789\",\n        \"mobileAreaCode\": \"+61\"\n        \"workPhone\": \"\",\n        \"workPhoneAreaCode\": \"\",\n        \"email\": \"john.doe@example.com\",\n        \"custom\": [\n            {\n                \"id\": \"24\",\n                \"type\": \"Mobile\",\n                \"value\": \"0000 000 000\",\n                \"extra\": \"+61\",\n                \"datatype\": \"\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/crm/client/_apidoc.js",
    "groupTitle": "CRM"
  },
  {
    "type": "Get",
    "url": "/crm/client/:clientID",
    "title": "Get Client",
    "name": "GetClient",
    "order": "2",
    "group": "CRM",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/crm/client/77",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": " {\n    \"payload\": {\n        \"id\": \"77\",\n        \"billingName\": \"Business Name\",\n        \"primaryContactID\": \"80\",\n        \"primaryAddressID\": \"79\",\n        \"primaryContactName\": \"Jane Doe\",\n        \"primaryContactPhone\": \"0000 000 000\",\n        \"primaryContactEmail\": \"jane.doe@example.com\",\n        \"primaryAddress\": \"STREET_1 STREET_2, CITY STATE, AUSTRALIA\",\n        \"contact\": [\n            {\n                \"id\": \"80\",\n                \"firstName\": \"Jane\",\n                \"lastName\": \"Doe\",\n                \"homePhone\": \"\",\n                \"homePhoneAreaCode\": \"\",\n                \"mobile\": \"0000 000 000\",\n                \"mobileAreaCode\": \"+61\",\n                \"workPhone\": \"\",\n                \"workPhoneAreaCode\": \"\",\n                \"email\": \"\",\n                \"custom\": {}\n            },\n            {\n                \"id\": \"81\",\n                \"firstName\": \"John\",\n                \"lastName\": \"Doe\",\n                \"homePhone\": \"\",\n                \"homePhoneAreaCode\": \"\",\n                \"mobile\": \"0000 000 000\",\n                \"mobileAreaCode\": \"+61\",\n                \"workPhone\": \"\",\n                \"workPhoneAreaCode\": \"\",\n                \"email\": \"\",\n                \"custom\": {\n                    \"24\": {\n                        \"id\": \"24\",\n                        \"type\": \"Mobile\",\n                        \"value\": \"0000 000 000\",\n                        \"extra\": \"+61\",\n                        \"datatype\": \"\"\n                    }\n                }\n            }\n        ],\n        \"location\": [\n            {\n                \"id\": 79,\n                \"sitename\": false,\n                \"street1\": \"STREET_1\",\n                \"street2\": \"STREET_2\",\n                \"city\": \"CITY\",\n                \"state\": \"STATE\",\n                \"postcode\": \"\",\n                \"country\": \"AUSTRALIA\",\n                \"zones\": [\n                    {\n                        \"id\": \"1\",\n                        \"value\": \"Zone A\"\n                    },\n                    {\n                        \"id\": \"2\",\n                        \"value\": \"Zone B\"\n                    }\n                ],\n                \"custom\": {}\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/crm/client/_apidoc.js",
    "groupTitle": "CRM"
  },
  {
    "type": "Get",
    "url": "/crm/client/:clientID/contact/:contactID",
    "title": "Get Contact",
    "name": "GetContact",
    "order": "7",
    "group": "CRM",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/crm/client/77/contact/78",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": " {\n    \"payload\": {\n        \"id\": \"78\",\n        \"firstName\": \"John\",\n        \"lastName\": \"Doe\",\n        \"homePhone\": \"\",\n        \"homePhoneAreaCode\": \"\",\n        \"mobile\": \"\",\n        \"mobileAreaCode\": \"\",\n        \"workPhone\": \"\",\n        \"workPhoneAreaCode\": \"\",\n        \"email\": \"john.doe@example.com\",\n        \"custom\": [\n            {\n                \"id\": \"24\",\n                \"type\": \"Mobile\",\n                \"value\": \"0000 000 000\",\n                \"extra\": \"+61\",\n                \"datatype\": \"\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/crm/client/_apidoc.js",
    "groupTitle": "CRM"
  },
  {
    "type": "Get",
    "url": "/crm/client/:clientID/contact/",
    "title": "List Contacts",
    "name": "ListContact",
    "order": "5",
    "group": "CRM",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Optional": [
          {
            "group": "Optional",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>The page number, starting from 1.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/crm/client/77/contact/",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": "{\n    \"payload\": [\n        {\n            \"id\": \"80\",\n            \"firstName\": \"Jane\",\n            \"lastName\": \"Doe\",\n            \"homePhone\": \"\",\n            \"homePhoneAreaCode\": \"\",\n            \"mobile\": \"0000 000 000\",\n            \"mobileAreaCode\": \"+61\",\n            \"workPhone\": \"\",\n            \"workPhoneAreaCode\": \"\",\n            \"email\": \"\",\n            \"custom\": []\n        },\n        {\n            \"id\": \"81\",\n            \"firstName\": \"John\",\n            \"lastName\": \"Doe\",\n            \"homePhone\": \"\",\n            \"homePhoneAreaCode\": \"\",\n            \"mobile\": \"0000 000 000\",\n            \"mobileAreaCode\": \"+61\",\n            \"workPhone\": \"\",\n            \"workPhoneAreaCode\": \"\",\n            \"email\": \"\",\n            \"custom\": [\n                {\n                    \"id\": \"24\",\n                    \"type\": \"Mobile\",\n                    \"value\": \"0000 000 000\",\n                    \"extra\": \"+61\",\n                    \"datatype\": \"\"\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/crm/client/_apidoc.js",
    "groupTitle": "CRM"
  },
  {
    "type": "Get",
    "url": "/crm/client/list/",
    "title": "List Clients",
    "description": "<p>List all the contacts and clients available, returns 500 at a time.</p>",
    "name": "ListContactsClient",
    "order": "0",
    "group": "CRM",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Optional": [
          {
            "group": "Optional",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>The page number, starting from 1.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/crm/client/list/?page=1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": "{\n    \"payload\": [\n        {\n            \"id\": \"87\",\n            \"clientID\": \"87\",\n            \"contactID\": \"93\",\n            \"billingName\": \"Business Name\",\n            \"name\": \"Jane Doe\",\n            \"firstName\": \"Jane\",\n            \"lastName\": \"Doe\",\n            \"status\": \"Active\",\n            \"clientType\": \"Customer\",\n            \"primaryAddress\": \"STREET_1 STREET_2, CITY STATE, AUSTRALIA\",\n            \"cachedata\": [\n                {\n                    \"id\": \"110\",\n                    \"type\": \"Mobile\",\n                    \"extra\": \"+61\",\n                    \"value\": \"0000 000 000\",\n                    \"datatype\": \"\"\n                }\n            ],\n            \"latestNote\": \"\",\n            \"dateCreated\": \"1603943584\",\n            \"dateModified\": \"1603943584\"\n        },\n        {\n            \"id\": \"87\",\n            \"clientID\": \"87\",\n            \"contactID\": \"94\",\n            \"billingName\": \"Business Name\",\n            \"name\": \"John Doe\",\n            \"firstName\": \"John\",\n            \"lastName\": \"Doe\",\n            \"status\": \"Active\",\n            \"clientType\": \"Customer\",\n            \"primaryAddress\": \"STREET_1 STREET_2, CITY STATE, AUSTRALIA\",\n            \"cachedata\": [\n                {\n                    \"id\": \"111\",\n                    \"type\": \"Mobile\",\n                    \"extra\": \"+61\",\n                    \"value\": \"0000 000 000\",\n                    \"datatype\": \"\"\n                }\n            ],\n            \"latestNote\": \"\",\n            \"dateCreated\": \"1603943584\",\n            \"dateModified\": \"1603943584\"\n        },\n        {\n            \"id\": \"67\",\n            \"clientID\": \"67\",\n            \"contactID\": \"67\",\n            \"billingName\": \"Formitize\",\n            \"name\": \"SUPPORT\",\n            \"firstName\": \"SUPPORT\",\n            \"lastName\": \"\",\n            \"status\": \"Active\",\n            \"clientType\": \"\",\n            \"primaryAddress\": \"Rodeo Rd, Gregory Hills\",\n            \"cachedata\": [\n                {\n                    \"id\": \"84\",\n                    \"type\": \"Email\",\n                    \"extra\": \"\",\n                    \"value\": \"support@formitize.com\",\n                    \"datatype\": \"\"\n                },\n                {\n                    \"id\": \"85\",\n                    \"type\": \"Mobile\",\n                    \"extra\": \"+61\",\n                    \"value\": \"0400 000 000\",\n                    \"datatype\": \"\"\n                },\n                {\n                    \"id\": \"86\",\n                    \"type\": \"Work Phone\",\n                    \"extra\": \"\",\n                    \"value\": \"1300 552 008\",\n                    \"datatype\": \"\"\n                }\n            ],\n            \"latestNote\": \"\",\n            \"dateCreated\": \"1603943584\",\n            \"dateModified\": \"1603943584\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/crm/client/list/_apidoc.js",
    "groupTitle": "CRM"
  },
  {
    "type": "post",
    "url": "/crm/client/",
    "title": "Add Client",
    "name": "PostAddClient",
    "order": "1",
    "group": "CRM",
    "version": "1.0.0",
    "filename": "app/system/class/api/rest/v1/crm/client/_apidoc.js",
    "groupTitle": "CRM",
    "parameter": {
      "fields": {
        "Client Fields": [
          {
            "group": "Client Fields",
            "type": "number",
            "optional": true,
            "field": "id",
            "description": "<p>ID of the client.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": false,
            "field": "billingName",
            "description": "<p>The Billing Name of the client</p>"
          },
          {
            "group": "Client Fields",
            "type": "object[]",
            "optional": true,
            "field": "contact",
            "description": "<p>An array of contacts</p>"
          },
          {
            "group": "Client Fields",
            "type": "number",
            "optional": true,
            "field": "contact.id",
            "description": "<p>The ID of the client's contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "contact.firstName",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "contact.lastName",
            "description": "<p>Last name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "contact.email",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "contact.mobile",
            "description": "<p>Mobile number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "contact.mobileAreaCode",
            "description": "<p>Mobile number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "contact.workPhone",
            "description": "<p>Work phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "contact.workPhoneAreaCode",
            "description": "<p>Work phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "contact.homePhone",
            "description": "<p>Home phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "contact.homePhoneAreaCode",
            "description": "<p>Home phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "object",
            "optional": true,
            "field": "contact.custom",
            "description": "<p>Object of custom variables.</p>"
          },
          {
            "group": "Client Fields",
            "type": "object",
            "optional": true,
            "field": "contact.custom.OBJECT_1",
            "description": "<p>Custom variable of a client. To set values requires an Object of {&quot;value&quot;: &quot;Example&quot;, &quot;type&quot;: &quot;String&quot;}</p>"
          },
          {
            "group": "Client Fields",
            "type": "object[]",
            "optional": true,
            "field": "location",
            "description": "<p>An array of locations</p>"
          },
          {
            "group": "Client Fields",
            "type": "number",
            "optional": true,
            "field": "location.id",
            "description": "<p>The ID of the client's location.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "location.street1",
            "description": "<p>Street 1 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "location.street2",
            "description": "<p>Street 2 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "location.city",
            "description": "<p>City address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "location.state",
            "description": "<p>State address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "location.postcode",
            "description": "<p>Postcode address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "location.country",
            "description": "<p>Country address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example:",
          "content": "{\n\t\"billingName\": \"Business Name\",\n\t\"contact\": [{\n\t\t\"firstName\": \"Jane\",\n\t\t\"lastName\": \"Doe\",\n\t\t\"mobile\": \"0000 000 000\",\n\t\t\"mobileAreaCode\": \"+61\"\n\t},{\n\t\t\"firstName\": \"John\",\n\t\t\"lastName\": \"Doe\",\n\t\t\"mobile\": \"0000 000 000\",\n\t\t\"mobileAreaCode\": \"+61\"\n\t}],\n\t\"location\": [{\n\t\t\"street1\": \"STREET_1\",\n\t\t\"street2\": \"STREET_2\",\n\t\t\"city\": \"CITY\",\n\t\t\"state\": \"STATE\",\n\t\t\"country\": \"AUSTRALIA\"\n\t}]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": "{\n  \"payload\": {\n    \"id\": \"77\",\n    \"billingName\": \"Business Name\",\n    \"primaryContactID\": 80,\n    \"primaryAddressID\": 79,\n    \"primaryContactName\": \"Jane Doe\",\n    \"primaryAddress\": \"STREET_1 STREET_2, CITY STATE, AUSTRALIA\",\n    \"contactIDs\": [\n      80,\n      81\n    ],\n    \"locationIDs\": [\n      79\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/crm/client/:clientID",
    "title": "Edit Client",
    "name": "PostEditClient",
    "order": "3",
    "group": "CRM",
    "version": "1.0.0",
    "filename": "app/system/class/api/rest/v1/crm/client/_apidoc.js",
    "groupTitle": "CRM",
    "parameter": {
      "fields": {
        "Client Fields": [
          {
            "group": "Client Fields",
            "type": "number",
            "optional": true,
            "field": "id",
            "description": "<p>ID of the client.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": false,
            "field": "billingName",
            "description": "<p>The Billing Name of the client</p>"
          },
          {
            "group": "Client Fields",
            "type": "object[]",
            "optional": true,
            "field": "contact",
            "description": "<p>An array of contacts</p>"
          },
          {
            "group": "Client Fields",
            "type": "number",
            "optional": true,
            "field": "contact.id",
            "description": "<p>The ID of the client's contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "contact.firstName",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "contact.lastName",
            "description": "<p>Last name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "contact.email",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "contact.mobile",
            "description": "<p>Mobile number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "contact.mobileAreaCode",
            "description": "<p>Mobile number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "contact.workPhone",
            "description": "<p>Work phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "contact.workPhoneAreaCode",
            "description": "<p>Work phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "contact.homePhone",
            "description": "<p>Home phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "contact.homePhoneAreaCode",
            "description": "<p>Home phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "object",
            "optional": true,
            "field": "contact.custom",
            "description": "<p>Object of custom variables.</p>"
          },
          {
            "group": "Client Fields",
            "type": "object",
            "optional": true,
            "field": "contact.custom.OBJECT_1",
            "description": "<p>Custom variable of a client. To set values requires an Object of {&quot;value&quot;: &quot;Example&quot;, &quot;type&quot;: &quot;String&quot;}</p>"
          },
          {
            "group": "Client Fields",
            "type": "object[]",
            "optional": true,
            "field": "location",
            "description": "<p>An array of locations</p>"
          },
          {
            "group": "Client Fields",
            "type": "number",
            "optional": true,
            "field": "location.id",
            "description": "<p>The ID of the client's location.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "location.street1",
            "description": "<p>Street 1 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "location.street2",
            "description": "<p>Street 2 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "location.city",
            "description": "<p>City address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "location.state",
            "description": "<p>State address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "location.postcode",
            "description": "<p>Postcode address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "location.country",
            "description": "<p>Country address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example:",
          "content": "{\n\t\"billingName\": \"Business Name\",\n\t\"contact\": [{\n\t\t\"firstName\": \"Jane\",\n\t\t\"lastName\": \"Doe\",\n\t\t\"mobile\": \"0000 000 000\",\n\t\t\"mobileAreaCode\": \"+61\"\n\t},{\n\t\t\"firstName\": \"John\",\n\t\t\"lastName\": \"Doe\",\n\t\t\"mobile\": \"0000 000 000\",\n\t\t\"mobileAreaCode\": \"+61\"\n\t}],\n\t\"location\": [{\n\t\t\"street1\": \"STREET_1\",\n\t\t\"street2\": \"STREET_2\",\n\t\t\"city\": \"CITY\",\n\t\t\"state\": \"STATE\",\n\t\t\"country\": \"AUSTRALIA\"\n\t}]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": "{\n  \"payload\": {\n    \"id\": \"77\",\n    \"billingName\": \"Business Name\",\n    \"primaryContactID\": 80,\n    \"primaryAddressID\": 79,\n    \"primaryContactName\": \"Jane Doe\",\n    \"primaryAddress\": \"STREET_1 STREET_2, CITY STATE, AUSTRALIA\",\n    \"contactIDs\": [\n      80,\n      81\n    ],\n    \"locationIDs\": [\n      79\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "Get",
    "url": "/crm/accounts/invoice/:id",
    "title": "Get Invoice",
    "name": "GetInvoice",
    "order": "1",
    "group": "CRM_Accounts",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/crm/accounts/invoice/77",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": "{\n    \"payload\": {\n        \"id\": 226,\n        \"invoiceNumber\": \"INVF-05932\",\n        \"invoiceDate\": 1591192800,\n        \"invoiceDateFormatted\": \"04th Jun 2020\",\n        \"expectedPayDate\": 1591192800,\n        \"expectedPayDateFormatted\": \"04th Jun 2020\",\n        \"clientID\": 103,\n        \"companyName\": \"My Contact\",\n        \"primaryAddress\": \"1234 Abc Street\",\n        \"primaryContactName\": \"Jeff\",\n        \"primaryContactPhone\": \"0410 000 000\",\n        \"primaryContactEmail\": \"test@email.com\",\n        \"client\": {\n            \"id\": 103,\n            \"billingName\": \"My Contact\"\n        },\n        \"contact\": {\n            \"name\": \"Invoice Contact\",\n            \"email\": \"other@test.com\",\n            \"mobile\": \"0420 000 000\"\n        },\n        \"orderNumber\": \"\",\n        \"reference\": \"\",\n        \"addressTo\": \"\",\n        \"currency\": \"AUD\",\n        \"status\": \"Open\",\n        \"type\": \"ACCREC\",\n        \"lineItems\": [\n            {\n                \"id\": \"274\",\n                \"code\": \"\",\n                \"description\": \"3333\",\n                \"quantity\": \"1\",\n                \"unitAmount\": \"44\",\n                \"discountPercentage\": \"0\",\n                \"lineSubtotal\": 40,\n                \"taxAmount\": 4,\n                \"lineTotal\": 44\n            }\n        ],\n        \"taxType\": \"INCLUSIVE\",\n        \"tax\": 4,\n        \"subtotal\": 40,\n        \"total\": 44,\n        \"amountPaid\": 0,\n        \"payments\": [],\n        \"pdfUrl\": \"https://service.formitize.com/s/xxxx-xxxx-xxxx-xxxx\",\n        \"attachedTo\": {\n            \"job\": [\n                20000,\n                30000,\n                31353\n            ],\n            \"quote\": [\n                \"QU-001\",\n                \"QU-002\"\n            ]\n        },\n        \"history\": [\n            {\n                \"by\": \"User\",\n                \"userName\": \"Sam John\",\n                \"note\": \"Added 1 row.\",\n                \"date\": \"11th Aug 2022 11:26am\",\n                \"dateTimestamp\": \"1660181216\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/crm/accounts/invoice/_apidoc.js",
    "groupTitle": "CRM_Accounts"
  },
  {
    "type": "Get",
    "url": "/crm/accounts/quote/:id",
    "title": "Get Quote",
    "name": "GetQuote",
    "order": "1",
    "group": "CRM_Accounts",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/crm/accounts/quote/77",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": "{\n    \"payload\": {\n        \"id\": 226,\n        \"quoteNumber\": \"INVF-05932\",\n        \"quoteDate\": 1591192800,\n        \"quoteDateFormatted\": \"04th Jun 2020\",\n        \"clientID\": 103,\n        \"companyName\": \"My Contact\",\n        \"primaryAddress\": \"1234 Abc Street\",\n        \"primaryContactName\": \"Jeff\",\n        \"primaryContactPhone\": \"0410 000 000\",\n        \"primaryContactEmail\": \"test@email.com\",\n        \"client\": {\n            \"id\": 103,\n            \"billingName\": \"My Contact\"\n        },\n        \"contact\": {\n            \"name\": \"Quote Contact\",\n            \"email\": \"other@test.com\",\n            \"mobile\": \"0420 000 000\"\n        },\n        \"orderNumber\": \"\",\n        \"reference\": \"\",\n        \"addressTo\": \"\",\n        \"currency\": \"AUD\",\n        \"status\": \"Open\",\n        \"type\": \"ACCREC\",\n        \"lineItems\": [\n            {\n                \"id\": \"274\",\n                \"code\": \"\",\n                \"description\": \"3333\",\n                \"quantity\": \"1\",\n                \"unitAmount\": \"44\",\n                \"discountPercentage\": \"0\",\n                \"lineSubtotal\": 40,\n                \"taxAmount\": 4,\n                \"lineTotal\": 44\n            }\n        ],\n        \"taxType\": \"INCLUSIVE\",\n        \"tax\": 4,\n        \"subtotal\": 40,\n        \"total\": 44,\n        \"amountPaid\": 0,\n        \"pdfUrl\": \"https://service.formitize.com/s/xxxx-xxxx-xxxx-xxxx\",\n        \"attachedTo\": {\n            \"job\": [\n                20000,\n                30000,\n                31353\n            ],\n            \"quote\": [\n                \"QU-001\",\n                \"QU-002\"\n            ]\n        },\n        \"history\": [\n            {\n                \"by\": \"User\",\n                \"userName\": \"Sam John\",\n                \"note\": \"Added 1 row.\",\n                \"date\": \"11th Aug 2022 11:26am\",\n                \"dateTimestamp\": \"1660181216\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/crm/accounts/quote/_apidoc.js",
    "groupTitle": "CRM_Accounts"
  },
  {
    "type": "Get",
    "url": "/crm/accounts/invoice/list",
    "title": "List Invoices",
    "name": "ListInvoice",
    "description": "<p>List invoices available, returns 500 at a time.</p>",
    "order": "0",
    "group": "CRM_Accounts",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Optional": [
          {
            "group": "Optional",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>The page number, starting from 1.</p>"
          },
          {
            "group": "Optional",
            "type": "number",
            "optional": true,
            "field": "limit",
            "description": "<p>The number of rows returned. Default is 500.</p>"
          },
          {
            "group": "Optional",
            "type": "number",
            "optional": true,
            "field": "clientID",
            "description": "<p>List invoices with the specified Client ID.</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "allowedValues": [
              "\"1\"",
              "\"0,1\""
            ],
            "optional": true,
            "field": "status",
            "description": "<p>List invoices matching the specified status. 0 = Draft, 1 = Open, 3 = Cancelled.</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "allowedValues": [
              "\"2\"",
              "\"1,2\""
            ],
            "optional": true,
            "field": "paymentstatus",
            "description": "<p>List invoices matching the specified payment status. 1 = Unpaid, 2 = Paid, 3 = Overdue, 5 = Expired.</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "optional": true,
            "field": "value",
            "description": "<p>Search for invoices that contain the specified search value. Fields included in search are quoteNumber, orderNumber, addressTo, reference, invoiceNumber, leadId, title, companyName, primaryContactName, primaryContactEmail</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "allowedValues": [
              "\"YYYY-MM-DD\"",
              "\"Unix_timestamp\""
            ],
            "optional": true,
            "field": "datecreated-from",
            "description": "<p>List invoices created on or after the given date.</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "allowedValues": [
              "\"YYYY-MM-DD\"",
              "\"Unix_timestamp\""
            ],
            "optional": true,
            "field": "datecreated-to",
            "description": "<p>List invoices created on or after the given date.</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "allowedValues": [
              "\"YYYY-MM-DD\"",
              "\"Unix_timestamp\""
            ],
            "optional": true,
            "field": "invoicedate-from",
            "description": "<p>List invoices with invoice date on or after the given date.</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "allowedValues": [
              "\"YYYY-MM-DD\"",
              "\"Unix_timestamp\""
            ],
            "optional": true,
            "field": "invoicedate-to",
            "description": "<p>List invoices with invoice date on or after the given date.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/crm/accounts/invoice/list",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": " {\n    \"payload\": [\n        {\n            \"id\": \"485\",\n            \"addressTo\": \"5553 New Canterbury Road, Dulwich Hill New South Wales 2203, Australia\",\n            \"clientID\": \"103\",\n            \"total\": \"0\",\n            \"subtotal\": \"0\",\n            \"tax\": \"0\",\n            \"type\": \"0\",\n            \"amountPaid\": \"0\",\n            \"invoiceNumber\": \"INV-00115\",\n            \"orderNumber\": \"\",\n            \"reference\": \"\",\n            \"statusValue\": \"0\",\n            \"status\": \"Draft\",\n            \"currency\": \"AUD\",\n            \"taxTypeValue\": \"1\",\n            \"taxType\": \"INCLUSIVE\",\n            \"paid\": \"0\",\n            \"title\": \"\",\n            \"summary\": \"\",\n            \"terms\": \"\",\n            \"attachedTo\": [],\n            \"payDate\": \"0\",\n            \"payDateFormatted\": \"\",\n            \"expectedPayDate\": \"1661090400\",\n            \"expectedPayDateFormatted\": \"22nd Aug 2022\",\n            \"invoiceDate\": \"1660831200\",\n            \"invoiceDateFormatted\": \"19th Aug 2022\",\n            \"lastEmailed\": \"0\",\n            \"lastEmailedFormatted\": \"\",\n            \"companyname\": \"Made on Xero\",\n            \"primaryAddress\": \"11 Rodeo Rd, Gregory Hills NSW 2557\",\n            \"primaryContact\": \"103\",\n            \"primaryContactName\": \"Support\",\n            \"primaryContactPhone\": \"1300 552 008\",\n            \"primaryContactEmail\": \"support@formitize.com\"\n        },\n        {\n            \"id\": \"483\",\n            \"addressTo\": \"\",\n            \"clientID\": \"80\",\n            \"total\": \"5\",\n            \"subtotal\": \"5\",\n            \"tax\": \"0\",\n            \"type\": \"0\",\n            \"amountPaid\": \"0\",\n            \"invoiceNumber\": \"INV-0343\",\n            \"orderNumber\": \"\",\n            \"reference\": \"\",\n            \"statusValue\": \"1\",\n            \"status\": \"Open\",\n            \"currency\": \"AUD\",\n            \"taxTypeValue\": \"2\",\n            \"taxType\": \"EXCLUSIVE\",\n            \"paid\": \"0\",\n            \"title\": \"\",\n            \"summary\": \"\",\n            \"terms\": \"\",\n            \"attachedTo\": [],\n            \"payDate\": \"0\",\n            \"payDateFormatted\": \"\",\n            \"expectedPayDate\": \"1661263200\",\n            \"expectedPayDateFormatted\": \"24th Aug 2022\",\n            \"invoiceDate\": \"1660053600\",\n            \"invoiceDateFormatted\": \"10th Aug 2022\",\n            \"lastEmailed\": \"0\",\n            \"lastEmailedFormatted\": \"\",\n            \"companyname\": \"Test\",\n            \"primaryAddress\": \"George Street, Sydney, NSW 2000\",\n            \"primaryContact\": \"80\",\n            \"primaryContactName\": \"Support\",\n            \"primaryContactPhone\": \"1300 552 008\",\n            \"primaryContactEmail\": \"support@formitize.com\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/crm/accounts/invoice/_apidoc.js",
    "groupTitle": "CRM_Accounts"
  },
  {
    "type": "Get",
    "url": "/crm/accounts/quote/list",
    "title": "List Quotes",
    "name": "ListQuote",
    "description": "<p>List quotes available, returns 500 at a time.</p>",
    "order": "0",
    "group": "CRM_Accounts",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Optional": [
          {
            "group": "Optional",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>The page number, starting from 1.</p>"
          },
          {
            "group": "Optional",
            "type": "number",
            "optional": true,
            "field": "limit",
            "description": "<p>The number of rows returned. Default is 500.</p>"
          },
          {
            "group": "Optional",
            "type": "number",
            "optional": true,
            "field": "clientID",
            "description": "<p>List quotes with the specified Client ID.</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "optional": true,
            "field": "value",
            "description": "<p>Search for quotes that contain the specified search value.</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "allowedValues": [
              "\"1\"",
              "\"1,2\""
            ],
            "optional": true,
            "field": "status",
            "description": "<p>List quotes matching the specified status. 1 = Open, 2 = Accepted, 3 = Lost, 4 = Closed.</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "allowedValues": [
              "\"YYYY-MM-DD\"",
              "\"Unix_timestamp\""
            ],
            "optional": true,
            "field": "datecreated-from",
            "description": "<p>List quotes created on or after the given date.</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "allowedValues": [
              "\"YYYY-MM-DD\"",
              "\"Unix_timestamp\""
            ],
            "optional": true,
            "field": "datecreated-to",
            "description": "<p>List quotes created on or after the given date.</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "allowedValues": [
              "\"YYYY-MM-DD\"",
              "\"Unix_timestamp\""
            ],
            "optional": true,
            "field": "quotedate-from",
            "description": "<p>List quotes with quote date on or after the given date.</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "allowedValues": [
              "\"YYYY-MM-DD\"",
              "\"Unix_timestamp\""
            ],
            "optional": true,
            "field": "quotedate-to",
            "description": "<p>List quotes with quote date on or after the given date.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/crm/accounts/quote/list",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": " {\n    \"payload\": [\n        {\n            \"id\": \"485\",\n            \"addressTo\": \"5553 New Canterbury Road, Dulwich Hill New South Wales 2203, Australia\",\n            \"clientID\": \"103\",\n            \"total\": \"0\",\n            \"subtotal\": \"0\",\n            \"tax\": \"0\",\n            \"type\": \"0\",\n            \"amountPaid\": \"0\",\n            \"quoteNumber\": \"QU-00115\",\n            \"orderNumber\": \"\",\n            \"reference\": \"\",\n            \"statusValue\": \"0\",\n            \"status\": \"Draft\",\n            \"currency\": \"AUD\",\n            \"taxTypeValue\": \"1\",\n            \"taxType\": \"INCLUSIVE\",\n            \"paid\": \"0\",\n            \"title\": \"\",\n            \"summary\": \"\",\n            \"terms\": \"\",\n            \"attachedTo\": [],\n            \"quoteDate\": \"1660831200\",\n            \"quoteDateFormatted\": \"19th Aug 2022\",\n            \"lastEmailed\": \"0\",\n            \"lastEmailedFormatted\": \"\",\n            \"companyname\": \"Made on Xero\",\n            \"primaryAddress\": \"11 Rodeo Rd, Gregory Hills NSW 2557\",\n            \"primaryContact\": \"103\",\n            \"primaryContactName\": \"Support\",\n            \"primaryContactPhone\": \"1300 552 008\",\n            \"primaryContactEmail\": \"support@formitize.com\"\n        },\n        {\n            \"id\": \"483\",\n            \"addressTo\": \"\",\n            \"clientID\": \"80\",\n            \"total\": \"5\",\n            \"subtotal\": \"5\",\n            \"tax\": \"0\",\n            \"type\": \"0\",\n            \"amountPaid\": \"0\",\n            \"quoteNumber\": \"INV-0343\",\n            \"orderNumber\": \"\",\n            \"reference\": \"\",\n            \"statusValue\": \"1\",\n            \"status\": \"Open\",\n            \"currency\": \"AUD\",\n            \"taxTypeValue\": \"2\",\n            \"taxType\": \"EXCLUSIVE\",\n            \"paid\": \"0\",\n            \"title\": \"\",\n            \"summary\": \"\",\n            \"terms\": \"\",\n            \"attachedTo\": [],\n            \"quoteDate\": \"1660053600\",\n            \"quoteDateFormatted\": \"10th Aug 2022\",\n            \"lastEmailed\": \"0\",\n            \"lastEmailedFormatted\": \"\",\n            \"companyname\": \"Test\",\n            \"primaryAddress\": \"George Street, Sydney, NSW 2000\",\n            \"primaryContact\": \"80\",\n            \"primaryContactName\": \"Support\",\n            \"primaryContactPhone\": \"1300 552 008\",\n            \"primaryContactEmail\": \"support@formitize.com\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/crm/accounts/quote/_apidoc.js",
    "groupTitle": "CRM_Accounts"
  },
  {
    "type": "Delete",
    "url": "/crm/client/:clientid/location/:locationid",
    "title": "Delete Location",
    "name": "DeleteClientLocation",
    "order": "4",
    "group": "CRM_Location",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"DELETE\" https://service.formitize.com/api/rest/v2/crm/client/77/location/80",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": "{\n    \"payload\": {\n        \"deleted\": [\"80\"]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/crm/client/_apidoc.location.js",
    "groupTitle": "CRM_Location"
  },
  {
    "type": "Delete",
    "url": "/crm/client/:clientid/location/all",
    "title": "Delete All Locations",
    "name": "DeleteClientLocationAll",
    "order": "5",
    "group": "CRM_Location",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"DELETE\" https://service.formitize.com/api/rest/v2/crm/client/77/location/all",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": "{\n    \"payload\": {\n        \"deleted\": [\"80\", \"81\", \"82\", \"83\"]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/crm/client/_apidoc.location.js",
    "groupTitle": "CRM_Location"
  },
  {
    "type": "Get",
    "url": "/crm/client/:clientid/location/:locationid",
    "title": "Get Location",
    "name": "GetClientLocation",
    "order": "2",
    "group": "CRM_Location",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/crm/client/77/location/80",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": " {\n    \"payload\": {\n        \"id\": \"80\",\n        \"siteName\": \"\",\n        \"street1\": \"123 Homer Street\",\n        \"street2\": \"\",\n        \"city\": \"Sydney\",\n        \"postcode\": \"\",\n        \"state\": \"NSW\",\n        \"country\": \"Australia\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/crm/client/_apidoc.location.js",
    "groupTitle": "CRM_Location"
  },
  {
    "type": "Get",
    "url": "/crm/client/:clientid/location/",
    "title": "List Locations",
    "name": "ListClientLocations",
    "order": "0",
    "group": "CRM_Location",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/crm/client/77/location",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": " {\n    \"payload\": [\n        {\n            \"id\": \"80\",\n            \"siteName\": \"\",\n            \"street1\": \"123 Homer Street\",\n            \"street2\": \"\",\n            \"city\": \"Sydney\",\n            \"postcode\": \"\",\n            \"state\": \"NSW\",\n            \"country\": \"Australia\"\n        },\n        {\n            \"id\": \"84\",\n            \"siteName\": \"\",\n            \"street1\": \"456 Homer Street\",\n            \"street2\": \"\",\n            \"city\": \"Sydney\",\n            \"postcode\": \"\",\n            \"state\": \"NSW\",\n            \"country\": \"Australia\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/crm/client/_apidoc.location.js",
    "groupTitle": "CRM_Location"
  },
  {
    "type": "post",
    "url": "/crm/client/:clientid/location",
    "title": "Add Location",
    "name": "PostAddClientLocation",
    "order": "1",
    "group": "CRM_Location",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Location Fields": [
          {
            "group": "Location Fields",
            "type": "string",
            "optional": true,
            "field": "siteName",
            "description": "<p>Site name.</p>"
          },
          {
            "group": "Location Fields",
            "type": "string",
            "optional": true,
            "field": "street1",
            "description": "<p>Street 1 address.</p>"
          },
          {
            "group": "Location Fields",
            "type": "string",
            "optional": true,
            "field": "street2",
            "description": "<p>Street 2 address.</p>"
          },
          {
            "group": "Location Fields",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>City address.</p>"
          },
          {
            "group": "Location Fields",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>State address.</p>"
          },
          {
            "group": "Location Fields",
            "type": "string",
            "optional": true,
            "field": "postcode",
            "description": "<p>Postcode address.</p>"
          },
          {
            "group": "Location Fields",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>Country address.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": "{\n    \"payload\": {\n        \"id\": \"80\",\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/crm/client/_apidoc.location.js",
    "groupTitle": "CRM_Location"
  },
  {
    "type": "post",
    "url": "/crm/client/:clientid/location/:locationid",
    "title": "Edit Location",
    "name": "PostEditClientLocation",
    "order": "3",
    "group": "CRM_Location",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Location Fields": [
          {
            "group": "Location Fields",
            "type": "string",
            "optional": true,
            "field": "siteName",
            "description": "<p>Site name.</p>"
          },
          {
            "group": "Location Fields",
            "type": "string",
            "optional": true,
            "field": "street1",
            "description": "<p>Street 1 address.</p>"
          },
          {
            "group": "Location Fields",
            "type": "string",
            "optional": true,
            "field": "street2",
            "description": "<p>Street 2 address.</p>"
          },
          {
            "group": "Location Fields",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>City address.</p>"
          },
          {
            "group": "Location Fields",
            "type": "string",
            "optional": true,
            "field": "state",
            "description": "<p>State address.</p>"
          },
          {
            "group": "Location Fields",
            "type": "string",
            "optional": true,
            "field": "postcode",
            "description": "<p>Postcode address.</p>"
          },
          {
            "group": "Location Fields",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>Country address.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": "{\n    \"payload\": {\n        \"id\": \"80\",\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/crm/client/_apidoc.location.js",
    "groupTitle": "CRM_Location"
  },
  {
    "type": "delete",
    "url": "/database/:tablename/all",
    "title": "Delete Data From A Table",
    "name": "DatabaseDelete",
    "order": "3",
    "description": "<p>Deletes the table.</p>",
    "group": "Database",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"DELETE\" https://service.formitize.com/api/rest/v2/database/example_table/all",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": "{\n\"payload\": {\n\"result\": \"success\",\n\"note\": \"Database records deleted.\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/database/_apidoc.js",
    "groupTitle": "Database"
  },
  {
    "type": "get",
    "url": "/database/list",
    "title": "List Lookup Databases",
    "name": "DatabaseList",
    "description": "<p>Retrieve a list of tables and the available columns.</p>",
    "group": "Database",
    "order": "1",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/database/list/",
        "type": "json"
      },
      {
        "title": "C# Example",
        "content": "using FormitizeHelper = Formitize.API.Helper;\n...\n\nvar client = new WebClient(new Credentials(\"APIDemo\", \"APIDemo\", \"apidemo123\"));\nvar job = new Formitize.API.Response.JobRequest();\n\nvar APIResponse = await FormitizeHelper.Database.GetDatabaseList(client);",
        "type": "CSharp"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n\t\"payload\": {\n\t\t...,\n\t\t\"128876\": {\n\t\t\t\"id\": \"128876\",\n\t\t\t\"name\": \"database_test\",\n\t\t\t\"title\": \"\",\n\t\t\t\"dateModified\": \"1590392617\",\n\t\t\t\"dateTruncated\": \"0\",\n            \"deleted\": \"0\",\n            \"type\": \"2\",\n\t\t\t\"storeOnPhone\": \"1\",\n\t\t\t\"config\": \"[]\",\n\t\t\t\"columns\": [\n\t\t\t\t\"id\",\n\t\t\t\t\"ColumnA\",\n\t\t\t\t\"ColumnB\",\n\t\t\t\t\"ColumnC\"\n\t\t\t],\n\t\t\t\"url\": \"https://service.formitize.com/api/rest/v2/database/example_table\"\n\t\t},\n\t\t...\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/database/_apidoc.js",
    "groupTitle": "Database"
  },
  {
    "type": "post",
    "url": "/database/:tablename",
    "title": "Bulk Write/Update Data",
    "name": "DatabasePost",
    "order": "2",
    "description": "<p>Create or Update entries within a table.</p>",
    "group": "Database",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "json",
            "optional": false,
            "field": "payload",
            "description": "<p>An array of dictionary entries that match up to the available columns of your table.</p>"
          },
          {
            "group": "Body",
            "type": "json",
            "optional": true,
            "field": "pk",
            "description": "<p>List of primary keys used to match content when insert/updating values.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request Body Example:",
        "content": "{\n    \"payload\": [\n\t\t{\n        \t\"ColumnA\": \"111\",\n        \t\"ColumnB\": \"222\",\n        \t\"ColumnC\": \"333\"\n\t    },\n    \t{\n        \t\"ColumnA\": \"aaaa\",\n        \t\"ColumnC\": \"cccc\",\n\t\t}\n\t],\n    \"pk\": [\n        \"ColumnA\"\n    ]\n}",
        "type": "json"
      },
      {
        "title": "C# Example",
        "content": " \tusing FormitizeHelper = Formitize.API.Helper;\n\t...\n\n\tvar client = new WebClient(new Credentials(\"APIDemo\", \"APIDemo\", \"apidemo123\"));\n\tvar job = new Formitize.API.Response.JobRequest();\n\n\t//Any values matching ColumnA will update, if not found will insert.\n\tvar primaryKeys = new List<string>() { \"ColumnA\" };\n\tvar entries = new List<Entry>() {\n\t\tnew Entry() {\n\t\t\tContent = {\n\t\t\t\t[\"ColumnA\"] = \"Value 1\",\n\t\t\t\t[\"ColumnB\"] = \"Value 2\",\n\t\t\t\t[\"ColumnC\"] = \"Value 3\"\n\t\t\t}\n\t\t},\n\t\tnew Entry() {\n\t\t\tContent = {\n\t\t\t\t[\"ColumnA\"] = \"Person A\",\n\t\t\t\t[\"ColumnB\"] = \"some description\",\n\t\t\t\t[\"ColumnC\"] = \"some other value\"\n\t\t\t}\n\t\t},\n\t};\n\n\tvar APIResponse = await FormitizeHelper.Database.BulkWrite(client, \"database_test\", entries, primaryKeys );",
        "type": "CSharp"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Request Body Example Response:",
          "content": "{\n\t\"payload\": {\n\t\t\"result\": \"success\",\n\t\t\"note\": \"Import service spawned.\",\n\t\t\"serviceID\": \"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\"\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/database/_apidoc.js",
    "groupTitle": "Database"
  },
  {
    "type": "delete",
    "url": "/database/:tablename/truncate",
    "title": "Truncate Data From A Table",
    "name": "DatabaseTruncate",
    "order": "4",
    "description": "<p>Permanently remove all records from a specified table. Unlike the delete endpoint, this physically removes all rows. Useful for wiping a table before re-importing fresh data.</p>",
    "group": "Database",
    "version": "1.0.0",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"DELETE\" https://service.formitize.com/api/rest/v2/database/example_table/truncate",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body Example:",
          "content": "{\n\"payload\": {\n\"result\": \"success\",\n\"note\": \"Database records truncated.\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/database/_apidoc.js",
    "groupTitle": "Database"
  },
  {
    "type": "get",
    "url": "/form/list",
    "title": "List Templates",
    "name": "FormTemplate",
    "order": "1",
    "version": "1.0.0",
    "group": "Form_Templates",
    "parameter": {
      "fields": {
        "Optional": [
          {
            "group": "Optional",
            "type": "boolean",
            "optional": true,
            "field": "simple",
            "description": "<p>If true, only returns a list of objects with no form-schema data.</p>"
          },
          {
            "group": "Optional",
            "type": "number",
            "optional": true,
            "field": "id",
            "description": "<p>If a form ID is known, then return information about that form.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/form/list",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response (simple)",
          "content": "{\n\t\"payload\": {\n\t\t\"1\": {\n\t\t\t\"formID\": \"1\",\n\t\t\t\"title\": \"Assets\",\n\t\t\t\"dateModified\": 1642224380,\n\t\t\t\"dateCreated\": 1441184114\n\t\t},\n\t\t\"35624\": {\n\t\t\t\"formID\": \"35624\",\n\t\t\t\"title\": \"Sample Form\",\n\t\t\t\"dateModified\": 1642224380,\n\t\t\t\"dateCreated\": 1441184114\n\t\t},\n\t\t\"35634\": {\n\t\t\t\"formID\": \"35634\",\n\t\t\t\"title\": \"Client Questionaire\",\n\t\t\t\"dateModified\": 1642224380,\n\t\t\t\"dateCreated\": 1441184114\n\t\t}\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "CURL Response (with form schema)",
          "content": "\n{\n\t\"payload\": {\n\t\t\"1\": {\n\t\t\t\"formID\": \"1\",\n\t\t\t\"title\": \"Assets\",\n\t\t\t\"dateModified\": 1642224380,\n\t\t\t\"dateCreated\": 1441184114,\n\t\t\t\"elements\": {\n\t\t\t\t\"formSubheader_1\": {\n\t\t\t\t\t\"name\": \"formSubheader_1\",\n\t\t\t\t\t\"type\": \"formSubheader\",\n\t\t\t\t\t\"id\": 2,\n\t\t\t\t\t\"children\": {\n\t\t\t\t\t\t\"register_1\": {\n\t\t\t\t\t\t\t\"name\": \"register_1\",\n\t\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\t\"id\": 3\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formRow_1\": {\n\t\t\t\t\t\t\t\"name\": \"formRow_1\",\n\t\t\t\t\t\t\t\"type\": \"formRow\",\n\t\t\t\t\t\t\t\"id\": 4\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formAsset_2\": {\n\t\t\t\t\t\t\t\"name\": \"formAsset_2\",\n\t\t\t\t\t\t\t\"type\": \"formAsset\",\n\t\t\t\t\t\t\t\"id\": 5\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formGPS_1\": {\n\t\t\t\t\t\t\t\"name\": \"formGPS_1\",\n\t\t\t\t\t\t\t\"type\": \"formGPS\",\n\t\t\t\t\t\t\t\"id\": 6\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formCRM_1\": {\n\t\t\t\t\t\t\t\"name\": \"formCRM_1\",\n\t\t\t\t\t\t\t\"type\": \"formCRM\",\n\t\t\t\t\t\t\t\"id\": 7\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formText_5\": {\n\t\t\t\t\t\t\t\"name\": \"formText_5\",\n\t\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\t\"id\": 8\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formText_6\": {\n\t\t\t\t\t\t\t\"name\": \"formText_6\",\n\t\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\t\"id\": 9\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formPageSplit_1\": {\n\t\t\t\t\t\t\t\"name\": \"formPageSplit_1\",\n\t\t\t\t\t\t\t\"type\": \"formPageSplit\",\n\t\t\t\t\t\t\t\"id\": 10\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formText_1\": {\n\t\t\t\t\t\t\t\"name\": \"formText_1\",\n\t\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\t\"id\": 11\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formCRMLocation_1\": {\n\t\t\t\t\t\t\t\"name\": \"formCRMLocation_1\",\n\t\t\t\t\t\t\t\"type\": \"formCRMLocation\",\n\t\t\t\t\t\t\t\"id\": 12\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"formText_7\": {\n\t\t\t\t\t\t\t\"name\": \"formMultiple_1\",\n\t\t\t\t\t\t\t\"type\": \"formMultiple\",\n\t\t\t\t\t\t\t\"id\": 13,\n\t\t\t\t\t\t\t\"options\": {\n                                \"0\": \"-\",\n                                \"1\": \"Option A\",\n                                \"2\": \"Option B\",\n                                \"3\": \"Option C\"\n                            }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t...\n\t\t\t}\n\t\t}\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/form/_apidoc.js",
    "groupTitle": "Form_Templates"
  },
  {
    "type": "get",
    "url": "/form/:id",
    "title": "Get Form Template",
    "name": "FormTemplateID",
    "group": "Form_Templates",
    "version": "1.0.0",
    "order": "2",
    "parameter": {
      "fields": {
        "Optional": [
          {
            "group": "Optional",
            "type": "boolean",
            "optional": true,
            "field": "simple",
            "description": "<p>If true, returns simplified details with no form-schema data.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/form/55",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n\t\"payload\": {\n\t\t\"formID\": \"35634\",\n\t\t\"title\": \"UPPERCASE_TEST\",\n\t\t\"dateModified\": 1642224380,\n        \"dateCreated\": 1441184114,\n\t\t\"elements\": {\n\t\t\t\"formSubheader_1\": {\n\t\t\t\t\"name\": \"formSubheader_1\",\n\t\t\t\t\"type\": \"formSubheader\",\n\t\t\t\t\"id\": 2,\n\t\t\t\t\"children\": {\n\t\t\t\t\t\"formText_1\": {\n\t\t\t\t\t\t\"name\": \"formText_1\",\n\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\"id\": 3\n\t\t\t\t\t},\n\t\t\t\t\t\"formText_2\": {\n\t\t\t\t\t\t\"name\": \"formText_2\",\n\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\"id\": 4\n\t\t\t\t\t},\n\t\t\t\t\t\"formText_3\": {\n\t\t\t\t\t\t\"name\": \"formText_3\",\n\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\"id\": 5\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/form/_apidoc.js",
    "groupTitle": "Form_Templates"
  },
  {
    "type": "delete",
    "url": "/job/:id",
    "title": "Delete Job",
    "name": "DeleteJob",
    "order": "4",
    "group": "Job",
    "version": "1.0.0",
    "description": "<p>Delete the job by id.</p>",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"DELETE\" https://service.formitize.com/api/rest/v2/job/1",
        "type": "json"
      },
      {
        "title": "C# Example",
        "content": "var deleteTask = Formitize.API.Helper.Jobs.DeleteJob(client, 555);\nvar deleteResponse = deleteTask.Result;",
        "type": "CSharp"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"payload\": {\n        \"id\": \"1\",\n        \"message\": \"Successfully deleted job.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/job/_apidoc.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/job/:id",
    "title": "Get Job",
    "name": "GetJob",
    "order": "2",
    "group": "Job",
    "version": "1.0.0",
    "description": "<p>Get a job.</p>",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password https://service.formitize.com/api/rest/v2/job/245",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n    \"payload\": {\n        \"id\": \"245\",\n        \"maintenanceID\": \"0\",\n        \"clientID\": \"8\",\n        \"contactID\": \"12\",\n        \"billingName\": \"Test client\",\n        \"contactName\": \"John Doe\",\n        \"jobNumber\": \"245\",\n        \"orderNumber\": \"\",\n        \"invoiceID\": \"0\",\n        \"invoiceNumber\": \"\",\n        \"title\": \"Test B\",\n        \"forms\": {\n            \"2932\": {\n                \"id\": \"2932\",\n                \"title\": \"Features Test\"\n            }\n        },\n        \"location\": \"\",\n        \"description\": \"\",\n        \"dueDate\": \"1599688800\",\n        \"assignedTo\": \"0\",\n        \"priority\": \"0\",\n        \"status\": \"1\",\n        \"duration\": \"136800\",\n        \"statusLabel\": \"Created\",\n        \"history\": {},\n        \"notes\": {}\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/job/_apidoc.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/job/:id/history",
    "title": "Get Job History",
    "name": "GetJobHistory",
    "group": "Job",
    "order": "6_",
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/job/:id/history/",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"payload\": [\n        {\n            \"type\": \"1\",\n            \"text\": \"Edited Job.\",\n            \"startDate\": \"2022-01-18T10:07:09+11:00\",\n            \"endDate\": \"2022-01-18T10:07:09+11:00\",\n            \"fields\": {\n                \"dueDate\": 1642456800,\n                \"duration\": 5400,\n                \"endDate\": 1642462200\n            },\n            \"lat\": \"\",\n            \"lng\": \"\"\n        },\n        {\n            \"type\": \"1\",\n            \"text\": \"Edited Job.\",\n            \"startDate\": \"2022-01-17T22:31:15+11:00\",\n            \"endDate\": \"2022-01-17T22:31:15+11:00\",\n            \"fields\": [],\n            \"lat\": \"\",\n            \"lng\": \"\"\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/system/class/api/rest/v1/job/_apidoc.job.history.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/job/",
    "title": "List Jobs",
    "name": "ListJob",
    "order": "0",
    "group": "Job",
    "version": "1.0.0",
    "description": "<p>Get a list of jobs, lists 500 at a time. Only lists unfinished jobs by default.</p>",
    "parameter": {
      "fields": {
        "Optional": [
          {
            "group": "Optional",
            "type": "boolean",
            "optional": true,
            "field": "finished",
            "description": "<p>List finished jobs if set (lists unfinished jobs by default).</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "allowedValues": [
              "\"YYYY-MM-DD\"",
              "\"Unix_timestamp\""
            ],
            "optional": true,
            "field": "from",
            "description": "<p>List jobs with a Due Date starting from the specified date.</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "allowedValues": [
              "\"YYYY-MM-DD\"",
              "\"Unix_timestamp\""
            ],
            "optional": true,
            "field": "to",
            "description": "<p>List jobs with a Due Date ending before the specified date.</p>"
          },
          {
            "group": "Optional",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>The page number, starting from 1.</p>"
          },
          {
            "group": "Optional",
            "type": "number",
            "optional": true,
            "field": "limit",
            "description": "<p>The number of rows returned. Default is 500.</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "optional": true,
            "field": "value",
            "description": "<p>Search for invoices that contain the specified search value. Fields included in search are billingName, contactName, deliveryContact, deliveryLocation, description, invoiceNumber, jobNumber, location, orderNumber, pickupSiteName, siteName, title</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "allowedValues": [
              "\"ASC\"",
              "\"DESC\""
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "DESC",
            "description": "<p>Sort the results by Job ID (defaults to most recent first).</p>"
          },
          {
            "group": "Optional",
            "type": "number",
            "optional": true,
            "field": "ordernumber",
            "description": "<p>List jobs for the specified Order Number.</p>"
          },
          {
            "group": "Optional",
            "type": "number",
            "optional": true,
            "field": "jobnumber",
            "description": "<p>List jobs for the specified Job Number.</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "allowedValues": [
              "\"2\"",
              "\"1,2,3\""
            ],
            "optional": true,
            "field": "status",
            "description": "<p>List jobs matching the specified status. Valid status values (comma-delimited):</p> <ul> <li>Creating: 0</li> <li>Created: 1</li> <li>Assigned: 2</li> <li>Accepted: 3</li> <li>Finished: 4</li> <li>Rejected: 6</li> <li>Rescheduled: 8</li> </ul>"
          },
          {
            "group": "Optional",
            "type": "string",
            "optional": true,
            "field": "agentName",
            "description": "<p>List jobs assigned to the specified username.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password https://service.formitize.com/api/rest/v2/job/",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n    \"payload\": {\n        \"5555\": {\n            \"id\": \"5555\",\n            \"maintenanceID\": \"0\",\n            \"clientID\": \"7\",\n            \"contactID\": \"7\",\n            \"billingName\": \"Fred Flint\",\n            \"contactName\": \"Fred Flint\",\n            \"jobNumber\": \"\",\n            \"orderNumber\": \"\",\n            \"invoiceID\": \"0\",\n            \"invoiceNumber\": \"\",\n            \"title\": \"Person A\",\n            \"forms\": {\n                \"2932\": {\n                    \"id\": \"2932\",\n                    \"title\": \"Features Test\"\n                }\n            },\n            \"location\": \"123 Street\",\n            \"description\": \"\",\n            \"dueDate\": \"1417139760\",\n            \"assignedTo\": \"2251\",\n            \"priority\": \"0\",\n            \"status\": \"4\",\n            \"duration\": \"3600\",\n            \"statusLabel\": \"Completed\"\n        }\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/job/_apidoc.js",
    "groupTitle": "Job"
  },
  {
    "type": "post",
    "url": "/job/:id",
    "title": "Edit Job",
    "name": "PostEditJob",
    "order": "3",
    "version": "1.0.0",
    "group": "Job",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>The Job Title.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "jobNumber",
            "description": "<p>The Job Number.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "orderNumber",
            "description": "<p>The Order Number of the job</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "dueDate",
            "description": "<p>The date represented in unix timestamp (no-milliseconds)</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "duration",
            "defaultValue": "60",
            "description": "<p>The number of minutes a job will run for.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "notes",
            "description": "<p>Any notes attached to this job, to be viewed by the Technician.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "location",
            "description": "<p>Location this job is at.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "agent",
            "description": "<p>The user agent this job will be assigned to. Can either be the User ID or Username.</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "sendNotification",
            "defaultValue": "true",
            "description": "<p>Sends a ping to the users mobile device if notifications are available.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "allowedValues": [
              "\"Low\"",
              "\"Normal\"",
              "\"Medium\"",
              "\"High\"",
              "\"Urgent\""
            ],
            "optional": true,
            "field": "priority",
            "description": "<p>The priority or 'importance' of this job.</p>"
          },
          {
            "group": "Body",
            "type": "number[]",
            "optional": true,
            "field": "form",
            "description": "<p>The form IDs attached to this job.</p>"
          },
          {
            "group": "Body",
            "type": "object[]",
            "optional": true,
            "field": "formData",
            "description": "<p>The content of the form.</p>"
          }
        ],
        "Delivery Fields": [
          {
            "group": "Delivery Fields",
            "type": "string",
            "optional": true,
            "field": "deliveryLocation",
            "description": "<p>If this is a delivery job, where is the drop-off location.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "string",
            "optional": true,
            "field": "siteName",
            "description": "<p>The delivery location site name.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "string",
            "optional": true,
            "field": "deliveryContact",
            "description": "<p>The contact person to be delivered to.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "string",
            "optional": true,
            "field": "deliveryPhone",
            "description": "<p>The contact's phone number.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "string",
            "optional": true,
            "field": "deliveryNotes",
            "description": "<p>Any notes specific to the delivery.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "number",
            "optional": true,
            "field": "deliveryDate",
            "description": "<p>Unixtimestamp(no-ms) of the delivery date/time.</p>"
          }
        ],
        "Client Fields": [
          {
            "group": "Client Fields",
            "type": "object",
            "optional": false,
            "field": "client",
            "description": "<p>The Client Object</p>"
          },
          {
            "group": "Client Fields",
            "type": "number",
            "optional": true,
            "field": "client.id",
            "description": "<p>ID of the client.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": false,
            "field": "client.billingName",
            "description": "<p>The Billing Name of the client</p>"
          },
          {
            "group": "Client Fields",
            "type": "object[]",
            "optional": true,
            "field": "client.contact",
            "description": "<p>An array of contacts</p>"
          },
          {
            "group": "Client Fields",
            "type": "number",
            "optional": true,
            "field": "client.contact.id",
            "description": "<p>The ID of the client's contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.firstName",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.lastName",
            "description": "<p>Last name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.email",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.mobile",
            "description": "<p>Mobile number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.mobileAreaCode",
            "description": "<p>Mobile number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.workPhone",
            "description": "<p>Work phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.workPhoneAreaCode",
            "description": "<p>Work phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.homePhone",
            "description": "<p>Home phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.homePhoneAreaCode",
            "description": "<p>Home phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "object",
            "optional": true,
            "field": "client.contact.custom",
            "description": "<p>Object of custom variables.</p>"
          },
          {
            "group": "Client Fields",
            "type": "object",
            "optional": true,
            "field": "client.contact.custom.OBJECT_1",
            "description": "<p>Custom variable of a client. To set values requires an Object of {&quot;value&quot;: &quot;Example&quot;, &quot;type&quot;: &quot;String&quot;}</p>"
          },
          {
            "group": "Client Fields",
            "type": "object[]",
            "optional": true,
            "field": "client.location",
            "description": "<p>An array of locations</p>"
          },
          {
            "group": "Client Fields",
            "type": "number",
            "optional": true,
            "field": "client.location.id",
            "description": "<p>The ID of the client's location.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.street1",
            "description": "<p>Street 1 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.street2",
            "description": "<p>Street 2 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.city",
            "description": "<p>City address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.state",
            "description": "<p>State address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.postcode",
            "description": "<p>Postcode address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.country",
            "description": "<p>Country address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example:",
          "content": " {\n    \"title\": \"Job Title\",\n    \"agent\": \"YourUser\",\n    \"location\": \"123 Fake St, Suburb, Country\",\n    \"client\": {\n        \"id\": 0,\n        \"billingName\": \"Test client\",\n        \"contact\": [\n            {\n                \"firstName\": \"John\",\n                \"lastName\": \"Doe\",\n                \"email\": \"john@site.com\",\n                \"mobile\": \"0000 000 000\",\n                \"mobileAreaCode\": \"+61\",\n                \"custom\": {\n                    \"Instagram\": {\n                        \"value\": \"@john.doe\",\n                        \"type\": \"Text\"\n                    },\n                    \"Facebook\": {\n                        \"value\": \"@john.doe\",\n                        \"type\": \"Text\"\n                    }\n                }\n            },\n            ...\n        ],\n        \"location\": [\n            {\n                \"street1\": \"123 Fake St\",\n                \"street2\": \"\",\n                \"city\": \"Some city\",\n                \"state\": \"Some state\",\n                \"postcode\": \"Some postcode\",\n                \"country\": \"Some country\"\n            },\n            ...\n        ]\n    },\n    \"formData\": {\n        \"444\": {\n            \"formText\": \"Test\",\n            \"formMultiple\": [\n                \"Answer1\",\n                \"Answer2\",\n                \"Answer3\"\n            ],\n            \"aRepeatedText\": [\n                \"Value1\",\n                \"Value2\",\n                \"Value3\"\n            ],\n            \"formTextInARepeatableTableRow\": {\n                \"0_1\": \"Test1\",\n                \"0_2\": \"Test2\",\n                \"1_1\": \"Test3\",\n                \"1_2\": \"Test4\"\n            }\n        }\n    }\n}",
          "type": "json"
        },
        {
          "title": "C# Example",
          "content": "using FormitizeHelper = Formitize.API.Helper;\n...\n\nvar job = new Formitize.API.Model.Job();\n\njob.Title = \"Test\";\njob.Agent = \"-1\"; //Assign to Queue (Taxi-Rank style) - Job is free-for-all to pick up by any agent.\njob.Client.BillingName = \"Test\";\n\nvar contact = new Formitize.API.Model.Contact();\ncontact.FirstName = \"FIRST_NAME\";\ncontact.LastName = \"LAST_NAME\";\ncontact.Mobile = \"0000 000 000\";\ncontact.Email = \"test@test.com\";\njob.Client.ContactList.Add(contact);\n\nvar form = new Formitize.API.Model.JobFormData();\nform.FormID = 10355;\nform.SetValue(\"0\", \"clientName\", \"Test Client\")\n  .SetValue(\"0\", \"clientEmail\", \"test@test.com\")\n  .SetValue(\"0\", \"businessType\", \"Option A\");\n\njob.AttachJobForm(form);\n\ntask = FormitizeHelper.Jobs.PostJob(client, job);\nvar APIResponse =  task.Result;",
          "type": "CSharp"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "payload",
            "description": "<p>Payload object.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "payload.jobID",
            "description": "<p>ID of the new created/updaetd job.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "payload.agentID",
            "description": "<p>ID of the agent assigned to the job.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"payload\": {\n        \"jobID\": 7,\n        \"agentID\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/job/_apidoc.job.edit.js",
    "groupTitle": "Job"
  },
  {
    "type": "post",
    "url": "/job/",
    "title": "Add Job",
    "name": "PostJob",
    "order": "1",
    "version": "1.0.0",
    "group": "Job",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>The Job Title.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "jobNumber",
            "description": "<p>The Job Number.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "orderNumber",
            "description": "<p>The Order Number of the job</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "dueDate",
            "description": "<p>The date represented in unix timestamp (no-milliseconds)</p>"
          },
          {
            "group": "Body",
            "type": "number",
            "optional": true,
            "field": "duration",
            "defaultValue": "60",
            "description": "<p>The number of minutes a job will run for.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "notes",
            "description": "<p>Any notes attached to this job, to be viewed by the Technician.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "location",
            "description": "<p>Location this job is at.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "agent",
            "description": "<p>The user agent this job will be assigned to. Can either be the User ID or Username.</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "sendNotification",
            "defaultValue": "true",
            "description": "<p>Sends a ping to the users mobile device if notifications are available.</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "allowedValues": [
              "\"Low\"",
              "\"Normal\"",
              "\"Medium\"",
              "\"High\"",
              "\"Urgent\""
            ],
            "optional": true,
            "field": "priority",
            "description": "<p>The priority or 'importance' of this job.</p>"
          },
          {
            "group": "Body",
            "type": "number[]",
            "optional": true,
            "field": "form",
            "description": "<p>The form IDs attached to this job.</p>"
          },
          {
            "group": "Body",
            "type": "object[]",
            "optional": true,
            "field": "formData",
            "description": "<p>The content of the form.</p>"
          }
        ],
        "Delivery Fields": [
          {
            "group": "Delivery Fields",
            "type": "string",
            "optional": true,
            "field": "deliveryLocation",
            "description": "<p>If this is a delivery job, where is the drop-off location.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "string",
            "optional": true,
            "field": "siteName",
            "description": "<p>The delivery location site name.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "string",
            "optional": true,
            "field": "deliveryContact",
            "description": "<p>The contact person to be delivered to.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "string",
            "optional": true,
            "field": "deliveryPhone",
            "description": "<p>The contact's phone number.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "string",
            "optional": true,
            "field": "deliveryNotes",
            "description": "<p>Any notes specific to the delivery.</p>"
          },
          {
            "group": "Delivery Fields",
            "type": "number",
            "optional": true,
            "field": "deliveryDate",
            "description": "<p>Unix timestamp (no-ms) of the delivery date/time.</p>"
          }
        ],
        "Client Fields": [
          {
            "group": "Client Fields",
            "type": "object",
            "optional": false,
            "field": "client",
            "description": "<p>The Client Object</p>"
          },
          {
            "group": "Client Fields",
            "type": "number",
            "optional": true,
            "field": "client.id",
            "description": "<p>ID of the client.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": false,
            "field": "client.billingName",
            "description": "<p>The Billing Name of the client</p>"
          },
          {
            "group": "Client Fields",
            "type": "object[]",
            "optional": true,
            "field": "client.contact",
            "description": "<p>An array of contacts</p>"
          },
          {
            "group": "Client Fields",
            "type": "number",
            "optional": true,
            "field": "client.contact.id",
            "description": "<p>The ID of the client's contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.firstName",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.lastName",
            "description": "<p>Last name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.email",
            "description": "<p>First name of contact.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.mobile",
            "description": "<p>Mobile number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.mobileAreaCode",
            "description": "<p>Mobile number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.workPhone",
            "description": "<p>Work phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.workPhoneAreaCode",
            "description": "<p>Work phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.homePhone",
            "description": "<p>Home phone number.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.contact.homePhoneAreaCode",
            "description": "<p>Home phone number area code.</p>"
          },
          {
            "group": "Client Fields",
            "type": "object",
            "optional": true,
            "field": "client.contact.custom",
            "description": "<p>Object of custom variables.</p>"
          },
          {
            "group": "Client Fields",
            "type": "object",
            "optional": true,
            "field": "client.contact.custom.OBJECT_1",
            "description": "<p>Custom variable of a client. To set values requires an Object of {&quot;value&quot;: &quot;Example&quot;, &quot;type&quot;: &quot;String&quot;}</p>"
          },
          {
            "group": "Client Fields",
            "type": "object[]",
            "optional": true,
            "field": "client.location",
            "description": "<p>An array of locations</p>"
          },
          {
            "group": "Client Fields",
            "type": "number",
            "optional": true,
            "field": "client.location.id",
            "description": "<p>The ID of the client's location.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.street1",
            "description": "<p>Street 1 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.street2",
            "description": "<p>Street 2 address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.city",
            "description": "<p>City address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.state",
            "description": "<p>State address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.postcode",
            "description": "<p>Postcode address.</p>"
          },
          {
            "group": "Client Fields",
            "type": "string",
            "optional": true,
            "field": "client.location.country",
            "description": "<p>Country address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example:",
          "content": "{\n    \"id\": 0,\n    \"title\": \"Job Title\",\n    \"agent\": \"YourUser\",\n    \"location\": \"123 Fake St, Suburb, Country\",\n    \"client\": {\n        \"id\": 0,\n        \"billingName\": \"Test client\",\n        \"contact\": [\n            {\n                \"firstName\": \"John\",\n                \"lastName\": \"Doe\",\n                \"email\": \"john@site.com\",\n                \"mobile\": \"0000 000 000\",\n                \"mobileAreaCode\": \"+61\",\n                \"custom\": {\n                    \"Instagram\": {\n                        \"value\": \"@john.doe\",\n                        \"type\": \"Text\"\n                    },\n                    \"Facebook\": {\n                        \"value\": \"@john.doe\",\n                        \"type\": \"Text\"\n                    }\n                }\n            },\n            ...\n        ],\n        \"location\": [\n            {\n                \"street1\": \"123 Fake St\",\n                \"street2\": \"\",\n                \"city\": \"Some city\",\n                \"state\": \"Some state\",\n                \"postcode\": \"Some postcode\",\n                \"country\": \"Some country\"\n            },\n            ...\n        ]\n    },\n    \"formData\": {\n        \"444\": {\n            \"formText\": \"Test\",\n            \"formMultiple\": [\n                \"Answer1\",\n                \"Answer2\",\n                \"Answer3\"\n            ],\n            \"aRepeatedText\": [\n                \"Value1\",\n                \"Value2\",\n                \"Value3\"\n            ],\n            \"formTextInARepeatableTableRow\": {\n                \"0_1\": \"Test1\",\n                \"0_2\": \"Test2\",\n                \"1_1\": \"Test3\",\n                \"1_2\": \"Test4\"\n            }\n        }\n    }\n}",
          "type": "json"
        },
        {
          "title": "C# Example",
          "content": "using FormitizeHelper = Formitize.API.Helper;\n...\n\nvar job = new Formitize.API.Model.Job();\n\njob.Title = \"Test\";\njob.Agent = \"-1\"; //Assign to Queue (Taxi-Rank style) - Job is free-for-all to pick up by any agent.\njob.Client.BillingName = \"Test\";\n\nvar contact = new Formitize.API.Model.Contact();\ncontact.FirstName = \"FIRST_NAME\";\ncontact.LastName = \"LAST_NAME\";\ncontact.Mobile = \"0000 000 000\";\ncontact.Email = \"test@test.com\";\njob.Client.ContactList.Add(contact);\n\nvar form = new Formitize.API.Model.JobFormData();\nform.FormID = 10355;\nform.SetValue(\"0\", \"clientName\", \"Test Client\")\n  .SetValue(\"0\", \"clientEmail\", \"test@test.com\")\n  .SetValue(\"0\", \"businessType\", \"Option A\");\n\njob.AttachJobForm(form);\n\ntask = FormitizeHelper.Jobs.PostJob(client, job);\nvar APIResponse =  task.Result;",
          "type": "CSharp"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"payload\": {\n        \"jobID\": 1,\n        \"jobNumber\": 1,\n        \"agentID\": false,\n        \"clientID\": 8,\n        \"contactID\": 12\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/job/_apidoc.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/form/submit/:id",
    "title": "Get Submitted Form",
    "name": "SubmittedGetID",
    "group": "Submitted_Forms",
    "order": "2",
    "version": "1.0.0",
    "description": "<p>Returns the submitted form.</p>",
    "parameter": {
      "fields": {
        "Optional": [
          {
            "group": "Optional",
            "type": "boolean",
            "optional": true,
            "field": "simple",
            "description": "<p>Submitted form data format is simplified if true.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/form/submit/88",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n\t\"payload\": {\n\t\t\"submittedFormID\": \"146\",\n\t\t\"jobID\": \"894\",\n\t\t\"formID\": \"35639\",\n\t\t\"userID\": \"20150\",\n\t\t\"userName\": \"admin\",\n\t\t\"count\": \"4\",\n\t\t\"version\": \"8\",\n\t\t\"title\": \"CRM Extra\",\n\t\t\"formDateCreated\": \"1563175490\",\n\t\t\"dateSubmitted\": \"1563175490\",\n        \"dateModified\": \"1563175490\",\n        \"formDataLastSaved\": \"0\",\n        \"modifiedBy\": \"0\",\n\t\t\"latitude\": false,\n\t\t\"longitude\": false,\n\t\t\"location\": false,\n\t\t\"content\": {\n\t\t\t\"formSubheader_1\": {\n\t\t\t\t\"0\": {\n\t\t\t\t\t\"id\": 31,\n\t\t\t\t\t\"type\": \"formSubheader\",\n\t\t\t\t\t\"name\": \"formSubheader_1\",\n\t\t\t\t\t\"children\": {\n\t\t\t\t\t\t\"signed\": {\n\t\t\t\t\t\t\t\"id\": 44,\n\t\t\t\t\t\t\t\"type\": \"formSignature\",\n\t\t\t\t\t\t\t\"name\": \"signed\",\n\t\t\t\t\t\t\t\"image\": \"https://url/\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"signedDate\": {\n\t\t\t\t\t\t\t\"id\": 45,\n\t\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\t\"name\": \"signedDate\",\n\t\t\t\t\t\t\t\"value\": \"\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"totalPayable\": {\n\t\t\t\t\t\t\t\"id\": 46,\n\t\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\t\"name\": \"totalPayable\",\n\t\t\t\t\t\t\t\"value\": \"1231\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"PaymentMethod\": {\n\t\t\t\t\t\t\t\"id\": 53,\n\t\t\t\t\t\t\t\"type\": \"formMultiple\",\n\t\t\t\t\t\t\t\"name\": \"PaymentMethod\",\n\t\t\t\t\t\t\t\"value\": {\n\t\t\t\t\t\t\t\t\"0\": \"Cash\"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"sendEmail\": {\n\t\t\t\t\t\t\t\"id\": 65,\n\t\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\t\"name\": \"sendEmail\",\n\t\t\t\t\t\t\t\"value\": \"support@formitize.com\"\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t\"status\": \"Ok\",\n\t\t\"attachments\": {\n\t\t\t\"0\": {\n\t\t\t\t\"url\": \"https://UrlToDocument\",\n\t\t\t\t\"type\": \"pdf\",\n\t\t\t\t\"name\": \"Default\"\n\t\t\t}\n\t\t}\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "CURL Response using Simple mode",
          "content": "{\n\t\"payload\": {\n\t\t\"submittedFormID\": \"146\",\n\t\t\"jobID\": \"894\",\n\t\t\"formID\": \"35639\",\n\t\t\"version\": \"8\",\n\t\t\"title\": \"CRM Extra\",\n\t\t\"formDateCreated\": \"1563175490\",\n\t\t\"formDataLastSaved\": \"0\",\n        \"dateSubmitted\": \"1563175490\",\n        \"dateModified\": \"1563175490\",\n        \"modifiedBy\": \"0\",\n\t\t\"latitude\": \"0.0\",\n        \"longitude\": \"0.0\",\n        \"location\": \"\",\n        \"status\": \"Ok\",\n        \"userID\": \"20150\",\n        \"userName\": \"admin\",\n\t\t\"content\": {\n\t\t\t\"signed\": {\n\t\t\t\t\"0\": \"https://UrlToImage/\"\n\t\t\t},\n\t\t\t\"signedDate\": {\n\t\t\t\t\"0\": \"\"\n\t\t\t},\n\t\t\t\"totalPayable\": {\n\t\t\t\t\"0\": \"1231\"\n\t\t\t},\n\t\t\t\"Description of work\": {\n\t\t\t\t\"0\": {\n\t\t\t\t\t\"0\": \"Custom\"\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"formCheckbox_4\": {\n\t\t\t\t\"0\": {\n\t\t\t\t\t\"0\": \"No Risks Identified\"\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"PaymentMethod\": {\n\t\t\t\t\"0\": {\n\t\t\t\t\t\"0\": \"Cash\"\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"sendEmail\": {\n\t\t\t\t\"0\": \"dimitri@formitize.com\"\n\t\t\t},\n\t\t\t\"Treatment time\": {\n\t\t\t\t\"0\": \"1:00 AM\"\n\t\t\t}\n\t\t},\n\t\t\"attachments\": {\n\t\t\t\"0\": {\n\t\t\t\t\"url\": \"https://UrlToDocument\",\n\t\t\t\t\"type\": \"pdf\",\n\t\t\t\t\"name\": \"Default\"\n\t\t\t}\n\t\t}\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/form/_apidoc.submit.js",
    "groupTitle": "Submitted_Forms"
  },
  {
    "type": "get",
    "url": "/form/submit/?id=n",
    "title": "Get Submitted Forms by ID",
    "name": "SubmittedGetIDs",
    "group": "Submitted_Forms",
    "order": "3",
    "version": "1.0.0",
    "description": "<p>Returns a list of submitted forms or a single form.</p>",
    "parameter": {
      "fields": {
        "Arguments": [
          {
            "group": "Arguments",
            "type": "string",
            "allowedValues": [
              "\"1\"",
              "\"1,2,3\""
            ],
            "optional": false,
            "field": "id",
            "description": "<p>The ID(s) of the submitted form(s) (multiples are comma delimited).</p>"
          }
        ],
        "Optional": [
          {
            "group": "Optional",
            "type": "boolean",
            "optional": true,
            "field": "simple",
            "description": "<p>Submitted form data format is simplified if true.</p>"
          },
          {
            "group": "Optional",
            "type": "number",
            "optional": true,
            "field": "jobID",
            "description": "<p>Returns the list of submitted forms attached to a Job ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/form/submit/?id=1,2,3",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n\t\"payload\": {\n\t\t\"146\": {\n\t\t\t\"submittedFormID\": \"146\",\n\t\t\t\"jobID\": \"894\",\n\t\t\t\"formID\": \"35639\",\n\t\t\t\"userID\": \"20150\",\n\t\t\t\"userName\": \"admin\",\n\t\t\t\"count\": \"4\",\n\t\t\t\"version\": \"8\",\n\t\t\t\"title\": \"CRM Extra\",\n\t\t\t\"formDateCreated\": \"1563175490\",\n\t\t\t\"dateSubmitted\": \"1563175490\",\n\t\t\t\"dateModified\": \"1563175490\",\n\t\t\t\"formDataLastSaved\": \"0\",\n\t\t\t\"modifiedBy\": \"0\",\n\t\t\t\"latitude\": false,\n\t\t\t\"longitude\": false,\n\t\t\t\"location\": false,\n\t\t\t\"content\": {\n\t\t\t\t\"formSubheader_1\": {\n\t\t\t\t\t\"0\": {\n\t\t\t\t\t\t\"id\": 31,\n\t\t\t\t\t\t\"type\": \"formSubheader\",\n\t\t\t\t\t\t\"name\": \"formSubheader_1\",\n\t\t\t\t\t\t\"children\": {\n\t\t\t\t\t\t\t\"signed\": {\n\t\t\t\t\t\t\t\t\"id\": 44,\n\t\t\t\t\t\t\t\t\"type\": \"formSignature\",\n\t\t\t\t\t\t\t\t\"name\": \"signed\",\n\t\t\t\t\t\t\t\t\"image\": \"https://url/\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\"signedDate\": {\n\t\t\t\t\t\t\t\t\"id\": 45,\n\t\t\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\t\t\"name\": \"signedDate\",\n\t\t\t\t\t\t\t\t\"value\": \"\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\"totalPayable\": {\n\t\t\t\t\t\t\t\t\"id\": 46,\n\t\t\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\t\t\"name\": \"totalPayable\",\n\t\t\t\t\t\t\t\t\"value\": \"1231\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\"PaymentMethod\": {\n\t\t\t\t\t\t\t\t\"id\": 53,\n\t\t\t\t\t\t\t\t\"type\": \"formMultiple\",\n\t\t\t\t\t\t\t\t\"name\": \"PaymentMethod\",\n\t\t\t\t\t\t\t\t\"value\": {\n\t\t\t\t\t\t\t\t\t\"0\": \"Cash\"\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\"sendEmail\": {\n\t\t\t\t\t\t\t\t\"id\": 65,\n\t\t\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\t\t\"name\": \"sendEmail\",\n\t\t\t\t\t\t\t\t\"value\": \"support@formitize.com\"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"status\": \"Ok\",\n\t\t\t\"attachments\": {\n\t\t\t\t\"0\": {\n\t\t\t\t\t\"url\": \"https://UrlToDocument\",\n\t\t\t\t\t\"type\": \"pdf\",\n\t\t\t\t\t\"name\": \"Default\"\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t...\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "CURL Response (single)",
          "content": "{\n\t\"payload\": {\n\t\t\"submittedFormID\": \"146\",\n\t\t\"jobID\": \"894\",\n\t\t\"formID\": \"35639\",\n\t\t\"userID\": \"20150\",\n\t\t\"userName\": \"admin\",\n\t\t\"count\": \"4\",\n\t\t\"version\": \"8\",\n\t\t\"title\": \"CRM Extra\",\n\t\t\"formDateCreated\": \"1563175490\",\n\t\t\"dateSubmitted\": \"1563175490\",\n        \"dateModified\": \"1563175490\",\n        \"formDataLastSaved\": \"0\",\n        \"modifiedBy\": \"0\",\n\t\t\"latitude\": false,\n\t\t\"longitude\": false,\n\t\t\"location\": false,\n\t\t\"content\": {\n\t\t\t\"formSubheader_1\": {\n\t\t\t\t\"0\": {\n\t\t\t\t\t\"id\": 31,\n\t\t\t\t\t\"type\": \"formSubheader\",\n\t\t\t\t\t\"name\": \"formSubheader_1\",\n\t\t\t\t\t\"children\": {\n\t\t\t\t\t\t\"signed\": {\n\t\t\t\t\t\t\t\"id\": 44,\n\t\t\t\t\t\t\t\"type\": \"formSignature\",\n\t\t\t\t\t\t\t\"name\": \"signed\",\n\t\t\t\t\t\t\t\"image\": \"https://url/\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"signedDate\": {\n\t\t\t\t\t\t\t\"id\": 45,\n\t\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\t\"name\": \"signedDate\",\n\t\t\t\t\t\t\t\"value\": \"\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"totalPayable\": {\n\t\t\t\t\t\t\t\"id\": 46,\n\t\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\t\"name\": \"totalPayable\",\n\t\t\t\t\t\t\t\"value\": \"1231\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"PaymentMethod\": {\n\t\t\t\t\t\t\t\"id\": 53,\n\t\t\t\t\t\t\t\"type\": \"formMultiple\",\n\t\t\t\t\t\t\t\"name\": \"PaymentMethod\",\n\t\t\t\t\t\t\t\"value\": {\n\t\t\t\t\t\t\t\t\"0\": \"Cash\"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"sendEmail\": {\n\t\t\t\t\t\t\t\"id\": 65,\n\t\t\t\t\t\t\t\"type\": \"formText\",\n\t\t\t\t\t\t\t\"name\": \"sendEmail\",\n\t\t\t\t\t\t\t\"value\": \"support@formitize.com\"\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t\"status\": \"Ok\",\n\t\t\"attachments\": {\n\t\t\t\"0\": {\n\t\t\t\t\"url\": \"https://UrlToDocument\",\n\t\t\t\t\"type\": \"pdf\",\n\t\t\t\t\"name\": \"Default\"\n\t\t\t}\n\t\t}\n\t}\n}",
          "type": "JSON"
        },
        {
          "title": "CURL Response (simple)",
          "content": "{\n\t\"payload\": {\n\t\t\"submittedFormID\": \"146\",\n\t\t\"jobID\": \"894\",\n\t\t\"formID\": \"35639\",\n\t\t\"version\": \"8\",\n\t\t\"title\": \"CRM Extra\",\n\t\t\"formDateCreated\": \"1563175490\",\n\t\t\"formDataLastSaved\": \"0\",\n        \"dateSubmitted\": \"1563175490\",\n        \"dateModified\": \"1563175490\",\n        \"modifiedBy\": \"0\",\n\t\t\"latitude\": \"0.0\",\n        \"longitude\": \"0.0\",\n        \"location\": \"\",\n        \"status\": \"Ok\",\n        \"userID\": \"20150\",\n        \"userName\": \"admin\",\n\t\t\"content\": {\n\t\t\t\"signed\": {\n\t\t\t\t\"0\": \"https://UrlToImage/\"\n\t\t\t},\n\t\t\t\"signedDate\": {\n\t\t\t\t\"0\": \"\"\n\t\t\t},\n\t\t\t\"totalPayable\": {\n\t\t\t\t\"0\": \"1231\"\n\t\t\t},\n\t\t\t\"Description of work\": {\n\t\t\t\t\"0\": {\n\t\t\t\t\t\"0\": \"Custom\"\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"formCheckbox_4\": {\n\t\t\t\t\"0\": {\n\t\t\t\t\t\"0\": \"No Risks Identified\"\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"PaymentMethod\": {\n\t\t\t\t\"0\": {\n\t\t\t\t\t\"0\": \"Cash\"\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"sendEmail\": {\n\t\t\t\t\"0\": \"dimitri@formitize.com\"\n\t\t\t},\n\t\t\t\"Treatment time\": {\n\t\t\t\t\"0\": \"1:00 AM\"\n\t\t\t}\n\t\t},\n\t\t\"attachments\": {\n\t\t\t\"0\": {\n\t\t\t\t\"url\": \"https://UrlToDocument\",\n\t\t\t\t\"type\": \"pdf\",\n\t\t\t\t\"name\": \"Default\"\n\t\t\t}\n\t\t}\n\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/form/_apidoc.submit.js",
    "groupTitle": "Submitted_Forms"
  },
  {
    "type": "get",
    "url": "/form/submit/list",
    "title": "List Submitted Forms",
    "name": "SubmittedList",
    "order": "1",
    "group": "Submitted_Forms",
    "version": "1.0.0",
    "description": "<p>Returns a list of submitted forms. Limited to 200 per page.</p>",
    "parameter": {
      "fields": {
        "Optional": [
          {
            "group": "Optional",
            "type": "string",
            "optional": true,
            "field": "title",
            "description": "<p>Searches submitted forms for the title.</p>"
          },
          {
            "group": "Optional",
            "type": "number",
            "optional": true,
            "field": "page",
            "description": "<p>Returns the results for x page. Defaults to 1.</p>"
          },
          {
            "group": "Optional",
            "type": "number",
            "optional": true,
            "field": "jobID",
            "description": "<p>Returns the list of submitted forms attached to a Job ID.</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "allowedValues": [
              "\"YYYY-MM-DD\"",
              "\"Unix_timestamp\""
            ],
            "optional": true,
            "field": "modifiedAfterDate",
            "description": "<p>List submitted forms modified on or after the specified date.</p>"
          },
          {
            "group": "Optional",
            "type": "string",
            "allowedValues": [
              "\"1\"",
              "\"1,2,3\""
            ],
            "optional": true,
            "field": "formID",
            "description": "<p>List submitted forms from the matching Form ID(s) (multiples are comma-delimited).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL Example",
        "content": "curl -A YourCompany -u admin:password -X \"GET\" https://service.formitize.com/api/rest/v2/form/submit/list/",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "CURL Response",
          "content": "{\n\t\"payload\": {\n\t\t\"3\": {\n\t\t\t\"submittedFormID\": 3,\n\t\t\t\"status\": \"Ok\",\n\t\t\t\"title\": \"Assets\",\n\t\t\t\"formID\": 1,\n\t\t\t\"userID\": 20150,\n\t\t\t\"jobID\": 1,\n\t\t\t\"dateCreated\": 1543276384,\n\t\t\t\"dateModified\": 1554265832,\n\t\t\t\"latitude\": \"\",\n            \"formDataLastSaved\": 0,\n            \"dateSubmitted\": 1543276384,\n            \"longitude\": \"\",\n            \"version\": 2,\n            \"count\": \"2\",\n            \"location\": \"\",\n            \"userName\": \"\"\n\t\t},\n\t\t\"4\": {\n\t\t\t\"submittedFormID\": 4,\n\t\t\t\"status\": \"Ok\",\n\t\t\t\"title\": \"New Job - Assets\",\n\t\t\t\"formID\": 1,\n\t\t\t\"userID\": 20150,\n\t\t\t\"jobID\": 3,\n\t\t\t\"dateCreated\": 1543537388,\n\t\t\t\"dateModified\": 1546819983,\n\t\t\t\"latitude\": \"\",\n            \"formDataLastSaved\": 0,\n            \"dateSubmitted\": 1543537388,\n            \"longitude\": \"\",\n            \"version\": 2,\n            \"count\": \"2\",\n            \"location\": \"\",\n            \"userName\": \"\"\n\t\t}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "app/system/class/api/rest/v1/form/_apidoc.submit.js",
    "groupTitle": "Submitted_Forms"
  }
] });
