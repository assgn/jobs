import { companies } from "../data/company";
import CompanyListItem from "./companyListItem";
const CompanyList = () => {
    return (
        <>
            {companies.map((ele) => {
                return (
                    <CompanyListItem key={ele.character} character={ele.character} companyList={ele.companyList} />
                )
            })}
        </>
    );
}

export default CompanyList;