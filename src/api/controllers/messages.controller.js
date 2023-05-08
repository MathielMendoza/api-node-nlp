// import CandidateDto from '../dtos/Candidates/candidate.dto.js'

class MessagesController {
    constructor({MessagesService}) {
        this._MessagesService = MessagesService;
    }

    async getAnswer(req, res) {
        let answer = await this._MessagesService.getAnswer(req.body);
        return res.status(200).json(answer);
        // Candidate = mapper(CandidateDto, Candidate)
    }

}

export default MessagesController;