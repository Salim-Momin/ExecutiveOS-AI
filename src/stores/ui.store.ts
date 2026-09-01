import {create} from "zustand";


interface UIState {


activePanel:string;


setPanel:
(panel:string)=>void;


}



export const useUIStore =
create<UIState>((set)=>({

activePanel:"hq",


setPanel:
(panel)=>
set({
activePanel:panel
})


}));