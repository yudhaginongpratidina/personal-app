// LAYOUT
import MainLayout from "../../../layouts/Main";

// UI COMPONENT
import { Form, FormControl } from "../../../ui/Form";
import Label from "../../../ui/Label";
import Input from "../../../ui/Input";
import TextArea from "../../../ui/TextArea";
import Button from "../../../ui/Button";

export default function CreateProject() {
    return (
        <MainLayout>
            <div className="w-full min-h-screen py-16 bg-gray-200">
                <div className="w-full container flex flex-col gap-4">
                    <div className="w-full py-2.5 flex items-center justify-between border-b border-black">
                        <h1 className="text-lg font-semibold">CRATE PROJECT</h1>
                    </div>
                    <form className="w-full flex flex-col gap-4 bg-white">
                        <div className="w-full p-2.5 bg-black text-white">
                            <h1 className="text-lg font-semibold">General Information</h1>
                            <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <Form className="w-full p-2.5">
                            <FormControl>
                                <Label htmlFor="projectName" required>Name</Label>
                                <Input id="projectName" placeholder="Project Name" type="text" />
                            </FormControl>
                            <FormControl>
                                <Label htmlFor="projectDescription" required>Description</Label>
                                <TextArea id="projectDescription" placeholder="Project Description" />
                            </FormControl>
                        </Form>

                        <div className="w-full p-2.5 bg-black text-white">
                            <h1 className="text-lg font-semibold">Tech Information</h1>
                            <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <Form className="w-full p-2.5">
                            <FormControl>
                                <Label htmlFor="frontEnd" required>Front End</Label>
                                <Input id="frontEnd" placeholder="Front End Technology" type="text" />
                            </FormControl>
                            <FormControl>
                                <Label htmlFor="backEnd" required>Back End</Label>
                                <Input id="backEnd" placeholder="Front End Technology" type="text" />
                            </FormControl>
                        </Form>

                        <div className="w-full p-2.5 bg-black text-white">
                            <h1 className="text-lg font-semibold">Links</h1>
                            <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <Form className="w-full p-2.5">
                            <FormControl>
                                <Label htmlFor="frontEnd" required>GitHub</Label>
                                <Input id="frontEnd" placeholder="Front End Technology" type="text" />
                            </FormControl>
                            <FormControl>
                                <Label htmlFor="backEnd" required>Deploy</Label>
                                <Input id="backEnd" placeholder="Front End Technology" type="text" />
                            </FormControl>
                        </Form>

                        <div className="p-2.5">
                            <Button type="submit" variant={"default"}>Create Project</Button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}