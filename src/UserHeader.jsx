import './UserHeader.css'
export default function UserHeader({info}){
    return (
        <div className="UserHeader">
            {console.log(info)}
            <h1>{info.login}</h1>
            <p>@{info.id}</p>
            <p className='muted'>{info.type}</p>
        </div>
    )
}