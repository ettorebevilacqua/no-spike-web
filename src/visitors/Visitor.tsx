import {
    Create,
    DateInput,
    SimpleForm,
    TextInput,
    useTranslate,
    PasswordInput,
    email,
    AutocompleteInput,
} from 'react-admin';
import { useWatch, useFormContext } from 'react-hook-form';

import { Box, Typography } from '@mui/material';
import provincie from '../data/provincie.json'
import comuni from '../data/comuni.json'
import zipCodes from '../data/comuni_cap.json'
import { useEffect } from 'react';

type FieldValue = string | number | null | undefined
type OptionValues = { id: string | number, name: string } & Record<string, FieldValue>

const toOptions =(cap:typeof zipCodes[0])=> ({ id: cap.istat, name: cap.nome })
const filtZip = (zipcode:string) => (zip:typeof zipCodes[0]) => zip.cap === Number(zipcode)

const filterByValue = (list: OptionValues[]) => (value: FieldValue) => (field: string) => value === null || value === undefined
    ? list : list.filter(el => el[field] === value)

const optionsProvincie: OptionValues[] = provincie.map((pv: typeof provincie[0]) => ({ id: pv.sigla, name: `(${pv.sigla}) ${pv.nome}` }))
const optionsComuni: OptionValues[] = comuni.map((city: typeof comuni[0]) => ({ id: city.istat, name: city.nome, sigla: city.sigla, }))
// const optionsCap: OptionValues[] = caps.map((cap: typeof caps[0]) => ({ id: String(cap.cap).padStart(5, '0'), name: cap.nome }))

const hasKey = (dirtyFields: Partial<Readonly<{ [x: string]: any }>>, key: string) =>
    Object.keys(dirtyFields).includes(key)

export const validateForm = (
    values: Record<string, any>
): Record<string, any> => {

    const errors = {} as any;
    if (!values.first_name) {
        errors.first_name = 'ra.validation.required';
    }
    if (!values.last_name) {
        errors.last_name = 'ra.validation.required';
    }
    if (!values.email) {
        errors.email = 'ra.validation.required';
    } else {
        const error = email()(values.email);
        if (error) {
            errors.email = error;
        }
    }
    if (values.password && values.password !== values.confirm_password) {
        errors.confirm_password =
            'resources.visitors.errors.password_mismatch';
    }
    return errors;
};

// const choicesWithCurrentCompany = selectComuni.find(choice => choice.id === sel_pv)
//     ? choices
//     : [...choices, currentCompany]

const CityInput = () => {
    const zipcode = useWatch<{ zipcode: string }>({ name: "zipcode" })
    const istat = useWatch<{ city: string }>({ name: "city" })
    const formContext = useFormContext()
    const hasZipCode =  zipcode && zipcode.length === 5

    const citiesZip= !hasZipCode ? optionsComuni : zipCodes.filter(filtZip(zipcode)).map(toOptions)
   // const istat = citiesZip && citiesZip[0] && citiesZip[0].id
    const cities = istat && filterByValue(optionsComuni)(istat)('id' )
    const sigla = cities && cities[0] && cities[0].sigla
    console.log('ities', sigla)
    useEffect(() => {
        sigla && istat && formContext.setValue('sigla', sigla)
    });

    return <AutocompleteInput source="city" choices={citiesZip} debounce={300} />
}

const ZipCodeInput = () => {
    const formContext = useFormContext();
    const zipcode = useWatch<{ zipcode: string }>({ name: "zipcode" })
    const zipCity = zipcode && zipcode.length === 5 && zipCodes.filter(city => city.cap === Number(zipcode))
    const istat = zipCity && zipCity.length === 1 && zipCity[0].istat
    useEffect(() => {
        istat && formContext.setValue('city', istat)
    });
    return <TextInput source="zipcode" isRequired />
}

const VisitorCreate = () => {

    return (
        <Create>
            <SimpleForm
                sx={{ maxWidth: 700 }}
                // Here for the GQL provider
                defaultValues={{
                    birthday: new Date(),
                    first_seen: new Date(),
                    last_seen: new Date(),
                    has_ordered: false,
                    latest_purchase: new Date(),
                    has_newsletter: false,
                    groups: [],
                    nb_commands: 0,
                    total_spent: 0,
                }}
                validate={validateForm}
            >
                <SectionTitle label="resources.visitors.fieldGroups.identity" />
                <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
                    <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                        <TextInput source="first_name" label="resources.visitors.fieldGroups.first_name" isRequired fullWidth />
                    </Box>
                    <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                        <TextInput source="last_name" label="resources.visitors.fieldGroups.last_name" isRequired fullWidth />
                    </Box>
                </Box>

                <TextInput type="email" source="email" isRequired fullWidth />
                <TextInput type="blond" source="blond" isRequired fullWidth />
                <DateInput source="birthday" />
                <Separator />
                <SectionTitle label="resources.visitors.fieldGroups.address" />
                <TextInput
                    source="address"
                    label="resources.visitors.fieldGroups.address"
                    multiline
                    fullWidth
                    helperText={false}
                />
                <Box display={{ xs: 'block', sm: 'flex' }}>
                    <Box flex={2} mr={{ xs: 0, sm: '0.5em' }}>
                        <CityInput />
                    </Box>
                    <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                        <AutocompleteInput source="sigla" choices={optionsProvincie} />
                    </Box>
                    <Box flex={2}>
                        <ZipCodeInput />
                    </Box>
                </Box>
                <Separator />
                <SectionTitle label="resources.visitors.fieldGroups.password" />
                <Box display={{ xs: 'block', sm: 'flex' }}>
                    <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                        <PasswordInput source="password" fullWidth />
                    </Box>
                    <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                        <PasswordInput source="confirm_password" fullWidth />
                    </Box>
                </Box>
            </SimpleForm>
        </Create>
    );
}

const SectionTitle = ({ label }: { label: string }) => {
    const translate = useTranslate();

    return (
        <Typography variant="h6" gutterBottom>
            {translate(label as string)}
        </Typography>
    );
};

const Separator = () => <Box pt="1em" />;

export default VisitorCreate;
