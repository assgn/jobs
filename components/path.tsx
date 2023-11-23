import { useRouter } from "next/router";

type pathProps = {
    company: string
}

const Path = ({ company }: pathProps) => {
    const router = useRouter();
    return (
        <div className=" flex font-medium text-neutral-600">
            <p onClick={() => router.back()}>/home</p>
            <p>{`/${company}`}</p>
        </div>
    );
}

export default Path;
