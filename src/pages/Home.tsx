import Footer from "../components/Footer";
import Header from "../components/Header";
import MainComponent from "../components/MainComponent";
import SecondaryComponent from "../components/SecondaryComponent";


const Home = () => {
    return(
        <div>
            <Header/>
            <MainComponent/>
            <SecondaryComponent/>
            <Footer/>
        </div>
    )
}

export default Home;