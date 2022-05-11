const Reader = require("../../lib/utils/Reader");
const ExplorerService = require("../../lib/services/ExplorerService");

describe("Unit Tests for the ExplorerService class", () => {
    const explorers = Reader.readJsonFile("explorers.json");

    test("Method filterByMission work", () => {
        const nodes = ExplorerService.filterByMission(explorers, "node");
        expect( nodes.every(itemobj => itemobj.mission == "node") ).toBe(true);
    });
    
    test("Method getAmountOfExplorersByMission work", () => {
        const amount = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(amount).toStrictEqual(expect.any(Number));
    });
    
    test("Method getExplorersUsernamesByMission work", () => {
        const names = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect( names.every(item => typeof(item) === "string") ).toBe(true);
    });
});