import {asClass, createContainer, asFunction, asValue} from 'awilix';

//app start
import StartUp from './startup.js';
import Server from './server.js';
import config from '../config/environments/index.js';

//Routes
import Routes from './routes/index.js';
import MessagesRoutes from './routes/messages.routes.js'

//Controllers
import MessagesController from './controllers/messages.controller.js';

//Services
import MessagesService from '../services/messages.service.js';

//Business
import MessagesBusiness from '../domain/messages.business.js';

//Models
import Models from '../domain/models/index.js';

const container = createContainer();
container
    .register({
        app: asClass(StartUp).singleton(),
        router: asFunction(Routes).singleton(),
        server: asClass(Server).singleton(),
    })
    .register({
        config: asValue(config),
    })
    .register({
        MessagesRoutes: asFunction(MessagesRoutes).singleton(),
    })
    .register({
        MessagesController: asClass(MessagesController).singleton(),
    })
    .register({
        MessagesService: asClass(MessagesService).singleton(),
    })
    .register({
        MessagesBusiness: asClass(MessagesBusiness).singleton(),
    })
    .register({
        MessagesModels: asValue(Models.CandidatesModels),
    })

export default container;