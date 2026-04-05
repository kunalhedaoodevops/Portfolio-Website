"use client";

import { lazy, Suspense } from "react";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));

const App = () => {
  return (
    <>
      <Suspense>
        <MainContainer>
          <Suspense>
            <CharacterModel />
          </Suspense>
        </MainContainer>
      </Suspense>
    </>
  );
};

export default App;
