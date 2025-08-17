export default function Button({ type="button", variant, children , onClick, ariaLabel }){

    let style = '';
    if(variant=='primary') style='px-8 py-2 bg-blue-600 text-white font-medium rounded-md';
    if(variant=='secondary') style='box-border px-8 py-2 border-2 border-blue-600  text-black font-medium rounded-md';
    if(variant =='thirdPartyLoginButton') style = 'flex justify-center py-2 border-2 border-gray-300 rounded-full hover:bg-gray-100 transition';

    return ( 
    <button
    aria-label={ariaLabel}
    className={`${style}`} 
    onClick={(e)=>{
        if(type=='button'){
            e.preventDefault();
            onClick();
        }
    }} >
        {children}
    </button> )
}