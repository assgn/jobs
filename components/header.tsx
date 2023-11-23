import Image from "next/image";
import premium from "../public/premium.svg";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
    return (
        <div className=' flex justify-between items-center p-6 z-50'>
            <div className='flex gap-1 items-end' onClick={() => router.push('/')}>
                <h1 className=' font-extrabold text-3xl text-neutral-900'>
                    futech
                </h1>
                <h1 className=' font-semibold text-base text-neutral-500'>
                    jobs
                </h1>
            </div>
            <div className=' flex items-center justify-between gap-2 text-xl font-bold text-yellow-700 bg-yellow-300 p-2 rounded-2xl border-2 border-yellow-600 hover:cursor-pointer'>
                premium
                <Image src={premium} alt="premium" height={20} width={20} />
            </div>
        </div>
    );
}

export default Header;