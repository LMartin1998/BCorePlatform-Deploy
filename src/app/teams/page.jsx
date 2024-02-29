import Header from "../components/Header";
import TopCards from "../components/TopCards";

export default function Teams() {
    return (
        <main className="bg-gray-100 min-h-screen">
            <Header></Header>
            <TopCards></TopCards>
            <div className="p-4">
                <p>Teams page</p>
            </div>
        </main>
    );
}
