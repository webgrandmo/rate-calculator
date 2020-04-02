(function () {



    async function getData(url) {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

    }

    getData('https://api.exchangerate-api.com/v5/latest');
})();