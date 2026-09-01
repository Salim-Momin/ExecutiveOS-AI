import {create} from "zustand";


interface SettingsState {


sound:boolean;


toggleSound:
()=>void;


}



export const useSettingsStore =
create<SettingsState>((set)=>({


sound:true,


toggleSound:()=>set(
(state)=>({
sound:!state.sound
})
)


}));