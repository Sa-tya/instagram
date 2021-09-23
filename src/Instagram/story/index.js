import Icon from "./icon";
import './sStyle.css'

function Story(){
return <div className='story'>
    {[...Array(16)].map((e,i)=> <Icon key={i} />)}
</div>
}
export default Story;