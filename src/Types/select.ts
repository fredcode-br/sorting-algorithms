export default interface Iselect {
    options: { name: string; value: string }[]
    id: string,
    status?: boolean,
    customClass?: string | undefined,
    handleSelect: (algorithm?: string) => void
}