// import Image from '../shared/Image/component';
// import Link from '../shared/Link/component';
import data from '../mockData'
import './style.scss';

function User({id, name, username, email, address}){
    return ( 
      <div className='userCard' key={id}>
        <h2>
          {name}
        </h2>
        <p>{username}</p>
        <p className='email'>{email}</p>
        <p>{address.city}</p>
      </div>
    );
}

export default User;