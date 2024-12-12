import { Form, FormBody } from "@/core/ui/Form"
import Input from "@/core/ui/Input"
import TextArea from "@/core/ui/TextArea"
import { ButtonUpdate } from "@/core/ui/Button"

export default function FormEditProfile() {
    return (
        <form>
            <Form>
                <FormBody>
                    <Input
                        id={"firstName"}
                        type={"text"}
                        label={"First Name"}
                        placeholder={"First Name"}
                    />
                    <Input
                        id={"lastName"}
                        type={"text"}
                        label={"Last Name"}
                        placeholder={"Last Name"}
                    />
                    <TextArea
                        id={"bio"}
                        label={"Bio"}
                        placeholder={"Bio"}
                    />
                    <Input
                        id={"social_media_github"}
                        type={"url"}
                        label={"Github"}
                        placeholder={"Github"}
                    />
                    <Input
                        id={"social_media_linkedin"}
                        type={"url"}
                        label={"LinkedIn"}
                        placeholder={"LinkedIn"}
                    />
                    <ButtonUpdate type="submit">Update</ButtonUpdate>
                </FormBody>
            </Form>
        </form>
    )
}