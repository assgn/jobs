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
    console.log(data)
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
  if (company === "amazon" && !isLoading) {
    console.log(data)
    data.data.map((ele: any) => {
        const obj: companyObject = {
          company: "Amazon",
          title: ele.title,
          link: ele.applyLink,
          type: ele.experience,
          location: ele.location,
        };
        response.push(obj);
    });
  }

  if (company === "cred" && !isLoading) {
    data.map((ele: any) => {
      const obj: companyObject = {
        company: "Cred",
        title: ele.text,
        link: ele.applyUrl,
        type: ele.categories.commitment,
        location: ele.country,
      };
      response.push(obj);
    });
  }

  return {
    data: response,
    isLoading,
    error,
    mutate,
  };
};
