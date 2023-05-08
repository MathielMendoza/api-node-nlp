class Startup {
    constructor({server}) {
        this._server = server;
    }

    async start() {
        await this._server.start();
    }
}
export default Startup;