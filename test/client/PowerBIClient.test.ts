import * as chai from 'chai';
import * as powerbi from '../../lib';
import * as msrest from 'ms-rest';

let expect = chai.expect;

// Tentative test, it doesn't work because the access key

/*
describe('Power BI API V2', () => {
    const resource: string = 'https://analysis.windows.net/powerbi/api';
    const workspaceId: string = 'fd41b1db-9e26-4103-99a7-f9ad336b99a7';
    const reportId: string = 'fe607ad3-97bf-4dd5-98eb-db4a4d5de4e0';
    const accessKey: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

    it('is defined', () => {
        expect(powerbi.PowerBIClientV2).to.exist;
    });

    var credentials = new msrest.TokenCredentials(accessKey, 'AppKey');
    var client = new powerbi.PowerBIClientV2(credentials);

    describe('Group class / operations', () => {
        it('can fetch workspaces/groups and one match with given id', () => {
            return client.groups.getGroups().then((workspaces) => {
                expect(workspaces).to.be.an("array")
                expect(workspaces).to.include({ id: workspaceId })
            })
        });
    });

    describe('Report class / operations', () => {
        it('can fetch specific report and match with given id', () => {
            return client.reports.getReport(reportId).then((report) => {
                expect(report).to.be.an("object")
                expect(report).to.have.property("id", reportId)
            })
        });
    });
});

*/
