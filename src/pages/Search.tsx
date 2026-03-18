import Header from "../components/Header";

const Search = () => {
    return(
        <div>
            <Header/>
            <div className="flex flex-col items-center justify-center min-h-[90vh] bg-[#1a1a1a] px-6 text-center">
            Allows users to search:

            topics

            keywords

            stories

            sources

            This becomes important once the news feed grows.
            </div>
        </div>
    )
}

export default Search;