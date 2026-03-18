import { Link } from "react-router-dom";

const MainComponent = () => {
    return(
        <div className="relative overflow-hidden bg-[#1a1a1a] py-10 lg:py-16">
            <div className="container relative z-10 mx-auto px-4 lg:px-6">

                <img className="rounded-3xl shadow-[#2e368e] shadow-xl/30 " src="src\assets\bg_img.jpg"/>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        See the story from every angle
                    </h1>

                    <p className="max-w-xl text-gray-300 mb-6">
                        Daily curated news with context, perspectives and meaningful insights.
                    </p>

                    <div className="flex gap-4">
                        <Link to="/subscribe">
                        <button className="px-6 py-3 cursor-pointer bg-blue-500 hover:bg-blue-600 rounded-md font-semibold transition">
                            Subscribe
                        </button>
                        </Link>

                        <Link to="/topics">
                        <button className="px-6 py-3 cursor-pointer border border-white hover:bg-white hover:text-black rounded-md font-semibold transition">
                            Explore News
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComponent;