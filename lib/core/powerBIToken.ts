import * as jwt from 'jwt-simple';
import {Util as util} from './util';

export class PowerBIToken {
    private claims: any;
    private expiration: Date;

    constructor(expiration?: Date) {
        this.expiration = expiration;
        this.claims = {
            ver: '0.2.0',
            aud: 'https://analysis.windows.net/powerbi/api',
            iss: 'Power BI Node SDK'
        };
    }

    public static createReportEmbedToken(workspaceCollectionName: string, workspaceId: string, reportId: string, expiration: Date = null): PowerBIToken {
        var token = new PowerBIToken(expiration);
        token.addClaim('wcn', workspaceCollectionName);
        token.addClaim('wid', workspaceId);
        token.addClaim('rid', reportId);

        return token;
    }

    private setTokenExpiration() {
        var nowSeconds = util.getUnixTime(new Date());
        var expirationSeconds = this.expiration ? util.getUnixTime(this.expiration) : nowSeconds + 3600

        if (expirationSeconds <= nowSeconds) {
            throw new Error('Token expiration must be in the future');
        }

        this.addClaim('nbf', nowSeconds);
        this.addClaim('exp', expirationSeconds);
    }

    public addClaim(key: string, value: any) {
        this.claims[key] = value;
    }

    public generate(accessKey: string): string {
        this.setTokenExpiration();

        return jwt.encode(this.claims, accessKey);
    }
}
