import Header from "../components/Header";
import TopCards from "../components/TopCards";

export default function Docs() {
    return (
        <main className="bg-gray-100 min-h-screen">
            <Header></Header>
            <TopCards></TopCards>
            <div className="p-4">
                <p>Docs page</p>
            </div>
        </main>
    );
}
