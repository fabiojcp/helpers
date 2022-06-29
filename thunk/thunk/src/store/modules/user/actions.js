import { ADD_COMMENT } from "./actionTypes";

export const addComment = (updatedUser) => ({
type: ADD_COMMENT,
updatedUser,
});