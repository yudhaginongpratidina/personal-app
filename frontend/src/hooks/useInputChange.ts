// hooks/useInputChange.ts
import { useCallback } from "react";

export function useInputChange<T>(
    state: T,
    setState: React.Dispatch<React.SetStateAction<T>>
) {
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            setState((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        },
        [setState]
    );

    return { handleChange };
}
