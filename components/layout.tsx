import useRedirectPage from "../hooks/useRedirectPage";
import Header from "./header";
import RedirectPage from "./redirectPage";
type layoutProp = {
    children: React.ReactNode
}
const Layout = ({ children }: layoutProp) => {
    const redirectPage = useRedirectPage();
    return (
        <div>
            <div>
                {
                    redirectPage.isOpen && <RedirectPage />
                }
                <Header />
            </div>
            {children}
        </div>
    );
}

export default Layout;