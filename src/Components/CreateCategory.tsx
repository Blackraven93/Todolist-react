import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, makeCategoryState, toDoState } from "../atoms";

interface IForm {
    category: string;
}

// export const categoryState = atom<Categories>({
//     key: "category",
//     default: Categories.TO_DO,
//   });

function CreateCategory() {
    const [category, setCategories] = useRecoilState(makeCategoryState)
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ category }: IForm) => {
        setCategories((oldCategory) => [
            { text: category, id: Date.now() },
            ...oldCategory,
        ]);
        setValue("category", "");
    };
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input
                {...register("category", {
                    required: "Please write a category",
                })}
                placeholder="Write a category"
            />
            <button>Add</button>
        </form>
    );
}

export default CreateCategory;