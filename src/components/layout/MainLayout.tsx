import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import ActivityFeed from "../panels/ActivityFeed";
import CommandBar from "../panels/CommandBar";


export default function MainLayout(){

return(

<div
className="
h-screen
flex
flex-col
bg-[#070B14]
"
>


<TopBar/>


<div
className="
flex
flex-1
overflow-hidden
"
>


<Sidebar/>


<main
className="
flex-1
flex
items-center
justify-center
"
>


<div
className="
w-full
h-full
flex
items-center
justify-center
text-cyan-400
pixel-font
"
>

PHASER OFFICE

</div>


</main>



<ActivityFeed/>


</div>



<CommandBar/>


</div>

)

}