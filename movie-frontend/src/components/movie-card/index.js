import './movie-card.css';

export default function MovieCard({
    poster, 
    title,
    overview
}){
    return (
        <div className="genre-row-card">
            <img src={poster} />
            <div className="genre-row-card-footer">
                <span>{title}</span>
                <p>{overview}</p>
            </div>
        </div>
    );   
}