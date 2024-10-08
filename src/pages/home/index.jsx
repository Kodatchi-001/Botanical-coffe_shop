import Footer from "../../components/layout/Footer/footer";
import Section1 from "../../components/home/section-1";
import Section2 from "../../components/home/section-2";
import Section3 from "../../components/home/section-3";
import Section_4 from "../../components/home/section-4";
import Section_5 from "../../components/home/section-5";
import Section_6 from "../../components/home/section-6";
import { useEffect } from "react";

export default function Home_Page() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return <>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section_4 />
        <Section_5 />
        <Section_6 />
        <Footer />
    </>
}