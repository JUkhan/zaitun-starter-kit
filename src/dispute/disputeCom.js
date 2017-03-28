/** @jsx html */
import {html, h} from 'zaitun';
import {juForm} from '../ui/juForm';
import {juGrid} from '../ui/juGrid';
import dservice from './disputeService';
import appService from '../appService';

export default class disputeCom{
    constructor(){
        this.form=new juForm();
        this.Rpr=new juGrid();
        this.Hcfa=new juGrid();
        this.service=new dservice();

        this.activeTab='RPR Dispute Codes';
        this.buttons={save:false, add:false, delete:false};
        this.editable=false; 
        this.hcfaSR={};
    }
    onViewInit(rootModel, parentDispatch){
        this.service.getPermission().then(res=>{
            this.editable=res.editable;
            this.buttons.delete=true;
            this.form.refresh();
        });
               
    }
    rprOnload(){
         this.service.getHcfa().then(res=>{ 
             this.hcfaData=res.data;          
             this.Rpr.setSelectData(4, this.hcfaData);          
        });
        this.service.getRpr().then(res=>{
            this.Rpr.setData(res.data).selectRow(0).refresh();
        });
    }
    hcfaOnload(){
        this.service.getType().then(res=>{
            this.Hcfa.setSelectData(2, res.data).refresh();
        });
        this.Hcfa.setData(this.hcfaData).selectRow(0); 
    }
    init(){
        return {
            form:{
                options:this.getFormOptions(),
                rpr:this.getRprGridOptions(),
                hcfa:this.getHcfaGridOptions()
            }
        };
    }
    view({model, dispatch}){
        this.model=model;
        return <div>{this.form.view({model:model.form, dispatch:fa=>dispatch({type:'formUpdate',formAction:fa})})}</div>
    }
    update(model, action){        
        switch (action.type) {
             
            default:
                return model;
        }
    }
    add(){
        if(this.activeTab==='RPR Dispute Codes'){            
            this.Rpr.addRow({shortDes:'', auto:false, des:'', hcfaCd:false, active:true, new:true}).refresh();
        }else{
             this.Hcfa.addRow({hcfaCd:'', type:'', des:'', new:true}).refresh();
        }
    }
    remove(){
        appService.confirm('Confirm', <p>Are you sure?</p>)
        .then(()=>{
            this.activeTab==='RPR Dispute Codes'?
                this.Rpr.removeRow(this.rprSR).refresh()
                :this.Hcfa.removeRow(this.hcfaSR).refresh()
        })
        .catch(console.error);
    }
    getFormOptions(){
        return {
            viewMode:'form',  name:'dispute',          
            inputs:[                
                {type:'tabs',
                 activeTab:'RPR Dispute Codes',                 
                 tabClick:(tabName, prevTab)=>{
                          this.activeTab=tabName;                         
                          this.buttons.delete=tabName==='RPR Dispute Codes'?true:this.hcfaSR.new;
                 
                          return true;
                        },
                 footer:model=><div classNames="">
                        <button disabled={!this.buttons.save} classNames=".btn.btn-outline-success.btn-sm">Save</button>&nbsp;
                        <button disabled={!this.buttons.add && !this.editable} on-click={()=>this.add()} classNames=".btn.btn-outline-success.btn-sm">Add</button>&nbsp;
                        <button disabled={!this.buttons.delete } on-click={()=>this.remove()} classNames=".btn.btn-outline-success.btn-sm">Delete</button>
                 </div>,
                 tabs:{
                    'RPR Dispute Codes':{inputs:[
                        {
                            type:'component',
                            actionType:'rpr',
                            component:this.Rpr,
                            field:'rpr'
                        }                                
                    ]},
                    'HCFA Dispute Codes':{inputs:[
                        {
                            type:'component',
                            actionType:'hcfa',
                            component:this.Hcfa,
                            field:'hcfa'
                        }  
                        
                    ]}                
                }}
            ]
        }
    }
    formClass(){
        return {'form-control':1,'form-control-sm':1 };
    }
    getRprGridOptions(){        
        return {
            onLoad:this.rprOnload.bind(this),
            tableClass:'.table-sm.table-bordered.xtable-responsive',            
            headerClass:'.thead-default',
            footerClass:'.thead-default', 
            pager:{pageSize:10, linkPages:10, enablePowerPage:0, nav:1, search:1, pagerInfo:0, elmSize:'sm'},
            pagerPos:'top', //top|bottom|both --default both
            //pageChange:data=>Grid.selectRow(0),
            singleSelect:true,            
            selectedRows:(rows, ri, ev)=>{
                this.buttons.delete=this.editable;
                this.rprSR=rows;
            },           
            recordChange:(row, col, ri, ev)=>{
                row.updated=true;
                this.buttons.save=true;
                this.Rpr.refresh();
            },                
            columns:[
                {header:'Short Desc',editPer:row=>this.editable, sort:true,style:{textTransform: 'uppercase'}, iopts:{class:r=>this.formClass(),props:{maxLength:5},style:{textTransform: 'uppercase'}}, focus:true, field:'shortDes',type:'text'},
                {header:'Auto', field:'auto', tnsValue:val=>val?'Yes':'No'},
                {header:'Description',editPer:row=>this.editable,sort:true, style:{textTransform: 'uppercase'}, iopts:{class:r=>this.formClass(),props:{maxLength:30},style:{textTransform: 'uppercase'}}, field:'des', type:'text'},
                {header:'HCFA Code',id:4, editPer:row=>this.editable,sort:true,iopts:{class:r=>this.formClass()}, field:'hcfaCd', type:'select', valueProp:'hcfaCd', textProp:'hcfaCd'},
                {header:'Active',editPer:row=>this.editable,sort:true, field :'active', type:'checkbox', tnsValue:val=>val?'Yes':'No'},
                
            ],            
            footers:[               
            [
                {cellRenderer:data=><b>Total Rows: {data.length}</b>},                
                {props:{colSpan:4}, cellRenderer:d=><b>Total Updated Rows: {d.filter(_=>_.updated).length}</b>}
               
            ]
            ] 
        }
    }
    getHcfaGridOptions(){                
        return {
            onLoad:this.hcfaOnload.bind(this),
            tableClass:'.table-sm.table-bordered.xtable-responsive',            
            headerClass:'.thead-default',
            footerClass:'.thead-default', 
            pager:{pageSize:10, linkPages:10, enablePowerPage:0, nav:1, search:1, pagerInfo:0, elmSize:'sm'},
            pagerPos:'top', //top|bottom|both --default both
            //pageChange:data=>Grid.selectRow(0),
            singleSelect:true,            
            selectedRows:(rows, ri, ev)=>{               
                 this.buttons.delete=rows.new;
                 this.hcfaSR=rows;
             },           
            recordChange:(row, col, ri, ev)=>{
                row.updated=true;
                this.buttons.save=true;
                this.Hcfa.refresh();
            },                
            columns:[
                {header:'HCFA Code',editPer:row=>this.editable,sort:true, iopts:{class:r=>this.formClass(),props:{maxLength:2}}, focus:true, field:'hcfaCd',type:'text', tnsValue:val=>val?val:[h('b','new...')]},
                {header:'Type',id:2, editPer:row=>this.editable,sort:true,iopts:{class:r=>this.formClass()}, field:'type', type:'select'},
                {header:'Description',editPer:row=>this.editable,sort:true,style:{textTransform: 'uppercase'}, iopts:{class:r=>this.formClass(),props:{maxLength:30},style:{textTransform: 'uppercase'}}, field:'des', type:'text'}                
            ],            
            footers:[               
            [
                {cellRenderer:data=><b>Total Rows: {data.length}</b>},                
                {props:{colSpan:4}, cellRenderer:d=><b>Total Updated Rows: {d.filter(_=>_.updated).length}</b>}
               
            ]
            ] 
        }
    }
    
}