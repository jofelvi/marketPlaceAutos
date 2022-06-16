
import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

const Loading = (props) => {
    const { dataTest } = useSelector((state) => state.tableTest);

    useEffect(() => {
        //aqui una aaaa
    }, [loading]);

    return (
         <>
             <div>
                 { loading ? "loading" : "" }
             </div>
        </>
    )
}

export default Loading;
