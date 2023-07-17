import { useEffect } from "react";

export default function Contact(){
    useEffect(function(){
        document.title = 'Contact';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Contact</h1>
            <p className="section-description">Kamu dapat menghubungiku melalui kontak dibawah ini:</p>
            <ul>
                <li>WA: 089697558350</li>
                <li>Email: andixray123@gmail.com</li>
            </ul>
            <p className="section-description">Atau Kamu dapat melihatku melalui sosmmed saya</p>
            <ul>
                <li><a href="https://facebook.com">Facebook</a></li>
                <li><a href="https://twitter.com">Twitter</a></li>
            </ul>
        </section>
    );
}