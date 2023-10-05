export default interface Iselect {
    options: { name: string; value: string }[]
    id: string,
    handleSelect: (algorithm?: string) => void
}