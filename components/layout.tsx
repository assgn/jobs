import Header from "./header";
type layoutProp = {
    children: React.ReactNode
}
const Layout = ({ children }: layoutProp) => {
    return (
        <div>
            <div>
                <Header />
            </div>
            {children}
        </div>
    );
}

export default Layout;
<div></div>