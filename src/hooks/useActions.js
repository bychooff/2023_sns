import { useContext } from "react";
//import Prototypes from "../components/Prototypes";
import AppStateContext from "../contexts/AppStateContext";

export default function useActions(){
    const {addToOrder, remove, removeAll} = useContext(AppStateContext);

    return {addToOrder, remove, removeAll};
}