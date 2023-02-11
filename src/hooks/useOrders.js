import { useContext } from "react";
//import Prototypes from "../components/Prototypes";
import AppStateContext from "../contexts/AppStateContext";

export default function useOrders(){
    const {orders} = useContext(AppStateContext);

    return orders;
}