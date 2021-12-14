import { atom, selector } from "recoil";

export interface IToDo {
    text: string;
    id: number;
    category: "TO_DO" | "DOING" | "DONE" | "HOLD";

}

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
})

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => { // get Function이 있어야 to do를 받을 수 있음
        const toDos = get(toDoState); // atom이 변하면 selector도 변함
        return [
          toDos.filter((toDo) => toDo.category === "TO_DO"),
          toDos.filter((toDo) => toDo.category === "DOING"),
          toDos.filter((toDo) => toDo.category === "DONE"),
          toDos.filter((toDo) => toDo.category === "HOLD"),
        ];
      },
})