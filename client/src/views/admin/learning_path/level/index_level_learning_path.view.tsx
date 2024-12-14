import DataTableLevelLearningPath from "@/datatables/level_learning_path/data_table.level_learning_path"
import { Columns_LevelLearningPath } from "@/datatables/level_learning_path/colum.level_learning_path"
import { DataDumyLevelLearningPath } from "@/datatables/level_learning_path/data_dumy.level_learning_path"

export default function IndexLevelLearningPathView() {
    return (
        <div className="w-full container">
            <DataTableLevelLearningPath data={DataDumyLevelLearningPath} columns={Columns_LevelLearningPath} />
        </div>
    )
}