/* eslint-disable */
import React, { createContext, useState, ReactNode, useEffect } from "react";

interface TestContextState {
  isModalShow: boolean;
  setIsModalShow: Function;
}

export const TestContext = createContext<TestContextState>(
  {} as TestContextState
);

const TestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [isModalShow, setIsModalShow] = useState<boolean>(false);

  return (
    <TestContext.Provider
      value={{
        isModalShow,
        setIsModalShow
      }}
    >
      {children}
    </TestContext.Provider>
  );
};
export default TestProvider;
