import WellcomeRepository from "./wellcome.repository";

export default class WellcomeService {
    
    static async index() {
        return WellcomeRepository.index();    
    }

}
