import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";


const UseScroll = (tresh=0.1) => {

    const controls = useAnimation();
    const[element, view] = useInView({treshold:tresh});

    if(view){
        controls.start("show")
    }else{
        controls.start("hidden");
    }

    return [element,controls];
};

export default UseScroll;