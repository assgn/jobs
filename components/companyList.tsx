import { useRouter } from "next/router";

const CompanyList = () => {
    const router = useRouter();
    return (
        <div className="p-6 py-4">
            <h1 className=" text-3xl font-bold border-b-2 border-neutral-300">
                A
            </h1>
            <div className=" py-4 flex flex-wrap gap-4">
                <p className=" text-xl font-semibold text-neutral-900 hover:text-neutral-700 hover:cursor-pointer hover:-translate-y-1" onClick={() => router.push(`/company/apple`)}>
                    apple
                </p>
            </div>
        </div>
    );
}

export default CompanyList;