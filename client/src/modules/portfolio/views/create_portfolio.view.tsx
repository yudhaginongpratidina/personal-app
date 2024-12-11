import FormLayout from "@/core/layouts/form.layout"
import FormCreatePortfolio from "../components/form.create.portolio"

export default function CreatePortfolioView() {
    return (
        <FormLayout title={"Portfolio"} description={"Please fill in the form to create a new portfolio"}>
            <FormCreatePortfolio />
        </FormLayout>
    )
}