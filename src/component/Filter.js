import {useSearchParams} from 'react-router-dom'
function Filter(){
    const [searchParams,setSearchParams]=useSearchParams();
    console.log(searchParams.get('age'))
    console.log(searchParams.get('city'))
    const age= searchParams.get('age')
    const city= searchParams.get('city')
    return(
        <div>
            <h1>Filter Page</h1>
            <h3>My age is :{age}</h3>
            <h3>My city is :{city}</h3>
            <button onClick={()=>setSearchParams({age:40})}>Set text in Query Params</button>
            <input type="text" onChange={(e)=>setSearchParams({text:e.target.value,age:20})}
            placeholder="Set age in Query Params"/>
        </div>
    )
}
export default Filter;