import {NavLink, type NavLinkRenderProps} from "react-router";

interface NavlinkProps {
    children: React.ReactNode;
    location: string;
}

function calcStyles(isActive: boolean) {
    return isActive ? "text-blue-600" : "text-white";
}

const DefaultNavlink= ({children, location}: NavlinkProps ) => {
    return (
        <NavLink
            to={location}
            end
            className={({ isActive }: NavLinkRenderProps): string => calcStyles(isActive)}
        >
            {" "}
            {children}
        </NavLink>
    );
};

export default DefaultNavlink