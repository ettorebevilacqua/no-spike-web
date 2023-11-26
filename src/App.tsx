import {
    Admin,
    EditGuesser,
    ListGuesser,
    Resource,
    ShowGuesser,
    localStorageStore,
} from 'react-admin';



import { authProvider } from './authProvider';
import { dataProvider } from './dataProvider';
import { Dashboard } from './dashboard/Dashboard';
import Visitor from './visitors/Visitor';

// import deals from './deals';
// import companies from './companies';
// import contacts from './contacts';
import Layout from './Layout';
import { theme } from './theme';
import i18nProvider from './i18nProvider';
import { FindCity } from './italy/findCity';

export const App = () => (
    <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        i18nProvider={i18nProvider}
        store={localStorageStore(undefined, 'CRM')}
        layout={Layout}
        dashboard={Dashboard}
        theme={theme}
    >
        <Resource name="posts" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="comments" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="visitors" edit={Visitor} show={ShowGuesser} />
        <Resource name="findcity" edit={FindCity} show={ShowGuesser} />

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