import { RouterLink } from "@angular/router";
import { INavbarData } from "./helper";

export const navbarData: INavbarData[]=[
{
    routeLink:'dashboard',
    icon:'fa fa-house',
    label:'Dashboard'
},
{
    routeLink:'servicios',
    icon:'fa fa fa-toolbox',
    label:'Servicios',
    items:[
        {
            routeLink:'servicios/todos',
            label:'Todos' 
        },
        {
            routeLink:'servicios/clubes',
            label:'Clubes' 
        },
        {
            routeLink:'servicios/control_escolar',
            label:'Control escolar' 
        },
        {
            routeLink:'servicios/tutorias',
            label:'Tutorias' 
        },
        {
            routeLink:'servicios/biblioteca',
            label:'Biblioteca' 
        },
        {
            routeLink:'servicios/centro_de_computo',
            label:'Centro de computo' 
        },
        {
            routeLink:'servicios/servicio_social',
            label:'Servicio social' 
        },
        {
            routeLink:'servicios/residencias',
            label:'Residencias' 
        },
        {
            routeLink:'servicios/idiomas',
            label:'Idiomas' 
        },
        {
            routeLink:'servicios/cafeteria_1',
            label:'Cafeteria 1' 
        },
        {
            routeLink:'servicios/cafeteria_2',
            label:'Cafeteria 2' 
        },
        {
            routeLink:'servicios/cajas',
            label:'Cajas' 
        },
        {
            routeLink:'servicios/coordinador_de_carreras',
            label:'Coordinador de carreras' 
        },
        {
            routeLink:'servicios/becas',
            label:'Becas' 
        },
        {
            routeLink:'servicios/centro_de_copiado',
            label:'Centro de copiado' 
        },
        {
            routeLink:'servicios/psicologico',
            label:'Psicologico' 
        },
        {
            routeLink:'servicios/medico',
            label:'Medico' 
        },
        {
            routeLink:'servicios/asesorias_academicas',
            label:'Asesorias academicas' 
        }
    ]

},{
    routeLink:'carreras',
    icon:'fa fa-school',
    label:'Carreras',
    items:[{
        routeLink:'carreras/sistemas',
    label:'Sistemas Computacionales'
    },
    {
        routeLink:'carreras/industrial',
    label:'Industrial',
    },
    {
        routeLink:'carreras/mecatronica',
        label:'Mecatrónica' 
    },
    {
        routeLink:'carreras/bioquimica',
        label:'Bioquímica' 
    },
    {
        routeLink:'carreras/tics',
        label:'Tic`s' 
    },
    {
        routeLink:'carreras/gestion',
        label:'Gestión Empresarial' 
    },
    {
        routeLink:'carreras/nano',
        label:'Nanotecnología' 
    }
]   
},
{
    routeLink:'informe',
    icon:'fa fa-magnifying-glass-chart',
    label:'Informe'
}

]