import {useDispatch} from "react-redux"
import {useState} from "react"
import {addCommentThunk} from "../../store/modules/user/thunk.js"

export default function Comment(){
    const dispatch = useDispatch()
    const [newComment, setNewComment] = useState()


    return(
        <div>
            <input type="text" onChange={(e) => setNewComment(e.target.value) } />
            <button onClick={() => dispatch(addCommentThunk(newComment))}>Comentar</button>
        </div>
    )
}