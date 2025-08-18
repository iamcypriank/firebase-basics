export default function Button({ type="button", variant, children , onClick, ariaLabel, size='medium' }){

    let style = 'px-8 py-2';

    if(size=='small') style ="px-4 py-1"
    //color design
    if(variant=='primary') style+=' bg-blue-600 text-white font-medium rounded-md';
    if(variant=='secondary') style+='box-border border-2 border-blue-600  text-black font-medium rounded-md';
    if(variant =='thirdPartyLoginButton') style = 'flex justify-center py-2 border-2 border-gray-300 rounded-full hover:bg-gray-100 transition';

    return ( 
    <button
    aria-label={ariaLabel}
    className={`${style}`} 
    onClick={(e)=>{
        if(type!='submit'){
            e.preventDefault();
            onClick();
        }
    }} >
        {children}
    </button> )
}