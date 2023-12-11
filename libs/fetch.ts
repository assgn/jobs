import axios from "axios";
const fetcher = (url: string) => {
    if(url.toLowerCase().includes("naukri.com")){
        return fetch('/api/scraper', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: url }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    return data;
                } else {
                console.error('Error:', data.error);
            }
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
    }
    else{
        return axios.get(url).then((res) => res.data)
    }
};

export default fetcher;
