import Image from "next/image";
import premium from "../public/premium.svg"
import useRedirectPage from "../hooks/useRedirectPage";
import RedirectingTimer from "./redirectingTimer";

type redirectProps = {
    company: string
    role: string
    link: string
}



const RedirectPage = () => {
    const redirectPage = useRedirectPage();
    const closeRedirectPage = () => {
        redirectPage.onClose();
    }
    return (
        <div className=" fixed flex justify-center items-center bg-neutral-900/30 h-full w-screen font-mavenpro z-10">
            <div className=" flex flex-col items-center px-8 bg-neutral-50 rounded-lg border-2 border-neutral-950">
                <div className=" flex flex-col gap-2 items-center py-12">
                    <p className=" text-lg font-semibold">
                        Apply with confidence for
                    </p>
                    <h1 className=" text-3xl font-bold">
                        {redirectPage.positionName}
                    </h1>
                    <p className=" text-lg font-semibold text-neutral-600">
                        at <span className=" text-neutral-900 ">{redirectPage.companyName}</span>
                    </p>
                </div>
                <div className=' flex items-center justify-between gap-2 text-xl font-bold text-yellow-700 bg-yellow-300 p-2 rounded-2xl border-2 border-yellow-600 hover:cursor-pointer'>
                    get referral
                    <Image src={premium} alt="premium" height={20} width={20} />
                </div>

                <div className=" flex items-center gap-20 py-4">
                    <div onClick={closeRedirectPage}>
                        <p className=" font-semibold">go back</p>
                    </div>
                    <div>
                        <RedirectingTimer seconds={7} link={redirectPage.openLink} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RedirectPage;