import FormLayout from "@/core/layouts/form.layout"
import FormEditPortfolio from "../components/form.edit.portfolio"

export default function EditPortfolioView() {
    return (
        <FormLayout title={"Portfolio"} description={"Please update the field you want to edit"}>
            <FormEditPortfolio />
        </FormLayout>
    )
}