import ErrorLayout from "@/core/layouts/error.layout";

export default function MaintenanceView() {
    return (
        <ErrorLayout>
            <div className="w-full flex flex-col justify-center items-center gap-2.5">
                <h1 className="text-5xl font-semibold">503</h1>
                <h2 className="text-2xl font-semibold">MAINTENANCE</h2>
            </div>
        </ErrorLayout>
    );
}