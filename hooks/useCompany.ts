import useSWR from "swr";
import fetcher from "../libs/fetch";

type companyDataProps = {
  company: string;
  url: string;
};

export const useCompany = ({ company, url }: companyDataProps) => {
  const { data, isLoading, error, mutate } = useSWR(url, fetcher);

  let filteredData;
  if (company === "zoho") {
  }

  return {
    data: filteredData,
    isLoading,
    error,
    mutate,
  };
};
