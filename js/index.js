function setDate(){
	const now = new Date();
	const seconds = now.getSeconds();
	const secondDegree = (seconds * 6) + 90;
	const minutes = now.getMinutes();
	const minuteDegree = (minutes * 6) + 90;
	const hours = now.getHours();
	const hourDegree = ((hours%12) * 30) + 90;
	const $second = document.querySelector(".sec");
	$second.style.transform = `rotate(${secondDegree}deg)`;
	const $minute = document.querySelector(".min");
	$minute.style.transform = `rotate(${minuteDegree}deg)`;
	const $hour = document.querySelector(".hour");
	$hour.style.transform = `rotate(${hourDegree}deg)`;

	
}

intervalId = setInterval(setDate, 1000);