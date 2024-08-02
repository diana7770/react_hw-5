import "./App.css";
import styled from "styled-components";
import RecipesList from "./components/List/RicipeList";
import RecipeItem from "./components/Item/RicipeItem";
import recipes from "./components/json/recipes.json";

function App() {
  return (
    <RecipesList>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id}>
          <RecipeImg src={recipe.url} />
          <RecipeTitle>{recipe.name}</RecipeTitle>
          <RecipeInfoList>
            <li>
              <RecipeInfoText>{recipe.time} min</RecipeInfoText>
            </li>
            <li>
              <RecipeInfoText>{recipe.servings} servingd</RecipeInfoText>
            </li>
            <li>
              <RecipeInfoText>{recipe.callories} callories</RecipeInfoText>
            </li>
          </RecipeInfoList>
          <RecipeDifficultyBox>
            <RecipeDifficultyTitle>Difficulty</RecipeDifficultyTitle>
            <RecipeDifficultyText>{recipe.difficalty}</RecipeDifficultyText>
          </RecipeDifficultyBox>
        </RecipeItem>
      ))}
    </RecipesList>
  );
}

export default App;

const RecipeImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 20px;
`;

const RecipeTitle = styled.h2`
  font-size: 13px;
  font-style: bold;
  margin-top: 10px;
`;

const RecipeInfoText = styled.p`
  font-size: 12px;
  color: #656566;
`;

const RecipeDifficultyTitle = styled.h2`
  font-size: 12px;
`;

const RecipeDifficultyText = styled.p`
  width: 50;
  padding: 5px;
  gap: 3px;
  background-color: #fa697a;
  border-radius: 20px;
  margin-top: 5px;
  text-align: center;
  color: white;
  font-size: 12px;
`;

const RecipeInfoList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  padding: 2px 20px;
  gap: 5px;
  background-color: #fff;
  border-radius: 20px;
`;

const RecipeDifficultyBox = styled.ul`
  padding: 5px 50px;
  gap: 5px;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 5px;
`;
