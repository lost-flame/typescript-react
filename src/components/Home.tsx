import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface IPROPS {
    name?: string;
    fun: (a: number) => number;
}

const Home: React.FC<IPROPS> = ({ name, fun }) => {
    const [flag, setflag] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(0);

    const handleClick = () => {
        setCounter((prev) => {
            return prev + 1
        });
    }

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setCounter(Number(e.target.value));
    // }

    const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
        setCounter(Number(e.target.value));
    }, []);

    useEffect(() => {
        fun(counter);
    }, [counter])

    return (
        <div className="fs-2">
            {name}, {flag.toString()}, {counter}
            <div onClick={handleClick} className="btn btn-danger p-3 m-2">increase</div>
            <input type="text" onChange={handleChange} value={counter}></input>
            <NavLink to={'/api'}>API call</NavLink>
        </div>
    )
}

export default Home