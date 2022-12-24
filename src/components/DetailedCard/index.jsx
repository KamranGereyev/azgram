import React, {useState} from "react"
import "./styles.css"
import UserBadge from "../UserBadge";
import Comment from "../Comment";
import cn from "classnames";
import {nanoid} from "nanoid";

const DetailedCard = ({userName, avatarUrl, userId, imgUrl, likes, isLikeByYou, comments, className}) => {
    const [isCommentsShown, setIsCommentsShown] = useState(false)

    const renderComments = () => {
        if (comments.length > 2 && !isCommentsShown) {
            const commentCopy = [...comments];
            const commentForRender = commentCopy.splice(comments.length - 2, 2)

            return (
                <>
                    <span className="cnDetailedCardCommentTittle"
                          onClick={() => setIsCommentsShown(true)}>{`Показать еше ${comments.length - commentForRender.length} комментариев`}</span>
                    {commentForRender.map((comment) => <Comment {...comment} key={nanoid()}/>)}
                </>
            )
        }

        return comments.map((comment) => <Comment {...comment} key={nanoid()}/>)


    }
    return (
        <div className={cn("cnDetailedCardRoot", className)}>
            <div className="cnDetailedCardHeader">
                <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId}/>
            </div>
            <div>
                <img src={imgUrl} alt="img" className="cnDetailedCardImage"/>
            </div>
            <div className="cnDetailedCardButtons">
                <i className={`${isLikeByYou ? "fas" : "far"} fa-heart cnDetailedCardIcon`}/>
                <i className="fas fa-comment cnDetailedCardComment"/>
            </div>
            <div className="cnDetailedCardLikes">
                {`Оценили ${likes} человек`}
            </div>
            <div className="cnDetailedCardComments">
                {/*{comments.map((comment) => <Comment nickName={comment.nickName} text={comment.text}/>)}*/}
                {/*{comments.map((comment) => <Comment {...comment}/>)}*/}


                {renderComments()}
            </div>
            <textarea className="cnDetailedCardTextArea"/>
        </div>
    )
}

export default DetailedCard