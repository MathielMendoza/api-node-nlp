const {dockStart} = require('@nlpjs/basic');

class MessagesService {
    constructor({}) {
        // this._CandidatesBusiness = MessagesBusiness
    }

    async getAnswer(params) {
        const dock = await dockStart({use: ['Basic', 'LangEs']});
        const nlp = dock.get('nlp');





        const response = await nlp.process('es', params.text);
        let {nluAnswer, intent, score, answers, answer} = response;
        answer = (isNaN(answer)) ? answer : parseInt(answer);
        let co = 1;
        return {nluAnswer, intent, score, answers, answer, co};
        // return await this._CandidatesBusiness.getAnswer(text)
    }
}

export default MessagesService;