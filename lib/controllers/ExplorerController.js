const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static applyFizzbuzz(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }

    static getResponseWhenApplyingFizzbuzzToMessage(message){
        const numberToApplyFb = parseInt(message);
        if(!isNaN(numberToApplyFb)){
            const fizzbuzzTrick = FizzbuzzService.applyValidationInNumber(numberToApplyFb);
            return `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        }
        return "Envia un número válido";
    }

    static getResponseToExplorerNamesInMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const names = ExplorerService.getExplorersNamesByMission(explorers, mission).join(", \n");
        return `Los explorers que se encuentran en la mission "${mission}" son:\n`+names;
    }
    
}

module.exports = ExplorerController;