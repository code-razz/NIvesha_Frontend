import './home.css';
import Header from '../../components/Header.jsx';
import Mid from '../../components/Mid.jsx';
import Footer from '../../components/Footer.jsx';
import 'https://kit.fontawesome.com/cfdb111d3e.js';
import useFetch from '../../hooks/useFetch.js';

function Home(){

    const {data,loading,error}=useFetch("https://nivesha-backend.onrender.com/api/company");
    if (data === undefined || data === null || data.length === 0) {
        console.log("Connecting to the backend");
    }else{
        console.log("inside",data);
        console.log("Backend Connected Successfully");
    }
    console.log("outside",data);

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