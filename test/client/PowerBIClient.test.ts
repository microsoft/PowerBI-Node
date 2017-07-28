import * as chai from 'chai';
import * as powerbi from '../../lib';
import * as msrest from 'ms-rest';
import * as models from '../../lib/autorest/V2/models';

let expect = chai.expect;
chai.use(require('chai-things'));


describe('Power BI API V2', () => {
    const resource: string = 'https://analysis.windows.net/powerbi/api';
    const workspaceId: string = '62b2098e-e725-4d54-bdd3-3c080d8b528d';
    const reportId: string = '84dbd390--5eb9fe91cdba';
    const dashboardId: string = '2C0CCF12-A369-4985-A643-0995C249D5B9';
    const tileId: string = "255d89b5-75b4-439d-8776-40f5de0463f0"
    const accessKey: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const mockApiUrl: string = process.env.MOCK_API_URL;

    it('is defined', () => {
        expect(powerbi.PowerBIClientV2).to.exist;
    });

    if (mockApiUrl) {
        var credentials = new msrest.TokenCredentials(accessKey, 'AppKey');
        var client = new powerbi.PowerBIClientV2(credentials, mockApiUrl);

        describe('Group class / operations', () => {
            it('can fetch workspaces/groups and one match with given id', () => {
                return client.groups.getGroups().then((response: models.ODataResponseListGroup) => {
                    var workspaces = response.value;
                    expect(workspaces).to.be.an('array');
                    expect(workspaces).to.contain.an.item.with.property('id', workspaceId);
                });
            });
        });

        describe('Report class / operations', () => {
            it('can fetch all reports and one match with given id', () => {
                return client.reports.getReports().then((response: models.ODataResponseListReport) => {
                    var reports = response.value;
                    expect(reports).to.be.an('array');
                    expect(reports).to.contain.an.item.with.property('id', reportId);
                    expect(reports).to.contain.an.item.with.property('name');
                });
            });
        });

        describe('Dashboard class / operations', () => {
            it('can fetch all dashboards and one match with given id', () => {
                return client.dashboards.getDashboards().then((response: models.ODataResponseListDashboard) => {
                    var dashboards = response.value;
                    expect(dashboards).to.be.an('array');
                    expect(dashboards).to.contain.an.item.with.property('id', dashboardId);
                    expect(dashboards).to.contain.an.item.with.property('displayName');
                });
            });

            it('can fetch all tiles and one match with given id', () => {
                return client.dashboards.getTiles(dashboardId).then((response: models.ODataResponseListTile) => {
                    var tiles = response.value;
                    expect(tiles).to.be.an('array');
                    expect(tiles).to.contain.an.item.with.property('id', tileId);
                    expect(tiles).to.contain.an.item.with.property('title');
                });
            });

            it('can fetch all tiles and one match with given id', () => {
                return client.dashboards.getTile(dashboardId, tileId).then((tile: models.Tile) => {
                    expect(tile).to.have.property('id', tileId);
                });
            });
        });
    }
});

