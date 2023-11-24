import { useRouter } from "next/router";

type companyListObject = {
    name: string
    link: string
}

type companyItemProps = {
    character: string,
    companyList: Array<companyListObject>
}
type showCompanyListProp = {
    companyList: Array<companyListObject>
}

const ShowCompanyList = ({ companyList }: showCompanyListProp) => {
    const router = useRouter();
    return (
        <>
            {
                companyList.map((company) => {
                    return (
                        <p className=" text-xl font-bold text-neutral-800 hover:text-neutral-700 hover:cursor-pointer hover:-translate-y-1" key={company.name} onClick={() => router.push({
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
        </>
    )
}

const CompanyListItem = ({ character, companyList }: companyItemProps) => {
    return (
        <div className="p-6 py-4">
            <h1 className=" text-3xl font-bold border-b-2 border-neutral-300">
                {character}
            </h1>
            <div className=" py-4 flex flex-wrap gap-4 px-2">
                <ShowCompanyList companyList={companyList} />
            </div>
        </div>
    );
}

export default CompanyListItem;