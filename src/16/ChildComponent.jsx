/* ChildComponent.jsx */
import { memo } from "react";
const ChildComponent = memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});

export default ChildComponent;