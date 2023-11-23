import { useRouter } from "next/router";

const Path = () => {
    const router = useRouter();
    const back = "- go back"
    return (
        <div className=" flex font-medium text-neutral-600">
            <p onClick={() => router.back()}>{back}</p>
        </div>
    );
}

export default Path;
