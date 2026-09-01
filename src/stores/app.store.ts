import {create} from "zustand";


interface AppState {

isLoading:boolean;

setLoading:
(value:boolean)=>void;

}



export const useAppStore =
create<AppState>((set)=>({

isLoading:false,


setLoading:
(value)=>
set({
isLoading:value
})


}));