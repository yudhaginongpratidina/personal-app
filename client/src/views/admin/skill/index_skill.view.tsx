import DataTableSkill from "@/datatables/skill/data_table.skill";
import { Columns_Skill } from "@/datatables/skill/column.skill";
import { DataDumySkill } from "@/datatables/skill/data_dumy.skill";

export default function IndexSkillView() {
    return (
        <div className="w-full container">
            <DataTableSkill data={DataDumySkill} columns={Columns_Skill} />
        </div>
    );
}