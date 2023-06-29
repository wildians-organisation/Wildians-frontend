import React, { createContext, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SnackbarContext = createContext();
const DURATION = 5000;

export const SnackbarProvider = ({ children }) => {
    const [snackbarContent, setSnackbarContent] = useState({});
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const showSnackbar = (message, type) => {
        setSnackbarContent({ message, type });
        setIsSnackbarOpen(true);

        setTimeout(() => {
            setIsSnackbarOpen(false);
        }, DURATION);
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}
            <Snackbar open={isSnackbarOpen} >
                <Alert severity={snackbarContent.type} sx={{ width: "100%" }}>
                    {snackbarContent.message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    );
};

export default SnackbarContext;