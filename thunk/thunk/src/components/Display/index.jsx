import {useSelector} from "react-redux"

export default function Display(){
    const user = useSelector(state => state.user)

    return(
        <div>
            <h3>{user.name}</h3>
            <ul>
                {user?.comments?.map(comment => (
                    <li>{comment}</li>
                ))}
            </ul>
        </div>
    )
}