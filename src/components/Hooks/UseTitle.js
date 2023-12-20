import { useEffect } from "react"

export function UseTitle(props) {
    useEffect(() => {
        document.title = props
    }, [props])
}

