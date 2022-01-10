import httpService from "./htttpservice";

class ProfileServie{
    fetchIntro(){
        return httpService.get('/user')
    }

    updateIntro(payload){
        return httpService.post('/user',payload)
    }
}

export default new ProfileServie;