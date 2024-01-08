import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Typography,
    Modal,
    Box,
    Button,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from "@mui/material";
import { useState } from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "6px",
    boxShadow: 24,
    p: 4,
};

export default function RegisterModal() {

    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if (password.toLocaleLowerCase() === 'oybek') {
            setError('');
            handleClose()
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <form>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h6" component="h2" sx={{ marginBottom: "10px" }}>
                        Parolni kiriting
                    </Typography>
                    <OutlinedInput
                        value={password}
                        type={showPassword ? "text" : "password"}
                        onChange={handlePasswordChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        fullWidth
                        sx={{ marginBottom: "10px" }}
                    />

                    <Button
                        type="submit"
                        sx={{
                            display: "flex",
                            justifyContent: "eend",
                            background: "#E4E5E9",
                            textTransform: "capitalize",
                        }}
                        onClick={handleLogin}
                    >
                        Tasdiqlash
                    </Button>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                </Box>
            </Modal>
        </form>
    );
}
