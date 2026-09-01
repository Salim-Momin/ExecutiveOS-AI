interface Props {

children:React.ReactNode;

}


export default function PixelButton({
children
}:Props){


return (

<button

className="
pixel-font
text-xs

px-5
py-3

bg-[#111827]

text-cyan-400

border-2
border-cyan-400/50

hover:bg-cyan-400/20

hover:shadow-[0_0_15px_#00E5FF]

transition-all

"

>

{children}

</button>

)

}