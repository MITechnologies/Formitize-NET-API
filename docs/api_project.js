define({
  "name": "Formitize",
  "version": "1.0.0",
  "description": "The API for Formitize.",
  "header": {
    "title": "SDKs",
    "content": "<h2>Available SDKs</h2>\n<ul>\n<li>PHP SDK: <a href=\"https://github.com/MITechnologies/Formitize-PHP-API\">https://github.com/MITechnologies/Formitize-PHP-API</a></li>\n<li>.NET SDK: <a href=\"https://github.com/MITechnologies/Formitize-NET-API\">https://github.com/MITechnologies/Formitize-NET-API</a></li>\n</ul>\n<h2>Tools</h2>\n<ul>\n<li>Postman: <a href=\"https://app.getpostman.com/run-collection/4716030-af41aab1-f490-4128-a586-004e77d622f8?action=collection%2Ffork&amp;collection-url=entityId%3D4716030-af41aab1-f490-4128-a586-004e77d622f8%26entityType%3Dcollection%26workspaceId%3Da5c32dad-ee22-4120-b9b8-ed251f7f9f3f#?env%5BFormitize.com%20API%20Demo%5D=W3sia2V5IjoiYXBpX3VybCIsInZhbHVlIjoiaHR0cHM6Ly9zZXJ2aWNlLmZvcm1pdGl6ZS5jb20vYXBpL3Jlc3QvdjIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6Imh0dHBzOi8vc2VydmljZS5mb3JtaXRpemUuY29tL2FwaS9yZXN0L3YyIiwic2Vzc2lvbkluZGV4IjowfSx7ImtleSI6ImNvbXBhbnlfaWQiLCJ2YWx1ZSI6ImNvbXBhbnlfaWQiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6ImNvbXBhbnlfaWQiLCJzZXNzaW9uSW5kZXgiOjF9LHsia2V5IjoidXNlcm5hbWUiLCJ2YWx1ZSI6InVzZXJuYW1lIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJ1c2VybmFtZSIsInNlc3Npb25JbmRleCI6Mn0seyJrZXkiOiJwYXNzd29yZCIsInZhbHVlIjoicGFzc3dvcmQiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoic2VjcmV0Iiwic2Vzc2lvblZhbHVlIjoicGFzc3dvcmQiLCJzZXNzaW9uSW5kZXgiOjN9LHsia2V5IjoiY2xpZW50X2lkIiwidmFsdWUiOiIxIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiIxIiwic2Vzc2lvbkluZGV4Ijo0fSx7ImtleSI6ImNvbnRhY3RfaWQiLCJ2YWx1ZSI6IjEiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IjEiLCJzZXNzaW9uSW5kZXgiOjV9LHsia2V5IjoibG9jYXRpb25faWQiLCJ2YWx1ZSI6IjEiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IjEiLCJzZXNzaW9uSW5kZXgiOjZ9LHsia2V5IjoiaW52b2ljZV9pZCIsInZhbHVlIjoiMSIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiMSIsInNlc3Npb25JbmRleCI6N30seyJrZXkiOiJzY2hlbWFfaWQiLCJ2YWx1ZSI6IjEiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IjEiLCJzZXNzaW9uSW5kZXgiOjh9LHsia2V5IjoiYXNzZXRfaWQiLCJ2YWx1ZSI6IjEiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IjEiLCJzZXNzaW9uSW5kZXgiOjl9LHsia2V5IjoidGFibGVfbmFtZSIsInZhbHVlIjoidGVzdCIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoidGVzdCIsInNlc3Npb25JbmRleCI6MTB9LHsia2V5IjoiZm9ybV9pZCIsInZhbHVlIjoiMSIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiMSIsInNlc3Npb25JbmRleCI6MTF9LHsia2V5Ijoiam9iX2lkIiwidmFsdWUiOiIxIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiIxIiwic2Vzc2lvbkluZGV4IjoxMn0seyJrZXkiOiJzdWJtaXR0ZWRmb3JtX2lkIiwidmFsdWUiOiIxIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiIxIiwic2Vzc2lvbkluZGV4IjoxM31d\"><img src=\"https://run.pstmn.io/button.svg\" alt=\"Run in Postman\"></a></li>\n</ul>\n<p><br><br></p>\n"
  },
  "title": "Formitize API",
  "url": "https://service.formitize.com/api/rest/v2",
  "order": [
    "Authorisation"
  ],
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2023-03-23T05:35:03.819Z",
    "url": "https://apidocjs.com",
    "version": "0.29.0"
  }
});
