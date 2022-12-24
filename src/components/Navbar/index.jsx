import './styles.css'
import UserBadge from "../UserBadge";

const Navbar = ({id, nickName, avatarUrl}) => {
    return (
        <div className="cnNavbarRoot">
            <div className="cnNavbarWrapper">
                <span>AzGram</span>
                <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id}/>
            </div>
        </div>
    )
}

export default Navbar