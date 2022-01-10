import httpService from "./htttpservice";

class ProfileServie{
    fetchIntro(){
        return httpService.get('/')
    }

    updateIntro(payload){
        return httpService.post('/',payload)
    }
}

export default new ProfileServie;