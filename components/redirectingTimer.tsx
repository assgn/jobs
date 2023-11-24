import { useEffect, useState } from "react";
import useRedirectPage from "../hooks/useRedirectPage";

type redirectProps = {
    seconds: number
    link: string
}

const RedirectingTimer = ({ seconds, link }: redirectProps) => {
    const totalWaitTime = seconds + 1;
    const [time, setTime] = useState(0);
    const redirectPage = useRedirectPage();
    const timer = () => {
        const sec = new Date();
        setTime(sec.getSeconds());
    }

    useEffect(() => {
        const interval = setInterval(() => {
            timer()
        }, 1000)
        return () => clearInterval(interval);
    }, [])

    const currentWaitTime = (totalWaitTime - 1) - time % totalWaitTime;
    if (currentWaitTime == 0) {
        redirectPage.onClose();
        window.open(link)
    }
    return (
        <div className="">
            redirecting in {currentWaitTime}...
        </div>
    );
}

export default RedirectingTimer;