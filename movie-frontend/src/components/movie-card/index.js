import './movie-card.css';

export default function MovieCard({
    poster, 
    title,
    releasedOn,
    overview
}){
    return (
        <div className="genre-row-card">
            <img src={poster} />
            <div className="genre-row-card-footer">
                <span>{title}</span>
                <p>Released on: {releasedOn}</p>
                <br />
                <p>{overview}</p>
            </div>
        </div>
    );   
}