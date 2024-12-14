import DataTableLearningPath from "@/datatables/learning_path/data_table.learning_path"
import { Columns_LearningPath } from "@/datatables/learning_path/column.learning_path"
import { DataDumyLearningPath } from "@/datatables/learning_path/data_dumy.learning_path"

export default function IndexLearningPathView() {
    return (
        <div className="w-full container">
            <DataTableLearningPath data={DataDumyLearningPath} columns={Columns_LearningPath} />
        </div>
    )
}