const json = {
	"ProfileId": "12w562qrx",
	"PersonInfo": {
		"Name": "Василий Иванов",
		"BirthDate": "12-09-1990",
		"Citizenship": "Russian Federation"
	},
	"CardInfo": [
		{
			"CardNumber": "1234000145293333",
			"CardName": "MASTERCARD GOLD",
			"ExpDate": "21-05-2020"
		},
		{
			"CardNumber": "1234000145293232",
			"CardName": "MIR КЛАССИЧЕСКАЯ",
			"ExpDate": "20-12-2019"
		},
		{
			"CardNumber": "1234890456793131",
			"CardName": "VISA CLASSIC",
			"ExpDate": "30-02-2019"
		}
	]
};


function getCardsArrayExpDate(json, date) {
	// Меняем формат даты. Создали финальный пока-что пустой массив.
	let result = [];
	date = date.split("-");
	date = new Date(date[2], date[1] - 1, date[0]);
	
	// Проверка профиля
	// Клиент не найден или нет поля карт или нет ни 1 карты
	if (!json || !json.CardInfo || json.CardInfo.length == 0) return null;

	// Проверка всех карт
	let x = 0;
	while (x < json.CardInfo.length) {
		checkCards(json.CardInfo[x].CardNumber)
		x++;
	}
	function checkCards(num, name) {
		if (!num || num.length != 16 || isNaN(num)) return null;
	};

	// Проверяем дату и добавляем данные в массив
	let y = 0;
	while (y < json.CardInfo.length) {
		checkDate(json.CardInfo[y].ExpDate, json.CardInfo[y].CardNumber);
		y++;
	}
	function checkDate(chkDate, num) {
		let _date = chkDate.split("-");
		let dateCard = new Date(_date[2], _date[1] - 1, _date[0]);
		if (dateCard < date) {
			result.push(num.slice(-4))
		}
	};

	// Финалим
	if (result.length == 0) {
		return null;
	} else {
		return result;
	};

};

getCardsArrayExpDate(json, "30-01-2023")








