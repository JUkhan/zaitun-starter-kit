
class appService{
    constructor(){
        this.popup=null;
        this._popup_promise_resolve=null;
        this._popup_btn_name='';
    }
    setPopup(popup){
        this.popup=popup;
        popup.model.options.modalClose=()=>{
            if(this._popup_btn_name==='no' && typeof this._popup_promise_reject==='function'){
                this._popup_promise_reject(this._popup_btn_name);
            }
            else if(typeof this._popup_promise_resolve ==='function'){
                this._popup_promise_resolve(this._popup_btn_name);
            }
            return true;
        }
    }
    _closeModel(btnName){
        this._popup_btn_name=btnName;
        this.popup.modalClose();
    }
    _set(title, msg){
        this.popup.model.data.msg=msg;
        this.popup.model.options.title=title;
    }
    alert(title, msg){
        this._set(title, msg);
        this.popup.model.options.buttons=[{label:'OK',on:{click:()=>this._closeModel('ok')}, classNames:'.btn.btn-outline-success', elmSize:'sm'}],
        this.popup.refresh();
        this.popup.showModal(1);
        return new Promise(accept=>{this._popup_promise_resolve=accept;});
    }
    confirm(title, msg){
        this._set(title, msg);
        this.popup.model.options.buttons=[
            {label:'Yes',on:{click:()=>this._closeModel('yes')}, classNames:'.btn.btn-outline-success', elmSize:'sm'},
            {label:'No',on:{click:()=>this._closeModel('no')}, classNames:'.btn.btn-outline-success', elmSize:'sm'}
            ],
        this.popup.refresh();
        this.popup.showModal(1);
        return new Promise((accept,reject)=>{
            this._popup_promise_resolve=accept;
            this._popup_promise_reject=reject;
        });
    }
}

const service=new appService();
export default service;