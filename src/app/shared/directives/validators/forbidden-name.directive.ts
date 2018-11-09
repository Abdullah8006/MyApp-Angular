import { ValidatorFn, AbstractControl, PatternValidator } from "@angular/forms";
import { FormControl } from "@angular/forms";

export function forbiddenNameValidator(control: AbstractControl): { [key: string]: boolean } | null {
    console.log(control.value);
    return null;
}
