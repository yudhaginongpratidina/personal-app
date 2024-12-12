import FormLayout from "@/core/layouts/form.layout"
import FormEditProfile from "../components/form.edit.profile"

export default function EditProfileView() {
    return (
        <FormLayout title={"Profile"} description={"Please update the field you want to edit"}>
            <FormEditProfile />
        </FormLayout>
    )
}