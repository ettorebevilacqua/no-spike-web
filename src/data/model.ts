import provincie from './provincie.json'
import regioni from './regioni.json'

export type IProvincia = typeof provincie[0]

export const getProvincieByRegion = (codReg: number): IProvincia[] =>
    provincie.filter(pv => pv.regione === codReg)

export const descrRegione = (cod: number): string => {
    const find = !cod ? null : regioni.find(reg => reg.cod === cod)
    return find ? find.nome : ''
}