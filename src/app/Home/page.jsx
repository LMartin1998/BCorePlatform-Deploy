import Header from "../Components/Header";
import TopCards from "../Components/TopCards";


export default function MapSite() {
    return (
        <main className="bg-gray-100 min-h-screen">
            <Header></Header>
            <TopCards></TopCards>
            <div className="p-4 grid md:grid-cols-4 grid-cols-1 gap-4">

            </div>
        </main>
    );
}