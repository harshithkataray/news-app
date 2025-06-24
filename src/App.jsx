import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import { News } from "./component/News";
import { ThemeContext } from "./context/Theme";

function App() {
  const [artical, setArtical] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <NavBar setSearchResults={setSearchResults} />
      <Routes>
        <Route
          path="/"
          element={
            <News
              country="us"
              category="general"
              artical={searchResults.length > 0 ? searchResults : artical}
              setArtical={setArtical}
            />
          }
        />
        <Route
          path="/general"
          element={
            <News
              country="us"
              category="general"
              artical={artical}
              setArtical={setArtical}
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              country="us"
              category="business"
              artical={artical}
              setArtical={setArtical}
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              country="us"
              category="entertainment"
              artical={artical}
              setArtical={setArtical}
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              country="us"
              category="health"
              artical={artical}
              setArtical={setArtical}
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              country="us"
              category="science"
              artical={artical}
              setArtical={setArtical}
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              country="us"
              category="sports"
              artical={artical}
              setArtical={setArtical}
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              country="us"
              category="technology"
              artical={artical}
              setArtical={setArtical}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
