import {
    Admin,
    EditGuesser,
    ListGuesser,
    Resource,
    ShowGuesser,
    defaultTheme,
    localStorageStore,
} from 'react-admin';



import { authProvider } from './authProvider';
import { dataProvider } from './dataProvider';
import { Dashboard } from './dashboard/Dashboard';

// import deals from './deals';
// import companies from './companies';
// import contacts from './contacts';
import Layout from './Layout';

export const App = () => (
    <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        store={localStorageStore(undefined, 'CRM')}
        layout={Layout}
        dashboard={Dashboard}
        theme={{
            ...defaultTheme,
            palette: {
                background: {
                    default: '#fafafb',
                },
            },
        }}
    >
                <Resource name="posts" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
		<Resource name="comments" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        {/* <Resource name="deals" {...deals} />
        <Resource name="contacts" {...contacts} />
        <Resource name="companies" {...companies} />
        <Resource name="contactNotes" />
        <Resource name="dealNotes" />
        <Resource name="tasks" list={ListGuesser} />
        <Resource name="sales" list={ListGuesser} />
        <Resource name="tags" list={ListGuesser} />
        */}
    </Admin>
);

export default App;