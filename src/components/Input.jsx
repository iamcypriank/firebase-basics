export default function Input({label, type, required=false, onChange, value }){

    return (
    <div  
    className="flex flex-col">
    <label 
    className="text-sm font-bold"
    htmlFor="">{label}</label>
    <input 
    className="p-2 bg-gray-200 rounded-sm outline-none focus:bg-blue-100"
    onChange={onChange}
    value={value}
    type={type} required={required}  />
    </div> )
}