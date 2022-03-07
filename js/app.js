const element = document.querySelector('.js-choice');
const choices = new Choices(element);

//window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#formSession').addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('event successfull!');
        const validation = new window.JustValidate('#formSession', {
            rules: {
                fullname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    number: true
                },
                testOfInsterest: {
                    required: true
                }
            },
            focusWrongField: true,
            submitHandler: function (form, values, ajax) {
                console.log('Info Form: '+form);
                console.log('Values: '+values);
                console.log(ajax);
            },
            invalidFormCallback: function (errors) {
                console.log(errors)
            }
        });
    });
//})