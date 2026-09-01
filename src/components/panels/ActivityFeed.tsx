import PixelPanel from "../common/PixelPanel";


export default function ActivityFeed(){

return(

<PixelPanel>



<h2
className="
text-cyan-400
mb-4
"
>
AI Activity
</h2>


<div className="text-sm text-gray-400 space-y-3">

<p>
🤖 Research Agent completed scan
</p>

<p>
📧 Email Agent processing inbox
</p>

<p>
📅 Calendar Agent planning day
</p>


</div>


</PixelPanel>

)

}