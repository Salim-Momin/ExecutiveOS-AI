import PixelPanel from "../common/PixelPanel";


const menu=[

"🏠 HQ",

"🤖 Agents",

"📋 Tasks",

"📅 Calendar",

"📧 Email",

"💰 Finance",

"🔬 Research",

"🎙 Voice",

"⚙ Settings"

];


export default function Sidebar(){


return(

<aside

className="
w-64
shrink-0
p-4
bg-[#050914]
"


>


<PixelPanel title="EXECUTIVE OS">


<div className="space-y-2">


{

menu.map(item=>(

<button

key={item}

className="

w-full

text-left

pixel-text

text-sm

p-3

text-gray-300


border

border-transparent


hover:border-cyan-400

hover:text-cyan-400


"

>

{item}

</button>

))

}


</div>


</PixelPanel>


</aside>


)


}