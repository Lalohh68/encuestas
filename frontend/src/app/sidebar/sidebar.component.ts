import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { navbarData } from './nav-data';
import { faHome,faWindowClose} from '@fortawesome/free-solid-svg-icons';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { INavbarData } from './helper';

interface SideNavToggle{
    screenWidth:number;
    collapsed:boolean;
}

@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.scss'],
    animations:[
        trigger('fadeInOut',[
            transition(':enter',[
                style({opacity:0}),
                animate('400ms',
                style({opacity:1})
                )
            ]),
            transition(':leave',[
                style({opacity:1}),
                animate('350ms',
                style({opacity:0}))
            ])
        ]),
        trigger('rotate',[
            transition(':enter',[
                animate('600ms',
                keyframes([
                    style({transform: 'rotate(0deg)',offset:'0'}),
                    style({transform: 'rotate(1turn)',offset:'1'})
                ])
                )
            ])
        ])

    ]
})

export class SidebarComponent implements OnInit {
    @Output() onToggleSideNav: EventEmitter<SideNavToggle>=new EventEmitter();
    faCoffee = faHome;
    cerrar= faWindowClose;


   collapsed=false;
   navData=navbarData;
   screenWidth=0;
   multiple:boolean=false;   


   @HostListener('window:resize',['$event'])
   onResize(event: any){
    this.screenWidth=window.innerWidth;
    if (this.screenWidth <= 718) {
        this.collapsed=false;
        this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
    }
   }
   toggleCollapse():void {
    this.collapsed= !this.collapsed
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
   }

   closeSidenav():void{
    this.collapsed= false
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
   }
   ngOnInit():void{
this.screenWidth=window.innerWidth;
   }
   handleClick(item: INavbarData):void {
    if (!this.multiple) {
        this.collapsed=true
        this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
        for(let modelItem of this.navData){
            if (item !== modelItem && modelItem.expanded) {
                modelItem.expanded=false;
            }
        }
    }
    item.expanded= !item.expanded
   }
}
