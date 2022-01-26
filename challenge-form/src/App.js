"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@mui/styles");
const react_1 = __importDefault(require("react"));
const registration_component_1 = require("./registration/registration.component");
const sign_in_component_1 = require("./sign-in/sign-in.component");
const useStyles = (0, styles_1.makeStyles)({
    FormContainer: {
        textAlign: 'center',
        display: 'flex',
        margin: '30px auto',
        justifyContent: 'space-between',
        width: '500px',
        alignItems: 'start'
    },
    PagesContainer: {
        width: 'auto',
        textAlign: 'center'
    }
});
const App = () => {
    const classes = useStyles();
    return (react_1.default.createElement("div", { className: classes.PagesContainer },
        react_1.default.createElement("div", { className: classes.FormContainer },
            react_1.default.createElement(sign_in_component_1.SigInForm, { onSubmit: ({ userName, password }) => {
                    console.log(userName, password);
                } }),
            react_1.default.createElement(registration_component_1.RegistrationForm, { onSubmit: ({ userName, email, password, confirmPassword }) => {
                    console.log(userName, email, password, confirmPassword);
                } })),
        react_1.default.createElement("h1", null, "Succesfully logged in!")));
};
exports.default = App;
