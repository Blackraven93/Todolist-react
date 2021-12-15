import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { Categories, categoryState, makeCategoryState, toDoSelector, toDoState } from "../atoms";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

export interface IdefaultCategories {
    NO_STATUS: string;
    TO_DO: string;
    IN_PROGRESS: string;
    DONE: string;
}

const Title = styled.header`
    width: 90%;
    height: 80px;
    margin: 0 auto;
    display:flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.accentColor};
    font-size: 42px;
`

const CategoryTitle = styled.h2`
    margin-top: 20px;
    font-size: 32px;
    color: ${(props) => props.theme.accentColor};
`

const Container = styled.section`
    margin: 0 auto;

`

function ToDoList() {
    const allToDos = useRecoilValue(toDoState) // 전체 투두를 로컬스토리지에 저장
    const toDos = useRecoilValue(toDoSelector); // 보여줄 toDos
    const makeCategories = useRecoilValue(makeCategoryState);
    const [categories, setCategory] = useRecoilState(categoryState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        const { currentTarget: { value } } = event;
        setCategory(value as any);
    };


    const defaultCategories: IdefaultCategories = {
        NO_STATUS: "미분류",
        TO_DO: "할 일",
        IN_PROGRESS: "진행중",
        DONE: "종료"
    }

    useEffect(() => {
        localStorage.setItem("TO_DO_LIST", JSON.stringify(allToDos))
    }, [allToDos])

    console.log(categories)
    return (
        <>
            <Title>
                <h1>To Dos</h1>
            </Title>

            <CreateToDo />
            <CreateCategory />
            <Container>
                <select value={categories} onInput={onInput}>
                    {/* {Object.keys(defaultCategories).map((defaultCategory) => {
            <option value={defaultCategory}>
                {
                Object.values(defaultCategories).map(e => e)
                }
            </option>
            })} */}
                    <option value={Categories.NO_STATUS}>{Categories.NO_STATUS}</option>
                    <option value={Categories.TO_DO}>{Categories.TO_DO}</option>
                    <option value={Categories.IN_PROGRESS}>{Categories.IN_PROGRESS}</option>
                    <option value={Categories.DONE}>{Categories.DONE}</option>
                    {makeCategories?.map((category) => (
                        <option key={category.id} value={category.text}>{category.text}</option>
                    ))}
                </select>
                <CategoryTitle>{categories}</CategoryTitle>
                {toDos?.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </Container>
        </>
    );
}

export default ToDoList;
