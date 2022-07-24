import httpService from "./htttpservice";

class ProfileServie{
    fetchUser(){
        return httpService.get('/user')
    }

    updateIntro(payload){
        return httpService.put('/user/intro',payload)
    }

    updateBasicInfo(payload){
        return httpService.put('/user/basicinfo',payload);
    }
}

export default new ProfileServie;