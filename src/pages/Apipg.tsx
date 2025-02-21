import { useEffect, useState } from "react"
import { User, UserElement } from "../model/user";

const Apipg = () => {

    // const [asyncdata, setAsyncdata] = useState<UserElement[]>([]);
    // const [fetchdata, setFetchdata] = useState<UserElement[]>([]);
    const [gendata, setGendata] = useState<UserElement[]>([]);

    // const api1 = async (url: string): Promise<void> => {
    //     let response = await fetch(url);
    //     let data: User = await response.json();
    //     console.log(data);
    //     setAsyncdata(data.users);
    // }

    // const api2 = async (url: string): Promise<User> => {
    //     let response = await fetch(url);
    //     return await response.json() as User;
    // }

    const api3 = async <T> (url:string):Promise<T>=>{
        let response = await fetch(url);
        return await response.json() as T;
        // console.log(data);
        // return 
    }

    const call = async (url:string):void=>{
        let data = await api3<User>(url);
        console.log(data);
    }
    useEffect(() => {
    //     api1('https://dummyjson.com/users');

    //     api2('https://dummyjson.com/users')
    //         .then((res) => {
    //             console.log(res);
    //             setFetchdata(res.users);
    //         })
    //         .catch((err) => console.log('error on fetch: ', err));

        call('https://dummyjson.com/users');
    }, [])

    return (
        <div>
            {/* {
                asyncdata.length > 0 && (
                    asyncdata.map((e, i) => {
                        return (
                            <div key={i}>Async Call {"--->"} {e.id}, {e.firstName}</div>
                        )
                    })
                )
            }
            <br></br>
            {
                fetchdata.length > 0 && (
                    fetchdata.map((e, i) => {
                        return (
                            <div key={i}>Promise.then.catch Call {"--->"} {e.id}, {e.firstName}</div>
                        )
                    })
                )
            } */}

        </div>
    )
}

export default Apipg
