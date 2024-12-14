import DataTableCategoryLearningPath from "@/datatables/category_learning_path/data_table.category_learning_path"
import { Columns_CategoryLearningPath } from "@/datatables/category_learning_path/column.category_learning_path"
import { DataDumyCategoryLearningPath } from "@/datatables/category_learning_path/data_dumy.category_learning_path"

export default function IndexCategoryLearningPathView() {
    return (
        <div className="w-full container">
            <DataTableCategoryLearningPath data={DataDumyCategoryLearningPath} columns={Columns_CategoryLearningPath} />
        </div>
    )
}