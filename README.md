# PowerBI-Node
Node SDK and client library for the Power BI Embedded REST APIs.

## Installation
```
npm install powerbi-api
```

## Usage
Creating a new client requires referencing the Power BI SDK as well as the Microsoft Rest Client.  For an example of the Node SDK in action see the [Power BI Node CLI](https://github.com/Microsoft/PowerBI-Cli).
```javascript
var powerbi = require('powerbi-api');
var msrest = require('ms-rest');

var token = powerbi.PowerBIToken.createProvisionToken('{WorkspaceCollection}');
var credentials = new msrest.TokenCredentials(token.generate('{AccessKey}'), 'AppToken');
var client = new powerbi.PowerBIClient(credentials);

// Example API call
client.workspaces.getWorkspacesByCollectionName('{WorkspaceCollection}', function(err, result) {
    // Your code here
});
```

### APIs
The following APIs groups are available:
- Datasets
- Gateways
- Imports
- Reports
- Workspaces

## Creating App Tokens
Power BI Embedded supports 3 flavors of app tokens each with seperate requirements.  All tokens are HMAC signed JSON Web Tokens.  The tokens are signed with the access key from your Azure Power BI Embedded workspace collection.

**WARNING** - Never expose your access keys client side in your application.  If your access key is compromised a malicious user can take over control of your workspace collection.  Access keys can be re-generated for your workspace collection within the Azure portal.

### Required Claims
- ver: 0.1.0
- aud: https://analysis.windows.net/powerbi/api
- type: provision | dev | embed
- nbp: Token valid not before in Unix EPOCH time
- exp: Token expiration in Unix EPOCH time

### Provision Token
Provision tokens are used to manage the root of your workspace collection.
#### Required Claims
- wcn: {WorkspaceCollectionName}

```javascript
var powerbi = require('powerbi-api');
var token = powerbi.PowerBIToken.createProvisionToken('{WorkspaceCollection}');

var jwt = token.generate('{AccessKey}');
```

### Dev Token
Dev tokens are used to make scoped calls into a workspace within your collection.
#### Required Claims
- wcn: {WorkspaceCollectionName}
- wid: {WorkspaceId}

```javascript
var powerbi = require('powerbi-api');
var token = powerbi.PowerBIToken.createDevToken('{WorkspaceCollection}', '{workspaceId}');

var jwt = token.generate('{AccessKey}');
```

### Embed Token
Embed tokens are used to provide read only access to a report to embed into an application.
#### Required Claims
- wcn: {WorkspaceCollectionName}
- wid: {WorkspaceId}
- rid: {ReportId}

```javascript
var powerbi = require('powerbi-api');
var token = powerbi.PowerBIToken.createReportEmbedToken('{WorkspaceCollection}', '{workspaceId}', '{reportId}');

var jwt = token.generate('{AccessKey}');
```

## Token Example
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXIiOiIwLjEuMCIsInR5cGUiOiJlbWJlZCIsIndjbiI6IlN1cHBvcnREZW1vIiwid2lkIjoiY2E2NzViMTktNmMzYy00MDAzLTg4MDgtMWM3ZGRjNmJkODA5IiwicmlkIjoiOTYyNDFmMGYtYWJhZS00ZWE5LWEwNjUtOTNiNDI4ZWRkYjE3IiwiaXNzIjoiUG93ZXJCSVNESyIsImF1ZCI6Imh0dHBzOi8vYW5hbHlzaXMud2luZG93cy5uZXQvcG93ZXJiaS9hcGkiLCJleHAiOjEzNjAwNDcwNTYsIm5iZiI6MTM2MDA0MzQ1Nn0.WzOQJW_0n7NLfsr7UelWwljAF2kDAYXZEevMwa4ODo8

### Decoded
The following decoded JSON web token
**Header**
```javascript
{
  "typ": "JWT",
  "alg": "HS256"
}
```

**Payload**
```javascript
{
  "ver": "0.1.0",
  "type": "embed",
  "wcn": "SupportDemo",
  "wid": "ca675b19-6c3c-4003-8808-1c7ddc6bd809",
  "rid": "96241f0f-abae-4ea9-a065-93b428eddb17",
  "iss": "PowerBISDK",
  "aud": "https://analysis.windows.net/powerbi/api",
  "exp": 1360047056,
  "nbf": 1360043456
}
```
