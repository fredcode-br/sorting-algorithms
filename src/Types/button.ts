export default interface Ibutton {
    children: React.ReactNode, 
    type?: "button" | "submit" | "reset" | undefined,
    customClass?: string | undefined,
    id?: string,
    status?: boolean
    handleClick: () => void
}