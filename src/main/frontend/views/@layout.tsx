import { createMenuItems } from '@vaadin/hilla-file-router/runtime.js';
import { AppLayout, DrawerToggle, Icon, SideNav, SideNavItem, Tooltip } from '@vaadin/react-components';
import { Suspense } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function MainLayout() {
    return (
        <AppLayout primarySection="drawer">
            <div slot="drawer" className="flex flex-col justify-between h-full p-m">
                <header className="flex flex-col gap-m">
                    <span className="text-l font-semibold" slot="drawer">Vaadin Chat</span>
                </header>
            </div>
            <DrawerToggle aria-label="Menu toggle" slot="navbar">
                <Tooltip slot="tooltip" text="Menu toggle"/>
            </DrawerToggle>
            <Suspense fallback={<div>Loading ...</div>}>
                <Outlet/>
            </Suspense>
        </AppLayout>
    )
}