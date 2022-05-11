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

    test("Method applyFizzbuzz work", () => {
        expect( ExplorerController.applyFizzbuzz(1) ).toBe(1);
        expect( ExplorerController.applyFizzbuzz(3) ).toBe("FIZZ");
        expect( ExplorerController.applyFizzbuzz(5) ).toBe("BUZZ");
        expect( ExplorerController.applyFizzbuzz(15) ).toBe("FIZZBUZZ");
    });
    
    test("Method getResponseWhenApplyingFizzbuzzToMessage work", () => {
        expect( ExplorerController.getResponseWhenApplyingFizzbuzzToMessage("1") ).toBe("Tu número es: 1. Validación: 1");
        expect( ExplorerController.getResponseWhenApplyingFizzbuzzToMessage("3") ).toBe("Tu número es: 3. Validación: FIZZ");
        expect( ExplorerController.getResponseWhenApplyingFizzbuzzToMessage("5") ).toBe("Tu número es: 5. Validación: BUZZ");
        expect( ExplorerController.getResponseWhenApplyingFizzbuzzToMessage("15") ).toBe("Tu número es: 15. Validación: FIZZBUZZ");
        expect( ExplorerController.getResponseWhenApplyingFizzbuzzToMessage("Hola") ).toBe("Envia un número válido");
        expect( ExplorerController.getResponseWhenApplyingFizzbuzzToMessage(" ") ).toBe("Envia un número válido");
    });
});