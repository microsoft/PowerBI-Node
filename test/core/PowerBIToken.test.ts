import * as chai from 'chai';
import * as powerbi from '../../lib';
import * as jwt from 'jwt-simple';

let expect = chai.expect;

describe('Power BI Token', () => {
    const version: string = '0.2.0';
    const issuer: string = 'Power BI Node SDK';
    const resource: string = 'https://analysis.windows.net/powerbi/api';
    const workspacCollection: string = 'TestCollection';
    const workspaceId: string = 'fd41b1db-9e26-4103-99a7-f9ad336b99a7';
    const reportId: string = 'fe607ad3-97bf-4dd5-98eb-db4a4d5de4e0';
    const accessKey: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const username: string = 'TestUser';

    it('is defined', () => {
        expect(powerbi.PowerBIToken).to.exist;
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

            let embedToken = powerbi.PowerBIToken.createReportEmbedToken(workspacCollection, workspaceId, reportId, username, 'TestRole', expiration);
            let token = embedToken.generate(accessKey);
            let decoded = jwt.decode(token, accessKey);

            expect(decoded.ver).to.equal(version);
            expect(decoded.aud).to.equal(resource);
            expect(decoded.iss).to.equal(issuer);
            expect(decoded.wcn).to.equal(workspacCollection);
            expect(decoded.wid).to.equal(workspaceId);
            expect(decoded.rid).to.equal(reportId);
            expect(decoded.nbf).to.equal(nbf);
            expect(decoded.exp).to.equal(exp);
            expect(decoded.username).to.equal(username);
        });
        
        it('are created with multiple RLS roles', () => {
            let nbf = powerbi.Util.getUnixTime(new Date());
            let exp = nbf + 3600;
            let expiration = new Date(exp * 1000);
            let roles = ['TestRole1', 'TestRole2'];

            let embedToken = powerbi.PowerBIToken.createReportEmbedToken(workspacCollection, workspaceId, reportId, username, roles, expiration);
            let token = embedToken.generate(accessKey);
            let decoded = jwt.decode(token, accessKey);

            expect(decoded.username).to.equal(username);
            expect(decoded.roles).to.eql(roles);
        });

        it('fail to create when RLS username is empty and roles is not', () => {
            let nbf = powerbi.Util.getUnixTime(new Date());
            let exp = nbf + 3600;
            let expiration = new Date(exp * 1000);
            let role = 'TestRole1';
            let badUsernames = [null, undefined, ''];

            badUsernames.forEach(badUsername => {
                expect(powerbi.PowerBIToken.createReportEmbedToken.bind(powerbi.PowerBIToken, workspacCollection, workspaceId, reportId, badUsername, role, expiration))
                    .to
                    .throw('Cannot have an empty or null Username claim with the non-empty Roles claim');   
                }
            );
        });
    });
});
