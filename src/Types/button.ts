export default interface Ibutton {
    children: React.ReactNode, 
    type?: "button" | "submit" | "reset" | undefined,
    customClass?: string | undefined,
    handleClick: () => void
}