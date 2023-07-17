import { useEffect } from "react";

export default function Home(){
    useEffect(function(){
        document.title = 'Home';
    }, []);
    
    return (
        <section className="section">
            <h1 className="section-title">Selamat Datang di Website Qu</h1>
            <p className="section-description">Kamu dapat memperoleh informasi seputar dengan profile yang saya miliki disini, salah kenal..</p>
        </section>
    );
}