import { Ref, useEffect, useState } from "react";
import {
    IScrollama,
    IScrollamaCallbacks,
    initScrollama,
} from "../utils/initScrollama";

export const useNewConfig = (

) => {

    const [newConfig, setConfig] = useState<IScrollamaCallbacks>();


    useEffect(() => {
        if (newConfig) {
            initScrollama(newConfig);
        }
    }, [newConfig]);

    useEffect(() => {
        setConfig({
            name: "scroll",
            stepQuery: "snap-always",

            onStepEnter: (response: any) => {
                console.log(response);
            },
            onStepExit: (response: any) => {
                console.log(response);
            },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [newConfig];
};
