"use client"
import { useState } from "react";
import { FaSearch, FaTrash, FaEye, FaEdit, FaGithub, FaGlobe } from "react-icons/fa";

// ui
import ResponseMessage from "@/ui/ResponseMessage";
import UploadField from "@/ui/UploadField";
import { Form, FormSplit } from "@/ui/Form";
import IconButton from "@/ui/IconButton";
import TextField from "@/ui/TextField";
import TextArea from "@/ui/TextArea";
import Select from "@/ui/Select";
import Button from "@/ui/Button";
import Modal from "@/ui/Modal";

type FormDataType = {
    id?: number,
    title: string,
    tech_stack: string,
    description: string,
    repository: string,
    website: string,
    category: string,
    status: string,
    file: File[];
}

const initialFormData: FormDataType = {
    id: undefined,
    title: "",
    tech_stack: "",
    description: "",
    repository: "",
    website: "",
    category: "",
    status: "",
    file: [],
}

export default function Portfolio() {

    const [formTitle, setFormTitle] = useState<string>("");
    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState({ isError: false, isLoading: false, message: "" } as { isError: boolean, isLoading: boolean, message: string });
    const [modalForm, setModalForm] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");

    const [modalConfirmDelete, setConfirmDelete] = useState<boolean>(false);
    const [dataId, setDataId] = useState<number | null>(null);

    const handleShowModal = async (type: "create" | "edit", id?: number) => {
        try {
            setFormTitle(type === "create" ? "create" : "edit");
            setModalForm(true);

            if (type === "create") {
                setFormData(initialFormData);
            } else {
                console.log(id);
                setFormData((prev) => ({ ...prev, id }));
            }
        } catch (error: any) {
            const errorMessage = error?.response?.data?.message || error?.response?.data[0]?.message || "An error occurred";
            displayMessage(true, errorMessage);
        }

    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const hnadleFileChange = (files: File[]) => {
        setFormData((prev) => ({ ...prev, file: files }));
    }

    const displayMessage = (isError: boolean, message: string) => {
        setStatus({ isError, isLoading: false, message });
        setTimeout(() => setStatus({ isError: false, isLoading: false, message: "" }), 4000);
    };

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log(`Searching for: ${search}`);
        } catch (error: any) {
            const errorMessage = error?.response?.data?.message || error?.response?.data[0]?.message || "An error occurred";
            displayMessage(true, errorMessage);
        }
    }

    const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log(formData);
            displayMessage(false, "Portfolio created successfully");
        } catch (error: any) {
            const errorMessage = error?.response?.data?.message || error?.response?.data[0]?.message || "An error occurred";
            displayMessage(true, errorMessage);
        }
    }

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { id, ...data } = formData;
            console.log(id, data);
            displayMessage(false, "Portfolio updated successfully");
        } catch (error: any) {
            const errorMessage = error?.response?.data?.message || error?.response?.data[0]?.message || "An error occurred";
            displayMessage(true, errorMessage);
        }
    }

    const handleShowModalDelete = (id: number) => {
        setConfirmDelete(true);
        setDataId(id);
    }

    const handleDelete = async (id: number, e: any) => {
        e.preventDefault();
        try {
            console.log(id);
            displayMessage(false, "Portfolio deleted successfully");
        } catch (error: any) {
            const errorMessage = error?.response?.data?.message || error?.response?.data[0]?.message || "An error occurred";
            displayMessage(true, errorMessage);
        }
    }


    return (
        <>
            <div className="w-full flex flex-col gap-0.5">
                <h1 className="text-2xl font-semibold uppercase">portfolio</h1>
                <p className="text-sm text-justify text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
            <ResponseMessage message={status.message} isError={status.isError} />
            <div className="w-full flex justify-between items-center">
                <div>
                    <Form onSubmit={handleSearch}>
                        <TextField
                            name="search"
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            prefixIcon={<FaSearch className="w-4 h-4" />}
                            hideLabel={true}
                        />
                    </Form>
                </div>
                <div className="w-fit flex items-center gap-2">
                    <Button name={"new"} type={"button"} fullWidth={false} color={"primary"} onClick={(e) => handleShowModal("create")} />
                </div>
            </div>
            <div className="w-full p-1 pt-0 max-h-[60vh] overflow-auto flex flex-col gap-4 rounded-sm bg-white">
                <table className="w-full max-h-[40vh] overflow-auto">
                    <thead className="w-full sticky top-0 bg-white">
                        <tr className="w-full capitalize border-y border-gray-300 bg-black text-white">
                            <td className="w-fit p-2 text-center">no</td>
                            <td className="p-2">title</td>
                            <td className="p-2">status</td>
                            <td className="w-[100px] p-2 text-center">action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 100 }, (_, index) => (
                            <tr key={index} className="border-y border-gray-300">
                                <td className="w-fit p-2 text-center">{index + 1}</td>
                                <td className="p-2">{`Title ${index + 1}`}</td>
                                <td className="p-2">
                                    {index % 2 === 0 ? (
                                        <span className="text-green-600 font-semibold">Production</span>
                                    ) : (
                                        <span className="text-orange-600 font-semibold">Staging</span>
                                    )}
                                </td>
                                <td className="w-[100px] p-2 text-center">
                                    <div className="flex justify-center items-center gap-2">
                                        <IconButton
                                            icon={<FaEdit className="w-4 h-4" />}
                                            onClick={() => handleShowModal("edit", index + 1)}
                                            className="p-1 bg-orange-600 hover:bg-orange-500 text-white rounded"                                            
                                        />
                                        <IconButton
                                            icon={<FaEye className="w-4 h-4" />}
                                            onClick={() => {}}
                                            className="p-1 bg-blue-600 hover:bg-blue-500 text-white rounded"
                                        />
                                        <IconButton
                                            icon={<FaTrash className="w-4 h-4" />}
                                            onClick={() => handleShowModalDelete(index + 1)}
                                            className="p-1 bg-rose-600 hover:bg-rose-500 text-white rounded"
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal
                isActive={modalForm}
                type={formTitle === "create" ? "create" : "edit"}
                title={formTitle === "create" ? "Create Portfolio" : "Edit Portfolio"}
                className="max-w-xl"
                onPrssClose={() => setModalForm(false)}
            >
                <Form onSubmit={formTitle === "create" ? handleCreate : handleUpdate} enctype={true}>
                    <ResponseMessage message={status.message} isError={status.isError} />
                    {formData.id && (
                        <TextField name="id" type="number" value={formData.id?.toString() || ""} onChange={handleChange} hideLabel hidden required />
                    )}
                    <TextField name="title" type="text" value={formData.title} onChange={handleChange} required />
                    <TextField name="tech_stack" type="text" value={formData.tech_stack} onChange={handleChange} required />
                    <TextArea name="description" value={formData.description} onChange={handleChange} rows={5} required />
                    <FormSplit>
                        <TextField
                            prefixIcon={<FaGithub className="w-4 h-4" />}
                            name="repository"
                            type="url"
                            value={formData.repository}
                            onChange={handleChange}
                            placeholder="https://github.com/"
                            optilnal={true}
                        />
                        <TextField
                            prefixIcon={<FaGlobe className="w-4 h-4" />}
                            name="website"
                            type="url"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="https://example.com/"
                            optilnal={true}
                        />
                    </FormSplit>
                    <Select
                        name="category"
                        value={formData.category}
                        onChange={handleSelectChange}
                        options={[
                            { value: "", label: "Select Category" },
                            { value: "front_end", label: "Front End" },
                            { value: "back_end", label: "Back End" },
                            { value: "full_stack", label: "Full Stack" },
                            { value: "mobile", label: "Mobile" },
                            { value: "desktop", label: "Desktop" },
                            { value: "game", label: "Game" },
                            { value: "other", label: "Other" },
                        ]}
                        required
                    />
                    <Select
                        name="status"
                        value={formData.status}
                        onChange={handleSelectChange}
                        options={[
                            { value: "", label: "Select Status" },
                            { value: "development", label: "Development" },
                            { value: "staging", label: "Staging" },
                            { value: "production", label: "Production" },
                        ]}
                        required
                    />
                    <UploadField name="file" onChange={hnadleFileChange} optional multiple />
                    <Button name="save" type="submit" fullWidth color={"primary"} isLoading={status.isLoading} />
                </Form>
            </Modal>
            <Modal
                isActive={modalConfirmDelete}
                type="delete"
                title="Delete Portfolio"
                className="max-w-xl"
                onPressYes={() => handleDelete(dataId as number, event)}
                onPressNo={() => setConfirmDelete(false)}
            >
                <div className="w-full flex flex-col gap-4 p-4">
                    <p className="text-justify text-gray-500">
                        You're about to permanently delete this data. This action cannot be undone and the data will be lost forever. Do you wish to continue?
                    </p>
                </div>
            </Modal>
        </>
    )
}