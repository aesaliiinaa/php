const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    patronymicMaleJson: `{
        "count": 16,
        "list": {     
            "id_1": "Алексеевич",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Сергеевич",
            "id_5": "Дмитриевич",
            "id_6": "Асланович",
            "id_7": "Михаилович",
            "id_8": "Данилович",
            "id_9": "Егорович",
            "id_10": "Андреевич",
            "id_11": "Родионович",
            "id_12": "Русланович",
            "id_13": "Владиславович",
            "id_14": "Айдарович",
            "id_15": "Владимирович",
            "id_16": "Евгеньевич"
        }
    }`,
    patronymicFemaleJson: `{
        "count": 16,
        "list": {     
            "id_1": "Алексеевна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Сергеевна",
            "id_5": "Дмитриевна",
            "id_6": "Аслановна",
            "id_7": "Михаиловна",
            "id_8": "Даниловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна",
            "id_11": "Родионовна",
            "id_12": "Руслановна",
            "id_13": "Владиславовна",
            "id_14": "Айдаровна",
            "id_15": "Владимировна",
            "id_16": "Евгеньевна"
        }
    }`,
    firstNameMaleJson: `{
        "count": 16,
        "list": {     
            "id_1": "Алексей",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Сергей",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Данил",
            "id_9": "Егор",
            "id_10": "Андрей",
            "id_11": "Родион",
            "id_12": "Руслан",
            "id_13": "Владислав",
            "id_14": "Айдар",
            "id_15": "Владимир",
            "id_16": "Евгений"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 16,
        "list": {     
            "id_1": "Алина",
            "id_2": "Вероника",
            "id_3": "Ксения",
            "id_4": "Алиса",
            "id_5": "Ольга",
            "id_6": "Екатерина",
            "id_7": "Алёна",
            "id_8": "Анна",
            "id_9": "Юлия",
            "id_10": "Дарья",
            "id_11": "Атика",
            "id_12": "Полина",
            "id_13": "Виктория",
            "id_14": "София",
            "id_15": "Маргарита",
            "id_16": "Виолетта"
        }
    }`,
    professionsMaleJson: `{
        "count": 9,
        "list": {     
            "id_1": "Механик",
            "id_2": "Столяр",
            "id_3": "Слесарь",
            "id_4": "Солдат",
            "id_5": "Шахтер",
            "id_6": "Повар",
            "id_7": "Программист",
            "id_8": "Крановщик",
            "id_9": "Складовщик"
        }
    }`,
    professionsFemaleJson: `{
        "count": 9,
        "list": {     
            "id_1": "Медсестра",
            "id_2": "Художница",
            "id_3": "Повариха",
            "id_4": "Швея",
            "id_5": "Журналистка",
            "id_6": "Спасательница",
            "id_7": "Писательница",
            "id_8": "Бухгалтерша",
            "id_9": "Парикмахерша"
        }
    }`,
    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function() {
        let gen = this.randomIntNumber();
        return gen === 0 ? this.GENDER_FEMALE : this.GENDER_MALE;
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomYearOfBirth: function() {

        return this.randomIntNumber(2025, 1925);

    },

    randomDayOfBirth: function() {

        return this.randomIntNumber(31, 1);
    
    },

   randomMonthAndDayOfBirth: function() {
    const month = this.randomIntNumber(12);
    let days;

    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        days = 31;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        days = 30;
    } else {
        days = 28;
    }

    const day = this.randomIntNumber(days);
    
    return { month, day };
},

    getPerson: function () {
        this.person = {};

        this.person.gender = this.randomGender();

        if (this.person.gender === this.GENDER_MALE) {
            this.person.firstName = this.randomValue(this.firstNameMaleJson);
            this.person.surname = this.randomValue(this.surnameJson);
            this.person.patronymic = this.randomValue(this.patronymicMaleJson);
            this.person.profession = this.randomValue(this.professionsMaleJson);
        } else {
            this.person.firstName = this.randomValue(this.firstNameFemaleJson);
            this.person.surname = this.randomValue(this.surnameJson) + 'a';
            this.person.patronymic = this.randomValue(this.patronymicFemaleJson);
            this.person.profession = this.randomValue(this.professionsFemaleJson);
        }

        this.person.yearOfBirth = this.randomYearOfBirth();
        const { month, day } = this.randomMonthAndDayOfBirth();
        this.person.monthOfBirth = month;
        this.person.dayOfBirth = day;
        this.person.monthName = this.randomValue(this.monthJson);

        return this.person;
    }
};