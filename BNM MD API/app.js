 const labels = []
// const rates = []

const rates = {
    EUR: [],
    USD: [],
}
const getRatesForDates = (date) => { //09.07.2023
    const URL = `https://www.bnm.md/ro/official_exchange_rates?get_xml=1&date=${date}`

    const xhr = new XMLHttpRequest()

    xhr.open('GET', URL)
    xhr.send()

    xhr.onload = () => {
        let res = xhr.responseText

        //parsing xml
        let xmlParsers = new DOMParser()

        let xmlDoc = xmlParsers.parseFromString(res, "text/xml")

        let valuteEur = xmlDoc.querySelector('[ID = "47"]')
        let valuteUsd = xmlDoc.querySelector('[ID = "44"]')

        //extragem coeficientul EUR->MDL
        let valueEur = parseFloat(valuteEur.lastElementChild.innerHTML)
        let valueUsd = parseFloat(valuteUsd.lastElementChild.innerHTML)

        // console.log(xmlDoc)
        // console.log(valute.lastElementChild.textContent)
        // console.log(rates)
        rates.EUR.push(valueEur)
        rates.USD.push(valueUsd)
        
    }
}

const getRates = (fromDate, toDate) => {
    for(let date = fromDate; date <= toDate; date++ ){
        if(date<10)
        date = "0" + date
        labels.push(`${date}.06.2023`)
        getRatesForDates(`${date}.06.2023`)
    
    }
}

getRates(1,28)


new Chart(
    document.getElementById('ratesChart'),
    {
      type: 'line',
      options: {
        animation: false,
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            enabled: true
          }
        }
      },
      data: {
        labels: labels,
        datasets: [
          {
            label: 'BNM Exchange Rates for EUR/MDL',
            data: rates.EUR,
          },
          {
            label: 'BNM Exchange Rates for USD/MDL',
            data: rates.USD,
          },
        ]
      }
    }
  );


  //HW1: try to display a currency in parallel EUR USD
