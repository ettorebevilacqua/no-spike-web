type FieldValue = string | number | null | undefined
type OptionValues = { id: string | number, name: string } & Record<string, FieldValue>
type FilterValue = {field:keyof OptionValues, value:FieldValue}
const reduceFilter = ( elem:OptionValues) =>(acc:boolean, filter:FilterValue)=> acc && elem[filter.field ] === filter.value
export const filterFileds = (list:OptionValues[], filters:FilterValue[])=>list.filter(el => filters.reduce(reduceFilter(el), true))
