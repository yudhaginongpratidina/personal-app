import ProfileLayout from "@/core/layouts/profile.layout"
import CardProfile from "../components/card.profile"

export default function ProfileView() {
    return (
        <ProfileLayout title={"Profile"} description={"This is your profile"}>
            <CardProfile />
        </ProfileLayout>
    )
}