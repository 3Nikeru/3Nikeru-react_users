// import Image from '../shared/Image/component';
// import Link from '../shared/Link/component';
import User from './User';
import data from './mockData'
import './style.scss';

function Users(){
  console.log(data)
    return ( 
      <div>
        <h1>Users</h1>
        <div className='container'>
            {data.map((post) =>(
            <User 
            key={post.id}
            {...post}
            />
            ))}
        </div>
      </div>
    );
}

export default Users;