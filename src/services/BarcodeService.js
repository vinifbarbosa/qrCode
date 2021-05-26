import axios from 'axios';

export default class ListaService {
    constructor() {
        this.api = axios.create({
            baseURL: ''
        });
        this.result = '';
    
        console.log(this.result+" teste");
    }

    async salvar(result) {
        await this.api.post('/', result);

    }
   /* async atualizar(result) {
        await this.api.put(`/${result._id}`);

    }*/
}






