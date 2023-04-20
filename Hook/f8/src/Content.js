//1.useEffect (callback)
//- Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component mounted
//2.useEffect (callback,[])
//- chỉ goi callback 1 lần khi component mounted
//3.useEffect (callback,[deps])
//- Callback sẽ đc goi lại mỗi khi deps thay đổi

//-----------------------------------------------------------
//1.Callback luôn được gọi sau khi component mounted

import React, { useEffect,useState} from 'react';

const tabs = ['posts','comments','albums']
function Content() {
    const [title,setTitle] = useState('')
    const [post,setPost] = useState([])
    const [type,setType] = useState('post')
    console.log(type);

    useEffect (() => {
       
        document.title = title
    fetch('https://jsonplaceholder.typicode.com/${type}')
    .then(res => res.json())
    .then(post => {
        setPost(post);
    })
    },[type])
    return (
        <div>
             {tabs.map(tab =>(
                <button key={tab}
                style={type===tab ? {
                    color:'red',
                    backgroundColor: '#333'

                } : {}}
                onClick={() => setType(tab)}>
                    {tab}
                </button>
        ))}
             <button> Togle </button><br/>
       <input 
       value={title}
       onChange={e => setTitle(e.target.value)}
       />
       <ul>
        {post.map(post =>(
            <li key={post.id}>{post.title}</li>
        ))}
        
       </ul>
       {console.log('Render')}
            
        </div>
    );
}

export default Content;