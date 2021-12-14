import { atom, selector } from "recoil";

export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "HOLD" = "HOLD",
    "DONE" = "DONE",
}


export interface IToDo {
    text: string;
    id: number;
    category: Categories

}

export const categoryState = atom<Categories>({
    key:"category",
    default: Categories.TO_DO
})

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
})

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => { // get Function이 있어야 to do를 받을 수 있음
        const toDos = get(toDoState); // atom이 변하면 selector도 변함
        const category = get(categoryState)
        return toDos.filter((toDo) => toDo.category === category);
      },
})

// selector의 역할은 toDos랑 category를 받아서 category에 따라서 toDo를 분류해줌