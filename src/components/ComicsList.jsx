import comics from "../../dc-comics-list/comics";
import Comic from "./Comic";


export default function ComicsList() {
    const comicsList = comics.map((comic) => (
        <Comic comic={comic} key={comic.id}></Comic>
    ));
    return comicsList;
}