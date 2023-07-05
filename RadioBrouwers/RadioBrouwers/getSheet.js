var day;

const maa = '1B2Lxi7jKAmWC3ZnjbCcE8FS1A6RQVpQZa62V3U55dvA';
const din = '1JHllslXDdCZ4gJ10KC8YwadLcigN7JWm5NVxq6qAuUs';
const woe = '10o85MCBllZvL51ZpLNB8rbsw-tAdjLghtzjxExci5Mk';
const don = '1v3CKf29kGxw4eyza3AXcFslQhkZPFm7k7GhaOuxZhA0';
const vri = '1vBlfjvdHpxIyXzR83SCMDN4IjEi5BPi7WVkFE4EDPXk';
const zat = '1pRQdZw0dN3JkxgaCcoDGdl8q5w9tuwSu95JsuUYJVO8';
const zon = '1I17K8kF6RbzKoQWVuk3WRKAPia6z3OcbB0fmbyh8rmo';

var SHEET_ID;

var SHEET_RANGE = 'A1:B14';


// setInterval(() =>{
    var dateTime = new Date();
    var day = dateTime.getDay();
      console.log(dateTime.getDay());

    if (day == 1) {
      SHEET_ID = maa;
        console.log("Maandag")
    }
    if (day == 2) {
      SHEET_ID = din;
        console.log("Dinsdag")
    }
    if (day == 3) {
      SHEET_ID = woe;
        console.log("Woensdag")
    }
    if (day == 4) {
      SHEET_ID = don;
        console.log("Donderdag")
    }
    if (day == 5) {
      SHEET_ID = vri;
        console.log("Vrijdag")
    }
    if (day == 6) {
      SHEET_ID = zat;
        console.log("Zaterdag")
    }
    if (day == 7) {
      SHEET_ID = zon;
        console.log("Zondag")
    }
    const url = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + '&range=' + SHEET_RANGE);

    const output = document.querySelector('.output')
    fetch(url)
    .then(res => res.text())
    .then(rep =>{
      console.log(rep);
      const data = JSON.parse(rep.substr(47).slice(0,-2));
      const row = document.createElement('tr');
      output.append(row);
      data.table.cols.forEach((heading)=>{
        const cell = document.createElement('th');
        cell.textContent = heading.label;
        cell.classname = "dagAanduiding";
        output.append(cell);
      })
      data.table.rows.forEach((main)=>{
      const container = document.createElement('tr');
      output.append(container);
        main.c.forEach((ele)=>{
          const cell = document.createElement('td');
          cell.textContent = ele.v;
          container.append(cell);
        })
      })
      console.log(data);
    })
  // }, 10000);
