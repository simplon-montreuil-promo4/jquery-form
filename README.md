# Interactive formulaire

The objective is to achieve an interactive form that can animate with jQuery. It will be a form is very basic, with a few fields that will see their CSS style change as a user action. The aim is to verify the entered information: number of characters, ensure that the confirmation of the password is the same one, verify that all fields are filled, etc.

## Goals

This form contains four fields:
- A `Text` field for the nickname;
- A field `password` for the password;
- A second field `password` for confirmation of the password;
- And a final `Text` field for the email address.

Two buttons respectively will send data, and empty fields. No server language for this exercise: everything will unfold client side.

You must ensure that the user enters the right information, in the right way:
- All fields must contain at least 5 characters;
- The password and confirmation must be identical;
- If the fields are empty when sending it displays an error message.

To indicate the error to the visitor, simply use CSS: a red headland would for example the case. Similarly, if the field is good, you could change the color of the appropriate field in green.

Remember that you must treat all cases, because it should never trust the user.

We give you a skeleton to start! It contains the HTML, CSS code, and integrates Bootstrap and jQuery!

## Improvements

This form can be further improved, in the sense that you could further restrict the possibilities for the user, by prohibiting exceed a certain number of characters in the nickname, for example. Similarly, the style is now ultra basic, nothing prevents you from sophistication, so that the user experience is pushed to its maximum.

Some improvements to the security level could be made:
- You could check the format of the e-mail address with a regular expression, made with Regex object of JavaScript;
- You could also check that the password was sure, making such a security mini-indicator that would be based on the number of characters, diversity, ...
- It is possible to display a help message for each field, when the user types text into them;
- ...
