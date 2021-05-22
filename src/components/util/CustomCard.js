import { Paper } from "@material-ui/core";



export default function CustomCard({ children }) {
    return (
        <Paper elevation={3} sx={{ p: 4 }}>
            {children}
        </Paper>
    );
}