document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('testDriveForm');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const ageInputs = document.querySelectorAll('input[name="age"]');
    const carInputs = document.querySelectorAll('input[name="cars"]');
    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const ageError = document.getElementById('ageError');
    const carsError = document.getElementById('carsError');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        clearErrors();

        let valid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name should not be empty';
            valid = false;
        }

        // if (!/^\d{10}$/.test(phoneInput.value.trim())) {
        //     phoneError.textContent = 'Phone number should contain exactly 10 digits';
        //     valid = false;
        // }

        let ageChecked = false;
        ageInputs.forEach(function(input) {
            if (input.checked) {
                ageChecked = true;
            }
        });

        if (!ageChecked) {
            ageError.textContent = 'Please select an age range';
            valid = false;
        }

        let numCarsSelected = 0;
        carInputs.forEach(function(input) {
            if (input.checked) {
                numCarsSelected++;
            }
        });

        if (numCarsSelected === 0) {
            carsError.textContent = 'Please select at least one car';
            valid = false;
        } else if (numCarsSelected > 3) {
            carsError.textContent = 'Select at most 3 cars';
            valid = false;
        }

        if (valid) {
            // Form submission logic
            console.log('Form submitted successfully!');
        }
    });

    function clearErrors() {
        nameError.textContent = '';
        phoneError.textContent = '';
        ageError.textContent = '';
        carsError.textContent = '';
    }
});
