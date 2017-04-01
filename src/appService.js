
class appService{
    constructor(){
        this.popup=null;
        this._popup_promise_resolve=null;
        this._popup_btn_name='';
    }
    setPopup(popup){
        this.popup=popup;
        popup.model.options.modalClose=()=>{            
            if(this._confirm && (this._popup_btn_name==='no'||this._popup_btn_name!=='yes') && typeof this._popup_promise_reject==='function'){
                this._confirm=0;
                this._popup_promise_reject(this._popup_btn_name);
            }
            else if(typeof this._popup_promise_resolve ==='function'){
                this._popup_promise_resolve(this._popup_btn_name);
            }
            this._popup_btn_name='';
            this._popup_promise_reject=null;
            this._popup_promise_resolve=null;
            return true;
        }
    }
    _closeModal(btnName){
        this._popup_btn_name=btnName;
        this.popup.modalClose();
    }
    _set(title, msg){
        this.popup.model.data.msg=msg;
        this.popup.model.options.title=title;
    }
    alert(title, msg){
        this._set(title, msg);
        this.popup.model.options.buttons=[{label:'OK',on:{click:()=>this._closeModal('ok')}, classNames:'.btn.btn-outline-success', elmSize:'sm'}],
        this.popup.refresh();
        this.popup.showModal(1);
        return new Promise(accept=>{this._popup_promise_resolve=accept;});
    }
    confirm(title, msg){
        this._confirm=1;
        this._set(title, msg);
        this.popup.model.options.buttons=[        
                {label:'Yes',on:{click:()=>this._closeModal('yes')}, classNames:'.btn.btn-outline-success', elmSize:'sm'},
                {label:'No',on:{click:()=>this._closeModal('no')}, classNames:'.btn.btn-outline-success', elmSize:'sm'}
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