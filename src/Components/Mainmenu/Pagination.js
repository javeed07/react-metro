import { React, useState, useEffect } from 'react'
import axios from 'axios';
import Pager from './Pager';


const apiurl = `https://jsonplaceholder.typicode.com/posts`
export default (props) => {

    //post updates for api
    var [posts, setStatePosts] = useState([]);
    //select default max posts per action
    var [DefaultMaxDisplayposts] = useState(7);

    //firstbuttonnumber

    var [DefaultButton,setStateDefaultButton] = useState(1);

    //lastindexnumber
    var lastindex=DefaultButton * DefaultMaxDisplayposts
    var FirstIndex = lastindex - DefaultMaxDisplayposts

    useEffect(() => {
        axios.get(apiurl).then((result) => setStatePosts(result.data))
    }, [])

    // var DisplayDefaultButtonPosts = posts.slice(FirstIndex,lastindex)
    var totalPosts = posts.length

    let handleButtonNumberChanges=(btnNumber)=>
    {
        setStateDefaultButton(btnNumber)
    }

    return (<>
        <div className="container p-5">
            <h4>Showing 1-14 of{totalPosts} results for posts</h4>


            <br /><br />
            <Pager totalPostsInAPI={totalPosts}
             maxDisplayrecordsPerButton={DefaultMaxDisplayposts}
             getButtonNumber={ (bno)=>handleButtonNumberChanges(bno) }
             />
            <br /><br />
            <nav aria-label="Page navigation example">
           
            </nav>


            <div className="row">
                {
                    posts.slice(FirstIndex,lastindex).map((res, i) => {
                        return (
                            <ul key={i}>
                                <li><h3>{res.id}{res.title}</h3>
                                    <p>{res.body}</p>
                                </li>


                            </ul>
                        )
                    })
                }
            </div>
        </div>


    </>)
}