'use strict';
var jwt = require('jwt-simple');
var PowerBIToken = (function () {
    function PowerBIToken() {
        this.claims = {
            ver: '0.1.0',
            aud: 'https://analysis.windows.net/powerbi/api',
            iss: 'PowerBISDK'
        };
    }
    PowerBIToken.createDevToken = function (workspaceCollectionName, workspaceId, expiration) {
        if (expiration === void 0) { expiration = null; }
        var token = new PowerBIToken();
        token.addClaim('type', 'dev');
        token.addClaim('wcn', workspaceCollectionName);
        token.addClaim('wid', workspaceId);
        token.setTokenExpiration(expiration);
        return token;
    };
    PowerBIToken.createProvisionToken = function (workspaceCollectionName, expiration) {
        if (expiration === void 0) { expiration = null; }
        var token = new PowerBIToken();
        token.addClaim('type', 'provision');
        token.addClaim('wcn', workspaceCollectionName);
        token.setTokenExpiration(expiration);
        return token;
    };
    PowerBIToken.createReportEmbedToken = function (workspaceCollectionName, workspaceId, reportId, expiration) {
        if (expiration === void 0) { expiration = null; }
        var token = new PowerBIToken();
        token.addClaim('type', 'provision');
        token.addClaim('wcn', workspaceCollectionName);
        token.addClaim('wid', workspaceId);
        token.addClaim('rid', reportId);
        token.setTokenExpiration(expiration);
        return token;
    };
    PowerBIToken.prototype.setTokenExpiration = function (expiration) {
        var nowSeconds = PowerBIToken.getUnixTime(new Date());
        var expirationSeconds = expiration ? PowerBIToken.getUnixTime(expiration) : nowSeconds + 3600;
        if (expirationSeconds <= nowSeconds) {
            throw new Error('Token expiration must be in the future');
        }
        this.addClaim('nbf', nowSeconds);
        this.addClaim('exp', expirationSeconds);
    };
    PowerBIToken.prototype.addClaim = function (key, value) {
        this.claims[key] = value;
    };
    PowerBIToken.getUnixTime = function (date) {
        return date.getTime() / 1000 | 0;
    };
    PowerBIToken.prototype.generate = function (accessKey) {
        return jwt.encode(this.claims, accessKey);
    };
    return PowerBIToken;
}());
exports.PowerBIToken = PowerBIToken;
