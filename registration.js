const name = document.getElementById('name');
const userName = document.getElementById('Username');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const form = document.getElementById('form');
const confirmPassword = document.getElementById('Confirm-password');
const country = document.getElementById('Country');


// Defining the Countries
const countries = [
    'Afghanistan',
    'Albania', 
    'Algeria', 
    'American Samoa', 
    'Andorra', 
    'Angola', 
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda', 
    'Argentina', 
    'Armenia', 
    'Aruba', 
    'Australia', 
    'Austria',
    'Azerbaijan',
    'Bahamas', 
    'Bahrain', 
    'Bangladesh', 
    'Barbados', 
    'Belarus', 
    'Belgium',
    'Belize',
    'Benin', 
    'Bermuda', 
    'Bhutan', 
    'Bolivia', 
    'Bosnia and Herzegovina', 
    'Botswana',
    'Brazil',
    'Brunei Darussalam', 
    'Bulgaria', 
    'Burkina Faso', 
    'Burundi', 
    'Cambodia', 
    'Cameroon',
    'Canada',
    'Cape Verde', 
    'Cayman Islands', 
    'Central African Republic', 
    'Chad', 
    'Chile', 
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands', 
    'Colombia', 
    'Comoros', 
    'Democratic Republic of the Congo (Kinshasa)', 
    'Congo, Republic of (Brazzaville)', 
    'Cook Islands',
    'Costa Rica',
    `Côte D'ivoire (Ivory Coast)`, 
    'Croatia', 
    'Cuba', 
    'Cyprus', 
    'Czech Republic', 
    'Denmark',
    'Djibouti',
    'Dominica', 
    'Dominican Republic', 
    'East Timor (Timor-Leste)', 
    'Ecuador', 
    'Egypt', 
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea', 
    'Estonia', 
    'Ethiopia', 
    'Falkland Islands', 
    'Faroe Islands', 
    'Fiji',
    'Finland',
    'France', 
    'Gabon', 
    'Gambia',
    'Georgia',
    'Germany', 
    'Ghana', 
    'Gibraltar', 
    'Greece', 
    'Greenland', 
    'Grenada',
    'Guadeloupe',
    'Guam', 
    'Guatemala', 
    'Guinea', 
    'Guinea-Bissau', 
    'Guyana', 
    'Haiti',
    'Holy See',
    'Honduras', 
    'Hong Kong', 
    'Hungary', 
    'Iceland', 
    'India', 
    'Indonesia',
    'Iran',
    'Iraq', 
    'Ireland', 
    'Israel', 
    'Italy', 
    'Ivory Coast', 
    'Jamaica',
    'Japan',
    'Jordan', 
    'Kazakhstan', 
    'Kenya', 
    'Kiribati', 
    'North Korea', 
    'South Korea',
    'Kosovo',
    'Kuwait', 
    'Kyrgyzstan', 
    'Lao', 
    'Latvia', 
    'Lebanon', 
    'Lesotho',
    'Liberia',
    'Libya', 
    'Liechtenstein', 
    'Lithuania', 
    'Luxembourg', 
    'Macau', 
    'Madagascar',
    'Malawi',
    'Malaysia', 
    'Maldives', 
    'Mali', 
    'Malta', 
    'Marshall Islands', 
    'Martinique',
    'Mauritania',
    'Mauritius', 
    'Mayotte', 
    'Mexico', 
    'Micronesia', 
    'Moldova', 
    'Monaco',
    'Mongolia',
    'Montenegro', 
    'Montserrat', 
    'Morocco', 
    'Mozambique', 
    'Myanmar, Burma', 
    'Namibia',
    'Nauru',
    'Nepal', 
    'Netherlands    ', 
    'New Caledonia', 
    'New Zealand', 
    'Nicaragua', 
    'Niger',
    'Nigeria', 
    'Niue', 
    'North Macedonia', 
    'Northern Mariana Islands', 
    'Norway', 
    'Oman', 
    'Pakistan', 
    'Palau', 
    'Palestine', 
    'Panama', 
    'Papua New Guinea', 
    'Paraguay', 
    'Peru', 
    'Philippines', 
    'Pitcairn Island', 
    'Poland', 
    'Portugal', 
    'Puerto Rico', 
    'Qatar', 
    'Reunion Island', 
    'Romania', 
    'Russian Federation', 
    'Rwanda', 
    'Saint Kitts and Nevis', 
    'Saint Lucia', 
    'Saint Vincent and the Grenadines', 
    'Samoa', 
    'San Marino', 
    'Sao Tome and Principe', 
    'Saudi Arabia', 
    'Senegal', 
    'Serbia', 
    'Seychelles', 
    'Sierra Leone', 
    'Singapore', 
    'Slovakia', 
    'Slovenia', 
    'Solomon Islands', 
    'Somalia', 
    'South Africa', 
    'South Sudan', 
    'Spain', 
    'Sri Lanka', 
    'Sudan', 
    'Suriname', 
    'Swaziland (Eswatini)', 
    'Sweden', 
    'Switzerland', 
    'Syria', 
    'Taiwan', 
    'Tajikistan', 
    'Tanzania', 
    'Thailand', 
    'Tibet', 
    'Timor-Leste', 
    'Togo', 
    'Tokelau',
    'Tonga', 
    'Trinidad and Tobago', 
    'Tunisia', 
    'Turkey', 
    'Turkmenistan', 
    'Turks and Caicos Islands', 
    'Tuvalu', 
    'Uganda', 
    'Ukraine', 
    'United Arab Emirates', 
    'United Kingdom', 
    'Tanzania', 
    'United States', 
    'Uruguay', 
    'Uzbekistan', 
    'Vanuatu', 
    'Venezuela',
    'Vietnam', 
    'Wallis and Futuna Islands', 
    'Western Sahara', 
    'Yemen',
    'Zambia', 
    'Zimbabwe'

];

