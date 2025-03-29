export interface DashboardProps {
    sideBarOpen: boolean
}

export interface SidebarProps {
    isXs: boolean;
    drawerHandler: () => void;
    isOpen: boolean;
}

export interface ScrollListProps {
    sideBarOpen: boolean,
    title: string,
    dummyData: any[]
}
