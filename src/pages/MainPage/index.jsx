import Layout from "../../components/Layout";
import DetailedCard from "../../components/DetailedCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getPhotos} from "../../redux/actions/photos";
import InfiniteScroll from "react-infinite-scroll-component";
import "./index.css"
import {Bars} from "react-loader-spinner";

const MainPAge = () => {
    const photos = useSelector(state => state.photos.photos)
    const loading = useSelector(state => state.photos.isPhotosLoading)
    const total = useSelector(state => state.photos.totalPhotos)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getPhotos(page))
    }, [page])

    const nextHandler = () => {
        setPage(page + 1)
    }

    return (
        <Layout nickName="Kamii50" id={1}>
            <div className="cnMainPageRoot">
                {
                    loading ? (<div className="cnMainLoaderContainer">
                            <Bars color="#0008ff" height={80} width={80}/>
                        </div>) :
                        <InfiniteScroll
                            dataLength={photos.length}
                            next={nextHandler}
                            hasMore={photos.length < total}
                            loader={<div className="cnMainLoaderContainer">
                                <Bars color="#0008ff" height={15} width={15}/>
                            </div>}
                            endMessage={
                                <p className="cnMainLoaderContainer">Thats all</p>
                            }
                        >
                            {photos.map(({author, id, imgUrl, likes, comments}) => (
                                <DetailedCard
                                    key={id}
                                    userName={author.nickname}
                                    userId={author.id}
                                    imgUrl={imgUrl}
                                    avatarUrl={author.avatarUrl}
                                    likes={likes.length}
                                    isLikeByYou={true}
                                    comments={comments}
                                    className="cnMainPageCard"
                                />
                            ))}
                        </InfiniteScroll>
                }

            </div>
        </Layout>
    )
}

export default MainPAge