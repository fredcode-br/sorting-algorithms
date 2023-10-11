export default interface Iselect {
    options: { name: string; value: string }[]
    name: string,
    status?: boolean,
    customClass?: string | undefined,
    handleSelect: (algorithm?: string) => void
}