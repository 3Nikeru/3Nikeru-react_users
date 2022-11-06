import './style.scss'

const Link = ({href, text, className, isTargrtBlank = false}) =>
(
    <a
        className={className ? `App-link ${className}` : 'App-link'}
        href={href}
        target={isTargrtBlank ? "_blank":''}
        rel="noopener noreferrer"
        >
          {text}
    </a>
)


export default Link;