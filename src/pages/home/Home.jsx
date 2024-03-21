import './home.css';
import Header from '../../components/Header.jsx';
import Mid from '../../components/Mid.jsx';
import Footer from '../../components/Footer.jsx';
import 'https://kit.fontawesome.com/cfdb111d3e.js';
import useFetch from '../../hooks/useFetch.js';

function Home(){

    const {data,loading,error}=useFetch("https://nivesha-backend.onrender.com/api/company");
    if(data){
        console.log("Backend Connected Successfully");
    }

    return(
        <>
        <div className="hbody">
        <Header/>
        <Mid/>
        <Footer/>
        </div>
        </>
    )
}

export default Home;