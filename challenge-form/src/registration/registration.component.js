"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationForm = void 0;
const core_1 = require("@material-ui/core");
const formik_1 = require("formik");
const react_1 = __importDefault(require("react"));
const styles_1 = require("@mui/styles");
const useStyles = (0, styles_1.makeStyles)({
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 32,
        padding: '0px 6px'
    },
    buttoncontainer: {
        margin: '20px'
    },
});
const RegistrationForm = ({ onSubmit }) => {
    const classes = useStyles();
    return (react_1.default.createElement(formik_1.Formik, { initialValues: { userName: '', email: '', password: '', confirmPassword: '' }, onSubmit: (values) => onSubmit(values) }, ({ values, handleChange, handleBlur }) => (react_1.default.createElement(formik_1.Form, null,
        react_1.default.createElement("h1", null, "Sign Up"),
        react_1.default.createElement("p", null, "Join to the Opswat team!"),
        react_1.default.createElement("div", null,
            react_1.default.createElement(core_1.TextField, { name: "userName", label: "username", type: "text", value: values.userName, onChange: handleChange, onBlur: handleBlur })),
        react_1.default.createElement("div", null,
            react_1.default.createElement(core_1.TextField, { name: "Email", label: "email", type: "email", value: values.email, onChange: handleChange, onBlur: handleBlur })),
        react_1.default.createElement("div", null,
            react_1.default.createElement(core_1.TextField, { name: "password", label: "Password", type: "password", value: values.password, onChange: handleChange, onBlur: handleBlur })),
        react_1.default.createElement("div", null,
            react_1.default.createElement(core_1.TextField, { name: " Confirm password", label: "Confirm your password", type: "password", value: values.confirmPassword, onChange: handleChange, onBlur: handleBlur })),
        react_1.default.createElement("div", { className: classes.buttoncontainer },
            react_1.default.createElement(core_1.Button, { className: classes.button, variant: "contained", type: 'submit' }, "Sign Up!"))))));
};
exports.RegistrationForm = RegistrationForm;
