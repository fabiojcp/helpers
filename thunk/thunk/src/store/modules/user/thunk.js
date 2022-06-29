import { addComment } from "./actions";

// o comment é o que recebemos de fora, no caso será o comentário
export const addCommentThunk = (comment) => {

// No thunk retornamos uma função anonima
return (dispatch, getState) => {

// aqui estamos pegando o state user 
const { user } = getState();

// aqui adicionamos o comentário que entrou como parâmetro lá em cima
const updatedUser = { ...user, comments: [...user.comments, comment] };

// nessa linha damos o dispatch na nossa action, com a alteração feita
dispatch(addComment(updatedUser));
};
};