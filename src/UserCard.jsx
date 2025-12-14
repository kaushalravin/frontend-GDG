import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './UserCard.css';

export default function UserCard({ login = "octocat" }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`https://api.github.com/users/${login}`);
                const info = await response.json();
                setData(info);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setLoading(false);
            }
        }
        getData();
    }, [login]);
    
    if (loading) {
        return (
            <div className="loading-container">
                Loading...
            </div>
        );
    }
    
    return (
        <div className="main-card">
            <div className="card-content">
                <div className="info-item">
                    <p className="info-label">USERNAME</p>
                    <p className="info-value">{data.login}</p>
                </div>
                <div className="info-item">
                    <p className="info-label">TYPE</p>
                    <p className="info-value">{data.type}</p>
                </div>
                <div className="info-item">
                    <p className="info-label">GITHUB ID</p>
                    <p className="info-value">{data.id}</p>
                </div>
            </div>
            <div className="card-footer">
               <Link
                    className="card-link"
                    to={`/users/${data.login}`}
                >
                    View Profile
                </Link>
            </div>
        </div>
    );
}