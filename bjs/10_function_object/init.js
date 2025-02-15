
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('birthYearOutput').innerText = initPerson.yearOfBirth;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById("professionOutput").textContent = initPerson.profession;
    document.getElementById("birhMounthOutput").textContent = initPerson.monthName;
    document.getElementById("birhDayOutput").textContent = initPerson.dayOfBirth;
};