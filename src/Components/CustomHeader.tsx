
import {
    HeaderContainer,
    Header,
    SkipToContent,
    HeaderName,
    HeaderNavigation,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,

} from '@carbon/react';

import { Link } from "react-router";

// SideNav,
// SideNavItems,
// SideNavLink,
// SideNavMenu,
// SideNavMenuItem,


export function CustomHeader() {

    return (
        <div>

            {/* <Box content='Some text.prop' boldText='bollld'/> */}
            <HeaderContainer
                render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                    <Header aria-label="Home">
                        {/*
	
	SkipToContent is for web based screen readers
	*/}
                        <SkipToContent />

                        {/*
	
	Header site name component
	*/}
                      <HeaderName prefix=""> <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Home
                            </Link></HeaderName>

                        {/*
	
	Header Navigation component with 'HeaderMenuItem for each navigation link
	*/}
                        <HeaderNavigation aria-label="Home">
                            <HeaderMenuItem><Link to="/manualTest" style={{ textDecoration: 'none', color: 'inherit' }}>QA Chatbot</Link></HeaderMenuItem>
                            <HeaderMenuItem><Link to="/documentHelper" style={{ textDecoration: 'none', color: 'inherit' }}>Document Helper</Link></HeaderMenuItem>
                            <HeaderMenuItem>People & Society</HeaderMenuItem>
                     
                        </HeaderNavigation>
                 

      

                        {/*
	
	Right-hand action section of navigation including app switcher icon and avatar icon
	*/}
                        <HeaderGlobalBar>
                            {/* App switcher in right top nav */}
                            <HeaderGlobalAction aria-label="App Switcher">
                                <svg
                                    focusable="false"
                                    preserveAspectRatio="xMidYMid meet"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M18 18h3v3h-3zm-7.5 0h3v3h-3zM3 18h3v3H3zm15-7.5h3v3h-3zm-7.5 0h3v3h-3zm-7.5 0h3v3H3zM18 3h3v3h-3zm-7.5 0h3v3h-3zM3 3h3v3H3z"></path>
                                </svg>
                            </HeaderGlobalAction>
                            {/* Avatar icon in right top nav */}
                            <HeaderGlobalAction
                                aria-label="Profile"
                              
                                isActive={isSideNavExpanded}
                            >
                              <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}> <svg width="20" height="20">
                                    <title>user</title>
                                    <path d="M6 15.745A6.968 6.968 0 0 0 10 17a6.968 6.968 0 0 0 4-1.255V15.5a2.5 2.5 0 0 0-2.5-2.5h-3A2.5 2.5 0 0 0 6 15.5v.245zm-.956-.802A3.5 3.5 0 0 1 8.5 12h3a3.5 3.5 0 0 1 3.456 2.943 7 7 0 1 0-9.912 0zM10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path>
                                    <path d="M10 9.841a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                                </svg></Link> 
                            </HeaderGlobalAction>
                        </HeaderGlobalBar>

                        {/*
	
	Left Side Navigation component which is actually tied in with the overall Header component

            <SideNav aria-label="Side navigation" isRail>
              <SideNavItems className="black">
                <SideNavLink>Home</SideNavLink>
                <SideNavLink>User Dashboard</SideNavLink>

                <SideNavMenu title="title">
                  <SideNavMenuItem href="#">Item</SideNavMenuItem>
                </SideNavMenu>

                <SideNavMenu title="title">
                  <SideNavMenuItem href="#">Item</SideNavMenuItem>
                </SideNavMenu>

                <SideNavMenu title="title">
                  <SideNavMenuItem href="#">Item</SideNavMenuItem>
                  <SideNavMenuItem href="#">Item</SideNavMenuItem>
                </SideNavMenu>
              </SideNavItems>
            </SideNav>	*/}
                    </Header>
                )}
            />
        </div>

    );
};