import { useRouter } from "next/router";
import Image from "next/image";
import locationSVG from "../../public/location.svg"
import Path from "../../components/path";
import useRedirectPage from "../../hooks/useRedirectPage";
import { useCompany } from "../../hooks/useCompany";


type companyObject = {
    company: string
    title: string
    link: string
    type: string
    location: string
}

type RoleCardProp = {
    jobs: Array<companyObject>
}

const RoleCard = ({ jobs }: RoleCardProp) => {
    const redirectPage = useRedirectPage();
    const openRedirect = (companyName: string, role: string, link: string) => {
        redirectPage.setCompanyDetails(companyName, role, link);
        redirectPage.onOpen()
    }
    return (
        <>
            {
                jobs.map((job) => {
                    return (
                        <div key={job.title} className="p-6 bg-gradient-to-br from-neutral-100 from-30% to-neutral-300 rounded-lg">
                            <div className=" flex justify-between">
                                <p className=" font-semibold text-neutral-700">
                                    {job.type}
                                </p>
                                <div className=" text-neutral-500 font-medium flex gap-2">
                                    <Image src={locationSVG} alt="loaction" height={15} width={15} />
                                    <p>{job.location}</p>
                                </div>
                            </div>
                            <h1 className=" text-2xl font-semibold text-neutral-900 py-4">
                                {job.title}
                            </h1>
                            <div className=" flex justify-end items-center pt-3">
                                <a href={job.link} target="_black">
                                    <button className="p-2 px-5 text-xl rounded-lg tracking-wider text-neutral-100 font-medium bg-gradient-to-tl from-neutral-700 via-neutral-900 to-neutral-700 drop-shadow-lg">apply</button>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}


const CompanyPage = () => {
    const router = useRouter();
    const { company, link } = router.query;

    const companyProp = {
        company: company as string,
        url: link as string
    }

    const { data, isLoading } = useCompany(companyProp);
    return (
        <div className=" py-8 font-mavenpro p-6">
            <Path />
            <h1 className=" text-5xl font-bold text-neutral-900">
                {company}
            </h1>
            <div className=" flex justify-center py-5 font-bold text-neutral-600">
                {
                    data.length ?
                        <>
                            {
                                data.length == 1 ?
                                    <div>
                                        {data.length} job found
                                    </div>
                                    :
                                    <div>
                                        {data.length} jobs found
                                    </div>
                            }
                        </>
                        :
                        <div>
                            no jobs found
                        </div>
                }
            </div>
            <div className=" py-6 flex flex-col gap-6">
                {
                    !isLoading && <RoleCard jobs={data} />
                }
                {
                    isLoading &&
                    <div className=" flex h-44 items-center justify-center font-semibold">
                        Loading...
                    </div>
                }
            </div>
        </div>
    );
}

export default CompanyPage;