'use strict'

var jwt = require('jwt-simple');

export class PowerBIToken {
    private claims: any;

    constructor() {
        this.claims = {
            ver: '0.1.0',
            aud: 'https://analysis.windows.net/powerbi/api',
            iss: 'PowerBISDK'
        };
    }

    public static createDevToken(workspaceCollectionName: string, workspaceId: string, expiration: Date = null): PowerBIToken {
        var token = new PowerBIToken();
        token.addClaim('type', 'dev');
        token.addClaim('wcn', workspaceCollectionName);
        token.addClaim('wid', workspaceId);
        token.setTokenExpiration(expiration);

        return token;
    }

    public static createProvisionToken(workspaceCollectionName: string, expiration: Date = null): PowerBIToken {
        var token = new PowerBIToken();
        token.addClaim('type', 'provision');
        token.addClaim('wcn', workspaceCollectionName);
        token.setTokenExpiration(expiration);

        return token;
    }

    public static createReportEmbedToken(workspaceCollectionName: string, workspaceId: string, reportId: string, expiration: Date = null): PowerBIToken {
        var token = new PowerBIToken();
        token.addClaim('type', 'provision');
        token.addClaim('wcn', workspaceCollectionName);
        token.addClaim('wid', workspaceId);
        token.addClaim('rid', reportId);
        token.setTokenExpiration(expiration);

        return token;
    }

    private setTokenExpiration(expiration: Date) {
        var nowSeconds = PowerBIToken.getUnixTime(new Date());
        var expirationSeconds = expiration ? PowerBIToken.getUnixTime(expiration) : nowSeconds + 3600

        if (expirationSeconds <= nowSeconds) {
            throw new Error('Token expiration must be in the future');
        }

        this.addClaim('nbf', nowSeconds);
        this.addClaim('exp', expirationSeconds);
    }

    public addClaim(key: string, value: any) {
        this.claims[key] = value;
    }

    private static getUnixTime(date: Date): number {
        return date.getTime() / 1000 | 0;
    }

    public generate(accessKey: string): string {
        return jwt.encode(this.claims, accessKey);
    }
}