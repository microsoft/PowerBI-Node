import * as mocha from 'mocha';
import * as chai from 'chai';
import * as powerbi from '../../lib';
import * as jwt from 'jwt-simple';

let expect = chai.expect;

describe('PowerBI Token', () => {
    const version: string = '0.1.0';
    const issuer: string = 'PowerBISDK';
    const resource: string = 'https://analysis.windows.net/powerbi/api';
    const workspacCollection: string = 'TestCollection';
    const workspaceId: string = 'fd41b1db-9e26-4103-99a7-f9ad336b99a7';
    const reportId: string = 'fe607ad3-97bf-4dd5-98eb-db4a4d5de4e0';
    const accessKey: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

    it('is defined', () => {
        expect(powerbi.PowerBIToken).not.to.be.undefined;
    });

    describe('Generic Tokens', () => {
        it('can be created with arbitrary claims', () => {
            let token = new powerbi.PowerBIToken();
            token.addClaim('foo', 'bar');

            let genericToken = token.generate(accessKey);
            let decoded = jwt.decode(genericToken, accessKey);

            expect(decoded.foo).to.equal('bar');
        });

        it('are created with a default expiration', () => {
            let nbf = powerbi.Util.getUnixTime(new Date());
            let exp = nbf + 3600;

            let token = new powerbi.PowerBIToken();
            let genericToken = token.generate(accessKey);
            let decoded = jwt.decode(genericToken, accessKey);

            expect(decoded.nbf).to.equal(nbf);
            expect(decoded.exp).to.equal(exp);
        });

        it('cannot be created with a expiration in the past', () => {
            let token = new powerbi.PowerBIToken(new Date());
            let hasError = false;

            try {
                let genericToken = token.generate(accessKey);
                let decoded = jwt.decode(genericToken, accessKey);
            }
            catch (err) {
                hasError = true;
                expect(err.message).to.equal('Token expiration must be in the future');
            }
            
            expect(hasError).to.be.true;
        });
    });

    describe('Provision Tokens', () => {
        it('can be created', () => {
            let token = powerbi.PowerBIToken.createProvisionToken(workspacCollection);
            let jwt = token.generate(accessKey);

            expect(jwt).not.to.be.null;
        });

        it('are created with a default expiration', () => {
            let nbf = powerbi.Util.getUnixTime(new Date());
            let exp = nbf + 3600;

            let devToken = powerbi.PowerBIToken.createProvisionToken(workspacCollection);
            let token = devToken.generate(accessKey);
            let decoded = jwt.decode(token, accessKey);

            expect(decoded.nbf).to.equal(nbf);
            expect(decoded.exp).to.equal(exp)
        });

        it('are created with the correct claims', () => {
            let now = new Date();
            let nbf = powerbi.Util.getUnixTime(now);
            let exp = nbf + 3600;
            let expiration = new Date(exp * 1000);

            let devToken = powerbi.PowerBIToken.createProvisionToken(workspacCollection, expiration);
            let token = devToken.generate(accessKey);
            let decoded = jwt.decode(token, accessKey);

            expect(decoded.ver).to.equal(version);
            expect(decoded.aud).to.equal(resource);
            expect(decoded.iss).to.equal(issuer);
            expect(decoded.type).to.equal('provision');
            expect(decoded.wcn).to.equal(workspacCollection);
            expect(decoded.nbf).to.equal(nbf);
            expect(decoded.exp).to.equal(exp);
        });
    });

    describe('Dev Tokens', () => {
        it('can be created', () => {
            let token = powerbi.PowerBIToken.createDevToken(workspacCollection, workspaceId);
            let jwt = token.generate(accessKey);

            expect(jwt).not.to.be.null;
        });

        it('are created with a default expiration', () => {
            let nbf = powerbi.Util.getUnixTime(new Date());
            let exp = nbf + 3600;

            let devToken = powerbi.PowerBIToken.createDevToken(workspacCollection, workspaceId);
            let token = devToken.generate(accessKey);
            let decoded = jwt.decode(token, accessKey);

            expect(decoded.nbf).to.equal(nbf);
            expect(decoded.exp).to.equal(exp)
        });

        it('are created with the correct claims', () => {
            let nbf = powerbi.Util.getUnixTime(new Date());
            let exp = nbf + 3600;
            let expiration = new Date(exp * 1000);

            let devToken = powerbi.PowerBIToken.createDevToken(workspacCollection, workspaceId, expiration);
            let token = devToken.generate(accessKey);
            let decoded = jwt.decode(token, accessKey);

            expect(decoded.ver).to.equal(version);
            expect(decoded.aud).to.equal(resource);
            expect(decoded.iss).to.equal(issuer);
            expect(decoded.type).to.equal('dev');
            expect(decoded.wcn).to.equal(workspacCollection);
            expect(decoded.wid).to.equal(workspaceId);
            expect(decoded.nbf).to.equal(nbf);
            expect(decoded.exp).to.equal(exp);
        });
    });

    describe('Embed Tokens', () => {
        it('can be created', () => {
            let token = powerbi.PowerBIToken.createReportEmbedToken(workspacCollection, workspaceId, reportId);
            let jwt = token.generate(accessKey);

            expect(jwt).not.to.be.null;
        });

        it('are created with a default expiration', () => {
            let nbf = powerbi.Util.getUnixTime(new Date());
            let exp = nbf + 3600;

            let embedToken = powerbi.PowerBIToken.createReportEmbedToken(workspacCollection, workspaceId, reportId);
            let token = embedToken.generate(accessKey);
            let decoded = jwt.decode(token, accessKey);

            expect(decoded.nbf).to.equal(nbf);
            expect(decoded.exp).to.equal(exp)
        });

        it('are created with the correct claims', () => {
            let nbf = powerbi.Util.getUnixTime(new Date());
            let exp = nbf + 3600;
            let expiration = new Date(exp * 1000);

            let embedToken = powerbi.PowerBIToken.createReportEmbedToken(workspacCollection, workspaceId, reportId, expiration);
            let token = embedToken.generate(accessKey);
            let decoded = jwt.decode(token, accessKey);

            expect(decoded.ver).to.equal(version);
            expect(decoded.aud).to.equal(resource);
            expect(decoded.iss).to.equal(issuer);
            expect(decoded.type).to.equal('embed');
            expect(decoded.wcn).to.equal(workspacCollection);
            expect(decoded.wid).to.equal(workspaceId);
            expect(decoded.rid).to.equal(reportId);
            expect(decoded.nbf).to.equal(nbf);
            expect(decoded.exp).to.equal(exp);
        });
    });
});