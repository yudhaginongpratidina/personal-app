import ErrorLayout from "@/core/layouts/error.layout";

export default function NotFoundView() {
    return (
        <ErrorLayout>
            <div className="w-full flex flex-col justify-center items-center gap-2.5">
                <h1 className="text-5xl font-semibold">404</h1>
                <h2 className="text-2xl font-semibold">PAGE NOT FOUND</h2>
            </div>
        </ErrorLayout>
    );
}