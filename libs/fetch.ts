import axios from "axios";
import naukriScraper from "../scraper/naukriScraper";
const fetcher = (url: string) => {
    if(url.toLowerCase().includes("naukri.com")){
       return naukriScraper(url).then((data) => data)
    }
    else{
        return axios.get(url).then((res) => res.data)
    }
};

export default fetcher;
