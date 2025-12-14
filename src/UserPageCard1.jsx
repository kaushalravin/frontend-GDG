export default function UserPageCard1({info}){
    return(
        <div className="userPageCard1">
            <div className="main-card">
                <div className="card-content">
                    <div className="info-item">
                        <p className="info-label">BIO</p>
                        <p className="info-value">{info.bio || 'Unavailable'}</p>
                    </div>
                    <div className="info-item">
                        <p className="info-label">LOCATION</p>
                        <p className="info-value">{info.location || 'Unavailable'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}