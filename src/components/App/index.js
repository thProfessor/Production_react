import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/actions/themeActions";
import { ThemeProvider } from "styled-components";
import { colorsDark, colorsLight } from "../../styles/palette";
import { Wrapper, Title, Button } from "./styles";
import { getStories } from "../../redux/actions/storiesActions";
import { getPosts } from "../../redux/actions/storiesActions";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const stories = useSelector((state) => state.stories.stories);
  const posts = useSelector((state) => state.stories.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStories());
    dispatch(getPosts());
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? colorsLight : colorsDark}>
      <Wrapper>
        {stories && stories.res && console.log(stories.res)}
        {posts && posts.res && console.log(posts.res)}

        <Title>Production ready frontend setup and folder structure</Title>

        <Button
          onClick={() => {
            dispatch(setTheme(theme === "light" ? "dark" : "light"));
          }}
        >
          Toggle theme
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
