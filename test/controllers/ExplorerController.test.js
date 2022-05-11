const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Unit Tests for the ExplorerController class", () => {
    test("Method getExplorersByMission work", () => {
        const unodes = ExplorerController.getExplorersByMission("node");
        expect( unodes.every(itemobj => itemobj.mission == "node") ).toBe(true);

        const ujavas = ExplorerController.getExplorersByMission("java");
        expect( ujavas.every(itemobj => itemobj.mission == "java") ).toBe(true);
    });
    
    test("Method getExplorersUsernamesByMission work", () => {
        const unodes = ExplorerController.getExplorersUsernamesByMission("node");
        expect( unodes.every(item => typeof(item) === "string") ).toBe(true);

        const ujavas = ExplorerController.getExplorersUsernamesByMission("java");
        expect( ujavas.every(item => typeof(item) === "string") ).toBe(true);
    });
    
    test("Method getExplorersAmonutByMission work", () => {
        const amountNodes = ExplorerController.getExplorersAmonutByMission("node");
        expect(amountNodes).toStrictEqual(expect.any(Number));

        const amountJavas = ExplorerController.getExplorersAmonutByMission("java");
        expect(amountJavas).toStrictEqual(expect.any(Number));
    });
});