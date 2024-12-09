import PortfolioForm from "./portfolio.form"
import PortfolioInput from "./portfolio.input"
import PortfolioTextarea from "./portfolio.textarea"
import BtnSubmitPortfolio from "./btn_submit.portfolio";
import BtnCancelPortfolio from "./btn_cancel.portfolio";

import { MdOutlineTitle } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

export default function CreatePortfolioForm() {
    return (
        <form>
            <PortfolioForm>
                <PortfolioInput 
                    icons={<MdOutlineTitle className="text-2xl"/>} 
                    id={"name"} 
                    name={"Name"} 
                    type={"text"} 
                    placeholder={"Enter project name"}
                />
                <PortfolioTextarea 
                    id={"description"} 
                    name={"Description"}
                    placeholder={""}
                />
                <PortfolioInput 
                    icons={<FaGithub className="text-2xl"/>} 
                    id={"link_repository"} 
                    name={"Link Repository"} 
                    type={"text"} 
                    placeholder={"Enter url repository"}
                />
                <PortfolioInput 
                    icons={<IoIosLink className="text-2xl"/>} 
                    id={"link_deploy"} 
                    name={"Link Deploy"} 
                    type={"text"} 
                    placeholder={"Enter url deploy"}
                />
                <div className="w-full flex items-center gap-1.5">
                    <BtnSubmitPortfolio />
                    <BtnCancelPortfolio />
                </div>
            </PortfolioForm>
        </form>
    )
}