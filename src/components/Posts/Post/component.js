import './style.scss';

function Post({id, title, body}){
    return ( 
      <li key={id}>
        <p>{title}</p>
        <p>{body}</p>
      </li>
    );
}

export default Post;