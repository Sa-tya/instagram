import { useSelector } from "react-redux";
import Card from "./card";

function Likes(){
    const likes = useSelector(state => state.likes)
    console.log("likes",likes[0])

    return <div className='feed'>
    {[...Array(1)].map((e,i)=> <Card key={i} id={likes[i].id} data={likes[i]} />)}
</div>
}

export default Likes;