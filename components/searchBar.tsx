const SearchBar = () => {
    return (
        <div>
            <div className=" flex flex-col items-center justify-center gap-2 py-6">
                <h1 className=" text-3xl font-semibold text-neutral-800 select-none">Jobs from</h1>
                <h1 className=" text-6xl font-extrabold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">Everywhere</h1>
            </div>
            <div className=" flex items-center w-full justify-center">
                <div className=" bg-neutral-100 ">
                    <input type="text" name="Search" placeholder="Ex: Zerodha" className=" p-3 w-full border-2 border-e-0 border-neutral-300 bg-transparent font-mavenpro outline-none text-xl font-medium rounded-s-xl focus:border-neutral-600 focus:border-e-0" />
                </div>
                <div>
                    <button className=" p-3 bg-black text-xl border-2 border-neutral-800 text-neutral-300 rounded-e-lg bg-gradient-to-t from-neutral-700 via-neutral-950 to-neutral-900 font-mavenpro"> Search</button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;