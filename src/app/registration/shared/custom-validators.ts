import { AbstractControl, ValidatorFn } from "@angular/forms";

export function passwordValidator(control: AbstractControl): { [key: string]: boolean } {
    let pswRegex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
    let value = control.value;

    let result = pswRegex.test(value);

    if (result) {
        return null;
    } else {
        return { "passwordValidator": true }
    }
}

export function areEqualValidator(group: AbstractControl): { [key: string]: boolean } {
    
    const password = group.get('password');
    const repeatPassword = group.get('repeatPassword');

    if (!password.value && !repeatPassword.value) return null;

    if (password.value === repeatPassword.value) {
        return null;
    } else {
        repeatPassword.setErrors({
            "areEqualValidator": true
        });
        return { "areEqualValidator": true }
    }
}

