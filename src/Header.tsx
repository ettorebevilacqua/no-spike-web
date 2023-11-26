import { Tabs, Tab, Toolbar, AppBar, Box, Typography } from '@mui/material';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { UserMenu, Logout, LoadingIndicator } from 'react-admin';

const Header = () => {
    const location = useLocation();

    const match: Record<string, string>= {
        '/visitors/*': '/visitors',
        '/contacts/*': '/contacts',
        '/companies/*' : '/companies',
        '/deals/*': '/deals'
    }

    const currentPath = Object.keys(match).reduce(
        (acc, key)=>!matchPath('/contacts/*', location.pathname  ) ? acc : match[key],
        '/')

    return (
        <Box component="nav" sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
                <Toolbar variant="dense">
                    <Box flex={1} display="flex" justifyContent="space-between">
                        <Box display="flex" alignItems="center">
                            <Box
                                component="img"
                                sx={{ marginRight: '1em', height: 30 }}
                                src={
                                    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
                                }
                                alt="Bosch Logo"
                            />
                            <Typography component="span" variant="h5">
                                Atomic CRM
                            </Typography>
                        </Box>
                        <Box>
                            <Tabs
                                value={currentPath}
                                aria-label="Navigation Tabs"
                                indicatorColor="secondary"
                                textColor="inherit"
                            >
                                <Tab
                                    label={'Dashboard'}
                                    component={Link}
                                    to="/"
                                    value="/"
                                />
                                <Tab
                                    label={'Visitors'}
                                    component={Link}
                                    to="/visitors/create"
                                    value="/visitors/create"
                                />

                                <Tab
                                    label={'Contacts'}
                                    component={Link}
                                    to="/contacts"
                                    value="/contacts"
                                />
                                <Tab
                                    label={'Companies'}
                                    component={Link}
                                    to="/companies"
                                    value="/companies"
                                />
                                <Tab
                                    label={'Deals'}
                                    component={Link}
                                    to="/deals"
                                    value="/deals"
                                />
                            </Tabs>
                        </Box>
                        <Box display="flex">
                            <LoadingIndicator
                                sx={{
                                    '& .RaLoadingIndicator-loader': {
                                        marginTop: 2,
                                    },
                                }}
                            />
                            <UserMenu>
                                <Logout />
                            </UserMenu>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
