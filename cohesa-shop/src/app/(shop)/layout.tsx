import { Sidebar, Topmenu } from "@/components";

export default function ShopLayout({
     children
     }: {children: React.ReactNode;}) {
    return (
        <main className="min-h-screen">
            <Topmenu/>
            <Sidebar/>
            <div className="flex flex-col items-center m-auto p-5">
                {children}
            </div>
            
        </main>
    );
}