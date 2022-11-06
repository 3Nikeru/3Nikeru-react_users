import Image from '../shared/Image/component';
import Link from '../shared/Link/component';
import './style.scss';

function Header(){
    return (
        <header className="App-header">
        <Image/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          className="My-Link"
          href="https://reactjs.org" 
          text="Learn React"
          isTargrtBlank
          />
        <Link text="lorem ipsum"/>
      </header>
    );
}

export default Header;