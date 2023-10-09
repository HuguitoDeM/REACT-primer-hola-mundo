export const Input = (props)=>{
return(<><label htmlFor={props.nombre} className="text-blue-300">Ingrese su {props.nombre}: </label>
 <input type="text" htmlFor={props.nombre} placeholder={props.placeholder} className='h-[50px]  bg-white' onChange={e => props.setvalue(e.target.value)} /> </> )

} 