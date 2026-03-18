import Footer from "../components/Footer";
import Header from "../components/Header";

const Subscribe = () => {
    return(
        <div>
            <Header/>
            <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-900 px-6 text-center">
        
                <h2 className="text-4xl font-bold text-white">
                    Subscribe to Newsprism
                </h2>

                <p className="mt-3 max-w-md text-gray-400">
                    Get the most important news of the day with context and multiple perspectives.
                </p>

                <div className="mt-6 flex w-full max-w-md gap-3">
                    <input type="email" placeholder="Enter your email"
                    className="flex-1 rounded-md bg-gray-800 px-4 py-2 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button className="rounded-md bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-400 transition">
                        Subscribe
                    </button>
                </div>

                <p className="mt-3 text-sm text-gray-500">
                    No spam. One email per day.
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default Subscribe;