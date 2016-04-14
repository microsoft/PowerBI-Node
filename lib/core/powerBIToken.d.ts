export declare class PowerBIToken {
    private claims;
    constructor();
    static createDevToken(workspaceCollectionName: string, workspaceId: string, expiration?: Date): PowerBIToken;
    static createProvisionToken(workspaceCollectionName: string, expiration?: Date): PowerBIToken;
    static createReportEmbedToken(workspaceCollectionName: string, workspaceId: string, reportId: string, expiration?: Date): PowerBIToken;
    private setTokenExpiration(expiration);
    addClaim(key: string, value: any): void;
    private static getUnixTime(date);
    generate(accessKey: string): string;
}
