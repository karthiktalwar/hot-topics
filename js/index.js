const content = document.querySelector(".content");
const errorContainer = document.querySelector(".error");
let url = "../partials/home.html";
const links = document.querySelectorAll("nav a");

function linkClick(ev) {
	ev.preventDefault();
	let currentLink = ev.target;
	url = currentLink.href;
	handleAjax(url);
}

for (let link of links) {
	link.addEventListener("click", linkClick);
}

function handleAjax(urlParam) {
	fetch(urlParam)
		.then(function (response) {
			if (response.statusText === "OK") {
				return response.text();
			}
			throw new Error(response.statusText)
		})
		.then(function (data) {
			content.innerHTML = data;
		})
		.catch(function (err) {
			errorContainer.textContent = `${err.name}: ${err.message}`;
		});
}
handleAjax(url);