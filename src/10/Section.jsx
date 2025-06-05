import { LevelContext } from "./LevelContext";
import { useContext } from "react";

export default function Section({children }) {
  const level = useContext(LevelContext);

  return (
    <section className="section">
        <LevelContext value={level + 1}>
            {children}
        </LevelContext>
      
    </section>
  );
}
