export default function ValidateInfo(values) {

    let errors = {}

    if (values.username == "") {
        errors.username = "username required"

    } else if ((values.username.length < 3) || (values.username.length > 20)) {
        errors.username = "Username length minimum 3 and maximum 20"
    
    } else if (!/^(?! )[A-Za-z ]*$/i.test(values.username)) {
        errors.username = "Please Enter valid user"
    }

    else if (!values.email) {
        errors.email = "Email Required"
    } else if (!/^([\w\.]+)@([\w\-]+)((\.(\w){2,3})+)$/i.test(values.email)) {
        errors.email = "Email address is invalid."
    }


    else if (!values.password) {
        errors.password = "Password is required"

    } else if (values.password.search("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})") == -1) {
        errors.password = "Please enter Minimum 6 & maximum 16 value ,one Uppercase One Lowercase one Numaric and one Special Charachter."
    }

    else if (!values.mobile) {
        errors.mobile = "Contact number is required"
    } else if (values.mobile.length < 10) {
        errors.mobile = "Contact number to be 10."
    }
    else if (values.mobile.length > 10) {
        errors.mobile = "Please enter valid indian phone number.."
    }
    else if (values.mobile.search(/^[6-9]\d{9}$/) == -1) {
        errors.mobile = "Contact number start with 6,7,8 or 9."

        return errors;
    } else {
        errors = undefined;
    }
    return errors;
}