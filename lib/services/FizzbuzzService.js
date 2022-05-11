class FizzbuzzService{
    static applyValidationInNumber(number){
        if(number != undefined && number != null && typeof(number) === "number"){
            if(number % 3 === 0 && number % 5 === 0){
                return "FIZZBUZZ";
            }else if(number % 3 === 0){
                return "FIZZ";
            }else if(number % 5 === 0){
                return "BUZZ";
            }else {
                return number;
            }
        }
    }
    static applyValidationInExplorer(explorer) {
        if(explorer.score != undefined && explorer.score != null && typeof(explorer.score) === "number"){
            if(explorer.score % 3 === 0 && explorer.score % 5 === 0){
                explorer.trick = "FIZZBUZZ";
            }else if(explorer.score % 3 === 0){
                explorer.trick = "FIZZ";
            }else if(explorer.score % 5 === 0){
                explorer.trick = "BUZZ";
            }else {
                explorer.trick = explorer.score;
            }
        }
        return explorer;
    }
}

module.exports = FizzbuzzService;