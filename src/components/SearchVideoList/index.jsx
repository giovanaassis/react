import { useEffect, useState } from "react";
import VideoList from "../VideoList";
import styles from "./SearchVideoList.module.css";
import Loader from "../Loader";

function filterVideos(videos, searchText) {
    return videos.filter((video => video.category.includes(searchText) || video.title.includes(searchText)));
}

function SearchVideoList({ videos }) {

    const [ searchText, setSearchText ] = useState("");
    const foundVideos = filterVideos(videos, searchText);

    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 500)
    }, [])

    return(
        <section className={styles.container}>
            <input 
            type="search" 
            placeholder="Pesquisar..."
            value={searchText} 
            onChange={e => setSearchText(e.target.value)}
            />
            {
                loading ? <Loader /> : 
                <VideoList 
                videos={foundVideos}
                emptyHeading={`Sem videos sobre "${searchText}"`}
                />
            }
        </section>
    )
}

export default SearchVideoList;