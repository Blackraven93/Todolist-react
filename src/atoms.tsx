import { atom, selector } from "recoil";


export enum Categories {
    "NO_STATUS" = "미분류",
    "TO_DO" = "할 일",
    "IN_PROGRESS" = "진행중",
    "DONE" = "종료"
}

export interface IToDo {
    text: string;
    id: number;
    category: Categories;
}

export interface IMakeCategory {
    text: string;
    id: number;
}

export const makeCategoryState = atom<IMakeCategory[]>({
    key: "makeCategory",
    default: []
})

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: JSON.parse(localStorage.getItem("TO_DO_LIST") || "[]"),
});

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.NO_STATUS,
});


export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);
    },
});
