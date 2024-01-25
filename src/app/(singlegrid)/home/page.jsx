import Header from "../../components/Header";
import { MapSite } from "../../components/MapSite";
import TopCards from "../../components/TopCards";


export default function Home() {
    return (
        <main className="bg-gray-100 min-h-screen">
            <Header></Header>
            <TopCards></TopCards>
            <div className="p-4">
                <MapSite></MapSite>
            </div>
        </main>
    );
}