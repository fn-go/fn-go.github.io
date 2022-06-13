import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import {Accordion, AccordionActions, AccordionDetails, AccordionSummary} from "@mui/material";
import {Badge, Chip, Alert, AlertTitle, Grid, Button, Paper, Box, Stack} from '@mui/material'

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "highlight" tag to our <Highlight /> component!
    // `Highlight` will receive all props that were passed to `highlight` in MDX
    Button: Button,
    Grid: Grid,
    Accordion: Accordion,
    AccordionActions: AccordionActions,
    AccordionDetails: AccordionDetails,
    AccordionSummary: AccordionSummary,
    Badge: Badge,
    Chip: Chip,
    Alert: Alert,
    AlertTitle: AlertTitle,
    Paper: Paper,
    Box: Box,
    Stack: Stack,
};