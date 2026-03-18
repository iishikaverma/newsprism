import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsCard from "../components/NewsCard";

const Topics = () => {
    return(
        <div>
            <Header/>
            <div className="flex flex-col  justify-center min-h-[90vh] bg-[#1a1a1a] px-6 text-center">
                <div className="p-6 text-white">
                    <h1 className="text-3xl font-bold mb-6">Browse Topics</h1>               
                
                    <div className="grid grid-cols-4 gap-6 p-6">
                        <NewsCard image="src\assets\poltics.jpg" title="Politics" />
                        <NewsCard image="src\assets\tech.jpg" title="Technology" />
                        <NewsCard image="src\assets\eco.jpg" title="Economy" />
                        <NewsCard image="src\assets\science.jpg" title="Science" />
                        <NewsCard image="src/assets/world.jpg" title="World" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Topics;