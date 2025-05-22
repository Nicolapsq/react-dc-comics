export default function Comic({comic}) {
    return (
        <div className="col-6">
            <img src={comic.thumb} alt={comic.title} />
            <h2>{comic.series}</h2>
        </div>
        
    )
}