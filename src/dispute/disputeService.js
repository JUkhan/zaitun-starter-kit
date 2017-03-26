
export default class disputeService{
    constructor(){
        this.ch=['','a','b','c','d','e','f','g','h','i','f','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    }
    getPermission(){
        return Promise.resolve({ editable:true});
    }
    getRpr(){
        const data=[];
        for (var index = 0; index < 150; index++) {
            data.push({shortDes:this._charByLimit(5), auto:false, des:this._charByLimit(25), hcfaCd:index+1, active:this._boolValue()})
        }
        return Promise.resolve({data});
    }
    getHcfa(){
        const data=[];
        for (var index = 0; index < 45; index++) {
            data.push({hcfaCd:index+1, type:index%2==0?'PDC':'MCSD', des:this._charByLimit(25)})
        }
        return Promise.resolve({data});
    }
    _boolValue(){
        return Math.ceil(Math.random()*2)===1
    }
    _randChar(){       
        return this.ch[Math.ceil(Math.random()*26)];
    }
    _charByLimit(limit){
        const res=[];
        for (var index = 0; index < limit; index++) {
            res.push(this._randChar());
        }
        return res.join('');
    }
}
