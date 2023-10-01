export default interface Iselect {
    options: { name: string; value: string }[]
    id: string,
    onChange?: void
}