import ArticleCard from "@/components/UI/ArticleCard";
import Button from "@/components/UI/Button";

export default function Page() {
    return (
        <div className="w-full flex flex-col gap-4">
            <ArticleCard
                href="/"
                title="Harga Bitcoin hari ini: naik ke $94,5 ribu; siap untuk kenaikan mingguan di tengah pembicaraan perdagangan Trump"
                author="Investing.com"
                content='
                Investing.com — Bitcoin menguat pada hari Jumat dan berada di jalur untuk mencatat kenaikan mingguan yang kuat, 
                didukung oleh reli tajam di awal pekan setelah adanya sinyal bahwa Presiden AS Donald Trump mungkin mengadopsi 
                sikap yang lebih lunak terhadap tarif perdagangan.
                '
            />
            <ArticleCard
                href="/"
                title="Harga Bitcoin hari ini: naik ke $94,5 ribu; siap untuk kenaikan mingguan di tengah pembicaraan perdagangan Trump"
                author="Investing.com"
                content='
                Investing.com — Bitcoin menguat pada hari Jumat dan berada di jalur untuk mencatat kenaikan mingguan yang kuat, 
                didukung oleh reli tajam di awal pekan setelah adanya sinyal bahwa Presiden AS Donald Trump mungkin mengadopsi 
                sikap yang lebih lunak terhadap tarif perdagangan.
                '
            />
            <div className="w-full flex justify-center items-center gap-4">
                <Button
                    type="button"
                    name="Previous"
                    className="bg-black text-white hover:bg-gray-800"
                />
                <div className="flex items-center gap-3">
                    {[1, 2, 3].map((num) => (
                        <Button
                            key={num}
                            type="button"
                            name={num.toString()}
                            className="bg-black text-white hover:bg-gray-800"
                        />
                    ))}
                </div>
                <Button
                    type="button"
                    name="Next"
                    className="bg-black text-white hover:bg-gray-800"
                />
            </div>
        </div>
    );
}