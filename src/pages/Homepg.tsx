import { useCallback, useState } from "react";
import Home from "../components/Home"

const Homepg = () => {
  const [state, setState] = useState<number>(66);

  // const fun = (a:number): number => {
  //   setState(()=>a);
  //   return a;
  // }

  const fun = useCallback((a: number): number => {
    setState(() => a);
    return a;
  }, []);

  return (
    <div>fun: {state}
      <Home name="nikhil" fun={fun}></Home>
    </div>
  )
}

export default Homepg