// Submit form 
form.addEventListener('submit', event => {
  event.preventDefault();

  validateInput();
});


// Function to display error when the inputed elemets are not okay
const setError = (element, message) => {
  const inputFieldControl = element.parentElement;
  const displayError = inputFieldControl.querySelector('.error');

  displayError.innerHTML = message;
  inputFieldControl.classList.add('error');
  inputFieldControl.classList.remove('success');
};


// Function to confirm the inputed elemets are okay
const setSuccess = element => {
  const inputFieldControl = element.parentElement;
  const displayError = inputFieldControl.querySelector('.error');

  displayError.innerHTML = '';
  inputFieldControl.classList.add('success');
  inputFieldControl.classList.remove('error');
};


// Function to check the validity of the inputed email
const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

};


// Function to populate the country select element
const populateCountryOptions = () => {
    countries.forEach(countryName => {
      const option = document.createElement('option');
      option.value = countryName;
      option.textContent = countryName;
      country.appendChild(option);
    });
};

populateCountryOptions();


// Function to Validate the fields
const validateInput = () => {
  const nameValue = name.value.trim();
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const countryValue = country.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (nameValue === '') {
    setError(name, 'Full Name Is Required');
  }
  else {
    setSuccess(name);
  }

  if (userNameValue === '') {
    setError(userName, 'User Name Is Required');
  } 
  else {
    setSuccess(userName);
  }


  if (emailValue === '') {
    setError(email, 'Email Address Is Required');
  } 
  else if (!isValidEmail(emailValue)) {
    setError(email, 'Invalid Email Address');
  } 
  else {
    setSuccess(email);
  }


  if (countryValue === '') {
    setError(country, 'Please select a country');
  } 
  else {
    setSuccess(country);
  }


  if (passwordValue === '') {
    setError(password, 'Password Is Required');
  } 
  else if (passwordValue.length < 8) {
    setError(password, 'Password Must Be At Least 8 Characters');
  } 
  else {
    setSuccess(password);
  }


  if (confirmPasswordValue === '') {
    setError(confirmPassword, 'Confirm The Above Password');
  } 
  else if (confirmPasswordValue !== passwordValue) {
    setError(confirmPassword, 'Passwords Do Not Match');
  } 
  else {
    setSuccess(confirmPassword);
  }

};

