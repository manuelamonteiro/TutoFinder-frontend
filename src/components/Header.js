import { BiArrowFromLeft } from "react-icons/bi";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import { HeaderContainer } from "../assets/ComponentsContainers-style";

export default function Header() {
    const { setConfig } = useContext(AuthContext);
    let navigate = useNavigate();

    function logout() {
        localStorage.clear();
        setConfig(null);
        navigate("/");
    }

    return (
        <HeaderContainer>
            <h1>TutoFinder</h1>
            <BiArrowFromLeft size="32px" color="white" onClick={() => logout()} cursor="pointer"/>
        </HeaderContainer>
    );
}