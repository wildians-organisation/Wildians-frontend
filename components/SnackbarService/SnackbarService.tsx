import React, { createContext, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const DURATION = 5000;
export enum SnackbarType {
    Info = "info",
    Warning = "warning",
    Error = "error",
    Success = "success"
}
interface SnackbarContent {
    message: string;
    type: SnackbarType;
}
export const SnackbarContext = createContext<{
    showSnackbar: (message: string, type: SnackbarType) => void;
} | null>(null);

export const SnackbarProvider = ({ children }) => {
    const [snackbarContent, setSnackbarContent] = useState<
        SnackbarContent | undefined
    >(undefined);
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const showSnackbar = (message: string, type: SnackbarType) => {
        setSnackbarContent({ message, type });
        setIsSnackbarOpen(true);

        setTimeout(() => {
            setIsSnackbarOpen(false);
        }, DURATION);
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}
            <Snackbar open={isSnackbarOpen}>
                <Alert severity={snackbarContent?.type} sx={{ width: "100%" }}>
                    {snackbarContent?.message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    );
};

export default SnackbarContext;
