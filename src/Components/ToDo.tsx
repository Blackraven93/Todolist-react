import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoryState, IMakeCategory, IToDo, makeCategoryState, toDoSelector, toDoState } from "../atoms";


const ToDoContainer = styled.li`
    margin-top: 30px;
    width: 400px;
    height: 50px;
    color: ${props => props.theme.textColor};
`


function ToDo({ text, category, id }: IToDo) {
    const toDos = useRecoilValue(toDoSelector);
    const setToDos = useSetRecoilState(toDoState);
    const newCategories = useRecoilValue(makeCategoryState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;

        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const newToDo = { text, id, category: name as any };
            return [
                ...oldToDos.slice(0, targetIndex),
                newToDo,
                ...oldToDos.slice(targetIndex + 1),
            ];
        });
    };
    console.log(toDos)
    return (
        <ToDoContainer>
            <span>{text}</span>
            {category !== Categories.NO_STATUS && <button name={Categories.NO_STATUS} onClick={onClick}>미분류</button>}
            {category !== Categories.TO_DO && <button name={Categories.TO_DO} onClick={onClick}>할 일</button>}
            {category !== Categories.IN_PROGRESS && <button name={Categories.IN_PROGRESS} onClick={onClick}>진행중</button>}
            {category !== Categories.DONE && <button name={Categories.DONE} onClick={onClick}>종료</button>}
            {newCategories?.map((newCategory) => (
                <button name={newCategory.text} onClick={onClick}>{newCategory.text}</button>
            ))}
        </ToDoContainer>
    );
}

export default ToDo;
