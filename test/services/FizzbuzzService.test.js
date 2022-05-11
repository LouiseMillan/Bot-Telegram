const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Unit Tests for the FizzbuzzService class", () => {
    test("Method applyValidationInExplorer work", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const explorer3 = {name: "Explorer3", score: 3};
        const explorer5 = {name: "Explorer5", score: 5};
        const explorer15 = {name: "Explorer15", score: 15};
        const explorer30 = {name: "Explorer15", score: "30"};
        
        FizzbuzzService.applyValidationInExplorer(explorer1);
        expect( explorer1 ).toEqual( expect.objectContaining({trick: 1}) );
        
        FizzbuzzService.applyValidationInExplorer(explorer3);
        expect( explorer3 ).toEqual( expect.objectContaining({trick: "FIZZ"}) );
        
        FizzbuzzService.applyValidationInExplorer(explorer5);
        expect( explorer5 ).toEqual( expect.objectContaining({trick: "BUZZ"}) );
        
        FizzbuzzService.applyValidationInExplorer(explorer15);
        expect( explorer15 ).toEqual( expect.objectContaining({trick: "FIZZBUZZ"}) );
        
        FizzbuzzService.applyValidationInExplorer(explorer30);
        expect( explorer30 ).toEqual( expect.not.objectContaining({trick: "FIZZ"}) );
        expect( explorer30 ).toEqual( expect.not.objectContaining({trick: "BUZZ"}) );
        expect( explorer30 ).toEqual( expect.not.objectContaining({trick: "FIZZBUZZ"}) );
        expect( explorer30 ).toEqual( expect.not.objectContaining({trick: "30"}) );
    });
});