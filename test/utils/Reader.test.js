const Reader = require("../../lib/utils/Reader");

describe("Unit Tests for the Reader class", () => {
    test("Method readJsonFile work", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        
        expect(explorers).not.toBeUndefined();
        expect(explorers).not.toBeNull();
    });
});