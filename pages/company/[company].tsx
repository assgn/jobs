import { useRouter } from "next/router";
import Image from "next/image";
import locationSVG from "../../public/location.svg"
import Path from "../../components/path";
import RedirectPage from "../../components/redirectPage";
import useRedirectPage from "../../hooks/useRedirectPage";

const CompanyPage = () => {
    const router = useRouter();
    const redirectPage = useRedirectPage();
    const { company } = router.query;
    const openRedirect = () => {
        redirectPage.onOpen()
    }
    return (
        <div className=" py-8 font-mavenpro p-6">
            <Path />
            <h1 className=" text-5xl font-bold text-neutral-900">
                {company}
            </h1>

            <div className=" py-6 flex flex-col gap-6">

                <div className="p-6 bg-gradient-to-br from-neutral-100 from-30% to-neutral-300 rounded-lg">
                    <div className=" flex justify-between">
                        <p className=" font-semibold text-neutral-700">
                            full-time
                        </p>
                        <div className=" text-neutral-500 font-medium flex gap-2">
                            <Image src={locationSVG} alt="loaction" height={15} width={15} />
                            <p>India</p>
                        </div>
                    </div>
                    <h1 className=" text-2xl font-semibold text-neutral-900 py-4">
                        Software Engineer 1
                    </h1>
                    <div className=" flex justify-end items-center pt-3">
                        <button className="p-2 px-5 text-xl rounded-lg tracking-wider text-neutral-100 font-medium bg-gradient-to-tl from-neutral-700 via-neutral-900 to-neutral-700 drop-shadow-lg" onClick={openRedirect}>apply</button>
                    </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-neutral-100 from-30% to-neutral-300 rounded-lg">
                    <div className=" flex justify-between">
                        <p className=" font-medium text-neutral-700">
                            full-time
                        </p>
                        <div className=" text-neutral-500 font-medium flex gap-2">
                            <Image src={locationSVG} alt="loaction" height={15} width={15} />
                            <p>India</p>
                        </div>
                    </div>
                    <h1 className=" text-2xl font-semibold text-neutral-900 py-4">
                        Software Engineer 1
                    </h1>
                    <div className=" flex justify-end items-center pt-3">
                        <button className="p-2 px-5 text-xl rounded-lg tracking-wider text-neutral-100 font-medium bg-gradient-to-tl from-neutral-700 via-neutral-900 to-neutral-700 drop-shadow-lg" onClick={openRedirect}>apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyPage;