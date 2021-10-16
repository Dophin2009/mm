import React from "react";
import { useForm, useController, useFieldArray } from "react-hook-form";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

function EquationsPanel({ handleSubmit }) {
    return (
        <>
            <EquationsList handleSubmit={handleSubmit} />
        </>
    );
}

function EquationsList({ handleSubmit }) {
    const { control, handleSubmit: wrapSubmit } = useForm();
    // const { fields, append, prepend, remove, swap, move, insert } =
    useFieldArray({
        control,
        name: "equations",
    });

    const items = [{}].map((eq, idx) => {
        const num = idx + 1;
        return (
            <EquationBox
                key={num}
                label={num}
                name={`equations.${idx}.str`}
                control={control}
            />
        );
    });

    return (
        <Box sx={{ margin: "10px" }}>
            <Typography variant="h6" color="inherit" component="div">
                Equations
            </Typography>
            <form onSubmit={wrapSubmit(handleSubmit)}>
                <Button variant="contained" type="submit">
                    Update
                </Button>
                <Stack>{items}</Stack>
            </form>
        </Box>
    );
}

function EquationBox({ label, name, control }) {
    const {
        field: { ref, ...inputProps },
    } = useController({
        name,
        control,
        defaultValue: "",
    });

    return (
        <Paper elevation={0} variant="outlined">
            <Typography variant="h6" component="span">
                f(x) ={" "}
            </Typography>
            <TextField
                {...inputProps}
                inputRef={ref}
                label={label}
                size="small"
            />
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                ></AccordionSummary>
                <AccordionDetails></AccordionDetails>
            </Accordion>
        </Paper>
    );
}

export default EquationsPanel;
