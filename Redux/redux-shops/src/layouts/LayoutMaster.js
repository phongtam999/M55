import Header from "../includes/Header";
import Footer from "../includes/Footer";
import Sidebar from "../includes/Sidebar";
export default function LayoutMaster({ children }) {
    const username = 'NVA';
    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    {children}
                </div>
            </section>
        </>
    );
}
