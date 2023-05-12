import Defaultpage from "../../pages/defaultpage"
import Homepage from "../../pages/homepage"
export const routes=[
    {
        path:"/",
        component:<Defaultpage/>
    },
    {
        path:"/home",
        component:<Homepage/>
    }
]