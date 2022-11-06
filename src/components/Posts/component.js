// import Image from '../shared/Image/component';
// import Link from '../shared/Link/component';
import Post from './Post';
import data from './mockData'
import './style.scss';

function Posts(){
  console.log(data)
    return ( 
      <div>
        <h1>Users</h1>
        <div className='container'>
            {data.map((post) =>(
            <Post 
            key={post.id}
            {...post}
            />
            ))}
        </div>
      </div>
    );
}

export default Posts;