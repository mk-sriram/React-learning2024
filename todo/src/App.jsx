import Click from "./Click";
import Color from "./Color";
import FEtest from "./FEtest";
import FileExplorer from "./FileExplorer";
import FormComponent from "./Form";
import { Suspense } from "react";
const FormComponent = React.lazy(() => import("./Form"));
function App() {
  return (
    <>
      {/* <Recursive /> */}
      {/* <Color /> */}
      {/* <SearchFunction />
      <Click /> */}
      {/* <MultiSelect /> */}
      {/* <Suspense fallback="Loading ...">
        <FormComponent />
      </Suspense> */}
      {/* <FEtest /> */}
      <FileExplorer />
    </>
  );
}

export default App;
