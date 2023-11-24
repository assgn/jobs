import useSWR from "swr";
import fetcher from "../libs/fetch";

type companyDataProps = {
  company: string;
  url: string;
};

type companyObject = {
  company: string;
  title: string;
  link: string;
  type: string;
  location: string;
};

export const useCompany = ({ company, url }: companyDataProps) => {
  const { data, isLoading, error, mutate } = useSWR(url, fetcher);

  let response: companyObject[] = [];
  if (company === "zoho" && !isLoading) {
    data.data.map((ele: any) => {
      const jobName = ele.Job_Opening_Name.toLowerCase();
      if (
        jobName.includes("software") ||
        jobName.includes("dev") ||
        jobName.includes("engineer") ||
        jobName.includes("tech")
      ) {
        const obj: companyObject = {
          company: "Zoho",
          title: ele.Job_Opening_Name,
          link: ele.$url,
          type: ele.Job_Type,
          location: ele.Country1,
        };
        response.push(obj);
      }
    });
  }

  return {
    data: response,
    isLoading,
    error,
    mutate,
  };
};
