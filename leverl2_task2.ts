// Задание второго уровня 2
// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME<T extends React.ComponentType> = T extends {defaultProps?: infer A | undefined;} ? A | undefined : never;

// Hint: infer
export const getDefaultProps = (
  component: React.ComponentType
): FIXME => {
  return component.defaultProps;
};