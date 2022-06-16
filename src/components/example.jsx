
import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

const Example = (props) => {
    const {theme, user, value, incrementar, decrementar} = useSelector((state) => state.shared);

    useEffect(() => {
        //aqui una aaaa
    }, [value]);

    return (
         <>
             <div>
                  value {value}
             </div>
        </>
    )
}

export default Example;
