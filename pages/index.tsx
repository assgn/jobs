import CompanyList from "../components/companyList"
import SearchBar from "../components/searchBar"

const Home = () => {
  return (
    <div className=" font-mavenpro py-5">
      <SearchBar />
      <CompanyList />
    </div>
  )
}

export default Home
