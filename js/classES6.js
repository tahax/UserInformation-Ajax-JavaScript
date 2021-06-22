//classes
class Html {
    loadTheAjax() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', "https://jsonplaceholder.typicode.com/users", true);
        xhr.onload = function () {
            if (this.readyState === 4) {
                let response = JSON.parse(this.responseText);
                console.log(response);
                let output = '';
                response.forEach((person) => {
                    console.log(person);
                    output = `
                        <div class="tak-padding col-12 col-md-6 col-lg-3">
                            <div class="inner-box">
                                <span class="span-values">${person.username}</span>
                                <span class="span-values">${person.name}</span>
                                <span class="span-values">${person.id}</span>
                                <span class="span-values">${person.phone}</span>
                                <span class="span-values">${person.email}</span>
                                <span class="span-values">${person.website}</span>
                                <span class="span-values">${person.company.bs}</span>
                                <span class="span-values">${person.company.catchPhrase}</span>
                                <span class="span-values">${person.company.name}</span>
                                <span class="span-values">${person.address.city}</span>
                                <span class="span-values">${person.address.street}</span>
                                <span class="span-values">${person.address.suite}</span>
                                <span class="span-values">${person.address.zipcode}</span>
                                <span class="span-values">${person.address.geo.lat}</span>
                                <span class="span-values">${person.address.geo.lng}</span>
                            </div>
                        </div>
                    `;
                    document.querySelector('.article-note .container').innerHTML += output;
                })
                console.log(output);

            }
        }
        xhr.send();
    }
}