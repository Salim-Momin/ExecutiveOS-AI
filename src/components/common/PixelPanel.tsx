interface Props {

children:React.ReactNode;

title?:string;

}


export default function PixelPanel({
children,
title
}:Props){


return (

<div
className="
pixel-panel
pixel-border
relative
p-5
"
>


{
title &&

<div
className="
pixel-font
text-cyan-400
text-xs
mb-4
"
>

{title}

</div>

}


{children}


</div>

)


}