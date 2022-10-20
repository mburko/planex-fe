import { Logo } from "./Logo";
import { UserBlock } from './UserBlock';

export const Header = () => {
    return (
        <div className="Header">
            <div id="headerLogo">
                <Logo />
            </div>
            <div id="headerUserBlock">
                <UserBlock name="user"/>
            </div>
        </div>
    )

}