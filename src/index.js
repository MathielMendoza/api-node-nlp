import {dockStart} from '@nlpjs/basic';
import container from './api/container.js';

const application = container.resolve('app');

application.start()
    .then(async () => {
        const dock = await dockStart({use: ['Basic','LangEs']});
        const nlp = dock.get('nlp');
        await nlp.addCorpus('./src/config/nlp/corpus-es.json');
        await nlp.addCorpus('./src/config/nlp/corpus-es2.json');
        await nlp.train();
        console.log('Server started');
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });