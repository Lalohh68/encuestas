import { RouterLink } from "@angular/router";
import { INavbarData } from "./helper";

export const navbarData: INavbarData[]=[{
    routeLink:'dashboard',
    icon:'faCoffee',
    label:'dashboard'
},
{
    routeLink:'servicios/clubes',
    icon:'faCoffee',
    label:'Servicios',
    items:[{
        routeLink:'/servicios/clubes',
    icon:'faCoffee',
    label:'Clubes',
    }]
}
]