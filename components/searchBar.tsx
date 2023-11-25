import { useCallback, useState } from "react";
import { companies } from "../data/company";
import CompanyList from "./companyList";
import { useRouter } from "next/router";


const resultFilter = (query: string) => {
    const data = companies.map((ele) => {
        return ele.companyList.filter((company) => {
            return (company.name.includes(query))
        })
    })
    const response = data.filter((ele) => {
        return (ele.length != 0)
    })
    return response
}

const SearchBar = () => {

    const [searchString, setSearchString] = useState("");

    const router = useRouter();
    const data = resultFilter(searchString)
    return (
        <div >
            <div className=" flex flex-col items-center justify-center gap-2 py-6">
                <h1 className=" text-3xl font-semibold text-neutral-800">Jobs from</h1>
                <h1 className=" text-6xl font-extrabold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">Worldwide</h1>
            </div>
            <div className=" flex items-center w-full justify-center">
                <div className=" bg-neutral-100 ">
                    <input type="text" name="Search" placeholder="Search Company" className=" p-3 w-full border-2 border-e-0 border-neutral-300 bg-transparent font-mavenpro outline-none text-xl font-medium rounded-s-xl focus:border-neutral-600 focus:border-e-0" onChange={(e) => setSearchString(e.target.value)} />
                </div>
                <div>
                    <button className=" p-3 bg-black text-xl border-2 border-neutral-800 text-neutral-300 rounded-e-lg bg-gradient-to-t from-neutral-700 via-neutral-950 to-neutral-900 font-mavenpro"> Search</button>
                </div>
            </div>
            {
                searchString && <div>

                    {
                        (data.length == 0) ?
                            <div className=" px-6 py-3 m-3 text-lg font-normal text-neutral-800">
                                No results found
                            </div>
                            :
                            <div className=" px-6 py-3 m-3">
                                {
                                    data.map((ele: any, index) => {
                                        return (
                                            <div className=" flex gap-4 py-2" key={index}>
                                                {

                                                    ele.map((company: any) => {
                                                        return (
                                                            <p className=" text-xl font-medium text-neutral-800 hover:text-neutral-700 hover:cursor-pointer hover:-translate-y-1" key={company.name} onClick={() => router.push({
                                                                pathname: `/company/${company.name}`,
                                                                query: {
                                                                    link: company.link
                                                                }
                                                            })}>
                                                                {company.name}
                                                            </p>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                    }
                </div>
            }
            <CompanyList />
        </div >
    );
}

export default SearchBar;